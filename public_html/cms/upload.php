<?php
require_once 'paths.php';
require_once COMMON;
require_once FILE_MANAGER;
header("Content-Type: application/json");

$source=$_FILES['source']['tmp_name'];
$content=file_get_contents($source);
$dest=get_root().get('dest');
$is_private=filter_var(get('is_private'),FILTER_VALIDATE_BOOLEAN); //params are string sent by form

$fm=new FileManager();
if($fm->access(get('username'),get('password'))) echo json_encode($fm->make_file($content,$dest,$is_private));
else echo 'false';
?>
