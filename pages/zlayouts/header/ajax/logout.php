<?php
require_once('../../../../libs/php/config.php');
require_once(LIB_PHP . 'initialize.php');

$logout = isset($_POST['logout']) ? $_POST['logout'] : null;

if($logout) {
	$session->logout();
	
	
	
	$content = file_get_contents('../layouts/login_register/login.htm');
	//echo '<div id="login-wrap">';
	echo $content;
	echo script('../js/application/modules/header/login.ajax.js');
	//echo '</div>';
	
}