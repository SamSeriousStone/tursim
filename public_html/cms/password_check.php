<?php
require_once 'paths.php';
require_once COMMON;
header("Content-Type: application/json");
echo password_error(get('data'));
?>
