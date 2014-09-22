<?php
require_once('../config.php');
require_once(LIB_PHP . 'initialize.php');

$logout = isset($_POST['logout']) ? $_POST['logout'] : null;

if($logout) {
	$session->logout();
	echo file_get_contents(LAYOUTS.'header'.DS.'html'.DS.'login_register'.DS.'login.htm');
}