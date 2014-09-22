/*
createWebSocket = function(server) {
	var ws = new WebSocket(server);
	ws.onopen = function(e) {
		console.log("Connection open...\n");
		ws.send("Hello WebSocket!");
	};
	ws.onmessage = function(e) {
		var data = e.data;
		if(typeof data === "string"){
			console.log("String message received\n", data, "\n");
			
			
			if (data.substr(0,33) === app.SIMSIM) {
				var index = data.search(' -> ') + 4,
					comment = data.substr(index);
				$('#product_comments ul#comments li:last-child').after(comment);
				//alert(comment);
			}
			
		} else {
			console.log("Other message received\n", e.data, "\n");
		}
	};
	ws.onerror = function(e) {
		console.log("WebSocket Error: \n" , e);
	};
	ws.onclose = function(e) {
		console.log("Connection closed\n", e);
	};
	return ws;
}
*/