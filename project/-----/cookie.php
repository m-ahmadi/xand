<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
<style>
.myDiv {
  width:300px;
  height:300px;
  background:pink;
}
select {
  font-family:tahoma;
}

</style>
</head>
<body>
	<select name="" id="select">
		<option value="view">بازدید</option>
		<option value="price">فیمت</option>
		<option value="rate">امتیاز کاربران</option>
		<option value="year">تاریخ انتشار</option>
		<option value="available">موحود</option>
	</select>
	<select name="" id="">
		<option value="">نرولی</option>
		<option value="">صعودی</option>
	</select>
	<div class="myDiv">
	</div>
<script type="text/javascript" src="test/myObject.js"></script>
<script type="text/javascript">
var select = document.getElementById('select');

var fn = function() {
	alert('f');
}
event.addEvent(select, 'change', fn , false);
</script>
</body>
</html>