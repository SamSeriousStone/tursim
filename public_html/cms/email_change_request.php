<?php
require_once 'paths.php';
require_once COMMON;
require_once FILE_MANAGER;
header("Content-Type: application/json");

$false_message='[{"tag":"string","sons":["A problem has occurred."]}]';
$true_message='[{"tag":"string","sons":["We’ve sent you an email to confirm the change of your email address."]}]';
$incorrected_password_message='[{"tag":"string","sons":["Incorrect password."]}]';


$fm=new FileManager();
if($fm->access(get('username'),get('current_password'))){
  $socket=stream_socket_client(SOCKET,$errno,$errstr);
  if($socket){
    $host=get('host');
    $new_email=get('new_email');
    $username=get('username');
    $current_password=get('current_password');
    fwrite($socket,"email_change_request|$host|$new_email|$username|$current_password\n");
    fclose($socket);
    echo $true_message;
    }
  else echo $false_message;
  }
else echo $incorrected_password_message;
?>
