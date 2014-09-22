SITE.pages.shop.ajax = {};
SITE.pages.shop.ajax.elements = (function() {
	var
	sandbox = SITE.sandbox,
	ajaxWrapHTML,    ajaxWrap,
	ajaxLoadingHTML, ajaxLoading,
	ajaxErrorHTML,   ajaxError;
	
	ajaxWrapHTML = ''
+	'<div id="ajax-loading" style="width:100%; position:absolute; background-color:rgba(0,0,0,0.74);">'
+	'</div>';
	ajaxWrap = $( $.parseHTML(ajaxWrapHTML) );

	ajaxLoadingHTML = ''
+	'<div id="loading" style="margin-top:7.5%; margin-right:35.5%; direction:rtl;">'
+		'<p style="font-size:16px; color:white; margin-right:9%;">در حال دريافت اطلاعات...</p>'
+		'<img src="images/ajax/ajax-loader.gif" style="margin-right:17%; margin-bottom:4%"/>'
+	'</div>';
	ajaxLoading = $( $.parseHTML(ajaxLoadingHTML) );
	
	ajaxErrorHTML = ''
+	'<div id="error" style="margin-top:7.5%; margin-right:35.5%; direction:rtl;">'
+		'<p style="font-size:16px; color:white;">خطا در ارتباط با سرور، دوباره امتحان کنيد.</p>'
+		'<img src="images/ajax/ajax-error.png" style="margin-right:17%; margin-bottom:4%;"/>'
+	'<div/>';
	ajaxError = $( $.parseHTML(ajaxErrorHTML) );

	return {
		ajaxWrap : ajaxWrap,
		ajaxLoading : ajaxLoading,
		ajaxError : ajaxError
	};
}());