var Element = function() {

};

Object.defineProperties(Element.prototype, {
	setInnerHTML: {
		value: function(id, className, classIndex, innerHTML) {
			var el;
			if (typeof id !== 'object') {
				el = document.getElementById(id);
			} else {
				el = document.getElementsByClassName(className)[classIndex];
			}
			el.innerHTML = innerHTML;
		}
	},
	setProperty: {
		value: function(id, className, classIndex, property, value) {
			var el;
			if (typeof id !== 'object') {
				el = document.getElementById(id);
			} else {
				el = document.getElementsByClassName(className)[classIndex];
			}
			if (el.hasOwnProperty(property)) {
				el[property] = value;
			}
		}
	},
	setStyle: {
		value: function() {
			if (arguments.length == 3 ) {
				var id = arguments[0],
					property = arguments[1],
					value = arguments[2];
			} else if(arguments.length == 4) {
				var className = arguments[0],
					classIndex = arguments[1],
					property = arguments[2],
					value = arguments[3];
			} else {
				return 'Either 3 or 4 arguments.';
			}
			var id = (typeof id==='string' && id.length > 0) ? id : undefined,
				property = (typeof property==='string') ? property : undefined,
				value = (typeof value==='string') ? value : undefined,
				className = (typeof className==='string') ? className : undefined,
				classIndex = (typeof classIndex==='number') ? classIndex : undefined;
				el,doneValue;
			
			if (id && (className || classIndex)) { return 'You can\'t set both Id and Class.'; }
			if (!property || !value) { return 'Property/Value have to be string.'; }
			
			if (id) {
				el = document.getElementById(id);
				if(!el) { return 'No element with this Id.'; }
			} else {
				el = document.getElementsByClassName(className)[parseInt(classIndex)];
				if(!el) { return 'No element with this Class.'; }
			}
			style = el.style;
			if (!(style.hasOwnProperty(property))) { return 'Property is not valid.'; }
			style.setProperty(property, value);
			doneValue = style.getPropertyValue(property);
			if (!doneValue) { return 'Value is not valid.'; }
		}
	},
	getHTML: {
		value: function(from) {
			var obj = {},
				point = from;
				
			obj.intel = '\
				<input type="button" value="-" id="c_socket_butt" class="cmm"><label for="c_socket_butt" class="title">”Êò  ”Ì ÅÌ ÌÊ</label><br>\
				<div id="c_socket"><br>\
					<input type="checkbox" value="2011"><label>2011</label><br>\
					<input type="checkbox" value="1366"><label>1366</label><br>\
					<input type="checkbox" value="1150"><label>1150</label><br>\
					<input type="checkbox" value="1155"><label>1155</label><br>\
					<input type="checkbox" value="775"><label>775</label>\
				</div>';
			obj.amd = '\
				<input type="button" value="-" id="c_socket_butt" class="cmm">\<label for="c_socket_butt" class="title">”Êò  ”Ì ÅÌ ÌÊ</label><br>\
				<div id="c_socket"><br>\
					<input type="checkbox" value="FM2+"><label>FM2+</label><br>\
					<input type="checkbox" value="FM2"><label>FM2</label><br>\
					<input type="checkbox" value="FM1"><label>FM1</label><br>\
					<input type="checkbox" value="AM3+"><label>AM3+</label><br>\
					<input type="checkbox" value="AM3"><label>AM3</label><br>\
					<input type="checkbox" value="AM2+"><label>AM2+</label><br>\
					<input type="checkbox" value="AM2"><label>AM2</label><br>\
					<input type="checkbox" value="BGA FT1"><label>BGA FT1</label>\
				</div>'
			return obj[point];
		}
	}
});
var Element = new Element();