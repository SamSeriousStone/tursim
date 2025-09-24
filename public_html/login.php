<?php
require_once '../common.php';
require_once '../esftp.php';
header("Content-Type: application/json");

$sftp=new ESFTP(get('host'));
if($sftp->access(get('username'),get('password'))){
  $_SESSION['host']=get('host');
  $_SESSION['username']=get('username');
  $_SESSION['password']=get('password');
  echo json_encode(get('username'));
  }
else{
  unset_credentials();
  echo 'false';
  }
?>
