<?php
require_once '../common.php';
require_once '../esftp.php';
header("Content-Type: application/json");

$path=get_root().get('path');
$data=get('data');
$is_private=get('is_private');

$sftp=new ESFTP(get('host'));
if($sftp->access(get('username'),get('password'))){
  if($sftp->stat($path)) $sftp->trash($path);
  echo json_encode($sftp->put($path,$data));
  if($is_private) $sftp->unpublish($path);
  }
else echo 'false';
?>
