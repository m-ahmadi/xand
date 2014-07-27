<?php
require_once('../../../libs/php/config.php');
require_once(LIB_PHP . 'initialize.php');

$comment_text = isset($_POST['comment']) ? $_POST['comment'] : null;

if ($comment_text) {
	
	
	$new_comment = $comment->make($session->user_id, $session->product_id(), $comment_text);
	
	echo $html = create_comment($new_comment);
	
	// Here here kitty
	$client = stream_socket_client("tcp://localhost:9090");
	$send = "New Comment!";
	fwrite($client, $send);
	stream_socket_sendto($client, "2937".$html );
}

function create_comment($comment) {
	$user = User::find_by_id($comment->user_id);
	$html  = ''
	.	'<li>'
	. 		'<div class="comment_wrap">'
	. 		'<div class="avatar"><a href="#"><img alt="" src="'. $user->avatar_pic .'" height="60" width="60"/></a></div>'
	. 		'<div class="comment">'
	. 			'<div class="username"><a href="http://www.site.com/myProfile">'. $user->fullname() .'</a></div>'
	. 			'<div class="comment_text"><p>'. $comment->comment_text .'</p></div>'
	. 			'<div class="comment_time"><time datetime="">'. $comment->comment_date .'</time></div>'
	. 		'</div>'
	. 		'</div>'
	. 	'</li>';
	
	return $html;
}

?>