var
form = $('form[id="popup-login-form"]'),
uRdy = true, pRdy = true,
username = $('#popup-login-username-input'),
password = $('#popup-login-password-input'),
submit = $('#popup-login-submit-button');
	


$('#popup_login_iframe').load(function() {
	var doc = this.contentWindow.document,
		user = (doc.getElementById('user'))? doc.getElementById('user').innerHTML : null,
		el = doc.getElementById('login-message');
	popupLoginCallback( $(el), user);
});

function handlePopupLoginForm() {
	var
	uLength = username.val().trim().length,
	pLength = password.val().trim().length;
		
	function dis() {
		submit.prop('disabled', true);
		setTimeout(function(){ submit.prop('disabled', false); }, 400);
	}
	
	if (uLength < 4) {
		username.effect('highlight', {color: '#FFCACA'}, 400);
		dis();
		uRdy=false;
		username[0].focus();
	} else {
		uRdy=true;
		if (!pRdy) { password[0].focus(); }
	}
	if (pLength < 6) {
		password.effect('highlight', {color: '#FFCACA'}, 400);
		dis();
		pRdy = false;
		if (uRdy) { password[0].focus(); } else { username[0].focus(); }
	} else {
		pRdy = true;
		if (!uRdy) { username[0].focus(); }
	}
	
	if (uRdy && pRdy) {
		form.submit();
		form[0].reset();
	}
}

function popupLoginCallback(el, user) {
	function createResonse() {
		var div = sandbox.createElement('div');
		div.attr('id', 'popup-login-server-response');
		div.css({
			width: '97.5%',
			height: '96.1%',
			top: '0',
			right: '0',
			background: 'rgba(0, 0, 0, 0.75',
			color: 'white',
			position: 'absolute',
			display: 'none',
			padding: '5px'
		});
		return div;
	}
	var resp = createResonse();
	
	var stat= parseInt(el.data().status);
		
	function create(element, status) {
		var div = sandbox.createElement('div');
		div.css({
			position: 'absolute',
			width: '55%',
			top: '39%',
			left: '23%',
			borderRadius: '3px'
		});
		if (status === 101) {
			div.css('background', 'rgba(200, 250, 0, 0.70)');
		} else {
			div.css('background', 'rgba(250, 0, 0, 0.70)');
		}
		element.css('margin', '2px');
		div.append(element);
		return div;
	}
	var div = create(el, stat);
	
	resp.append(div);
	$('#popup-login').prepend(resp);
	
	$(resp).fadeIn(400);
	
	
	$(resp).delay(2000).fadeOut(400);
	setTimeout(function(){
		sandbox.removeElement(resp);
		username[0].focus();
	}, 2800);
	
	
	if (stat === 101) { // Successful login
		setTimeout(function(){
			Popup.sb.closePopup('#popup-login');
			$('#login_button').text(user);
			
			// Initializing a WebSocket Connection
			ws = createWebSocket('ws://localhost:9090/websocket_server.php');
		}, 2850);
		//setTimeout(function(){location.reload();}, 3650);
	}
	
}