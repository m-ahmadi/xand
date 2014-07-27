var SITE = {
	home : {},
	shop : {},
	register : {},
	ws : {},
	general: {},
	SIMSIM : "String message from normal client"
};

var $ = sandbox.select;






if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}