#!/usr/bin/php
<?php
require_once __DIR__.'/common.php';
require_once __DIR__.'/file_manager.php';
require_once __DIR__.'/quota.php';
require_once __DIR__.'/send_mail.php';

const SOCKET_PATH=__DIR__.'/socket.sock';
const ACCOUNTS=__DIR__.'/accounts.csv';
const ACCOUNTS_DELETED=__DIR__.'/accounts_deleted.csv';
const TOKEN_TTL=1200;
const PARTITION="/";
const SKEL="/var/www/html/cms/skel";

class Accounts{
  private $emails;
  private $usernames;
  public function __construct(){
    $this->emails=[];
    $this->usernames=[];
    }
  public function set($username,$email){
    $this->delete($username);
    $this->emails[$username]=$email;
    $this->usernames[$email]=$username;
    }
  public function delete($username){
    $email=$this->get_email($username);
    unset($this->usernames[$email]);
    unset($this->emails[$username]);
    }
  public function has_username($username){
    return isset($this->emails[$username]);
    }
  public function has_email($email){
    return isset($this->usernames[$email]);
    }
  public function get_email($username){
    if(isset($this->emails[$username])) return $this->emails[$username];
    }
  public function get_username($email){
    if(isset($this->usernames[$email])) return $this->usernames[$email];
    }
  public function to_string(){
    $s="";
    foreach($this->emails as $username => $email) $s="$s$username|$email\n";
    return $s;
    }
  }

function append_log($log,$row){
  file_put_contents($log,$row,FILE_APPEND);
  //exec("chmod 600 $log");
  }
function log_accounts($log,$username,$email){
  $time=time();
  $row="$time|$username|$email\n";
  append_log($log,$row);
  }
function log_delete_accounts($log,$username){
  $time=time();
  $row="$time|$username\n";
  append_log($log,$row);
  }
function create_socket($socket_path){
  if(file_exists($socket_path)) unlink($socket_path);
  $socket=stream_socket_server("unix://$socket_path",$errno,$errstr);
  if(!$socket) die("Socket $socket_path connection error: $errstr ($errno)\n");
  chmod($socket_path,0002);
  return $socket;
  }

