<?php
require_once('../../../libs/php/config.php');
require_once(LIB_PHP . 'initialize.php');

$product = isset($_POST['product']) ? $_POST['product'] : null;
$form = isset($_POST['form']) ? $_POST['form'] : null;

if ($product) {
	Shop::main_page_for($product);
}


if ($form) {
	
	if ($form === 'search') {
	
		Shop::search($_POST);
		
	} else if ($form === 'view') {
	
		Shop::view($_POST);
		
	} else if ($form === 'pagination') {
	
		Shop::paginate($_POST);
	}

}
?>