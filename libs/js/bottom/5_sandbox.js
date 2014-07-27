var sandbox = (function (appCore) {
	var core = appCore,
		storage = core.accessTo('localStorage'),
		json = core.accessTo('json'),
		ajax = core.accessTo('ajax'),
		$ = core.accessTo('x');
	
	
	var ajaxInterface = function() {
		function clear() {
			container = undefined;
			overlay = undefined;
		}
		function remove(v) {
			removeElement(v);
			removeElement(ajaxWrap);
		}
		
		function beforeSend() {          // (xhr, ajaxSettings)
			var height;
			if (overlay) {
				height = overlay.css('height');
			} else if (container) {
				height = container.css('height');
			}
			
			ajaxWrap.css('height', height);
			ajaxWrap.append(ajaxLoading);
			
			if (overlay) {
				overlay.prepend(ajaxWrap)
			} else if (container) {
				container.prepend(ajaxWrap);
			}
		}
		function done(data, stat, xhr) {
			remove(ajaxLoading);
			container.html(data);
			clear();
		}
		function fail() {                // ( xhr, textStatus, errorThrown )
			removeElement(ajaxLoading);
			ajaxWrap.append(ajaxError);
			
			
			setTimeout(function() {
				remove(ajaxError);
				clear();
			} , 1000);
		}
		
		
		var container, overlay, request,
			ajaxWrap, ajaxLoading, ajaxError;
		
		function handle(o) {
			if (o.container) {  container = select(o.container);  }
			if (o.overlay)   {  overlay = select(o.overlay);      }
			
			
			if ( empty(container) )  {  alert('No container for response.');  }
			
			var setting = {
				type : o.type,
				url : o.url,
				data : o.data || null,
				dataType : 'html'
			};
			
			if (o.beforeSend) {
				setting.beforeSend = o.beforeSend;
			} else {
				setting.beforeSend = beforeSend;
			}
			
			before(o.ajaxEl);
			
			request = ajax(setting);
			
			after(o.done, o.fail);
		}
		function get(o) {
			o.type = 'GET';
			handle(o);
		}
		function post(o) {
			o.type = 'POST';
			handle(o);
		}
		
		
		// Callbacks
		function before(el) {
			if (el) {
				if (el.loading) { ajaxLoading = el.loading; }
				if (el.error)   { ajaxError = el.error;     }
			} else  {
				ajaxLoading = defEl.loading;
				ajaxError = defEl.error;
			}
		}
		function after(success, err) {
			if (success) {
				request.done(success);
			} else {
				request.done(done);
			}
			
			if (err) {
				request.fail(err);
			} else {
				request.fail(fail);
			}
		}
		
		
		
		// Default loading and error
		ajaxWrap = createWrap();
		function createWrap() {
			var div = createElement('div');	
			div.attr('id', 'ajax-loading');
			div.css({
				width : '100%',
				height : null,
				position : 'absolute',
				backgroundColor : 'rgba(0,0,0, 0.74)'
			})
			return div;
		}
		
		
		var defEl = {
			loading : createLoading(),
			error : createError()
		};
		function createLoading() {
			var div = createElement('div');
			div.attr('id', 'loading');
			div.css({
				marginTop: '7.5%',
				marginRight: '35.5%',
				direction : 'rtl'
			});

			var p = createElement('p');
			p.css ({
				fontSize: '16px',
				color: 'white',
				marginRight : '9%'
			});
			p.text('در حال دريافت اطلاعات...');
			
			var img = createElement('img');
			img.attr('src', 'images/ajax/ajax-loader.gif');
			img.css({
				marginRight : '17%',
				marginBottom : '4%'
			});
			
			div.append(img);
			div.append(p);
			return div;
			
			/*
			var div = createElement('div');
			div.attr('id', 'loading');
			div.css({
				width : '100%',
				height : '100%',
				backgroundImage : 'url("https://localhost/project/pc-shop/images/ajax/ajax-loader.gif")',
				backgroundPositionX : '50%',
				backgroundPositionY : '10%',
				backgroundRepeat : 'no-repeat'
			});

			var p = createElement('p');
			p.css ({
				position: 'absolute',
				fontSize: '16px',
				color: 'white',
				left: '42%',
				top: '21%'
			});
			p.html('...در حال دريافت اطلاعات');
			
			div.append(p);
			return div;
			*/
		}
		function createError() {
			var div = createElement('div');	
			div.attr('id', 'error');
			div.css({
				marginTop: '7.5%',
				marginRight: '35.5%',
				direction : 'rtl'
			});
			var p = createElement('p');
			p.css({
				fontSize: '16px',
				color: 'white'
			});
			p.text('خطا در ارتباط با سرور، دوباره امتحان کنید.');
			
			var img = createElement('img');
			img.attr('src', 'images/ajax/ajax-error.png');
			img.css({
				marginRight : '17%',
				marginBottom : '4%'
			});
			

			div.append(img);
			div.append(p);
			return  div;
		}
		
		
		
		return {
			get : get,
			post : post
		};
		
		// textStatus -->  "success", "notmodified", "error", "timeout", "abort", "parsererror"
		// start       beforeSend (xhr, ajaxSettings)
		// success     .don       ( data, textStatus, xhr )
		// error       .fail      ( xhr, textStatus, errorThrown )
		// complete    .always    ( xhr, textStatus )
	}();
	
	
	
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
	function empty(el) {
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
	function execute(str, method, args) {
		var arr = str.split('.'),
			current = accessModule(arr[0]);
		for (var i=0; i<arr.length;i++) {
			if (i !== 0) {
				current = current[arr[i]];
			}
		}
		return current[method](args);
	}
	function accessModule(moduleName) {
		return core.requestAccessModule(moduleName);
	}
	function select(selector, context) {
		if (selector) {
			return new Element( $(selector, context) );
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
		this.empty = empty;
		this.createElement = createElement;
		this.removeElement = removeElement;
		this.ajaxGet = ajaxInterface.get;
		this.ajaxPost = ajaxInterface.post;
		this.jsonParse = jsonParse;
		this.jsonString = jsonString;
		this.error = error;
		this.getCookie = getCookie;
		this.setCookie = setCookie;
		this.execute = execute;
		this.getLocalStorage = getLocalStorage;
		this.addEvent = addEvent;
		this.select = select;
	};
	
	return new Sandbox();
}(core));

/*
	Only the sandbox knows which application core is being used.
	Modules can rely on the methods to always be here.
	Knows what the modules are allowed to access and do on the framework.
	
	Sandbox Jobs:
	
	Consistency
	– Interface must be dependable
	
	Security
	– Determine which parts of the framework a module can access
	
	Communication
	– Translate module requests into core actions
 */