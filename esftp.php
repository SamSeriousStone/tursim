<?php
require __DIR__."/vendor/autoload.php";
use phpseclib3\Net\SFTP;

class ESFTP extends SFTP{

  public function access($username,$password){
    return $username && $password && $this->login($username,$password);
    }

  public function files($path,$include_trashed){
    $entries = $this->rawlist($path);
    if(!$entries) return false;
    uksort($entries, fn($a, $b) => strcmp($a, $b));
    $result=[];
    foreach($entries as $name=>$entry){
      if($name === '.' || $name === '..' || str_ends_with($name, '~') || ($entry['type'] & 0xA000) === 0xA000) continue;
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
    $entry=$this->stat($source);
    if(!$entry) return false;
    if($entry["type"]===NET_SFTP_TYPE_DIRECTORY){
      $this->mkdir($dest);
      $children=$this->nlist($source);
      foreach($children as $child){
        if($child[0]==="."|| $child[-1]==="~") continue;
        $this->copy("$source/$child","$dest/$child");
        }
      }
    elseif($entry["type"]===NET_SFTP_TYPE_REGULAR){
      $content = $this->get($source);
      $this->put($dest, $content);
      }
    $perms=$entry['mode'];
    $this->chmod($perms,"$dest");
    return true;
    }

  public function trash($path)
    {
    if(!$this->unpublish($path)) return false;
    $basename=pathinfo($path,PATHINFO_FILENAME);
    if($basename[0]===".") return false;
    $dirname=dirname($path);
    $extname=pathinfo($path,PATHINFO_EXTENSION);
    $time=date("Y-m-d\TH:i:s");
    $backup=$dirname."/.". $basename."-".$time.($extname ? "." . $extname : "");
    $this->rename($path,$backup);
    return true;
    }

  public function publish($path){
    $entry=$this->stat($path);
    if(!$entry) return false;
    if($entry["type"]===NET_SFTP_TYPE_DIRECTORY) $perms=0775;
    elseif($entry["type"]===NET_SFTP_TYPE_REGULAR) $perms=0664;
    $this->chmod($perms,$path);
    return true;
    }

  public function unpublish($path){
    $entry=$this->stat($path);
    if(!$entry) return false;
    if($entry["type"]===NET_SFTP_TYPE_DIRECTORY) $perms=0770;
    elseif($entry["type"]===NET_SFTP_TYPE_REGULAR) $perms=0660;
    $this->chmod($perms,$path);
    return true;
    }
  }

?>
