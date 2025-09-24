<?php
require_once '../common.php';
require_once '../esftp.php';
header("Content-Type: application/json");

$folder=get('folder');
$trashed=get('trashed');
$jsons=[];
$sftp=new ESFTP(get('host'));
if($sftp->access(get('username'),get('password'))){
	$files=$sftp->files(get_root().$folder,$trashed);
	foreach($files as $file){
	  $stem=$file['basename'];
	  $ext='';
	  if(!$file['is_folder']){
	    $ext=pathinfo($stem,PATHINFO_EXTENSION);
	    $stem=pathinfo($stem,PATHINFO_FILENAME);
	    }
	  $file_info=[
	    'tag'=>'file_info',
	    'author'=>get('username'),
	    'path'=>$folder.$file['basename'],
	    'is_folder'=>$file['is_folder'],
	    'readable'=>$file['readable'],
	    'trashed'=>$file['trashed'],
	    'stem'=>['sons'=>[$stem]],
	    'ext'=>['sons'=>[$ext]],
	    'time'=>['sons'=>[$file['time']]]
	     ];
	  $jsons[]=$file_info; 
	  }
  }
echo json_encode($jsons,JSON_UNESCAPED_UNICODE);
?>
