SITE.core = (function () {
	var
	lib1 = $ || jQuery,
	lib2 = __,
	access = {
		x : lib1,
		ajax : lib1.ajax,
		ajaxDefaults : lib1.ajaxSetup,
		cookie : lib2.cookie,
		localStorage : localStorage,
		json : JSON
	};
	
	function accessTo(one, two, three) {
		if (!two)   {  return access[one];  } 
		if (!three) {  return access[one][two];  } 
		return access[one][two][three];
	}
	
	function Core() {
		this.accessTo = accessTo;
	};
	
	
	
	Core.prototype = {
		// From the old days...
	};
	return new Core();
}());