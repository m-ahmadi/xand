<?php
require_once('../../libs/php/initialize.php');

include_layout('header.php', 'shop', 'فروشگاه کامپیوتر');

?>
<div id="shop">
	<nav id="shop-nav">
		<ul>
			<li><a class="shop-nav-butt gradblack" title="Motherboard"     data-product="motherboard">مادربرد</a></li>
			<li><a class="shop-nav-butt gradblack" title="CPU"             data-product="cpu"        >پردازنده</a></li>
			<li><a class="shop-nav-butt gradblack" title="Graphic Card"    data-product="graphic"    >گرافیک</a></li>
			<li><a class="shop-nav-butt gradblack" title="RAM"             data-product="memory"     >رم</a></li>
			<li><a class="shop-nav-butt gradblack" title="Hard Disk Drive" data-product="hard"       >هارد دیسک</a></li>
			<li><a class="shop-nav-butt gradblack" title="Power Supply"    data-product="power"      >پاور</a></li>
			<li><a class="shop-nav-butt gradblack" title="Optical Drive"   data-product="optdrive"   >دیسک درایو</a></li>
			<li><a class="shop-nav-butt gradblack" title="Heat-sink"       data-product="heat-sink"  >فن, هیتسینک</a></li>
			<li><a class="shop-nav-butt gradblack" title="Chassis"         data-product="chassis"    >کیس</a></li>
			<li><a class="shop-nav-butt gradblack" title="Monitor"         data-product="monitor"    >مانیتور</a></li>
			<li><a class="shop-nav-butt gradblack" title="Keyboard"        data-product="keyboard"   >کیبرد</a></li>
			<li><a class="shop-nav-butt gradblack" title="Mouse"           data-product="mouse"      >موس</a></li>
			<li><a class="shop-nav-butt gradblack" title="Speaker"         data-product="speaker"    >اسپیکر</a></li>
			<li><a class="shop-nav-butt gradblack" title="Printer"         data-product="printer"    >پرینتر</a></li>
			<li><a class="shop-nav-butt gradblack" title="Scanner"         data-product="scanner"    >اسکنر</a></li>
			<li><a class="shop-nav-butt gradblack" title="Flash Memory"    data-product="flash"      >فلش مموری</a></li>
			<li><a class="shop-nav-butt gradblack" title="Thermal Paste"   data-product="paste"      >خمیر سیلیکن</a></li>
			<li><a class="shop-nav-butt gradblack" title="Cable"           data-product="cable"      >کابل</a></li>
			<li><a class="shop-nav-butt gradblack" title="Reader"          data-product="reader"     >مموری ریدر</a></li>
			
		</ul>
	</nav>
	
	<div id="products_and_options">
		
			<h1 style="direction:rtl;height:318px;">پنل اصلی فروشگاه</h1>
			
			<div id="products"></div>
		
	</div>
</div>


<?php
//include_layout('footer.php');
 ?>