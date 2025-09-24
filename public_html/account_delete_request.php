<?php
require_once '../common.php';
require_once '../esftp.php';
header("Content-Type: application/json");

$socket_path='../account_manager.sock';
$false_message='[{"tag":"string","sons":["A problem has occurred."]}]';
$true_message='[{"tag":"string","sons":["We’ve sent you an email to delete this account."]}]';
$incorrected_password_message='[{"tag":"string","sons":["Incorrect password."]}]';


$sftp=new ESFTP(get('host'));
if($sftp->access(get('username'),get('current_password'))){
  $socket=stream_socket_client("unix://$socket_path",$errno,$errstr);
  if($socket){
    $host=get('host');
    $username=get('username');
    $current_password=get('current_password');
    fwrite($socket,"account_delete_request|$host|$username|$current_password\n");
    fclose($socket);
    echo $true_message;
    }
  else echo $false_message;
  }
else echo $incorrected_password_message;
?>
