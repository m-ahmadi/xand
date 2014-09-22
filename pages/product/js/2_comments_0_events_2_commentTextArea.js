$('#product').on('keyup', '#comment_text_area', function(e){

	var textarea = $('#comment_text_area'),
		counter = $('#text_counter'),
		value = textarea.prop('value'),
		length = value.length;
	
	if (length >= 1 && length < 30) {
		var charToGo = 30 - textarea.val().length,
			str = charToGo + ' کاراکتر ديگر لازم است.';
		
		counter.html(str);
	
	} else if (length == 0) {
		counter.html('حداقل 30 کاراکتر وارد کنيد.') ;
	
	} else {
		counter.html('ميتوانيد بفرستيد.');
	}

});