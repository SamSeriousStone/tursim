<?php
require_once 'paths.php';
require_once COMMON;
require_once FILE_MANAGER;
header("Content-Type: application/json");

$fm=new FileManager();
if($fm->access(get('username'),get('password'))) echo json_encode(get('username'));
else echo 'false';
?>
