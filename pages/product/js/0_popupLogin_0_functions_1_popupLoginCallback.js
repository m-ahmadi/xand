SITE.pages.product.popupLoginCallback = function(el, user) {
	function createResonse() {
		var div = SITE.sandbox.createElement('div');
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
	
	var stat= parseInt(el.data().status),
		resp = createResonse();
		
	function create(element, status) {
		var div = SITE.sandbox.createElement('div');
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
		SITE.sandbox.removeElement(resp);
		$('#login-username-input').focus();
	}, 2800);
	
	
	if (stat === 101) { // Successful login
		setTimeout(function(){
			SITE.pages.product.closePopup('#popup-login');
			$('#login_button').text(user);
			
			// Initializing a WebSocket Connection
			//ws = createWebSocket('ws://localhost:9090/websocket_server.php');
		}, 2850);
		//setTimeout(function(){location.reload();}, 3650);
	}
	
}