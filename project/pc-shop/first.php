<?php
require_once('library/initialize.php');
include_layout('header.php', 'صفحه ي اول', 'home');

?>

<div id="products_and_options">
	<div class="latest">
		<div class="latest_motherboard">
		<h1>آخرين مادربردها</h1>
		<?php $special->get_product('SELECT * FROM `motherboards`', 'motherboard'); ?>
		</div>
		
		<div class="latest_cpu">
		<h1>آخرين سي پي يوها</h1>
		<?php $special->get_product('SELECT * FROM `cpu`', 'cpu'); ?>
		</div>
	</div>
</div>

<div class="choosing_tool"></div>



<?php include_layout('footer.php'); ?>