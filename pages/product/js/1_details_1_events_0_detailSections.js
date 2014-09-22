$('#product').on('click', function(e){
	var
	target = $(e.target),
	tagName = target.prop('tagName'),
	type = target.attr('type'),
	id = target.attr('id'),
	data = target.data(),
	val = target.val(),
	preventDefault = e.preventDefault;
	
	
	if (tagName === 'INPUT' && type === 'button') {
		if (data.button == 'toggle') {
			var index = id.length - 5,
				elementID = id.substr(0, index);
			minMax(id, elementID);
		}
	}
	
});