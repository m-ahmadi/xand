
SITE.pages.general.getWindowWidth = function() {
	var lastTime = undefined,
		i = false;
		
	window.scrollTo(0,0);
	while (i===false) {
		window.scrollBy(1,0);
		if (lastTime == window.pageXOffset) {i = true;}
		else {lastTime = window.pageXOffset;}
	} 
	theWidth = document.body.clientWidth + lastTime;
	return theWidth;
}

SITE.pages.general.radioStar = function() {
	var inps = document.getElementsByTagName('input'),
		length = inps.length,
		radioStar;
		
	for (var i=0;i<length;i++) {
	  var inp = inps[i];
	  if (inp.type === 'radio' && inp.checked === true) {
		radioStar = inp;
	  }
	}
	return radioStar;
}