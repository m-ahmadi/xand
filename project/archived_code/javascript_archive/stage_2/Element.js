/*******************************
 JavaScript by Mohammad Ahmadi.
********************************/
var Element = function() {

};

p.prototype.Element = (function() {

	function setInnerHTML(id, className, classIndex, innerHTML) {
		var el;
		if (typeof id !== 'object') {
			el = document.getElementById(id);
		} else {
			el = document.getElementsByClassName(className)[classIndex];
		}
		el.innerHTML = innerHTML;
	}

	function setProperty() {
		var id, property, value, className, classIndex, el;
		if (arguments.length == 3 ) {
			id = (typeof arguments[0]==='string' && arguments[0].length > 0) ? arguments[0] : undefined;
			property = (typeof arguments[1]==='string') ? arguments[1] : undefined;
			value = (typeof arguments[2]!=='undefined') ? arguments[2] : undefined;
		} else if(arguments.length == 4) {
			className = (typeof arguments[0]==='string' && arguments[0].length > 0) ? arguments[0] : undefined;
			classIndex = (typeof arguments[1]==='number') ? arguments[1] : undefined;
			property = (typeof arguments[2]==='string') ? arguments[2] : undefined;
			value = (typeof arguments[3]!=='undefined') ? arguments[3] : undefined;
			
		} else {throw new Error('Either 3 or 4 arguments.'); return false;}
		
		if (id && (className || classIndex)) {throw new Error('You can\'t set both Id and Class.'); return false;}
		if (!property) {throw new Error('Property has to be a string.'); return false;}
		
		if (id) {
			el = document.getElementById(id);
			if(!el) {throw new Error('No element with this id.'); return false;}
		} else if (className && classIndex){
			el = document.getElementsByClassName(className)[parseInt(classIndex)];
			if(!el) {throw new Error('No element with this class and index.'); return false; }
		} else {
			throw new Error('Id/class is not valid.'); return false; 
		}
		//if (!(el.hasOwnProperty(property))) {throw new Error('Property is not valid.'); return false;}
		/*	
			I don't know why Firefox  does this:
			The element has a property named checked but when you run hasOwnProperty() on it It'll always return false;
		*/
		if (el[property] = value) {return true;}
		
	}

	function setStyle() {
		var id, property, value, className, classIndex, el, doneValue;
		if (arguments.length == 3 ) {
			id = (typeof arguments[0]==='string' && arguments[0].length > 0) ? arguments[0] : undefined;
			property = (typeof arguments[1]==='string') ? arguments[1] : undefined;
			value = (typeof arguments[2]!=='undefined') ? arguments[2] : undefined;
		} else if(arguments.length == 4) {
			className = (typeof arguments[0]==='string' && arguments[0].length > 0) ? arguments[0] : undefined;
			classIndex = (typeof arguments[1]==='number') ? arguments[1] : undefined;
			property = (typeof arguments[2]==='string') ? arguments[2] : undefined;
			value = (typeof arguments[3]!=='undefined') ? arguments[3] : undefined;
			
		} else {throw new Error('Either 3 or 4 arguments.'); return false;}
			
		if (id && (className || classIndex)) {throw new Error('You can\'t set both Id and Class.'); return false;}
		if (!property || !value) {throw new Error('Property/Value has to be a string.'); return false;}
		
		if (id) {
			el = document.getElementById(id);
			if(!el) {throw new Error('No element with this id.'); return false;}
		} else if (className && typeof classIndex === 'number'){
			el = document.getElementsByClassName(className)[classIndex];
			if(!el) {throw new Error('No element with this class.'); return false;}
		} else {
			throw new Error('Id/class is not valid.'); return false;
		}
		style = el.style;
		if (!(style.hasOwnProperty(property))) {throw new Error('Property is not valid.'); return false;}
		style.setProperty(property, value);
		doneValue = style.getPropertyValue(property);
		if (!doneValue) {throw new Error('Value is not valid.'); return false;} else {return true;}
	}

	function getHTML(from) {
		var obj = {},
			point = from;
			
		obj.intel = '\
			<input type="button" value="-" id="c_socket_butt" class="cmm"><label for="c_socket_butt" class="title">'+sooketcpu+'</label><br>\
			<div id="c_socket"><br>\
				<input type="checkbox" value="2011"><label>2011</label><br>\
				<input type="checkbox" value="1366"><label>1366</label><br>\
				<input type="checkbox" value="1150"><label>1150</label><br>\
				<input type="checkbox" value="1155"><label>1155</label><br>\
				<input type="checkbox" value="775"><label>775</label>\
			</div>';
		obj.amd = '\
			<input type="button" value="-" id="c_socket_butt" class="cmm">\<label for="c_socket_butt" class="title">'+sooketcpu+'</label><br>\
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
	
	return {
		setInnerHTML : setInnerHTML,
		setProperty : setProperty,
		setStyle : setStyle,
		getHTML : getHTML
	};
	
}());

//p.Element = new Element();
p = new p();