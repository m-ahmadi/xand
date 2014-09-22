<?php
require_once('../../../../libs/php/config.php');
require_once(LIB_PHP     . 'session.php');
require_once(LIB_PHP     . 'functions.php');
require_once(PRODUCT_PHP . 'comment_class.php');


	
if ( $session->is_logged_in() ) {
	echo html(1);
} else {
	echo html(0);
}

function html($status) {
	if ( (bool)$status ) {
		$html = ''
		.	'<div style="clear:both;" data-is_logged_in="'.$status.'">'
		.		'<div>'
		.			'<textarea id="comment_text_area" cols="40" rows="2" placeholder=""></textarea>'
		.			'<a href="#" class="button" id="send-comment-button">بفرست</a>'
		.		'</div>'
		.		'<div><span id="text_counter">حداقل 30 کاراکتر وارد کنید.</span></div>'
		.	'</div>';
	} else {
		$html  = '';
		$html .= '<span data-is_logged_in="'.$status.'">';
		//$html .=  file_get_contents(LIB_HTML . 'popup-login.htm');
		$html .= '</span>';
	}
	return $html;
}
?>