<?php
header('Content-Type: text/css; charset=UTF-8');
require_once('../../libs/php/config.php');
require_once(LIBRARY.'functions.php');

$page = isset($_GET['page']) ? $_GET['page'] : null;
if ( empty($page) or !is_string($page) or !in_array($page, $PAGES_LIST) ) { die(); }

$page_styles_dir = PAGES.$page.DS.'css'.DS;
$arr_paths_list = get_files_list($page_styles_dir);
echo assemble_files($arr_paths_list, $page_styles_dir);





function get_files_list($dir) {
	$arr = [];
	foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir)) as $filename) {
		if (preg_match('/[.][c][s][s]$/', $filename)) {     // /\W{1}\.{1,2}$/  ==  \. \..
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















/*

$arr_paths_list = get_all_files_from_folder($page_styles_dir);

function get_all_files_from_folder($top_folder) {
	if ( empty($top_folder) or !is_string($top_folder) ) { return; }
	$files_list = [];
	
	$d1 = scandir($top_folder);
	foreach($d1 as $p1) { // level-1
		$path1 = $top_folder.$p1;
		if ( !is_back_dir($p1) ) {
			if ( is_dir($path1) ) {
				$d2 = scandir($path1);
				foreach($d2 as $p2) { // level-2
					$path2 = $top_folder.$p1.DS.$p2;
					if ( !is_back_dir($p2) ) {
						if ( is_dir($path2) ) {
							$d3 = scandir($path2);
							foreach($d3 as $p3) { // level-3
								$path3 = $top_folder.$p1.DS.$p2.DS.$p3;
								if ( !is_back_dir ) {
									if ( is_dir($path3) ) {
										$d4 = scandir($path3);
										foreach($d4 as $p4) { // level-4
											$path4 = $top_folder.$p1.DS.$p2.DS.$p3.DS.$p4;
											if ( !is_back_dir($p4) ) {
												if ( is_dir($path4) ) {
													$d5 = scandir($path4);
													foreach($d5 as $p5) { // level-5
														// going deeper...
													}
												} elseif ( !is_dir($path4) ) {
													$files_list[] = $path4;
												}
											}
										}
									} elseif ( !is_dir($path3) ) {
										$files_list[] = $path3;
									}
								}
							}
						} elseif ( !is_dir($path2) ) {
							$files_list[] = $path2;
						}
					}
				}
			} elseif ( !is_dir($path1) ) {
				$files_list[] = $path1;
			}
		}
	}
	return $files_list;
}




//$x = glob('/xampp/htdocs/pages/shop/css/*', GLOB_ONLYDIR);
*/
?>