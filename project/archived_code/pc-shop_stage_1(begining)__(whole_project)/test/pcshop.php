<!DOCTYPE HTML>
<?php
$page_Title = 'فروشگاه کامپیوتر';
include('inc/header.php'); 
?>
		<div class="content">
			<div class="shop_navigator">
					<ul>
						<li><a href="">مادربرد</a></li>
						<li><a href="">سی پی یو</a></li>
						<li><a href="">گرافیک</a></li>
						<li><a href="">مموری</a></li>
						<li><a href="">هارد</a></li>
						<li><a href="">دی وی دی درایو</a></li>
						<li><a href="">پاور</a></li>
						<li><a href="">کیس</a></li>
					</ul>
			</div>
			<div class="search_options" id="search_options">
				<?php include('inc.php') ?>
			</div>
			
			<div class="products" id="products">
				<?php
				include('inc/products.php');
				$query_run = mysql_query('SELECT * FROM `motherboard`');
				while ($row = mysql_fetch_assoc($query_run)) { ?>
					<div>
						<a href="product.php?id=<?php echo $row['id'] ?>" class="img">
						<img src="<?php echo $row['img_brand'] ?>" class="brand"/>
						<img src="<?php echo $row['img_1'] ?>" class="product" onclick="drag(event)"/>
						</a>
						<a href="product.php?id=<?php echo $row['id'] ?>" class="link"><?php echo $row['model']; ?></a>
						<table>
							<tr>
								<td>تومان&nbsp;</td><td class="price"><?php echo $row['price']; ?></td><th>&nbsp;:قیمت</th>
							</tr>
							<tr>
								<td></td><td class="eng"><?php echo substr($row['chipset'], 0, 15); ?></td><th class="chipset">&nbsp;:چیپست</th>
							</tr>
						</table>
						<a href="product.php?id=<?php echo $row['id'] ?>" class="button">مشاهده جزئیات</a>
					</div>
				<?php } ?>
				
				<ul>
					<?php
					$query_run = mysql_query('SELECT * FROM `motherboard`');
					while ($row = mysql_fetch_assoc($query_run)) {
						echo '<li><a href="#"><img src="'.$row['img_1'].'"/><br><br><p>'.$row['model'].'</p></a></li>';
					} ?>
				</ul>
			</div>
			<div class="choosing_tool" id="div1" ondrop="drop(event)"ondragover="allowDrop(event)">
				<ul>
					<li id="motherboard"></li>
					<li id="cpu"></li>
					<li id="ram"></li>
					<li id="graphic"></li>
					<li id="power"></li>
				</ul>
			</div>
		</div>
	</div>
    <script type="text/javascript">
        function fn(event){
            var target = event.target;
            if (target.className === 'product')
                event.preventDefault();
                productEl = document.getElementById('pro');
                panelEl = document.getElementById('motherboard');
                panelEl.innerHTML = productEl.innerHTML;
                
        }
        addEventListener('click', fn, false);
    </script>
	
	<script>
	function allowDrop(ev) {
		ev.preventDefault();
	}

	function drag(ev) {
		ev.dataTransfer.setData("Text",ev.target.id);
	}

	function drop(ev) {
		ev.preventDefault();
		var data=ev.dataTransfer.getData("Text");
		ev.target.appendChild(document.getElementById(data));
	}
	</script> 
	
	<script type="text/javascript">
	/*******************************
	 JavaScript by Mohammad Ahmadi.
	********************************/
	
	var xhr = new XMLHttpRequest();
	
	var fn = function(event) {
		var target = event.target;
		if (target.tagName.toUpperCase() === 'A') {
			if (target.attributes[0].value == "") {
				event.preventDefault();
				var innerHTML = target.innerHTML;
				xhr.open('GET','inc.php?destroy=true&panel=' + innerHTML);
				xhr.onreadystatechange = function(){
					if (xhr.readyState==4 && xhr.status==200){
						document.getElementById('search_options').innerHTML = xhr.responseText;
					}
				}
				xhr.send();
			}
		}
		if (target.tagName.toUpperCase() === 'INPUT') {
			var so_product = target.parentElement.dataset.so_product;
			var so_category = target.parentElement.dataset.so_category;
			var so_inpName = target.name;
			
			xhr.onreadystatechange = function(){
				if (xhr.readyState==4 && xhr.status==200){
					document.getElementById('products').innerHTML = xhr.responseText;
				}
			}
			if (target.checked == true && target.hasAttribute('name')) {
				xhr.open('GET','inc.php?so_product=' + so_product + '&so_category=' + so_category + '&so_inpName=' + so_inpName);
				xhr.send();
				
			} else if (target.checked == false && target.hasAttribute('name')) {
				xhr.open('GET','inc.php?rmv_product=' + so_product + '&rmv_category=' + so_category + '&rmv_inpName=' + so_inpName);
				xhr.send();
			}
		}
	}
	document.addEventListener('click' ,fn , false);
	</script>
	
<?php include('inc/footer.php'); ?>