class AccountManager
  {
  private $pending;
  private $timestamps;
  private $accounts;
  private $expiration_message;
  public function __construct($accounts){
    $this->pending=[];
    $this->timestamps=[];
    $this->accounts=$accounts;
    $this->expiration_message="For security reasons, this link expires in ".(TOKEN_TTL/60)." minutes.";
    $this->cms="/cms";
    }
  private function create_token($values){
    echo json_encode($this->pending);
    echo "\n";
    foreach($this->pending as $token=>$token_values) if($token_values[2]==$values[2]) return false;
    $token=bin2hex(random_bytes(16));
    $this->pending[$token]=$values;
    $this->timestamps[$token]=time();
    return $token;
    }

  private function register_request($host,$email,$username,$password){
    if(email_error($email)||username_error($username)||password_error($password)) return false;
    if($this->accounts->has_username($username)){
      echo "register request: Username already used\n";
      send_mail(
        $email,
        "Sorry, this username has just been taken.",
        "Sorry, this username has just been taken. Please choose another one."
        );
      return false;
      }
    if($this->accounts->has_email($email)){
      echo "register request: email already used\n";
      return false;
      }
    $token=$this->create_token(['register_confirm',$host,$email,$username,$password]);
    if($token){
      $link="http://$host/index.xhtml?load_wins=$this->cms/register_confirm.php?token=$token";
      send_mail(
        $email,
        "Please confirm $username registration.",
        "Click the link below to confirm $username registration:\n\n$link\n\n$this->expiration_message"
        );
      return true;
      }
    }
  private function register_confirm($host,$email,$username,$password){
    if(email_error($email)||username_error($username)||password_error($password)) return false;
    if($this->accounts->has_username($username)){
      echo "register confirm: Username already used\n";
      send_mail(
        $email,
        "Sorry, this username has just been taken.",
        "Sorry, this username has just been taken. Please choose another one."
        );
      return false;
      }
    if($this->accounts->has_email($email)){
      echo "register confirm: email already used\n";
      return false;
      }
    $username_exec=escapeshellarg($username);
    $password_exec=escapeshellarg(shadow_hash($password));

    exec("useradd -m -k ".SKEL." -p $password_exec -s /bin/bash $username_exec");
    exec("usermod -aG ts $username_exec");
    exec("chmod 755 /home/$username");
    exec("setquota -u $username_exec 0 ".QUOTA." 0 0 ".PARTITION);


    $link="http://$host/~$username";
    send_mail(
      $email,
      "Account created.",
      "Your account has been created. Click the link below to open your site.\n\n$link"
      );
    $this->accounts->set($username,$email);
    log_accounts(ACCOUNTS,$username,$email);
    return true;
    }

  private function password_reset_request($host,$email){
    $username=$this->accounts->get_username($email);
    if(!$username) return false;
    $token=$this->create_token(['password_reset_confirm',$host,$email,$username]);
    if($token){
      $link="http://$host/index.xhtml?open_wins=[{%22tag%22:%22password_reset_confirm%22,%22values%22:{%22token%22:%22$token%22}}]";
      send_mail(
        $email,
        "Password reset",
        "Click the link below to reset your password:\n\n$link\n\n$this->expiration_message\n\nIf you did not request this password reset, please ignore this email."
        );
      return true;
      }
    }
  private function password_reset_confirm($host,$email,$username,$new_password){
    if(password_error($new_password)) return false;
    $username_exec=escapeshellarg($username);
    $new_password_exec=escapeshellarg($new_password);
    exec("echo $username_exec:$new_password_exec | chpasswd");
    send_mail(
      $email,
      "Password changed",
      "Password has been changed."
      );
    return true;
    }

  private function email_change_request($host,$email,$username,$current_password){
    if(email_error($email)) return false;
    if($this->accounts->has_email($email)) return false;
    $fm=new FileManager();
    if(!$fm->access($username,$current_password)) return false;
    $token=$this->create_token(['email_change_confirm',$host,$email,$username]);
    if($token){
      $link="http://$host/index.xhtml?load_wins=$this->cms/email_change_confirm.php?token=$token";
      send_mail(
        $email,
        "Confirm email change.",
        "Please click the link below to confirm your new email address:\n\n$link\n\n$this->expiration_message"
        );
      return true;
      }
    }
  private function email_change_confirm($host,$email,$username){
    if(email_error($email)) return false;
    if($this->accounts->has_email($email)){
      echo "email_change_confirm: email already used\n";
      return false;
      }
    $this->accounts->set($username,$email);
    log_accounts(ACCOUNTS,$username,$email);
    send_mail(
      $email,
      "Email changed",
      "$username's email has been changed."
      );
    return true;  
    }

  private function account_delete_request($host,$username,$current_password){
    $fm=new FileManager();
    if(!$fm->access($username,$current_password)) return false;
    $email=$this->accounts->get_email($username);
    $token=$this->create_token(['account_delete_confirm',$host,$email,$username,$current_password]);
    if($token){
      $link="http://$host/index.xhtml?load_wins=$this->cms/account_delete_confirm.php?token=$token";
      send_mail(
        $email,
        "Confirm account deletion.",
        "You have requested to deactivate your account.\n⚠️ Warning: Clicking the link below will immediately deactivate your account.\nThis means you will no longer be able to sign in or access your data unless you reactivate your account.\nIf you are sure, confirm by clicking this link:\n\n$link\n\nIf you did not request this action, please ignore this email: your account will remain active.\n\n$this->expiration_message"
        );
      return true;
      }
    }
  private function account_delete_confirm($host,$email,$username,$current_password){
    $fm=new FileManager();
    if(!$fm->access($username,$current_password)) return false;
    $email=$this->accounts->get_email($username);
    $this->accounts->delete($username);
    $username_exec=escapeshellarg($username);
    exec("usermod -L $username_exec");
    exec("chmod 700 /home/$username");
    log_delete_accounts(ACCOUNTS_DELETED,$username);
    send_mail(
      $email,
      "Account deleted",
      "Account $username has been deactivated."
      );
    return true;
    }
 
  private function password_change($host,$username,$current_password,$new_password){
    if(password_error($new_password)) return false; 
    $email=$this->accounts->get_email($username);
    if(!$email) return false;
    $fm=new FileManager();
    if(!$fm->access($username,$current_password)) return false;
    $username_exec=escapeshellarg($username);
    $new_password_exec=escapeshellarg($new_password);
    exec("echo $username_exec:$new_password_exec | chpasswd");
    $link="http://$host/~$username";
    send_mail(
      $email,
      "Password changed",
      "$username's password has been changed."
      );
    return true;
    } 
 
  public function execute($command,$parameters){
    foreach($this->timestamps as $token => $timestamp){
      if(time()>$timestamp+TOKEN_TTL){
        unset($this->timestamps[$token]);
        unset($this->pending[$token]);
        }
      }
    if(isset($this->pending[$command])){
      $parameters=array_merge($this->pending[$command],$parameters);
      unset($this->pending[$command]);
      $command=array_shift($parameters);
      }
    if(method_exists($this,$command)) $this->$command(...$parameters);
    else echo "Token expired\n";
    }
  }


$accounts=new Accounts();
$fp=fopen(ACCOUNTS,"r");
while($data=fgetcsv($fp,0,"|")) $accounts->set($data[1],$data[2]);
fclose($fp);
$fp=fopen(ACCOUNTS_DELETED,"r");
while($data=fgetcsv($fp,0,"|")) $accounts->delete($data[1]);
//echo $accounts->to_string();

$socket=create_socket(SOCKET_PATH);
$account_manager=new AccountManager($accounts);
$pending=[];
while($client=stream_socket_accept($socket,-1)){
  $input=trim(fgets($client)); //echo "$input\n";
  $rows=explode("\n",$input);
  foreach($rows as $row){
    $parameters=explode("|",$row);
    $command=array_shift($parameters);
    try{
      $account_manager->execute($command,$parameters);
      }
    catch(Throwable $e){
      echo "ERROR!";
      }
    }
  }

?>
