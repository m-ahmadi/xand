var Event = function() {
};

Object.defineProperties(Event.prototype, {
	addEvent: {
		value: (function() {
			if (typeof addEventListener !== "undefined") {
				return function(obj, evt, fn) {
					obj.addEventListener(evt, fn, false);
				};
			} else {
				return function(obj, evt, fn) {
					obj.attachEvent("on" + evt, fn);
				};
			}
		}())
	},
	removeEvent: {
		value: (function() {
			if (typeof removeEventListener !== "undefined") {
				return function(obj, evt, fn) {
					obj.removeEventListener(evt, fn, false);
				};
			} else {
				return function(obj, evt, fn) {
					obj.detachEvent("on" + evt, fn);
				};
			}
		}())
	},
	getTarget: {
		value: (function() {
			if (typeof addEventListener !== "undefined") {
				return function(event) {
					return event.target;
				};
			} else {
				return function(event) {
					return event.srcElement;
				};
			}
		}())
	},
	preventDefault: {
		value: (function() {
			if (typeof addEventListener !== "undefined") {
				return function(event) {
					event.preventDefault();
				};
			} else {
				return function(event) {
					event.returnValue = false;
				};
			}
		}())
	}
});
var Event = new Event();