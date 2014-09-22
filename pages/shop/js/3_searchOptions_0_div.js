$('#shop').on('click', 'div#search_options', function(e) {
	var
	target = $(e.target),
	tagName = target.prop('tagName'),
	type = target.attr('type'),
	id = target.attr('id'),
	data = target.data(),
	val = target.val();
	
	if (tagName === 'INPUT' && type === 'button') {
		if (val == 'Clear') {
			$('input:checkbox').prop('checked', false);
		}
		
		if (data.button == 'toggle') {
			var 
			index = id.length - 5,
			elementID = id.substr(0, index);
			
			SITE.pages.shop.minMax(id, elementID);
		}
	
	}
	
	if (tagName === 'INPUT' && type === 'radio') {
		if (id === 'm_INTEL') {
			var html = SITE.pages.shop.getHTML('intel');
			$('#shop .search_option:eq(2)').html(html);

		} else if (id === 'm_AMD') {
			var html = SITE.pages.shop.getHTML('amd');
			$('#shop .search_option:eq(2)').html(html);

		}
		
		if (id === 'c_INTEL') {
			var html = SITE.pages.shop.getHTML('intel');
			$('#shop .search_option:eq(1)').html(html);

		} else if (id === 'c_AMD') {
			var html = SITE.pages.shop.getHTML('amd');
			$('#shop .search_option:eq(1)').html(html);

		}
	}
});