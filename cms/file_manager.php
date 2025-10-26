<?php
require_once dirname(__DIR__,1)."/vendor/autoload.php";
use phpseclib3\Net\SFTP;

class FileManager extends SFTP{

  public function __construct(){
    parent::__construct('localhost');
    }

  public function access($username,$password){
    return $username && $password && $this->login($username,$password);
    }

  public function files($path,$include_trashed){
    $entries = $this->rawlist($path);
    if(!$entries) return false;
    uksort($entries, fn($a, $b) => strcmp($a, $b));
    $result=[];
    foreach($entries as $name=>$entry){
      if($name === '.' || $name === '..' || ($entry['type'] & 0xA000) === 0xA000) continue;
      $basename=mb_convert_encoding($name,'UTF-8');
      $trashed=str_starts_with($basename,'.');
      if($trashed&&!$include_trashed) continue;
      $is_folder=$entry['type']===NET_SFTP_TYPE_DIRECTORY;
      $fullpath=$path.$basename;
      $readable=($this->fileperms($fullpath) & 0o777 & 0o004)!=0;
      $attrs=$this->stat($fullpath);
      $time=date("Y-m-d\TH:i:s",$attrs['mtime']);
      $result[]=[
        'basename'=>$basename,
        'is_folder'=>$is_folder,
        'readable'=>$readable,
        'trashed'=>$trashed,
        'time'=>$time
        ]; 
      }
    return $result;
    }

  public function copy($source,$dest){
    if($source==$dest) return true;
    $entry=$this->stat($source); if(!$entry) return false;
    if($entry["type"]===NET_SFTP_TYPE_DIRECTORY) return $this->make_dir($dest)&&$this->chmod($entry['mode'],$dest)&&$this->copy_dir($source,$dest);
    elseif($entry["type"]===NET_SFTP_TYPE_REGULAR) return $this->make_file($this->get($source),$dest)&&$this->chmod($entry['mode'],$dest);
    }
    
  private function copy_dir($source_dir,$dest_dir){
    $ok=true;
    $children=$this->nlist($source_dir);
    foreach($children as $child){            if($child[0]==="."|| $child[-1]==="~") continue;
      $source="$source_dir/$child";
      $dest="$dest_dir/$child";
      $entry=$this->stat($source);
      if($entry["type"]===NET_SFTP_TYPE_DIRECTORY) $ok=$ok&&$this->mkdir($dest)&&$this->chmod($entry['mode'],$dest)&&$this->copy_dir($source,$dest);
      elseif($entry["type"]===NET_SFTP_TYPE_REGULAR){
        $ok=$this->put($dest,$this->get($source))&&$this->chmod($entry['mode'],$dest);
        if(!$ok) while($this->delete($dest)) usleep(100000);
        }
      }
    return $ok;
    }

  public function move($source,$dest){
    if($this->stat($dest)) $this->trash($dest);
    return $this->rename($source,$dest);
    }

  public function make_file($content,$dest,$is_private=false){
    $created=$this->put("$dest~",$content);
    return $this->ultimate($created,$dest,$is_private);
    }

  public function make_dir($path,$is_private=false){
    $created=$this->mkdir("$path~");
    return $this->ultimate($created,$path);
    } 
 
  private function ultimate($created,$path,$is_private=false){
    if($created){
      if($this->stat($path)) $this->trash($path);
      $this->rename("$path~",$path);
      if($is_private) $this->unpublish($path);
      return true;
      }
    else{
      while($this->delete("$path~")) usleep(100000);
      return false;
      }
    }    
    
  public function trash($path){
    if(!$this->unpublish($path)) return false;
    $basename=pathinfo($path,PATHINFO_FILENAME);
    if($basename[0]===".") return false;
    $dirname=dirname($path);
    $extname=pathinfo($path,PATHINFO_EXTENSION);
    $time=date("Y-m-d\TH:i:s");
    $backup=$dirname."/.". $basename."-".$time.($extname ? "." . $extname : "");
    $this->rename($path,$backup);
    return $path;
    }

  public function publish($path){
    $entry=$this->stat($path); if(!$entry) return false;
    if($entry["type"]===NET_SFTP_TYPE_DIRECTORY) $perms=0775;
    elseif($entry["type"]===NET_SFTP_TYPE_REGULAR) $perms=0664;
    $this->chmod($perms,$path);
    return true;
    }

  public function unpublish($path){
    $entry=$this->stat($path); if(!$entry) return false;
    if($entry["type"]===NET_SFTP_TYPE_DIRECTORY) $perms=0770;
    elseif($entry["type"]===NET_SFTP_TYPE_REGULAR) $perms=0660;
    $this->chmod($perms,$path);
    return true;
    }
  }

?>
