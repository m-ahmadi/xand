SITE.sandbox = (function (appCore) {
	var core = appCore,
		storage = core.accessTo('localStorage'),
		json = core.accessTo('json'),
		$ = core.accessTo('x');
	
	function namespace(name) {
		var parts = name.split('.'),
			current = app;	
		for (var i = 0; i < parts.length; i++) {
			if ( !current[parts[i]] ) {
				current[parts[i]] = {};
			}
			current = current[parts[i]];
		}
	};
	function isEmpty(el) {
		if (el) {
			if (el.length === 0) {
				return true;
			} else {
				return false;
			}
		}
	}
	function createElement(str) {
		var arr = $.parseHTML('<'+ str +' />');
		return select(arr);
	}
	function removeElement(str) {
		select(str).remove();
	}
	function jsonParse(str) {
		return json.parse(str);
	}
	function jsonString(obj) {
		return json.stringify(obj);
	}
	function setCookie(name, value, hourToLive, path) {
		storage.cookie.set(name, value, hourToLive, path);
	}
	function getCookie(name) {
		storage.cookie.get(name);
	}
	function getLocalStorage() {
		return storage;
	}
	function error(str) {
		throw new Error(str);
	}
	function select(selector) {
		if (selector) {
			return new Element( $(selector) );
		}
	}
	function Element(set) {
		if (set.length > 1) {
			
			// Add custom function
			set.applyToAll = function() {
				var fn = arguments[0],
					arg = arguments[1];
					
				 	
				for (var i=0; i<set.length; i++) {
					var select = set.eq(i);
					
					if (typeof arg === 'object') {
						select[fn](arg);
					} else {
						select[fn](arguments[1], arguments[2], arguments[3]);
					}
				}
			}
			
		}
		
		return set;
	}
	function addEvent(el, evt, fn) {
		$(el).on(evt, fn);
	}
	
	
	function Sandbox() {
		this.namespace = namespace;
		this.isEmpty = isEmpty;
		this.createElement = createElement;
		this.removeElement = removeElement;
		
		this.jsonParse = jsonParse;
		this.jsonString = jsonString;
		this.error = error;
		this.getCookie = getCookie;
		this.setCookie = setCookie;
		this.getLocalStorage = getLocalStorage;
		this.addEvent = addEvent;
		this.select = select;
	};
	
	return new Sandbox();
}(SITE.core));

//var $ = SITE.sandbox.select;