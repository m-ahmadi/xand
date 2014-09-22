<?php
require_once('../../../../../libs/php/config.php');
require_once(LIB_PHP . 'initialize.php');

$address = LAYOUTS.'header'.DS.'js'.DS;

if ( $session->is_logged_in() ) {
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
	echo file_get_contents(LAYOUTS.'header'.DS.'html'.DS.'login_register'.DS.'login.htm');
}
 ?>
 

