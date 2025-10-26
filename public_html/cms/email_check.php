<?php
require_once 'paths.php';
require_once COMMON;
header("Content-Type: application/json");
echo email_error(get('data'));
?>
