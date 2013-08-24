<?php

function get_query($product, $el = null) {
	$array = [];
	$str = '';
	$product = '`'.$product.'` ';
	$sql = 'SELECT * FROM ' . $product;
	
	if (!empty($el) && is_array($el)) {
		$sql .= 'WHERE ';
		foreach($el as $key => $value) {
			foreach($value as $val) {
				$array[$key][] = '`'. htmlentities($key) .'`="'. htmlentities($val) .'"';
			}
		}
		foreach($array as $key => $value) {
			$str .= implode(' OR ', $array[$key]) . ' AND';
		}
		$sql .= $str;
		$sql = substr($sql, 0, -4);
	}
	return $sql;
}
?>