<?php
require_once 'paths.php';
require_once COMMON;
header("Content-Type: application/json");

function users(){
  $users=['ferri-emanuele','manfrin-giuseppe'];
  //$users=scandir('/home');
  $a=[];
  foreach($users as $user) if(!str_ends_with($user,'~') && $user[0]!='.') $a[]=['tag'=>'checkfield','value'=>$user];
  return $a;
  }

echo json_encode(users(), JSON_UNESCAPED_SLASHES);
?>
