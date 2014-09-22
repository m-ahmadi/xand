$('#product').on('click', function(e){
	var
	target = $(e.target),
	id = target.attr('id');
	
	if (id === 'add_comment_button') {
	//	SITE.sandbox.ajaxPost({
	//		url : 'php/ajax/comment.php',
	//		done : done
	//	});
	}
	if (id === 'send-comment-button') {
		//sandbox.ajaxPost({
		//	url : 'admin/comment.php',
		//	data : data,
		//	done : done2
		//});
	}
	
	if (id === 'popup-login-close') {
		
	}
	
	if ($(e.target).attr('id') === 'popup-login-submit-button') {
		
	}
});
