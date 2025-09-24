<?php
require_once '../common.php';
header("Content-Type: application/json");

$socket_path='../account_manager.sock';
$false_message='[{"tag":"string","sons":["A problem has occurred."]}]';
$true_message='[{"tag":"string","sons":["An e-mail has been sent to your address to complete registration."]}]';

$socket=stream_socket_client("unix://$socket_path",$errno,$errstr);

if($socket){
  $host=get('host');
  $email=get('email');
  $username=get('username');
  $password=get('password');
  fwrite($socket,"register_request|$host|$email|$username|$password\n");
  fclose($socket);
  echo $true_message;
  }
else echo $false_message;
?>
