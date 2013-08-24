/*******************************
 JavaScript by Mohammad Ahmadi.
********************************/
// var Event = function() {

// };

p.prototype.Event = (function() {

	var addEvent = (function() {
		if (typeof addEventListener !== 'undefined') {
			return function(obj, evt, fn) {
				obj.addEventListener(evt, fn, false);
			};
		} else {
			return function(obj, evt, fn) {
				obj.attachEvent("on" + evt, fn);
			};
		}
	}());
	
	var removeEvent = (function() {
		if (typeof removeEventListener !== 'undefined') {
			return function(obj, evt, fn) {
				obj.removeEventListener(evt, fn, false);
			};
		} else {
			return function(obj, evt, fn) {
				obj.detachEvent("on" + evt, fn);
			};
		}
	}());

	var getTarget = (function() {
		if (typeof addEventListener !== 'undefined') {
			return function(event) {
				return event.target;
			};
		} else {
			return function(event) {
				return event.srcElement;
			};
		}
	}());
	
	var getButton = (function() {
		if (typeof addEventListener !== 'undefined') {
			return function(event) {
				return event.button;
			};
		} else {
			return function(event) {
				var IEButton = event.button, button=undefined;
				if (IEButton === 1) {button = 0;} else    // left
				if (IEButton === 4) {button = 1;} else    // middle
				if (IEButton === 2) {button = 2;}         // right
				return button;
			};
		}
	}());
	
	var getKeyCode = (function() {
		if (typeof addEventListener !== 'undefined') {
			return function(event) {
				return event.charCode;
			};
		} else {
			return function(event) {
				return event.keyCode;
			};
		}
	}());

	var preventDefault = (function() {
		if (typeof addEventListener !== 'undefined') {
			return function(event) {
				event.preventDefault();
			};
		} else {
			return function(event) {
				event.returnValue = false;
			};
		}
	}());
	
	return {
		addEvent : addEvent,
		removeEvent : removeEvent,
		getTarget : getTarget,
		getButton : getButton,
		getKeyCode : getKeyCode,
		preventDefault : preventDefault
	};
	
}());

//p.Event = new Event();