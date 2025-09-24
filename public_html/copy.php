<?php
require_once '../common.php';
require_once '../esftp.php';
header("Content-Type: application/json");

$source=get_root().get('source');
$dest=get_root().get('dest');

$sftp=new ESFTP(get('host'));
if($sftp->access(get('username'),get('password'))){
  if($sftp->stat($dest)) $sftp->trash($dest);
  $sftp->copy($source,$dest);
  echo 'true';
  }
else echo 'false';
?>
