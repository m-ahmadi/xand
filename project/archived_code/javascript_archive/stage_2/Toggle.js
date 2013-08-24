/*******************************
 JavaScript by Mohammad Ahmadi.
********************************/
// var Toggle = function() {

// };

p.prototype.Toggle = (function() {

	function minMax(buttonId, elementId, elMinValue, elSMinProperty, elSMinValue, elMaxValue, elSMaxProperty, elSMaxValue) {
		for(var i=0;i<arguments.length;i++) {
			if (typeof arguments[i] !== 'string') arguments[i] = undefined;
		}
		if (!buttonId || !elementId) {throw new Error('Argument omitted or not a string.'); return false;}
		
		var button = document.getElementById(buttonId),
			el = document.getElementById(elementId),
			style,value;
			
		if (!button && !el) {throw new Error('No such ID(s):\n'+ buttonId +'\n'+ elementId); return false;}
		if (!button) {throw new Error('No such ID(s):\n'+ buttonId); return false;}
		if (!el) {throw new Error('No such ID(s):\n'+ elementId); return false;}
		
		style = el.style;
		buttonValue = button.value;
		if (!buttonValue) {throw new Error('Button with the ID: "'+ buttonId + '" has no value attribiue.'); return false;}
		
		if (buttonValue == elMinValue) {
			style.setProperty(elSMinProperty, elSMinValue);
			//$(el).fadeIn('fast');
			button.value = elMaxValue;
		} else if (buttonValue == elMaxValue) {
			style.setProperty(elSMaxProperty, elSMaxValue);
			//$(el).fadeOut('fast');
			button.value = elMinValue;
		}
	}
	
	function display(buttonId, elementId) {
		this.minMax(buttonId, elementId, '+', 'display', 'inline', '-', 'display', 'none');
	}
	
	return {
		minMax : minMax,
		display : display
	}
}());

//p.Toggle = new Toggle();
