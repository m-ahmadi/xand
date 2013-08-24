<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
<style>
.products div {
  background:#F2F2F2;
  width:250px;
  border:1px solid white;
  box-shadow:0 0 1px 1px #999;
  overflow:hidden;
}
.products div img.brand {
  margin:10px 0 0 55px;
  float:left;
}
.products div img.product {
  border:1px solid #dedede;
  box-shadow:0 0 50px 1px rgba(0,0,0,.1);
  width: 150px;
  heigth: 150px;
  margin:5px 45px 10px 10px;
  float:right;
}

.products div a {
  float:right;
  margin-right:10px;
  color:#FF3385;
  text-decoration:none;
  font-weight:bold;
}
.products div a:hover{
  color:black
}

.products div table {
  float:right;
  clear:both;
  margin:10px 10px 0 0;
}
.products div table td {
  background:#FFB2B2;
  text-align:right;
}
.products div table td.bold {
  font-weight:bold;
}
.products div table td span.green {
  color:green;
  font-weight:bold;
}
body {
  font-family: tahoma;
}


</style>
</head>
<body>
	<div class="products">
		<div>
			<img src="Gigabyte LOGO.gif" class="brand"/>
			<img src="test/images/m.jpg" class="product"/>
			<a href="">مشاهده جزئیات</a>
			<table border="0">
				<tr>
					<td>تومان <span class="green">s</span></td><td class="bold">قیمت</td>
				</tr>
				<tr>
					<td></td><td>چیپست</td>
				</tr>
			</table>
		</div>
	</div>
</body>
</html>