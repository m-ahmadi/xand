var Ajax = function() {
	//this.xhr = this.createXHR();
};
Object.defineProperties(Ajax.prototype, {

	createXHR: {
		value: function() {
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
	},
	
	myGetRequest: {
		value: function(url, elementId) {
			if (typeof url !== 'undefined') {
				var xhr = this.createXHR();
				xhr.open('GET',url, true);
				if (elementId) {
					var	el = document.getElementById(elementId);
					xhr.onreadystatechange = function(){
						if (xhr.readyState == 4 && xhr.status == 200) {
							el.innerHTML = xhr.responseText;
						}
					}
				}
				xhr.send(null);
			}
		}
	},
	
	openAndSend: {
		value: function(type, url, data, callback, contentType) {
			var xhr = this.createXHR();

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
	},
	
	makeGetRequest: {
		value: function(url, callback) {
			this.openAndSend("GET", url, null, callback);
		}
	},
	
	getRequestBody: {
		value: function(form) {
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
	},
	
	postFromForm: {
		value: function(url, form, callback) {
			this.openAndSend("POST", url, this.getRequestBody(form), callback,
				"application/x-www-form-urlencoded");
		}
	},
	
	makePostRequest: {
		value: function(url, data, callback) {
			this.openAndSend("POST", url, data, callback);
		}
	}
	
});
var Ajax = new Ajax();