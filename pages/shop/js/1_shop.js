$('#shop').on('click', function(e) {
	var
	target = $(e.target),
	tagName = target.prop('tagName'),
	type = target.attr('type'),
	id = target.attr('id'),
	data = target.data(),
	val = target.val(),
	preventDefault = e.preventDefault;
});