<?php
require_once '../common.php';
require_once '../esftp.php';
header("Content-Type: application/json");

$source=$_FILES['source']['tmp_name'];
$content=file_get_contents($source);
$dest=get_root().get('dest');
$is_private=filter_var(get('is_private'),FILTER_VALIDATE_BOOLEAN); //params are string sent by form

$sftp=new ESFTP(get('host'));
if($sftp->access(get('username'),get('password'))){
  if($sftp->stat($dest)) $sftp->trash($dest);
  echo json_encode($sftp->put($dest,$content));
  if($is_private) $sftp->unpublish($dest);
  }
else echo 'false';
?>
