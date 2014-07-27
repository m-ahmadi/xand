<?php
require_once('../../../../libs/php/config.php');
require_once(LIB_PHP . 'initialize.php');




if ( $session->is_logged_in() ) {
	$user = $user->find_by_id($session->user_id);
	$name = $user->fullname();
	
?>
	<div id="profile">
		<?php echo $name; ?><br>
		<a href="#">پروفایل من</a><br>
		<a href="#">خرید های من</a><br>
		<a href="#" type="submit" id="logout_button">خروج</a><br>
	</div>
<?php


} else {

	$content = file_get_contents('../layouts/login_register/login.htm');
	
	
	//echo '<div id="login-wrap">';
	echo $content;
	echo script('../js/application/modules/header/login.ajax.js');
	//echo '</div>';
}
 ?>
 

