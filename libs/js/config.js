(function() {
	app.config = {
		urls : {
			home : '',
			invalid : 'invalid.php'
		},
		
		strs : {
			one : '',
			two : '',
			three : ''
		},
		
		htmls : {
			div : 'div'
		},
		
		settings : {
			// Don't know yet
		},
		
		repeated_unique_values : {
			// Don't know yet
		}
	};
	
	if (typeof Object.create !== 'function') {
		Object.create = function (o) {
			function F() {}
			F.prototype = o;
			return new F();
		};
	}
	
}());