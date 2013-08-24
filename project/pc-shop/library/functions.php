<?php

function strip_zeros_from_date($marked_string='') {
	$no_zeros = str_replace('*0', '', $marked_string);
	$cleaned_string = str_replace('*', '', $no_zeros);
	return $cleaned_string;
}

function redirect_to($location=null) {
	if ($location != null) {
		header('Location: '. $location);
		exit();
	}
}

function output_message($message='') {
	if (isset($message) && !empty($message)) {
		return '<p class="php_message">' .$message. '</p>';
	} else {
		return '';
	}
}

function __autoload($class_name) {
	$class_name = strtolower($class_name);
	$path = LIBRARY.DS.$class_name . '.php';
	if (file_exists($path)) {
		require_once($path);
	} else {
		die('The file <b>'. $class_name .'.php</b> could not be found.');
	}
}

function include_layout($template=null, $title=null, $section=null) {
	if ($template) {
		$page_title = $title;
		$section = $section;
		if (include(LAYOUTS.DS.$template)) {return true;}
		else {return false;} 
	}
}

function script() {
	$html = '';
	if ( func_num_args() === 0 ) { return $html; }
	
	$html .= '<script type="text/javascript">';
	foreach (func_get_args() as $value) {
		if ( !empty($value) ) {
			$html .= file_get_contents($value);
		}
	}
	$html .= '</script>';
	
	return $html;
}



function popup_login() {
	$html  = '';
	$html .= '<div class="popup-login-wrap" data-success="false">';
	$html .=  file_get_contents('../layouts/popup-login.htm');
	$html .=  script('../js/application/modules/popup/popupLogin.ajax.js');
	$html .= '<div>';
	
	return $html;
}

function send_to_all() {
	define('KEY', '2937');
	$client = stream_socket_client("tcp://localhost:9090");
	stream_socket_sendto($client, KEY."something happend" );
}
?>