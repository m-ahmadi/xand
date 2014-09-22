$('#my-computer').on('click', function(e) {
	var
	target = $(e.target),
	tagName = target.prop('tagName'),
	type = target.attr('type'),
	id = target.attr('id'),
	data = target.data(),
	val = target.val(),
	preventDefault = e.preventDefault;
	
	if (target.id == 'mc_button') {
		SITE.pages.header.minMax(target.id, 'mc-open', 'mc_min', 'mc_max');
		
	}
});
