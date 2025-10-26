<?php
require_once 'paths.php';
require_once COMMON;
header("Content-Type: application/json");

$false_message='[{"tag":"string","sons":["A problem has occurred."]}]';
$true_message='[{"tag":"string","sons":["If the link is still valid, a new account has been created, and you will receive a confirmation email."]}]';


$socket=stream_socket_client(SOCKET,$errno,$errstr);

if($socket){
  $token=get('token');
  fwrite($socket,"$token\n");
  fclose($socket);
  echo $true_message;
  }
else echo $false_message;
?>
