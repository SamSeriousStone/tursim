<?php
require_once '../common.php';
require_once '../esftp.php';
header("Content-Type: application/json");

$path=get_root().get('path');

$sftp=new ESFTP(get('host'));
if($sftp->access(get('username'),get('password'))) echo json_encode($sftp->unpublish($path));
else echo 'false';
?>
