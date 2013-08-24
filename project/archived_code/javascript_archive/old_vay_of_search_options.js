if (tagName === 'INPUT' && type === 'CHECKBOX') {
	var so_el = target.value, data,
		so_category = target.parentElement.parentElement.dataset.so_category;
		
	if (target.checked == true) {
		data = '?so_el=' + so_el;
		data += '&so_category=' + so_category;
		
		__.ajax.get('shop-control.php'+ data, 'products');
		
	} else if (target.checked == false) {
		data = '?rmv_so_el=' + so_el;
		data += '&rmv_so_category=' + so_category;
		
		__.ajax.get('shop-control.php'+ data, 'products');
	}
}

if (tagName === 'INPUT' && type === 'RADIO') {
	var	id = target.id,
		data = LIBRARY.handy.handle_intel_amd(id);
	data += '&reset=c_socket';
	__.ajax.get('shop-control.php'+ data , 'products');
	

	
}

if (tagName === 'INPUT' && type === 'BUTTON') {
	var value = target.value;

	if (value == 'Clear') {
		LIBRARY.handy.uncheck_all_inputs();
		__.ajax.get('shop-control.php?clear=1');
	}