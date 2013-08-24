<?php
function farsi($arr) {
	$rdy_str = '';
	if (is_array($arr)) {
		foreach($arr as $value) {
			$rdy_str .= chr($value);
		}
	}
	return $rdy_str;
}

function encodeFa($str) {
	$arr = str_split($str);
	$work = [];
	foreach($arr as $value) {
		$work[] = ord($value);
	}
	return $work;
}

function asci($str) {
	$work = '[';
	foreach(encodeFa($str) as $value) {
		$work .= $value .', ';
	}
	$almost = substr($work, 0, -2);
	$rdy = $almost .']';
	echo '<br>';
	echo '<b>"'. $str .'"</b> ASCI => '. $rdy;
}
?>