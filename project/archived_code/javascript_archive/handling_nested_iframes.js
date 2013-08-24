(function(c) {
if (typeof c.$ === 'undefined') { c = c.parent; }

c.handleLoginForm = function() {
	c.form = c.$('form[id="login-form"]'),
	c.uRdy=true, c.pRdy=true,
	c.username = c.$('#login-username-input'),
	c.password = c.$('#login-password-input'),
	c.submit = c.$('#login-submit-button');
	
	var uLength = c.username.val().trim().length,
		pLength = c.password.val().trim().length;
	
	function dis() {
		c.submit.prop('disabled', true);
		setTimeout(function(){ c.submit.prop('disabled', false); }, 400);
	}
	if (uLength < 4) {
		c.username.effect('highlight', {color: '#FFCACA'}, 400);
		dis();
		c.uRdy=false;
		c.username[0].focus();
	} else {
		c.uRdy=true;
		if (!c.pRdy) { c.password[0].focus(); }
	}
	if (pLength < 6) {
		c.password.effect('highlight', {color: '#FFCACA'}, 400);
		dis();
		c.pRdy=false;
		if (c.uRdy) { c.password[0].focus(); } else { c.username[0].focus(); }
	} else {
		c.pRdy=true;
		if (!c.uRdy) { c.username[0].focus(); }
	}
	
	if (c.uRdy && c.pRdy) {
		c.form.submit();
		c.form[0].reset();
	}
}	

c.callback = function (el, user, profile) {
	function createResponse(element, status) {
		var div1 = c.sandbox.createElement('div');
		div1.attr('id', 'login-message');
		div1.css({
			width: '96%',
			height: '94%',
			top: '0',
			right: '0',
			background: 'rgba(0, 0, 0, 0.65',
			color: 'white',
			position: 'absolute',
			display: 'none',
			padding: '5px'
		});
		
		var div2 = c.sandbox.createElement('div');
		div2.css({
			position: 'absolute',
			width: '100%',
			top: '39%',
			left: '0',
			borderRadius: '3px'
		});
		
		if (status) {
			div2.css('background', 'rgba(200, 250, 0, 0.70)');
		} else {
			div2.css('background', 'rgba(250, 0, 0, 0.70)');
		}
		
		element.css('margin', '2px');
		div2.append(element);
		div1.append(div2);
		return div1;
	}
	
	var stat = el.data().success,
		response = createResponse(el, stat);
	
	c.$('#popups').prepend(response);
	c.$(response).fadeIn(400);
	c.$(response).delay(2000).fadeOut(400);
	
	setTimeout(function(){
		c.sandbox.removeElement(response);
		c.username[0].focus();
	}, 2800);
	
	
	if (stat) {setTimeout(function(){
		// successful login
			c.$('#box-open-wrap *').remove();
			c.$('#box-open-wrap').append(profile);
			c.$('#login_button').text(user);
			
			// Initializing a WebSocket Connection
			ws = sandbox.websocket('ws://localhost:9090/websocket_server.php');
	}, 2850);}
	
}

}(this));
var ws;