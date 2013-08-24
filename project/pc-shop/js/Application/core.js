var core = (function () {
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
	},
	interModuleCommunicatation = true;
	
	function requestAccessModule(moduleName) {
		if (interModuleCommunicatation) {
			return this.modules[moduleName];
		}
	}
	function accessTo(one, two, three) {
		if (!two)   {  return access[one];  } 
		if (!three) {  return access[one][two];  } 
		return access[one][two][three];
	}
	
	function Core() {
		this.requestAccessModule = requestAccessModule;
		this.accessTo = accessTo;
	};
	Core.prototype = {
		modules : {},
		register : function(moduleID, creator){
			this.modules[moduleID] = {
				creator: creator,
				instance: null
			};
		},
		start : function(moduleID, sandbox) {
			var module = this.modules[moduleID];
			module.instance = new module.creator(sandbox);
			module.instance.init();
		},
		stop : function(moduleID) {
			var data = this.modules[moduleID];
			if (data.instance){
				data.instance.destroy();
				data.instance = null;
			}
		},
		startAll : function(sandbox) {
			for (var moduleID in this.modules){
				if (this.modules.hasOwnProperty(moduleID)){
					this.start(moduleID, sandbox);
				}
			}
		},
		stopAll : function() {
			for (var moduleID in this.modules){
				if (this.modules.hasOwnProperty(moduleID)){
					this.stop(moduleID);
				}
			}
		},
		createModule : function (str, fn, obj) {
			var construct = fn,
				that = this;
				
			construct.modules = {};
			construct.register = that.register,
			construct.start = that.start,
			construct.stop = that.stop,
			construct.startAll = that.startAll,
			construct.stopAll = that.stopAll,
			construct.createModule = that.createModule,
				
			construct.counter = {
				all : 1,
				section : 2
			};
			construct.handlers = {
				sb : obj,
				click : {},
				keyup : {},
				
				
				init : function() {
					for (var p in this) {
						//this[p].sb = obj;
					};
					delete this.init;
					return this;
				}
			}.init();
			construct.execute = function (evt, e) {
				var target = $(e.target),
				ee = {
					target : target,	
					tagName : target.prop('tagName'),
					type : target.attr('type'),
					id : target.attr('id'),
					data : target.data(),
					val : target.val(),
					preventDefault : e.preventDefault
				};
				var event = this.handlers[evt];
				
				for (var prop in event) {
					if (event.hasOwnProperty(prop)) {
						var inside = event[prop],
							fn , methods;
							
						for (var p in inside) {
							if (inside.hasOwnProperty(p)) {
								var target = inside[p];
								if (typeof target === 'object') {
									methods = target;
								} else if (typeof target === 'function') {
									methods = undefined;
									fn = target;
								}
							}
						}
						fn.call(this.handlers.sb, ee, methods, e);
					}
				}
			};
			construct.extend = function (evt, sec, fn, m) {
				var obj;
				obj = this.handlers[evt][sec] = {};
				obj.fn1 = fn;
				obj.methods = m || {};
			};
			construct.add = function(evt, sec, fn, m) {
				var name = 'fn' + this.counter.section;
				this.handlers[evt][sec][name] = fn
				this.counter.section++;
				for (var p in m) {
					this.handlers[evt][sec].methods[p] = m[p];
				}
			}
			construct.sb = obj;
			
			this.register(str, construct);
			//this.start(str, sandbox);
			//return this.modules[str].instance;
			return construct;
		}
	
	};
	
	return new Core();
}());


var SITE = {};

SITE.handy = (function() {

	function getWindowWidth() {
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

	function radioStar() {
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

	

	
	
	return {
		getWindowWidth : getWindowWidth,
		radioStar : radioStar
	};
	
}());



