<?php
require_once 'paths.php';
require_once COMMON;
require_once FILE_MANAGER;
header("Content-Type: application/json");

$path=get_root().get('path');

$fm=new FileManager();
if($fm->access(get('username'),get('password'))) echo json_encode($fm->publish($path));
else echo 'false';
?>
