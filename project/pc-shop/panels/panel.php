<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="style.css"></link>
	<title>پنل</title>
</head>
<body>
	<div id="wrap">
		<h1>طراحی قسمت جزئیات صفحه محصول</h1>
		<form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
			<label>اسم سکشن</label><input type="text">
			<br />
			<label>تعداد سکشن</label>
			<select id="sec-num">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
			
			<label>تعداد قسمت</label>
			<select id="sec-num">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
			<input type="checkbox">
			<input type="radio">
			<input type="submit" value="دکمه">
			
		
		</form>
	</div>
</body>
</html>