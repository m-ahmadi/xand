var Toggle = function() {
};

Object.defineProperties(Toggle.prototype, {
	minMax: {
		value: function(buttonId, elementId, elMinValue, elSMinProperty, elSMinValue, elMaxValue, elSMaxProperty, elSMaxValue) {
			for(var i=0;i<arguments.length;i++) {
				if (typeof arguments[i] !== 'string') arguments[i] = undefined;
			}
			if (!buttonId || !elementId) return 'Argumen omitted or not a string.';
			
			var button = document.getElementById(buttonId),
				el = document.getElementById(elementId),
				style,value;
				
			if (!button && !el) return 'No such ID(s):\n'+ buttonId +'\n'+ elementId;
			if (!button) return 'No such ID(s):\n'+ buttonId;
			if (!el) return 'No such ID(s):\n'+ elementId;
			
			style = el.style;
			buttonValue = button.value;
			if (!buttonValue) return 'Button with the ID: "'+ buttonId + '" has no value attribiue.';
			
			if (buttonValue == elMinValue) {
				style.setProperty(elSMinProperty, elSMinValue);
				button.value = elMaxValue;
			} else if (buttonValue == elMaxValue) {
				style.setProperty(elSMaxProperty, elSMaxValue);
				button.value = elMinValue;
			}
		}
	},
	display: {
		value: function(buttonId, elementId) {
			this.minMax(buttonId, elementId, '+', 'display', 'inline', '-', 'display', 'none');
		}
	}
});
var Toggle = new Toggle();