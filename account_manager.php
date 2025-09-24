<?php
require_once 'common.php';
require_once 'esftp.php';

const SOCKET_PATH='account_manager.sock';
const ACCOUNTS='accounts.csv';
const ACCOUNTS_DELETED='accounts_deleted.csv';
const EXPLORATION='expiration.csv';
const TOKEN_TTL=1200;

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
  exec("chmod 644 $log 2>&1", $output, $status);
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
  chmod($socket_path,0662);
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
    }
  private function set_token($value){
    $token=bin2hex(random_bytes(16));
    $this->pending[$token]=$value;
    $this->timestamps[$token]=time();
    return $token;
    }

  private function register_request($host,$email,$username,$password){
    if($this->accounts->has_email($email)){
      echo "email already used\n";
      return false;
      }
    if($this->accounts->has_username($username)){
      echo "Username already used\n";
      mail(
        $email,
        "Sorry, this username has just been taken.",
        "Sorry, this username has just been taken. Please choose another one."
        );
      return false;
      }
    $token=$this->set_token(['register_confirm',$host,$email,$username,$password]);
    $link="http://$host/index.xhtml?load_wins=register_confirm.php?token=$token";
    mail(
      $email,
      "Please confirm your registration.",
      "Click the link below to confirm your registration:\n\n$link\n\n$this->expiration_message"
      );
    return true;
    }
  private function register_confirm($host,$email,$username,$password){
    if($this->accounts->has_email($email)){
      echo "email already used\n";
      return false;
      }
    if($this->accounts->has_username($username)){
      echo "Username already used\n";
      mail(
        $email,
        "Sorry, this username has just been taken.",
        "Sorry, this username has just been taken. Please choose another one."
        );
      return false;
      }
    $username_exec=escapeshellarg($username);
    $password_exec=escapeshellarg(shadow_hash($password));
    exec("useradd -m -p $password_exec -s /bin/bash $username_exec 2>&1", $output, $status);
    exec("chmod 755 /home/$username_exec 2>&1", $output, $status);
    $link="http://$host/~$username";
    mail(
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
    $token=$this->set_token(['password_reset_confirm',$host,$email,$username]);
    $link="http://$host/index.xhtml?open_wins=[{%22tag%22:%22password_reset_confirm%22,%22values%22:{%22token%22:%22$token%22}}]";
    mail(
      $email,
      "Password reset",
      "Click the link below to reset $username's password:\n\n$link\n\n$this->expiration_message"
      );
    return true;
    }
  private function password_reset_confirm($host,$email,$username,$new_password){
    exec("echo $username:$new_password | chpasswd", $output, $status);
    mail(
      $email,
      "Password changed",
      "$username's password has been changed."
      );
    return true;
    }

  private function email_change_request($host,$new_email,$username,$current_password){
    if($this->accounts->has_email($new_email)){
      echo "email already used\n";
      return false;
      }
    $sftp=new ESFTP($host);
    if(!$sftp->access($username,$current_password)) return false;
    $token=$this->set_token(['email_change_confirm',$host,$new_email,$username]);
    $link="http://$host/index.xhtml?load_wins=email_change_confirm.php?token=$token";
    mail(
      $new_email,
      "Confirm email change.",
      "Please click the link below to confirm your new email address:\n\n$link\n\n$this->expiration_message"
      );
    return true;
    }
  private function email_change_confirm($host,$new_email,$username){
    if($this->accounts->has_email($new_email)){
      echo "email already used\n";
      return false;
      }
    $this->accounts->set($username,$new_email);
    log_accounts(ACCOUNTS,$username,$new_email);
    mail(
      $new_email,
      "Email changed",
      "$username's email has been changed."
      );
    return true;  
    }

  private function account_delete_request($host,$username,$current_password){
    $sftp=new ESFTP($host);
    if(!$sftp->access($username,$current_password)) return false;
    $token=$this->set_token(['account_delete_confirm',$host,$username,$current_password]);
    $email=$this->accounts->get_email($username);
    $link="http://$host/index.xhtml?load_wins=account_delete_confirm.php?token=$token";
    mail(
      $email,
      "Confirm account deletion.",
      "You have requested to deactivate your account.\n⚠️ Warning: Clicking the link below will immediately deactivate your account.\nThis means you will no longer be able to sign in or access your data unless you reactivate your account.\nIf you are sure, confirm by clicking this link:\n\n$link\n\nIf you did not request this action, please ignore this email: your account will remain active.\n\n$this->expiration_message"
      );
    return true;
    }
  private function account_delete_confirm($host,$username,$current_password){
    $sftp=new ESFTP($host);   
    if(!$sftp->access($username,$current_password)) return false;
    $email=$this->accounts->get_email($username);
    $this->accounts->delete($username);
    exec("usermod -L $username 2>&1", $output, $status);
    exec("chmod 700 /home/$username 2>&1", $output, $status);
    log_delete_accounts(ACCOUNTS_DELETED,$username);
    mail(
      $email,
      "Account deleted",
      "Account $username has been deactivated."
      );
    return true;
    }
 
  private function password_change($host,$username,$current_password,$new_password){  
    $email=$this->accounts->get_email($username);
    if(!$email) return false;
    $sftp=new ESFTP($host);
    if(!$sftp->access($username,$current_password)) return false;
    exec("echo $username:$new_password | chpasswd", $output, $status);
    $link="http://$host/~$username";
    mail(
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
echo $accounts->to_string();

$socket=create_socket(SOCKET_PATH);
$account_manager=new AccountManager($accounts);
$pending=[];
while($client=stream_socket_accept($socket,-1)){
  $input=trim(fgets($client)); echo "$input\n";
  $rows=explode("\n",$input);
  foreach($rows as $row){
    $parameters=explode("|",$row);
    $command=array_shift($parameters);
    //try{
      $account_manager->execute($command,$parameters);
    //  }
    //catch(Throwable $e){
    //  echo "ERROR!";
    //  }
    }
  }

?>