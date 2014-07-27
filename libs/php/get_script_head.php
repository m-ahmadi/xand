<?php
header('Content-Type: text/javascript; charset=UTF-8');
require_once('../../libs/php/initialize.php');

global $session;
if ( !$session->is_logged_in() ) {
	readfile(LIB_JS_HEAD.'createWebSocketDefinition.js');
	echo "\n";
	readfile(LIB_JS_HEAD.'createWebSocket.js');
}

?>