<?php
require_once '../common.php';
header("Content-Type: application/json");

$socket_path='../account_manager.sock';
$false_message='[{"tag":"string","sons":["A problem has occurred."]}]';
$true_message='[{"tag":"string","sons":["We’ve sent you an email to reset your password."]}]';

$socket=stream_socket_client("unix://$socket_path",$errno,$errstr);

if($socket){
  $host=get('host');
  $email=get('email');
  fwrite($socket,"password_reset_request|$host|$email\n");
  fclose($socket);
  echo $true_message;
  }
else echo $false_message;
?>
