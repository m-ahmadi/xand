<?php
session_start();
$motherboard = '
<div class="search_options_all" data-so_product="motherboard" data-so_category="company" >
<label class="lbl">شرکت سازنده</label><br /><br />
<input type="checkbox" name="gigabyte"/><label>GIGABYTE</label><br />
<input type="checkbox" name="asus"/><label>ASUS</label><br />
<input type="checkbox" name="asrock"/><label>ASROCK</label>
</div>
<div class="search_options_all" data-so_product="motherboard" data-so_category="cpuSup">
<label class="lbl">پشتیبانی از سی پی یو</label><br /><br />
<input type="radio" name="intel"/><label>INTEL</label><br />
<input type="radio" name="amd"/><label>AMD</label>
</div>
<div class="search_options_all" data-so_product="motherboard" data-so_category="cpuSocket">
<label class="lbl">سوکت سی پی یو</label><br /><br />
<input type="checkbox" name="2011"/><label>2011</label><br />
<input type="checkbox" name="1366"/><label>1366</label><br />
<input type="checkbox" name="1155"/><label>1155</label><br />
<input type="checkbox" name="1156"/><label>1156</label><br />
<input type="checkbox" name="775"/><label>775</label>
</div>
<div class="search_options_all">
<div data-so_product="motherboard" data-so_category="memorySup">
<label class="lbl">پشتیبانی از مموری</label><br /><br />
<label>DDR II </label><br />
<label>Slot:</label><select><option>2</option><option>4</option></select><br>
<label>Bus:</label><input type="checkbox" name="533"/>533<input type="checkbox" name="667"/>667<input type="checkbox" name="800"/>800
</div><br>
<div data-so_product="motherboard" data-so_category="memorySup">
<label>DDR III </label><br />
<label>Slot:</label><select><option>2</option><option>4</option><option>6</option><option>8</option></select><br>
<label>Bus:</label><br><input type="checkbox" name="667"/>677<input type="checkbox" name="800"/>800<input type="checkbox" name="1066"/>1066<input type="checkbox" name="1333"/>1333<br><input type="checkbox" name="1600"/>1600<input type="checkbox" name="1800"/>1800<input type="checkbox" name="1866"/>1866<input type="checkbox" name="2000"/>2000<br><input type="checkbox" name="2133"/>2133<input type="checkbox" name="2400"/>2400
</div>
</div>';

$cpu = '
<div class ="search_options_all" data-so_product="cpu" data-so_category="company">
<label class="lbl">شرکت سازنده</label><br /><br />
<input type="radio"/><label>INTEL</label><br />
<input type="radio"/><label>AMD</label>
</div>

<div class="search_options_all" data-so_product="cpu" data-so_category="socket">
<label class="lbl">سوکت</label><br /><br />
<input type="checkbox"/><label>2011</label><br />
<input type="checkbox"/><label>1366</label><br />
<input type="checkbox"/><label>1155</label><br />
<input type="checkbox"/><label>1156</label><br />
<input type="checkbox"/><label>775</label>
</div>

<div class="search_options_all" data-so_product="cpu" data-so_category="coreNum">
<label class="lbl">تعداد هسته</label><br /><br />
<input type="checkbox"/><label>1</label><br />
<input type="checkbox"/><label>2</label><br />
<input type="checkbox"/><label>3</label><br />
<input type="checkbox"/><label>4</label><br />
<input type="checkbox"/><label>6</label>
</div>';

$memory ='
<div class ="search_options_all" data-so_product="memory" data-so_category="company">
<label class="lbl">شرکت سازنده</label><br /><br />
<input type="checkbox"/><label>KINGSTON</label><br />
<input type="checkbox"/><label>ADATA</label><br />
<input type="checkbox"/><label>APACER</label><br />
<input type="checkbox"/><label>OCZ</label><br />
<input type="checkbox"/><label>SILICON POWER</label>
</div>
<div class ="search_options_all" data-so_product="memory" data-so_category="ddrType">
<label class="lbl">نوع حافظه</label><br /><br />
<input type="checkbox"/><label>DDR II</label><br />
<input type="checkbox"/><label>DDR III</label>
</div>
<div class ="search_options_all" data-so_product="memory" data-so_category="capacity">
<label class="lbl">حجم</label><br /><br />
<input type="checkbox"/><label>1 GB</label><br />
<input type="checkbox"/><label>2 GB</label><br />
<input type="checkbox"/><label>4 GB</label><br />
<input type="checkbox"/><label>6 GB</label><br />
<input type="checkbox"/><label>8 GB</label>
</div>
<div class ="search_options_all" data-so_product="memory" data-so_category="fbs">
<label class="lbl">باس</label><br /><br />
<input type="checkbox"/><label>400</label><br />
<input type="checkbox"/><label>800</label><br />
<input type="checkbox"/><label>1066</label><br />
<input type="checkbox"/><label>1333</label><br />
<input type="checkbox"/><label>1600</label><br />
<input type="checkbox"/><label>1800</label><br />
<input type="checkbox"/><label>1866</label>
</div>';

