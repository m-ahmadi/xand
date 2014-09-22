$('#product').on('click', 'a#add_comment_button', function(e){
	$.ajax({
		url : 'php/ajax/get_commentform_popuplogin.php',
		data : null,
		dataType : 'HTML',
		type : 'POST',
		beforeSend : function() {
			
		}
	})
	.done(function(data) {
		var isLoggedIn = !!$(data).data().is_logged_in; // typecasting with !!
		if (isLoggedIn) {
			var add = $('#add_comment_button');
			$(add).after(data);
			SITE.sandbox.removeElement(add);
		} else {
			//$('#popups').prepend( data ); (it was for when popuplogin's htmls travelled via ajaxs)
			SITE.pages.product.showPopup( '#popup-login' );
		}
	})
	.fail(function() {
		
	});
});