<?php
require_once('../config.php');
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
		if ($found_user) { // successful login
			$session->login($found_user);
			$name = $found_user->fullname();
			
			$msg = '<p id="login-message" data-status="101">'.$name.' عزیز شما با موفقيت وارد سايت شديد</p>';
			$msg .= '<span id="user">'.$name.'</span>';
			
			//include('get_loginform_userprofile.php'); was meant to be: now we load the profile
			$user = $user->find_by_id($session->user_id);
			$name = $user->fullname();
			$html  = '';
			$html .= '<div id="profile">';
			$html .=	$name.'<br>';
			$html .=	'<a href="#">پروفایل من</a><br>';
			$html .=	'<a href="#">خرید های من</a><br>';
			$html .=	'<a href="#" type="submit" id="logout_button">خروج</a><br>';
			$html .= '</div>';
			$html .= "\n";
			
			echo $html;
		} else {
			$msg = '<p id="login-message" data-status="102">رمز عبور اشتباه است</p>';
		}
	}
	echo $msg;
	
} else {
	echo 'No username and password was received.';
}

//redirect_to($_SERVER['HTTP_REFERER']);
if(isset($database)) { $database->close_connection(); }
 
 ?>
 
