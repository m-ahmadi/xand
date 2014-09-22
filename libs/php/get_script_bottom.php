<?php
header('Content-Type: text/javascript; charset=UTF-8');
require_once('../../libs/php/config.php');
require_once(LIB_PHP . 'functions.php');

$page = isset($_GET['page']) ? $_GET['page'] : null;
if ( empty($page) or !is_string($page) or !in_array($page, $PAGES_LIST) ) { die(); }

$page_scripts_dir = PAGES.$page.DS.'js'.DS;
$libs             =  paths_under_dir(LIB_JS_BOTTOM);
$header_scripts   =  paths_under_dir(LAYOUTS.'header'.DS.'js'.DS);
$page_scripts     =  paths_under_dir($page_scripts_dir);
$all = array_merge($libs, $header_scripts, $page_scripts);

foreach($all as $filename) {
	readfile($filename);
	echo "\n";
}

function paths_under_dir($dir) {
	$arr = [];
	foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir)) as $filename) {
		if (preg_match('/^.+[\\'.DS.']\d{1,3}[_].+[.][j][s]$/', $filename)) {     // /\W{1}\.{1,2}$/  ==  \. \..
			$arr[] = (string)$filename;
		}
	}
	sort($arr, SORT_STRING);
	return $arr;
}

/*
	^          start of line
	[\]        only character backslash              note: [\\'.DS.']  =  [\] or [/] for Windows/Linux
	.+         1 or more of any single character
	\d{1,3}    between 1 and 3 of any digit: 0-000
	[s]        only character s
	$          end of line
*/ 

?>