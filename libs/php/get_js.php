<?php
header('Content-Type: text/javascript; charset=UTF-8');
require_once('../../libs/php/config.php');
require_once(LIBRARY.'functions.php');

$page = isset($_GET['page']) ? $_GET['page'] : null;
if ( empty($page) or !is_string($page) or !in_array($page, $PAGES_LIST) ) { die(); }

$page_scripts_dir = PAGES.$page.DS.'js'.DS;
$arr_paths_list = get_files_list($page_scripts_dir);
echo assemble_files($arr_paths_list, $page_scripts_dir);





function get_files_list($dir) {
	$arr = [];
	foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir)) as $filename) {
		if (preg_match('/[.][j][s]$/', $filename)) {     // /\W{1}\.{1,2}$/  ==  \. \..
			$arr[] = (string)$filename;
		}
	}
	return $arr;
}
function assemble_files($arr, $root) {
	sort($arr, SORT_STRING);
	$contents = '';
	foreach($arr as $filename) {
		$contents .= file_get_contents($filename);
	}
	return $contents;
}