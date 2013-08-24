<?php

public function so_add($el, $category) {
	$work =& $_SESSION['search_options'];
	if (!empty($work)) {
		if (!array_key_exists($category, $work)) {
			if(!empty($work[$category])){
				if (!in_array($el, $work[$category])) { $work[$category][] = $el; }
			} else {
				$work[$category][] = $el;
			}
		} else {
			$work[$category][] = $el;
		}
	} else {
		$work[$category][] = $el;
	}
}

public function so_remove($el, $category) {
	$work =& $_SESSION['search_options'];
	if (!empty($work)) {
		if (array_key_exists($category, $work)) {

			if (!empty($work[$category])) {
				array_splice($work[$category], array_search($el, $work[$category]), 1);
				//if (empty($work[$category])) {
				//	array_splice($work, array_search($category, $work), 1);
				//}
			} else {
				array_splice($work, array_search($category, $work), 1);
			}
			
		}
	}
}

public function so_reset($category) {
	$work =& $_SESSION['search_options'];
	if (!empty($work)) {
		if (array_key_exists($category, $work)) {
			unset($work[$category]);
			//array_splice($work, array_search($category, $work), 1);
		}
	}
}

// controller part

$search_options =& $_SESSION['search_options'];

$el = isset($_GET['so_el']) ? $_GET['so_el'] : null;
$category = isset($_GET['so_category']) ? $_GET['so_category'] : null;
$r_el = isset($_GET['rmv_so_el']) ? $_GET['rmv_so_el'] : null;
$r_category = isset($_GET['rmv_so_category']) ? $_GET['rmv_so_category'] : null;
$category_to_reset = isset($_GET['reset']) ? $_GET['reset'] : null;
$clear = isset($_GET['clear']) ? $_GET['clear'] : null;

if ($category_to_reset) {
	$product->so_reset($category_to_reset);
	echo $query = $product->get_query($product_session, $search_options);
	$product->get_product($query, $product_session);
}
if ($r_el && $r_category) {
	$product->so_remove($r_el, $r_category);
	echo $query = $product->get_query($product_session, $search_options);
	$product->get_product($query, $product_session);
}
if ($el && $category) {
	$product->so_add($el, $category);
	echo $query = $product->get_query($product_session, $search_options);
	$product->get_product($query, $product_session);
}

?>