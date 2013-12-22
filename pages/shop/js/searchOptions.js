Shop.extend('click', 'searchOptions', function(t, m, e) {
	
	var select = sandbox.select;
	
	if (t.tagName === 'INPUT' && t.type === 'button') {
		if (t.val == 'Clear') {
			select('input:checkbox').prop('checked', false);
		}
		
		if (t.data.button == 'toggle') {
			
			var index = t.id.length - 5,
				elementID = t.id.substr(0, index);
			
			m.minMax(t.id, elementID);
		}
	
	}
	
	if (t.tagName === 'INPUT' && t.type === 'radio') {
		if (t.id === 'm_INTEL') {
			var html = m.getHTML('intel');
			select('.search_option:eq(2)').html(html);

		} else if (t.id === 'm_AMD') {
			var html = m.getHTML('amd');
			select('.search_option:eq(2)').html(html);

		}
		
		if (t.id === 'c_INTEL') {
			var html = m.getHTML('intel');
			select('.search_option:eq(1)').html(html);

		} else if (t.id === 'c_AMD') {
			var html = m.getHTML('amd');
			select('.search_option:eq(1)').html(html);

		}
	}
	
}, {
	getHTML : function (from) {
		var obj = {},
			point = from;
			
		
		obj.intel = ''
		+	'<div class="so_head">'
		+		'<input type="button" value="-" id="c_socket_butt" class="cmm" data-button="toggle">'
		+		'<label for="c_socket_butt" class="title">سوکت سي پي يو</label>'
		+	'</div>'
		+	'<div id="c_socket" class="cb">'
		+		'<div><input type="checkbox" name="c_socket[]" value="2011"><label>2011</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="1150"><label>1150</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="1155"><label>1155</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="1156"><label>1156</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="1366"><label>1366</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="775"><label>775</label></div>'
		+	'</div>';
		
		obj.amd = ''
		+	'<div class="so_head">'
		+		'<input type="button" value="-" id="c_socket_butt" class="cmm" data-button="toggle">'
		+		'<label for="c_socket_butt" class="title">سوکت سی پی یو</label>'
		+	'</div>'
		+	'<div id="c_socket">'
		+		'<div><input type="checkbox" name="c_socket[]" value="FM2+"><label>FM2+</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="FM2"><label>FM2</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="FM1"><label>FM1</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="FS1b"><label>FS1b</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="AM3+"><label>AM3+</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="AM3"><label>AM3</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="AM2+"><label>AM2+</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="AM2"><label>AM2</label></div>'
		+		'<div><input type="checkbox" name="c_socket[]" value="BGA FT1"><label>BGA FT1</label></div>'
		+	'</div>'
		return obj[point];
	},
	minMax : function (buttonID, elementID) {
		var min = '+', max = '-', boxID = '#shop';
		
			button = sandbox.select(boxID, '#' + buttonID),
			el = sandbox.select(boxID, '#' + elementID),
			value = button.val();
		
		
		
		if (value == min) {
			el.slideDown();
			setTimeout (function(){  button.val(max);  }, 400);
		} else if (value == max) {
			el.slideUp();
			setTimeout (function(){  button.val(min);  }, 400);
		}
		
	}
});