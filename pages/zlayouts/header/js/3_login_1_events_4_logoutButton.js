$('#login_register').on('click', 'a#logout_button', function(e) {
	var elements = SITE.pages.header.login.ajax.elements;
	$.ajax({
		url : '../../libs/php/ajax/logout.php',
		data : 'logout=true',
		dataType : 'HTML',
		type : 'POST',
		beforeSend : function() {
			$('#popups').prepend(elements.loading2);
		}
	})
	.done(function(data, stat, xhr) {
		SITE.sandbox.removeElement(elements.loading2);
		//location.reload();
		$('#box-open-wrap *').remove();
		$('#box-open-wrap').html(data);
		$('#login_button').text('ورود به سايت');
	})
	.fail(function() {
		
	});
});