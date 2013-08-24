Header.extend('click', 'login', function (t, m, e) {

	if (t.id == 'login_button') {
		this.minMax(t.id, 'login_open', 'login_min', 'login_max');
		
		var login = $('#login_open').css('display');
		
		if (login === 'block') {
			sandbox.ajaxGet({
				url : 'ajax/login.php',
				beforeSend : m.bs1,
				done : m.done1
			});
		}
		
	}
	
	if (t.id == 'logout_button') {
		
		sandbox.ajaxPost({
			url : 'admin/logout.php',
			data : 'logout=true',
			beforeSend : m.bs2,
			done : m.done2
		});
		
	}
	
	
	if (t.id === 'login-submit-button') {
		e.preventDefault();
		handleLoginForm();
	}

	
	
},  function() {
		var el = $('#popups');//#box-open-wrap');
		function create(str) {
			var div = sandbox.createElement('div');
			div.attr('id', 'ajax-loading');
			div.css({
				marginTop: '24%',
				marginRight: '24%'
			});
			
			var p = sandbox.createElement('p');
			p.css({
				color : 'white',
				margin : '0'
			});
			p.text(str);
			
			var img = sandbox.createElement('img');
			img.attr('src', 'images/ajax/ajax-loader-login.gif');
			
			div.append(p);
			div.append(img);
			
			return div;
		}
		var loading1 = create('در حال دریافت اطلاعات...');
		
		
		function create2(str) {
			var div1 = sandbox.createElement('div');
			div1.attr('id', 'ajax-loading');
			div1.css({
				width : '100%',
				height : $('body').prop('scrollHeight'),
				position : 'absolute',
				backgroundColor : 'rgba(0,0,0, 0.50)',
				direction: 'rtl'
			});
			
			var div2 = sandbox.createElement('div');
			div2.css({
				marginTop: '13.5%',
				marginRight: '42.5%'
			});
			
			var p = sandbox.createElement('p');
			p.css({
				color : 'white',
				margin : '0',
				fontSize: '16px',
				marginBottom: '10px'
			});
			p.text(str);
			
			var img = sandbox.createElement('img');
			img.attr('src', "images/ajax/ajax-loader-bar.gif");
			img.css('width', '160px');
			
			div2.append(p);
			div2.append(img);
			div1.append(div2);
			
			return div1;
		}
		var loading2 = create2('در حال خروج از سایت...');
		
		
		return {
			bs1 : function() {
				//el.prepend(loading1);
				$('#box-open-wrap *').remove();
				$('#box-open-wrap').prepend(loading1);
			},
			done1 : function(data) {
				sandbox.removeElement(loading1);
				$('#box-open-wrap').html(data);
				//location.reload();
			},
			
			bs2 : function() {
				el.prepend(loading2);
			},
			done2 : function(data) {
				sandbox.removeElement(loading2);
				//location.reload();
				
				
				$('#box-open-wrap *').remove();
				$('#box-open-wrap').html(data);
				$('#login_button').text('ورود به سایت');
			}
		};
	}()
);
