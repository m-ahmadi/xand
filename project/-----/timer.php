<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
<style>
.box {
  background:red;
  float:left;
  font-size:20px;
  color:white;
}
button {
  clear:both;
}
</style>
</head>
<body>
	<div class="box">
		<p>HELLO JEREMY, HOW <b><u>YOU</u></b> DOIN?</p>
	</div>
	
	<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
	<button value="b1">GROW</button>
	<button value="b2">SHRINK</button>
	
<script type="text/javascript">
var div = document.getElementsByClassName('box')[0],
speed = .5,
i = 0,
padding = 0,

grow = function() {
	console.log('doSomething executed ' + (i + 1) + ' time');
	div.style.padding = padding + 'px';
	i++;
	padding++;

	if (i < 200) {
		setTimeout(grow, speed);
	}
},

shrink = function() {
	console.log('doSomething executed ' + (i + 1) + ' time');
	div.style.padding = padding + 'px';
	i--;
	padding--;
	
	if (i >= 0) {
		setTimeout(shrink, speed);
	}
};

var fn = function(e) {
	target = e.target;
	
	if (target.tagName.toUpperCase() === 'BUTTON') {
		value = target.value;
		if (value == 'b1') {
			setTimeout(grow, speed);
			i = 0;
		}
		if (value == 'b2') {
			setTimeout(shrink, speed);
			i = 200;
		}
	}
}

document.addEventListener('click', fn, false)
</script>
</body>
</html>