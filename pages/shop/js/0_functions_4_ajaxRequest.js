SITE.pages.shop.ajax.request = function (obj) {
	var elements = SITE.pages.shop.ajax.elements,
		sandbox = SITE.sandbox;
		
	$.ajax({
		url : obj.url,
		data : obj.data,
		dataType : obj.dataType,
		type : obj.type,
		beforeSend : function() {
			elements.ajaxWrap.css('height', $(obj.whileLoading).css('height'));
			elements.ajaxWrap.append(elements.ajaxLoading);
			$(obj.whileLoading).prepend(elements.ajaxWrap);
		}
	})
	.done(function(data, stat, xhr) {
		sandbox.removeElement(elements.ajaxLoading);
		sandbox.removeElement(elements.ajaxWrap);
		$(obj.responseContainer).html(data);
	})
	.fail(function() {
		sandbox.removeElement(elements.ajaxLoading);
		elements.ajaxWrap.append(elements.ajaxError);
		setTimeout(function() {
			sandbox.removeElement(elements.ajaxError);
			sandbox.removeElement(elements.ajaxWrap);
			clear();
		} , 1000);
	});

};

/*
	url :               null,
	data :              null,
	dataType :          null,
	type :              null,
	whileLoading :      null,
	responseContainer : null
*/