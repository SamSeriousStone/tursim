<?php
require_once 'paths.php';
require_once COMMON;
require_once FILE_MANAGER;
header("Content-Type: application/json");

$source=get_root().get('source');
$dest=get_root().get('dest');

$fm=new FileManager();
if($fm->access(get('username'),get('password'))) echo json_encode($fm->move($source,$dest));
else echo 'false';
?>
