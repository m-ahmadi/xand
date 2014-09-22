var SITE = {
	pages: {
		general: {},
		header: {},
		home : {},
		shop : {},
		product: {},
		register : {}
	},
	ajaxInterface: {},
	ws : {},
	SIMSIM : "String message from normal client"
};








if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}