function getQuery($name, $product) {
	$base = 'SELECT * FROM ';
	$addOR = ' OR ';
	$addWHERE = ' WHERE ';
	
	$base .= '`' . $product[0] . '`' . $addWHERE;
	
	foreach($name as $key => $val) {
		foreach ($val as $v) {
			$base .= '`' . $key . '`="' .$v. '"' . $addOR;
		} 
	}
	
	if (strlen($base) < 35) {
		$complete = substr($base, 0, -7);
	} else {
		$complete = substr($base, 0, -4);
	}
	
	return $complete;
}
	
if (isset($_GET['panel']) || isset($_GET['destroy'])) {
	$panel = $_GET['panel'];
	$destroy = $_GET['destroy'];
	if ($destroy) session_unset();
	switch ($panel) {
		case 'مادربرد':
			echo $motherboard;
			break;
		case 'سی پی یو':
			echo $cpu;
			break;
		case 'گرافیک':
			echo 'We got no graphic for now.';
			break;	
		case 'مموری':
			echo $memory;
			break;
	}
} else if (isset($_GET['so_product']) && isset($_GET['so_category']) && isset($_GET['so_inpName'])) {
	$so_product = $_GET['so_product'];
	$so_category = $_GET['so_category'];
	$so_inpName = $_GET['so_inpName'];
	
	if (!empty($_SESSION['session_product'])) {
		if (in_array($so_product, $_SESSION['session_product']) == false) {
			$_SESSION['session_product'][] = $so_product;
		}
	} else {
		$_SESSION['session_product'][] = $so_product;
	}
	
	if (!empty($_SESSION['session_category'])) {
		if (in_array($so_category, $_SESSION['session_category']) == false) {
			$_SESSION['session_category'][] = $so_category;
		}
	} else {
		$_SESSION['session_category'][] = $so_category;
	}
	
	if (!empty($_SESSION['session_inpName']) && !empty($_SESSION['session_inpName'][$so_category])) {
		if (in_array($so_inpName, $_SESSION['session_inpName'][$so_category]) == false) {
			$_SESSION['session_inpName'][$so_category][] = $so_inpName;
		}
	} else {
		$_SESSION['session_inpName'][$so_category][] = $so_inpName;
	}
	
	$session_product = $_SESSION['session_product'];
	$session_category = $_SESSION['session_category'];
	$session_inpName = $_SESSION['session_inpName'];
	
	echo $query = getQuery($session_inpName,$session_product);


	echo '<br><hr><hr><hr>';
	print_r($session_inpName);
	echo '<hr><br>';
	print_r($session_category);
	echo '<hr><br>';
	print_r($session_product);
	echo '<br><br><br><br><hr>';

	
} else if (isset($_GET['rmv_product']) && isset($_GET['rmv_category']) && isset($_GET['rmv_inpName'])) {
	$rmv_product = $_GET['rmv_product'];
	$rmv_category = $_GET['rmv_category'];
	$rmv_inpName = $_GET['rmv_inpName'];
	
	if (!empty($_SESSION['session_product']) && count($_SESSION['session_product']) > 1) {
		if (in_array($rmv_product, $_SESSION['session_product']) == true) {
			array_splice($_SESSION['session_product'], array_search($rmv_product, $_SESSION['session_product']), 1);
		}
	}
	
	if (!empty($_SESSION['session_category'])) {
		if (in_array($rmv_category, $_SESSION['session_category']) == true) {
			array_splice($_SESSION['session_category'], array_search($rmv_category, $_SESSION['session_category']), 1);
		}
	}
	
	if (!empty($_SESSION['session_inpName']) && !empty($_SESSION['session_inpName'][$rmv_category])) {
		if (in_array($rmv_inpName, $_SESSION['session_inpName'][$rmv_category]) == true) {
			array_splice($_SESSION['session_inpName'][$rmv_category], array_search($rmv_inpName, $_SESSION['session_inpName'][$rmv_category]), 1);
		}
	}
	
	$session_product = $_SESSION['session_product'];
	$session_category = $_SESSION['session_category'];
	$session_inpName = $_SESSION['session_inpName'];
	
	echo $query = getQuery($session_inpName, $session_product);
	
	echo '<br><hr><hr><hr>';
	print_r($session_inpName);
	echo '<hr><br>';
	print_r($session_category);
	echo '<hr><br>';
	print_r($session_product);
	echo '<br><br><br><br><hr>';

	
} else {
	echo 'No GET variable is set right now.';
}

if(!empty($query)) {
	include('inc/products.php');
	$query_run = mysql_query($query);
	while ($row = mysql_fetch_assoc($query_run)) { ?>
		<div>
			<a href="product.php?id=<?php echo $row['id'] ?>" class="img">
			<img src="<?php echo $row['img_brand'] ?>" class="brand"/>
			<img src="<?php echo $row['img_1'] ?>" class="product"/>
			</a>
			<a href="product.php?id=<?php echo $row['id'] ?>" class="link"><?php echo $row['model']; ?></a>
			<table>
				<tr>
					<td>تومان&nbsp;</td><td class="price"><?php echo $row['price']; ?></td><th>&nbsp;قیمت</th>
				</tr>
				<tr>
					<td></td><td><?php echo $row['chipset']; ?></td><th>&nbsp;چیپست</th>
				</tr>
			</table>
			<a href="product.php?id=<?php echo $row['id'] ?>" class="button">مشاهده جزئیات</a>
		</div>
		<?php }
}
?>