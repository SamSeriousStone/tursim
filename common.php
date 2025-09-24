<?php
if(session_status()===PHP_SESSION_NONE) session_start();

function get($key){
  $input=file_get_contents("php://input");
  $attributes=json_decode($input,true)??[];
  return $attributes[$key]??$_POST[$key]??$_GET[$key]??$_SESSION[$key]??null;
  }

function unset_credentials(){
  unset($_SESSION['host']);
  unset($_SESSION['username']);
  unset($_SESSION['password']);
  }

function get_root(){
  return '/home/'.get('username').'/public_html/';
  }

function shadow_hash($password) {
  $salt=bin2hex(random_bytes(8)); // 16 caratteri esadecimali
  $full_salt='$6$'.$salt.'$'; // SHA-512
  return crypt($password,$full_salt);
  }


function email_errors($email){
  return [
         $email!="",   
         preg_match('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/',$email)==1
         ];
  }

function username_errors($username){
  return [
         $username!="",
         strlen($username)>=3,
         preg_match('/^[a-z][a-z0-9_-]*$/',$username)==1,
         strlen($username)<=20,
         !is_dir("/home/$username")
         ];
  }

function password_errors($password){
  return [
         $password!="",
         strlen($password)>=8,
         preg_match('/^(?!.*\|)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/',$password)==1,
         strlen($password)<=128
         ];
  }

function email_error($email){
  return check(email_errors($email));
  }

function username_error($username){
  return check(username_errors($username));
  }

function password_error($password){
  return check(password_errors($password));
  }

function check($errors){
  $search=array_search(false,$errors);
  return $search===false?0:$search+1;
  }
?>
