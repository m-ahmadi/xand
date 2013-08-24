<?php
include('inc/products.php');

$query_run = mysql_query('SELECT * FROM `motherboard`');
$products = [ 0 => null ];

while ($row = mysql_fetch_assoc($query_run)) {
	$products[] = $row;
 } 
 
if (isset($_GET["id"])) {
	$id = $_GET["id"];
	$product = $products[$id];
}



$page_Title = $product['model'];
include('inc/header.php');
 ?>

<!DOCTYPE html>
<html>
<head>
	<title><?php echo $page_Title ?></title>
</head>
<body>
	<div class="product">
		<div>
			<div class="other">
				<img src="<?php echo $product['img_2'] ?>" class="other"/>
				<img src="<?php echo $product['img_3'] ?>" class="other"/>
				<img src="<?php echo $product['img_4'] ?>" class="other"/>
			</div>
			
			<img src="<?php echo $product['img_1'] ?>" class="product"/>
			<img src="<?php echo $product['img_brand'] ?>" class="brand"/>
			
			
			<ul class="nav">
				<li><a href="">جزئیات</a></li>
				<li><a href="">یک نگاه</a></li>
			</ul>
			<table border="1">
				<tr>
					<td><?php echo $product['C_supp_detail_1'] ?></td><td>پشتیبانی از سی پی یو</td>
				</tr>
				<tr>
					<td><?php echo $product['chipset'] ?></td><td>چیپست</td>
				</tr>
				<tr>
					<td>8 x DDR3 sockets - up to 64 GB<br><br>DDR3 2133/1866/1600/1333/1066<td>پشتیبانی از مموری</td>
				</tr>
				<tr>
					<td>2 x PCI Express x16 slots</td><td>پشتیانی از گرافیک</td>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>

<?php include('inc/footer.php'); ?>