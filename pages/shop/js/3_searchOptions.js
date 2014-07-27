
	if (tagName === 'INPUT' && type === 'button') {
		if (val == 'Clear') {
			$('input:checkbox').prop('checked', false);
		}
		
		if (data.button == 'toggle') {
			var 
			index = id.length - 5,
			elementID = id.substr(0, index);
			
			SITE.shop.minMax(id, elementID);
		}
	
	}
	
	if (tagName === 'INPUT' && type === 'radio') {
		if (id === 'm_INTEL') {
			var html = SITE.shop.getHTML('intel');
			$('#shop .search_option:eq(2)').html(html);

		} else if (t.id === 'm_AMD') {
			var html = SITE.shop.getHTML('amd');
			$('#shop .search_option:eq(2)').html(html);

		}
		
		if (t.id === 'c_INTEL') {
			var html = SITE.shop.getHTML('intel');
			$('#shop .search_option:eq(1)').html(html);

		} else if (t.id === 'c_AMD') {
			var html = SITE.shop.getHTML('amd');
			$('#shop .search_option:eq(1)').html(html);

		}
	}
	