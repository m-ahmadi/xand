var textarea = sandbox.select('#comment_text_area');
if (textarea) {

	sandbox.addEvent(textarea, 'keyup', function(e) {
	
		Product.execute('keyup', e);
		
	});
	
}