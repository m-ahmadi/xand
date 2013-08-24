<?php
$first = ord($content[0]);
$second = ord($content[1]);
$third = ord($content[2]);
if ($first == 239 && $second == 187 && $third == 191) {
	$content = substr($content, 3);
}
?>