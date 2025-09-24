<?php
require_once '../common.php';
header("Content-Type: application/json");
echo password_error(get('data'));
?>
