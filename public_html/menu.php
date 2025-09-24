<?php
require_once '../common.php';
header("Content-Type: application/json");

$users=get('users')??[];
$FILE=get('file')??'';
$EXT=get('ext')??'';

function groups($users){
  $paths=[];
  foreach($users as $user){
    $path="/home/$user/public_html/";
    if(is_dir($path) && is_readable($path)) $paths[]=$path.'*';
    }
  return $paths;
  }

function tree($roots,&$h=[]) {
  $paths=[];
  foreach ($roots as $root) $paths=array_merge($paths,glob($root));
  sort($paths);
  foreach ($paths as $path){
    if (!is_readable($path) || (is_file($path) && str_ends_with($path, '.php')) || str_ends_with($path, '~')|| str_starts_with(basename($path), '.') || (is_dir($path) && str_contains($path, '.'))) continue;
    $key=basename($path);
    if(is_file($path)){
      if(!isset($h[$key])) $h[$key]=[];
      $segments=explode('/',explode('/public_html',$path)[0]);
      $username=end($segments);
      $h[$key][]=$username;
      }
    elseif(is_dir($path)){
      if(!isset($h[$key])) $h[$key]=[];
      tree(glob($path.'/*'), $h[$key]);
      if (empty($h[$key])) unset($h[$key]);
      }
    }
  return $h;
  }

function seek(&$h,$contained=false){
  foreach($h as $key => &$value){
    if(is_array($value) && array_keys($value) !== range(0, count($value) - 1)){
      $tree=seek($value, $contained || str_contains($key, $GLOBALS['FILE']));
      if (empty($tree)) unset($h[$key]);
      }
    elseif(!str_contains('.'.pathinfo($key,PATHINFO_EXTENSION),$GLOBALS['EXT']) || !($contained || str_contains(pathinfo($key,PATHINFO_FILENAME),$GLOBALS['FILE']))) unset($h[$key]);
    }
    return $h;
}

function menu($h, $dir = '') {
    $a = [];
    $keys = array_keys($h);
    sort($keys);

    foreach ($keys as $key) {
        $value = $h[$key];
        if (is_array($value) && array_keys($value) !== range(0, count($value) - 1)) {
            $a[] = [
                'tag' => 'dropdown',
                'action' => ['sons' => [$key.'']],
                'container' => ['sons' => menu($value, $dir . '/' . $key)]
            ];
        } else {
            foreach ($value as $username) {
                $path = $dir . '/' . $key;
                $href = str_replace(' ', '%20', '/~' . $username . $path);
                $name = pathinfo($key, PATHINFO_FILENAME);
                $ext  = pathinfo($key, PATHINFO_EXTENSION);

                $a[] = [
                    'tag' => 'a',
                    'href' => $href,
                    'title' => $ext,
                    'author' => $username,
                    'path' => ltrim($path, '/'),
                    'sons' => [$name]
                ];
            }
        }
    }

    return $a;
}


$roots=groups($users);
//echo json_encode($roots,JSON_UNESCAPED_SLASHES);
$tree=tree($roots);
//echo json_encode($tree,JSON_UNESCAPED_SLASHES);
$filtered=seek($tree);
//echo json_encode($filtered,JSON_UNESCAPED_SLASHES);
$menu=menu($filtered);
echo json_encode($menu,JSON_UNESCAPED_SLASHES);
?>
