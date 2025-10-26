<?php
require_once 'paths.php';
require_once COMMON;
header("Content-Type: application/json");
echo username_error(get('data'))|!is_dir("/home/$username");
?>
