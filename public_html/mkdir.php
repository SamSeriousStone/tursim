<?php
require_once "../common.php";
require_once '../esftp.php';
header("Content-Type: application/json");

$path=get_root().get('path');

$sftp=new ESFTP(get('host'));
if($sftp->access(get('username'),get('password'))){
  if($sftp->stat($path)) $sftp->trash($path);
  echo json_encode($sftp->mkdir($path));
  }
else echo 'false';
?>
