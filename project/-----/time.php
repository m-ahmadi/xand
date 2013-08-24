<?php
echo '<hr/>Day<hr/>';
echo "date('Day', ) => " . date('Day', time()) . '<br/>';
echo "date('d', ) => " . date('d', time()) . '<br/>';
echo "date('D', ) => " . date('D', time()) . '<br/>';
echo "date('j', ) => " . date('j', time()) . '<br/>';
echo "date('l', ) => " . date('l', time()) . '<br/>';
echo "date('N', ) => " . date('N', time()) . '<br/>';
echo "date('S', ) => " . date('S', time()) . '<br/>';
echo "date('w', ) => " . date('w', time()) . '<br/>';
echo "date('Z', ) => " . date('Z', time()) . '<br/>';

echo '<hr/>Week <hr/>';
echo "date('W', ) => " . date('W', time()) . '<br/>';

echo '<hr/>Month <hr/>';
echo "date('F', ) => " . date('F', time()) . '<br/>';
echo "date('m', ) => " . date('m', time()) . '<br/>';
echo "date('M', ) => " . date('M', time()) . '<br/>';
echo "date('n', ) => " . date('n', time()) . '<br/>';
echo "date('t', ) => " . date('t', time()) . '<br/>';

echo '<hr/>Year<hr/>';
echo "date('Year', ) => " . date('Year', time()) . '<br/>';
echo "date('L', ) => " . date('L', time()) . '<br/>';
echo "date('o', ) => " . date('o', time()) . '<br/>';
echo "date('Y', ) => " . date('Y', time()) . '<br/>';
echo "date('y', ) => " . date('y', time()) . '<br/>';
echo "date('Time', ) => " . date('Time', time()) . '<br/>';
echo "date('a', ) => " . date('a', time()) . '<br/>';
echo "date('A', ) => " . date('A', time()) . '<br/>';
echo "date('B', ) => " . date('B', time()) . '<br/>';
echo "date('g', ) => " . date('g', time()) . '<br/>';
echo "date('G', ) => " . date('G', time()) . '<br/>';
echo "date('h', ) => " . date('h', time()) . '<br/>';
echo "date('H', ) => " . date('H', time()) . '<br/>';
echo "date('i', ) => " . date('i', time()) . '<br/>';
echo "date('s', ) => " . date('s', time()) . '<br/>';


echo '<hr/>Timezone<hr/>';
echo "date('Timezone', ) => " . date('Timezone', time()) . '<br/>';
echo "date('e', ) => " . date('e', time()) . '<br/>';
echo "date('I', ) => " . date('I', time()) . '<br/>';
echo "date('O', ) => " . date('O', time()) . '<br/>';
echo "date('P', ) => " . date('P', time()) . '<br/>';
echo "date('T', ) => " . date('T', time()) . '<br/>';
echo "date('Z', ) => " . date('Z', time()) . '<br/>';
echo "date('Full Date/Time', ) => " . date('Full Date/Time', time()) . '<br/>';
echo "date('c', ) => " . date('c', time()) . '<br/>';
echo "date('r', ) => " . date('r', time()) . '<br/>';
echo "date('u', ) => " . date('u', time()) . '<br/>';



$database->query('SELECT * FROM '.$p_cat);
$products[0] = null;

while ($row = $database->fetch_assoc()) {
	$products[] = $row; 
} 
if ($id) {
	$id = $_GET['id'];
	$product = $products[$id]; 
} else {
  redirect_to('pc-shop.php');
}
?>