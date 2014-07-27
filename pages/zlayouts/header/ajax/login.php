<?php
require_once('../../../../libs/php/config.php');
require_once(LIB_PHP . 'initialize.php');

$username = isset($_POST['username']) ? trim($_POST['username']) : null;
$password = isset($_POST['password']) ? trim($_POST['password']) : null;


//if ($session->is_logged_in()) { redirect_to('admin.php'); };


if ($username && $password) {
	$user_exists = User::username_exists($username);
	$found_user = User::authenticate($username, $password);
	
	if (!$user_exists) {
		$msg =  '<p id="login-message" data-status="103">این نام کاربری در سایت وجود ندارد</p>';
	} else {
		if ($found_user) {
			$session->login($found_user);
			$name = $found_user->fullname();
			
			$msg = '<p id="login-message" data-status="101">'.$name.' عزیز شما با موفقيت وارد سايت شديد</p>';
			
			include('../ajax/login.php');
			
			
		} else {
			$msg = '<p id="login-message" data-status="102">رمز عبور اشتباه است</p>';
		}
	}
	
	echo '<p id="user">'.$name.'</p>';
	echo $msg;
	
}

//redirect_to($_SERVER['HTTP_REFERER']);

if(isset($database)) { $database->close_connection(); }
 
 ?>
 
