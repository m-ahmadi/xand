<?php require_once(LIB_PHP . 'initialize.php'); ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title><?php echo $page_title; ?></title>
	<link rel="stylesheet" type="text/css" href="<?php echo STYLE_GENERATOR_PATH.$page; ?>">
	<script type="text/javascript" src="<?php echo HEAD_SCRIPT_GENERATOR_PATH.$page; ?>"></script>
</head>

<body>

<div id="wrapper">

<noscript><div>.برای استفاده از همه ی امکانات سایت، جاوا اسکریپت مرورگر را فعال کنید</div><br><br></noscript>
<header id="header">
	<nav id="main_nav">
		<ul>
			<li><a href="first.php"  class="nav_butt gradgreen <?php if ($page == 'home')   {echo "current";} ?>">صفحه اول</a></li>
			<li><a href="shop.php"   class="nav_butt gradgreen <?php if ($page == 'shop')   {echo "current";} ?>">فروشگاه کامپیوتر</a></li>
			<li><a href="review.php" class="nav_butt gradblue  <?php if ($page == 'review') {echo "current";} ?>">بازدهی و کارایی</a></li>
			<li><a href="#         " class="nav_butt gradgreen <?php if ($page == 'review') {echo "current";} ?>">ویدئو</a></li>
		</ul>
	</nav>
	
	<div id="my-computer">
		<button type="button" id="mc_button" value="mc_min">کامپیوتر من</button>
		<div id="mc-open"></div>
	</div>
	
	<?php
	global $session, $user;
	if ( $session->is_logged_in() ) {
		$id = $session->user_id;
		$user = $user->find_by_id($id);
		$name = $user->fullname();
		$msg = $name;
	
	} else {
	
		$msg = 'ورود به سایت';
		
	
		
	}
	?>
	
	<div id="login_register" class="lr">
		<button type="button" class="login_register" value="login_min" id="login_button"><?php echo $msg; ?></button>
		
		
		
		<div id="login_open" class="lr">
			<div class="arrow_login"></div>
		
			<div id="box-open-wrap">
				
				<?php
				/*
				if ( $session->is_logged_in() ) {
					echo 
					 '<div id="profile">'
					.	$user->full_name().'<br>'
					.	'<a href="#">پروفایل من</a><br>'
					.	'<a href="#">خرید های من</a><br>'
					.'</div>';
					
					
				} else { // Not Logged-In
					$content = file_get_contents('../zlayouts/header/login_register/login.htm');
					echo $content;
					echo script('../zlayouts/header/js/application/modules/header/login.ajax.js');
				}
				*/
				?>
				
				
			</div>
			
			<iframe name="log-in-out-iframe" id="log-in-out-iframe" width="0" height="0" sandbox="allow-same-origin allow-scripts" seamless></iframe>
		</div>
		
	</div>
	
		
	
	
	<div id="shopping-cart">
		<button type="button" class="special-sCart-butt" value="sCart_min" id="sCart_button">
			<span id="empty">خالی</span>
		</button>
		
		<div id="sCart_open">
			<div class="arrow_sCart"></div>
			<div id="cart">
				<p>سبد خريد خالي است</p>
			</div>
		</div>
	</div>
	
</header>


<?php //readfile(LIB_HTML . 'popups.htm'); ?>
<div id="popups">
	<div id="popup-link"></div>
	<div id="popup-image"></div>
	<?php readfile(LIB_HTML . 'popup-login.htm'); ?>
	<iframe name="popup_login_iframe" id="popup_login_iframe" width="0" height="0" sandbox="allow-same-origin allow-scripts" seamless></iframe>
</div>

<div id="content" class="content">