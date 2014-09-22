$.ajax({
	url : 'something.php',
	data : null,
	dataType : 'html',
	type : 'POST',
	beforeSend : function() {
		// beforeSend
	}
})
.done(function(data, stat, xhr) {
	// complete
})
.fail(function() {
	// error
});