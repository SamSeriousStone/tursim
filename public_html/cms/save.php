<?php
require_once 'paths.php';
require_once COMMON;
require_once FILE_MANAGER;
header("Content-Type: application/json");

$path=get_root().get('path');
$data=get('data');
$is_private=get('is_private');

$fm=new FileManager();
if($fm->access(get('username'),get('password'))) echo json_encode($fm->make_file($data,$path,$is_private));
else echo 'false';
?>
