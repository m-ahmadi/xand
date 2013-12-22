handleLoginForm = function() {
	form = $('form[id="login-form"]'),
	uRdy=true, pRdy=true,
	username = $('#login-username-input'),
	password = $('#login-password-input'),
	submit = $('#login-submit-button');
	
	var uLength = username.val().trim().length,
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
		pRdy=false;
		if (uRdy) { password[0].focus(); } else { username[0].focus(); }
	} else {
		pRdy=true;
		if (!uRdy) { username[0].focus(); }
	}
	
	if (uRdy && pRdy) {
		form.submit();
		form[0].reset();
	}
}	

function loginCallback(el, user, profile) {
	function createResponse(element, status) {
		// div1
		var div1 = sandbox.createElement('div');
		div1.attr('id', 'login-message');
		div1.css({
			width: '99%',
			height: $('body').prop('scrollHeight'),
			background: 'rgba(0, 0, 0, 0.65',
			color: 'white',
			position: 'absolute',
			display: 'none',
			padding: '5px',
			direction: 'rtl'
		});
		// div2
		var div2 = sandbox.createElement('div');
		div2.css({
			position: 'absolute',
			borderRadius: '3px'
		});
		if (status === 101) {
			div2.css('background', 'rgba(200, 250, 0, 0.78)');
		} else {
			div2.css('background', 'rgba(250, 0, 0, 0.78)');
		}
		div2.css('margin-top', '15%');
		switch (status) {
			case 101: div2.css('margin-right', '32%'); break;
			case 102: div2.css('margin-right', '42%'); break;
			case 103: div2.css('margin-right', '36%'); break;
		}
		// paragraph
		element.css('margin', '6px');
		element.css('fontSize', '16px');
		
		// appending
		div2.append(element);
		div1.append(div2);
		return div1;
	}
	
	var stat = parseInt(el.data().status),
		response = createResponse(el, stat);
	
	$('#popups').prepend(response);
	$(response).fadeIn(400);
	$(response).delay(2000).fadeOut(400);
	
	setTimeout(function(){
		sandbox.removeElement(response);
		username[0].focus();
	}, 2800);
	
	
	if (stat === 101) {setTimeout(function(){ // successful login
		
			//location.reload();
			$('#box-open-wrap *').remove();
			$('#box-open-wrap').append(profile);
			$('#login_button').text(user);
			
			// Initializing a WebSocket Connection
			ws = createWebSocket('ws://localhost:9090/websocket_server.php');
	}, 2850);}
	
}
var ws;





//$('#box-open-wrap *').remove();
//$('#box-open-wrap').append(profile);
//$('#login_button').text(user);