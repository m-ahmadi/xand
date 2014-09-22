SITE.pages.shop.blackAll = function(target) {
	butts = SITE.sandbox.select('#shop .shop-nav-butt');
	butts.applyToAll('attr', 'class', 'shop-nav-butt gradblack');
	target.attr('class', 'shop-nav-butt on');
};