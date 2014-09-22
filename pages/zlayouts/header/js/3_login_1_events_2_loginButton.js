$('#login_register').on('click', 'button#login_button', function(e) {
	var target = $(e.target),
		id = target.attr('id'),
		elements = SITE.pages.header.login.ajax.elements;
	
	
	SITE.pages.header.minMax(id, 'login_open', 'login_min', 'login_max');
	
	if ($('#login_open').css('display') === 'block') {
		// SITE.sandbox.ajaxGet({
			// url : '../zlayouts/header/php/ajax/login.php',
			// beforeSend : SITE.pages.header.login.bs1,
			// done : SITE.pages.header.login.done1
		// });
		$.ajax({
			url : '../zlayouts/header/php/ajax/get_loginform_userprofile.php',
			data : null,
			dataType : 'HTML',
			type : 'GET',
			beforeSend : function() {
				//$('#popups').prepend(loading1);
				$('#box-open-wrap *').remove();
				$('#box-open-wrap').prepend(elements.loading1);
			}
		})
		.done(function(data, stat, xhr) {
			SITE.sandbox.removeElement(elements.loading1);
			
			//$('script:last').after( $(data).filter('script') );
			//$('#box-open-wrap').html( $(data).filter('#login') );
			
			$('#box-open-wrap').html(data);
			//location.reload();
		})
		.fail(function() {
			
		});
	}
	
});