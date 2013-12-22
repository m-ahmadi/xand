<?php
require_once('../library/initialize.php');


	
if ( $session->is_logged_in() ) {
	echo html(1);
	echo script('../js/application/modules/product/comment.ajax.js');
} else {
	//echo html(0);
	echo popup_login();
}

function html($status) {
	if ( (bool)$status ) {
		$html = ''
		.	'<div style="clear:both;" data-success="'.$status.'">'
		.		'<div>'
		.			'<textarea id="comment_text_area" cols="40" rows="2" placeholder=""></textarea>'
		.			'<a href="#" class="button" id="send-comment-button">بفرست</a>'
		.		'</div>'
		.		'<div><span id="text_counter">حداقل 30 کاراکتر وارد کنید.</span></div>'
		.	'</div>';
	} else {
		$html = '<div style="clear:both;" data-success="'.$status.'">';
	}
	return $html;
}
?>