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
	$path = LIB_PHP.$class_name . '.php';
	if (file_exists($path)) {
		require_once($path);
	} else {
		die('The file <b>'. $class_name .'.php</b> could not be found.');
	}
}

function include_header($page=null, $title=null) {
	$page = $page;
	$page_title = $title;
	return (include(HEADER)) ? true : false;
}

function include_footer($page=null) {
	$page = $page;
	return (include(FOOTER)) ? true : false;
}

function script() {
	$html = '';
	if ( func_num_args() === 0 ) { return $html; }
	$html .= '<script type="text/javascript">';
	$first_arg = func_get_args()[0];
	if ( is_array($first_arg) ) { // array of addresses
		foreach($first_arg as $arr_element) {
			$html .= "\n";
			$html .= file_get_contents($arr_element);
		}
	} else { // args are addresses
		foreach (func_get_args() as $arg) {
			if ( !empty($arg) && !is_array($arg) ) {
				$html .= "\n";
				$html .= file_get_contents($arg);
			}
		}
	}
	$html .= '</script>';
	return $html;
}

function get_all_ajax_scripts_from_path($dir) {
	$html = '';
	if (!$dir) { return $html; }
	
	$arr = [];
	foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir)) as $filename) {
		// "*****\ajax_000_********.js"     or     "*****/ajax_000_********.js"
		if (preg_match('/^.+[\\'.DIRECTORY_SEPARATOR.'][a][j][a][x][_]\d{1,3}[_].+[.][j][s]$/', $filename)) {
			$arr[] = (string)$filename;
		}
	}
	sort($arr, SORT_STRING);
	
	$html .= '<script type="text/javascript">';
	foreach ($arr as $value) {
		$html .= "\n";
		$html .= file_get_contents($value);
	}
	$html .= '</script>';
	
	return $html;
}

function send_to_all() {
	define('KEY', '2937');
	$client = stream_socket_client("tcp://localhost:9090");
	stream_socket_sendto($client, KEY."something happend" );
}

function is_back_dir($str) {
	//(string) $path;
	$length = strlen($str);
	if ( ($length === 1 && $str === '.') or ($length === 2 && $str === '..') ) {
		return true;
	} else {
		return false;
	}
}

?>