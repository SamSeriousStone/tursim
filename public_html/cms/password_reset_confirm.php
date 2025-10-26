<?php
require_once 'paths.php';
require_once COMMON;
header("Content-Type: application/json");

$false_message='[{"tag":"string","sons":["A problem has occurred."]}]';
$true_message='[{"tag":"string","sons":["If the link is still valid, your password has been changed, and you will receive a confirmation email."]}]';


$socket=stream_socket_client(SOCKET,$errno,$errstr);

if($socket){
  $token=get('token');
  $new_password=get('new_password');
  fwrite($socket,"$token|$new_password\n");
  fclose($socket);
  echo $true_message;
  }
else echo $false_message;
?>
