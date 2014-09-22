$('#product').on('click', 'a#send-comment-button', function(e){
	e.preventDefault();
	var data = 'comment=' + encodeURIComponent( $('#comment_text_area').val() );
	$.ajax({
		url : 'php/ajax/create_comment.php',
		data : data,
		dataType : 'HTML',
		type : 'GET',
		beforeSend : function() {
		}
	})
	.done(function(data, stat, xhr) {
		//successful comment
		$('#product_comments ul#comments li:last-child').after(data);
		//$('#product_comments ul#comments li:last-child').after(app.ws.message);
	})
	.fail(function() {
	});
});
