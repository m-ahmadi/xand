/*******************************
 JavaScript by Mohammad Ahmadi.
********************************/
// var Ajax = function() {
	// this.prop = 'Mohammad';
// };

p.prototype.Ajax = (function() {
	// Only methods have access to this.prop unless we pass it here through argument.
	var prop = 'mohammad';
	
	var xhr = createXHR();
	
	function createXHR() {
		if (typeof XMLHttpRequest !== "undefined") {
			return new XMLHttpRequest();
		} else {
			var versions = [ "MSXML2.XmlHttp.6.0",
				"MSXML2.XmlHttp.3.0" ];

			for (var i = 0; i < versions.length; i++) {
				try {
					var xhr = new ActiveXObject(versions[i]);
					return xhr;
				} catch (error) {
					// do nothing
				}
			}
		}

		alert("Your browser does not support XmlHttp");

		return null;
	}
	
	function myGetRequest(url, elementId, callback) {
		var	el = document.getElementById(elementId);
		xhr.open('GET',url, true);
		
		if (el) {
			xhr.onreadystatechange = function(){
				if (xhr.readyState === 3) {whileWaiting(el, true);} else {whileWaiting(el, false);}
				
				if (xhr.readyState === 4) {
					var status = xhr.status;
					
					if ((status >= 200 && status < 300) || status === 304) {
						if (callback) {callback(xhr.responseText);} else {el.innerHTML = xhr.responseText;}
					} else {alert("An error occurred");}
				}
			}
		} else {alert('Cannot find a container for response.');}
		
		xhr.send(null);
	}
	
	function myPostRequest(url, data, elementId, callback) {
		var	el = document.getElementById(elementId);
		
		xhr.open('POST', url);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		if (el) {
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 3) {whileWaiting(el, true);} else {whileWaiting(el, false);}
				
				if (xhr.readyState === 4) {
					var status = xhr.status;

					if ((status >= 200 && status < 300) || status === 304) {
						if (callback) {callback(xhr.responseText);} else {el.innerHTML = xhr.responseText;}
						
					} else {alert("An error occurred");}
				}
			};
		} else {alert('Cannot find a container for response.');}
		
		xhr.send(data);
	}
	
	function whileWaiting(el, state3) {
		style = el.style;
		if (state3) {
			style.backgroundImage = "url('http://localhost/project/test/images/ajax-loader.gif')";
			style.backgroundRepeat = 'no-repeat';
			style.backgroundPosition = 'center';
			style.opacity = 0.4;
		} else {
			style.backgroundImage = 'none'; el.style.opacity = 1;
		}
		// or we could create a div element and set it like absolute width and height 100% background transparent
		// and set it's background-image to gif.png
	}
	
	
	
	
	
	
	
	
	function openAndSend(type, url, data, callback, contentType) {
		xhr.open(type, url);
		
		if (contentType) {
			xhr.setRequestHeader("Content-Type", contentType);
		}

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				var status = xhr.status;

				if ((status >= 200 && status < 300) || status === 304) {
					callback(xhr.responseText);
				} else {
					alert("An error occurred");
				}
			}
		};

		xhr.send(data);

	}
	
	function makeGetRequest(url, callback) {
		this.openAndSend("GET", url, null, callback);
	}
	
	function getRequestBody(form) {
		var pieces = [];
		var elements = form.elements;

		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			var name = encodeURIComponent(element.name);
			var value = encodeURIComponent(element.value);
			
			pieces.push(name + "=" + value);
		}

		return pieces.join("&");
	}
	
	function postFromForm(url, form, callback) {
		this.openAndSend("POST", url, this.getRequestBody(form), callback,
			"application/x-www-form-urlencoded");
	}
	
	function makePostRequest(url, data, callback) {
		this.openAndSend("POST", url, data, callback);
	}
	
	return {
		get : myGetRequest,
		post : myPostRequest
		//makeGetRequest : makeGetRequest,
		//postFromForm : postFromForm
	};
	
}());

//p.Ajax = new Ajax();