<?php
$page_Title = 'صفحه اول';
include('inc/header.php');
?>

<div class="products">
	<?php
	include('inc/products.php');
	$query_run = mysql_query('SELECT * FROM `motherboard` WHERE `company`="asus"');
	while ($row = mysql_fetch_assoc($query_run)) { ?>
		
		<div>
			<a href="">
			<img src="<?php echo $row['img_brand'] ?>" class="brand"/>
			<img src="<?php echo $row['img'] ?>" class="product"/>
			</a>
			<p>
			<span class="bold">قیمت</span><span class="green"> 320,000 تومان</span><br>
			سال ساخت <span class="blue">1382</span><br>
			سال انتشار 1379<br>
			طراح اولیه علی لره
			</p>
			<a href="#" class="button">مشاهده جزئیات</a>
		</div>
		
	<?php } ?>
</div>

<?php include('inc/footer.php'); ?>
