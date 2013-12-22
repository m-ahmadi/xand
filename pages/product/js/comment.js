Product.extend('click', 'comment', function(t, m, e) {
	
	if (t.id === 'add_comment_button') {
		sandbox.ajaxPost({
			url : 'ajax/comment.php',
			done : m.done
		});
	
	}
	
	if (t.id === 'send-comment-button') {
		e.preventDefault();
		var data = 'comment=' + encodeURIComponent( $('#comment_text_area').val() );
		sandbox.ajaxPost({
			url : 'admin/comment.php',
			data : data,
			done : m.done2
		});
		
	}
	
	
},  function() {
	var sb = Popup.sb;
	
	return {
		done : function(data) {
			var
			stat = !!$(data).data().success; // typecast
			
			if (stat) {
				var add = $('#add_comment_button');
				$(add).after(data);
				sandbox.removeElement(add);
			} else {
				$('#popups').prepend( data );
				sb.showPopup( '#popup-login' );
			}	
		},
		
		done2 : function(data) {
			//successful comment
			$('#product_comments ul#comments li:last-child').after(data);
			
			$('#product_comments ul#comments li:last-child').after(app.ws.message);
			
		}
	};
	
}());



Product.extend('keyup', 'text_editor', function() {
	var select = sandbox.select;
	var textarea = select('#comment_text_area'),
		counter = select('#text_counter'),
		value = textarea.prop('value'),
		length = value.length;
	
	if (length >= 1 && length < 30) {
		var charToGo = 30 - textarea.val().length,
			str = charToGo + ' کاراکتر ديگر لازم است.';
		
		counter.html(str)
	
	} else if (length == 0) {
		counter.html('حداقل 30 کاراکتر وارد کنيد.') ;
	
	} else {
		counter.html('ميتوانيد بفرستيد.');
	}

});
