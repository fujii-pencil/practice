//$(document).bind("mobileinit", function(){
//   $.mobile.ajaxFormsEnabled = false;
//});
function clearTipText() {
	$('input').each(function(){
		var type = $(this).attr('type');
		var tipText = $(this).attr('title');
		if(type != 'file' && type != 'checkbox' && type != 'radio' && type != 'password' && type != 'submit' && tipText) {
			if ($(this).val() == tipText) {
				$(this).val("");
			}
		}
	});
}
$(function(){	
	$('input').each(function(){
		var type = $(this).attr('type');
		var tipText = $(this).attr('title');
		if(type != 'file' && type != 'checkbox' && type != 'radio' && type != 'password' && type != 'submit' && tipText) {
			if ($(this).val() == '' || $(this).val() == tipText) {
				$(this).val(tipText).css("color","#999");
			} else {
				$(this).css("color","#000");
			}
			$(this).focus(function(){
				if ($(this).val()==tipText){
					$(this).val("").css("color","#000");
				}
			});
			$(this).blur(function(){
				if ($(this).val()=="" || $(this).val()==tipText) {
					$(this).val(tipText).css("color","#999");
				} else {
					$(this).css("color","#000");
				}
			});
		}
	});
});
//QPACEC 2014/5/26 UPD STA サイトリニューアル対応
//$(document).ready(function(){
$(function(){	
//QPACEC 2014/5/26 UPD END サイトリニューアル対応
	$("#pagetop a").click(function(){
		$("html, body").animate({scrollTop:0}, {duration:1000});
	});
	$('.accordion_head').click(function() {
		$(this).next().slideToggle();
	}).next().hide();
	$('input[name=enquete1]').click(function(){
		$('#enquete1').slideUp('normal', function() { $('#qns1').slideDown('normal', checkEnquete()); } );
	});
	$('input[name=enquete2]').click(function(){
		$('#enquete2').slideUp('normal', function() { $('#qns2').slideDown('normal', checkEnquete()); } );
	});
	$('input[name=enquete3]').click(function(){
		$('#enquete3').slideUp('normal', function() { $('#qns3').slideDown('normal', checkEnquete()); } );
	});
	function checkEnquete() {
		if ($('input[name=enquete1]:checked').val() && $('input[name=enquete2]:checked').val() && $('input[name=enquete3]:checked').val()) {
			setTimeout(function() { $('#enqs').fadeOut('slow', function() { $('#enqComplete').slideDown(); }) }, 500);
		}
	}
	$('input[name=coolDeliveryFlg]').change(function() {
		if ($('input[name=coolDeliveryFlg]:checked').val()==1) {
			$('#deliveryDateCold').slideDown();
		} else {
			$('#deliveryDateCold').slideUp();
		}
	});
	$('input[name=normalDeliveryFlg]').change(function() {
		if ($('input[name=normalDeliveryFlg]:checked').val()==1) {
			$('#deliveryDate').slideDown();
		} else {
			$('#deliveryDate').slideUp();
		}
	});
	$('#destinationSelect').change(function(){
		$('#destinationDetail').attr('href', '#destination'+$(this).val());
	});
	$('input[name=regularDeliveryFlg]').change(function() {
		if ($('input[name=regularDeliveryFlg]:checked').val()==0) {
			$('#dateSet').slideUp('fast');
			$('#weekset').slideDown();
		} else {
			$('#weekset').slideUp('fast');
			$('#dateSet').slideDown();
		}
	});	
	$('input[name=payinfo]').change(function() {
		if ($('input[name=payinfo]:checked').val()==0) {
			$('#crejitcardInput').slideDown();
			$('#daibikiInput').slideUp();
			$('#convenienceInput').slideUp();
		} else if ($('input[name=payinfo]:checked').val()==1) {
			$('#crejitcardInput').slideUp();
			$('#daibikiInput').slideDown();
			$('#convenienceInput').slideUp();
		} else if ($('input[name=payinfo]:checked').val()==2) {
			$('#crejitcardInput').slideUp();
			$('#daibikiInput').slideUp();
			$('#convenienceInput').slideDown();
		}
	});	
	$('input[name=cardnum]').change(function() {
		if ($('input[name=cardnum]:checked').val()==0) {
			$('#crejitcardInput2').slideDown();
		} else {
			$('#crejitcardInput2').slideUp();
		}
	});	
	$('input[name=multiCoolDeliveryFlg1]').change(function() {
		if ($('input[name=multiCoolDeliveryFlg1]:checked').val()==1) {
			$('#deliveryDateCold').slideDown();
		} else {
			$('#deliveryDateCold').slideUp();
		}
	});
	$('input[name=multiNormalDeliveryFlg2]').change(function() {
		if ($('input[name=multiNormalDeliveryFlg2]:checked').val()==1) {
			$('#deliveryDate').slideDown();
		} else {
			$('#deliveryDate').slideUp();
		}
	});
	$('input[name=regularDeliveryFlg]').change(function() {
		if ($('input[name=regularDeliveryFlg]:checked').val()==1) {
			$('#Weekday').slideDown();
			$('#Date').slideUp();
		} else if ($('input[name=regularDeliveryFlg]:checked').val()==2) {
			$('#Weekday').slideUp();
			$('#Date').slideDown();
		}else{
			$('#Date').slideUp();
			$('#Weekday').slideUp();
		}
	});
	$('#showAllPointHistry').toggle(function() {
		$('tr.hiddenHistory').slideDown('slow')
	}, function() {
		$('tr.hiddenHistory').slideUp('slow')
	});
	$('input[name=addMode]').change(function() {
		if ($('input[name=addMode]:checked').val()==0) {
			$('#defAdd').slideDown();
			$('#defAddMsg').slideDown();
			$('#newAdd').slideUp();
			$('#newAddMsg').slideUp();
		} else {
			$('#newAdd').slideDown();
			$('#newAddMsg').slideDown();
			$('#defAdd').slideUp();
			$('#defAddMsg').slideUp();
		}
	});
	$('input[name=stopChck]').change(function() {
		if ($('input[name=stopChck]:checked').val()==1) {
			$('#kyushikaisu').slideDown();
		} else {
			$('#kyushikaisu').slideUp();
		}
	});
	
	if($('#m2-1').size() > 0){
	var anchors_m2_1 = new Array();
	anchors_m2_1.push($('#mypage_wakuwaku').offset().top);
	anchors_m2_1.push($('#mypage_teiki').offset().top);
	anchors_m2_1.push($('#mypage_order').offset().top);
	anchors_m2_1.push($('#mypage_member').offset().top);
	anchors_m2_1.push($('#mypage_address').offset().top);
	$('#mypage_wakuwaku').toggle(function() {
		$('#mypage_wakuwaku_accordion').slideDown('slow');
		$('#mypage_address_accordion').slideUp('slow');
		$('#mypage_teiki_accordion').slideUp('slow');
		$('#mypage_order_accordion').slideUp('slow');
		$('#mypage_member_accordion').slideUp('slow');
		$("html, body").animate({scrollTop:anchors_m2_1[0]}, {duration:1000});
	}, function() {
		$('#mypage_wakuwaku_accordion').slideUp('slow');
	});
	$('#mypage_teiki').toggle(function() {
		$('#mypage_teiki_accordion').slideDown('slow');
		$('#mypage_wakuwaku_accordion').slideUp('slow');
		$('#mypage_address_accordion').slideUp('slow');
		$('#mypage_order_accordion').slideUp('slow');
		$('#mypage_member_accordion').slideUp('slow');
		$("html, body").animate({scrollTop:anchors_m2_1[1]}, {duration:1000});
	}, function() {
		$('#mypage_teiki_accordion').slideUp('slow');
	});
	$('#mypage_order').toggle(function() {
		$('#mypage_order_accordion').slideDown('slow');
		$('#mypage_wakuwaku_accordion').slideUp('slow');
		$('#mypage_teiki_accordion').slideUp('slow');
		$('#mypage_address_accordion').slideUp('slow');
		$('#mypage_member_accordion').slideUp('slow');
		$("html, body").animate({scrollTop:anchors_m2_1[2]}, {duration:1000});
	}, function() {
		$('#mypage_order_accordion').slideUp('slow');
	});
	$('#mypage_member').toggle(function() {
		$('#mypage_member_accordion').slideDown('slow');
		$('#mypage_wakuwaku_accordion').slideUp('slow');
		$('#mypage_teiki_accordion').slideUp('slow');
		$('#mypage_order_accordion').slideUp('slow');
		$('#mypage_address_accordion').slideUp('slow');
		$("html, body").animate({scrollTop:anchors_m2_1[3]}, {duration:1000});
	}, function() {
		$('#mypage_member_accordion').slideUp('slow');
	});
	$('#mypage_address').toggle(function() {
		$('#mypage_address_accordion').slideDown('slow');
		$('#mypage_wakuwaku_accordion').slideUp('slow');
		$('#mypage_teiki_accordion').slideUp('slow');
		$('#mypage_order_accordion').slideUp('slow');
		$('#mypage_member_accordion').slideUp('slow');
		$("html, body").animate({scrollTop:anchors_m2_1[4]}, {duration:1000});
	}, function() {
		$('#mypage_address_accordion').slideUp('slow');
	});
	}
	
	
	$('#showAllTeiki').toggle(function() {
		$('#hiddenTeiki').slideDown('slow');
	}, function() {
		$('#hiddenTeiki').slideUp('slow');
	});
	$('#showAllOrder').toggle(function() {
		$('#hiddenOrder').slideDown('slow');
	}, function() {
		$('#hiddenOrder').slideUp('slow');
	});
	
	if($('#m10-1').size() > 0){
	var anchors_m10_1 = new Array();
	anchors_m10_1.push($('#point7').offset().top);
	anchors_m10_1.push($('#point10').offset().top);
	anchors_m10_1.push($('#point15').offset().top);
	anchors_m10_1.push($('#point28').offset().top);
	anchors_m10_1.push($('#point40').offset().top);
	anchors_m10_1.push($('#point75').offset().top);
	anchors_m10_1.push($('#point80').offset().top);
	anchors_m10_1.push($('#point125').offset().top);
	$('#point7').toggle(function() {
		$('#p_pat7').slideDown('slow');
		$('#p_pat10').slideUp('slow');
		$('#p_pat15').slideUp('slow');
		$('#p_pat28').slideUp('slow');
		$('#p_pat40').slideUp('slow');
		$('#p_pat75').slideUp('slow');
		$('#p_pat80').slideUp('slow');
		$('#p_pat125').slideUp('slow');
		$("html, body").animate({scrollTop:anchors_m10_1[0]}, {duration:1000});
	}, function() {
		$('#p_pat7').slideUp('slow');
	});
	$('#point10').toggle(function() {
		$('#p_pat7').slideUp('slow');
		$('#p_pat10').slideDown('slow');
		$('#p_pat15').slideUp('slow');
		$('#p_pat28').slideUp('slow');
		$('#p_pat40').slideUp('slow');
		$('#p_pat75').slideUp('slow');
		$('#p_pat80').slideUp('slow');
		$('#p_pat125').slideUp('slow');
		$("html, body").animate({scrollTop:anchors_m10_1[1]}, {duration:1000});
	}, function() {
		$('#p_pat10').slideUp('slow');
	});
	$('#point15').toggle(function() {
		$('#p_pat7').slideUp('slow');
		$('#p_pat10').slideUp('slow');
		$('#p_pat15').slideDown('slow');
		$('#p_pat28').slideUp('slow');
		$('#p_pat40').slideUp('slow');
		$('#p_pat75').slideUp('slow');
		$('#p_pat80').slideUp('slow');
		$('#p_pat125').slideUp('slow');
		$("html, body").animate({scrollTop:anchors_m10_1[2]}, {duration:1000});
	}, function() {
		$('#p_pat15').slideUp('slow');
	});
	$('#point28').toggle(function() {
		$('#p_pat7').slideUp('slow');
		$('#p_pat10').slideUp('slow');
		$('#p_pat15').slideUp('slow');
		$('#p_pat28').slideDown('slow');
		$('#p_pat40').slideUp('slow');
		$('#p_pat75').slideUp('slow');
		$('#p_pat80').slideUp('slow');
		$('#p_pat125').slideUp('slow');
		$("html, body").animate({scrollTop:anchors_m10_1[3]}, {duration:1000});
	}, function() {
		$('#p_pat28').slideUp('slow');
	});
	$('#point40').toggle(function() {
		$('#p_pat7').slideUp('slow');
		$('#p_pat10').slideUp('slow');
		$('#p_pat15').slideUp('slow');
		$('#p_pat28').slideUp('slow');
		$('#p_pat40').slideDown('slow');
		$('#p_pat75').slideUp('slow');
		$('#p_pat80').slideUp('slow');
		$('#p_pat125').slideUp('slow');
		$("html, body").animate({scrollTop:anchors_m10_1[4]}, {duration:1000});
	}, function() {
		$('#p_pat40').slideUp('slow');
	});
	$('#point75').toggle(function() {
		$('#p_pat7').slideUp('slow');
		$('#p_pat10').slideUp('slow');
		$('#p_pat15').slideUp('slow');
		$('#p_pat28').slideUp('slow');
		$('#p_pat40').slideUp('slow');
		$('#p_pat75').slideDown('slow');
		$('#p_pat80').slideUp('slow');
		$('#p_pat125').slideUp('slow');
		$("html, body").animate({scrollTop:anchors_m10_1[5]}, {duration:1000});
	}, function() {
		$('#p_pat75').slideUp('slow');
	});
	$('#point80').toggle(function() {
		$('#p_pat7').slideUp('slow');
		$('#p_pat10').slideUp('slow');
		$('#p_pat15').slideUp('slow');
		$('#p_pat28').slideUp('slow');
		$('#p_pat40').slideUp('slow');
		$('#p_pat75').slideUp('slow');
		$('#p_pat80').slideDown('slow');
		$('#p_pat125').slideUp('slow');
		$("html, body").animate({scrollTop:anchors_m10_1[6]}, {duration:1000});
	}, function() {
		$('#p_pat80').slideUp('slow');
	});
	$('#point125').toggle(function() {
		$('#p_pat7').slideUp('slow');
		$('#p_pat10').slideUp('slow');
		$('#p_pat15').slideUp('slow');
		$('#p_pat28').slideUp('slow');
		$('#p_pat40').slideUp('slow');
		$('#p_pat75').slideUp('slow');
		$('#p_pat80').slideUp('slow');
		$('#p_pat125').slideDown('slow');
		$("html, body").animate({scrollTop:anchors_m10_1[7]}, {duration:1000});
	}, function() {
		$('#p_pat125').slideUp('slow');
	});
	}
});



/*---------------------------------------------
	TOP
  ---------------------------------------------*/


//edit201404
$(function() {

	//高さ揃え
     if($("#login").length){
		$("#login .loginBox").tile();
	 }
     if($("#plus").length){
		$("#plus .detail").tile(2);
	 }


     //テーブル背景色
		$('.border tr:odd').addClass('bg');

//QPACEC 2014/5/30 ADD STA サイトリニューアル対応 エラー時、フォーカスをあてると入力値が非表示になるため削除
//	//テキストボックス
//	var textBox = jQuery("input:text");
//	
//	textBox.focus(function(){
//		if(this.value == this.defaultValue){
//			jQuery(this).val('');
//		}
//	}).blur(function(){
//	
//		if(jQuery(this).val() == ''){
//			jQuery(this).val(this.defaultValue)
//		}
//	});
//QPACEC 2014/5/30 ADD END サイトリニューアル対応

	//アコーディオン
	$(".acodion dd").css("display","none");	
	$(".acodion dt").click(function () {
		$(this).next().slideToggle();
		 if ($(this).hasClass("acodionOpen") ){
			 $(this).removeClass("acodionOpen");
		 }
		 else{
			 $(this).addClass("acodionOpen");
		 }
	});


	//お客様情報の入力
     if($("#accountSelect").length){
		 
		$('#yahooLogin').hide();
		$('#kyusaiRequest').show();
			
		$('#accountSelect #no').click(function(){
			$(this).addClass("current");
			$('#accountSelect #yes').removeClass("current");
				
			$('#kyusaiRequest').show();
			$('#yahooLogin').hide();

			//QPACEC 2014/5/30 ADD STA サイトリニューアル対応
			$('#accountSelectFlg').val('0');
			//QPACEC 2014/5/30 ADD END サイトリニューアル対応
		});
		$('#accountSelect #yes').click(function(){
			$(this).addClass("current");
			$('#accountSelect #no').removeClass("current");
			
			$('#yahooLogin').show();
			$('#kyusaiRequest').hide();

			//QPACEC 2014/5/30 ADD STA サイトリニューアル対応
			$('#accountSelectFlg').val('1');
			//QPACEC 2014/5/30 ADD END サイトリニューアル対応
		});
	 }
     //QPACEC 2014/5/30 ADD STA サイトリニューアル対応
     if ($('#accountSelectFlg').val() == '1'){
    	 $('#accountSelect #yes').trigger("click");
     }
     //QPACEC 2014/5/30 ADD END サイトリニューアル対応

});


//QPACEC 2014/5/26 UPD STA サイトリニューアル対応
//$(document).ready(function() {
$(function(){	
//QPACEC 2014/5/26 UPD END サイトリニューアル対応
// カード情報の表示・非表示判定
	showCardSelection();
	showDestinationInfo();
	showDeliveryInfo();
	$('[name^="day-appoint"]:radio:checked').each(function() {
		activateDayAppointInput($(this).attr('id'));
	});
	showNoshiInfo();

    // 冷凍カレンダ処理
	$('input[name="coolDeliveryFlg"]:radio').click(function() {

		var vName = "coolDeliveryAppointedDate";
		var className = "cool_calendar";
		var calName = "coolDeliveryAppointedDate";

		$('.' + className).remove();
		if ($('input[name="coolDeliveryFlg"]:checked').attr('id')=='cool-day-appoint-f-yes') {
			var start_ymd = $('#coolDeliveryDate').attr('value');
			// QPACEC ADD START IN 2014/02/26 消費税対応
			// 輸送日数
			var yusoCnt  = $('#coolYusoCount').attr('value');
			if (yusoCnt == null || yusoCnt =="") {
				yusoCnt = "0";
			}
			// QPACEC ADD END IN 2014/02/26 消費税対応
			// QPACEC UPD START IN 2014/02/26 消費税対応
			// fnc_dispCal_qpac(vName,className,start_ymd,14);
			fnc_dispCal_qpac(vName,className,start_ymd, yusoCnt, 14);
			// QPACEC UPD END IN 2014/02/26 消費税対応
		} else {
			$('.' + className).remove();
			fnc_clear(calName);
		}
	});
	
    // 冷凍カレンダ処理(日付クリック)　
	$('input[name="coolDeliveryAppointedDate_year"]:text').click(function() {
		showCoolCalendar();
	});
	$('input[name="coolDeliveryAppointedDate_month"]:text').click(function() {
		showCoolCalendar();
	});
	$('input[name="coolDeliveryAppointedDate_day"]:text').click(function() {
		showCoolCalendar();
	});

    // 常温カレンダ処理
	$('input[name="normalDeliveryFlg"]:radio').click(function() {

		var vname = "normalDeliveryAppointedDate";
		var className = "normal_calendar";
		var calName = "normalDeliveryAppointedDate";

		$('.' + className).remove();
		if ($('input[name="normalDeliveryFlg"]:checked').attr('id')=='normal-day-appoint-f-yes') {
			var start_ymd = $('#normalDeliveryDate').attr('value');
			// QPACEC ADD START IN 2014/02/26 消費税対応
			// 輸送日数
			var yusoCnt  = $('#normalYusoCount').attr('value');
			if (yusoCnt == null || yusoCnt =="") {
				yusoCnt = "0";
			}
			// QPACEC ADD END IN 2014/02/26 消費税対応
			// QPACEC UPD START IN 2014/02/26 消費税対応
			// fnc_dispCal_qpac(vname,className,start_ymd,14);
			fnc_dispCal_qpac(vname,className,start_ymd, yusoCnt, 14);
			// QPACEC UPD END IN 2014/02/26 消費税対応
		} else {
			$('.' + className).remove();
			fnc_clear(calName);
		}
	});
	
    // 常温カレンダ処理(日付クリック)　
	$('input[name="normalDeliveryAppointedDate_year"]:text').click(function() {
		showNormalCalendar();
	});
	$('input[name="normalDeliveryAppointedDate_month"]:text').click(function() {
		showNormalCalendar();
	});
	$('input[name="normalDeliveryAppointedDate_day"]:text').click(function() {
		showNormalCalendar();
	});

	// LPカレンダ処理
	$('input[name="deliveryFlg"]:radio').click(function() {
		var vName = "deliveryHopeDate";
		var className = "lpcalendar";
		var calName = "deliveryHopeDate";

		$('.' + className).remove();

		if ($('input[name="deliveryFlg"]:checked').attr('id')=='delivery-f-yes') {
			var start_ymd = $('#shortDeliveryDate').attr('value');
			// QPACEC ADD START IN 2014/02/26 消費税対応
			// 輸送日数
			var yusoCnt  = $('#yusoCount').attr('value');
			if (yusoCnt == null || yusoCnt =="") {
				yusoCnt = "0";
			}
			// QPACEC ADD END IN 2014/02/26 消費税対応
			// QPACEC UPD START IN 2014/02/26 消費税対応
			// fnc_dispCal_qpac(vname,className,start_ymd,14);
			fnc_dispCal_qpac(vName,className,start_ymd, yusoCnt, 14);
			// QPACEC UPD END IN 2014/02/26 消費税対応
		} else {
			$('.' + className).remove();
			fnc_clear(calName);
			var start_ymd = $('#shortDeliveryDate').attr('value');
			fnc_setdayoftime(start_ymd);
		}
	});

	// LPカレンダ処理(日付クリック)　
	$('input[name="deliveryHopeDate_year"]:text').click(function() {
		showLpCalendar();
	});
	$('input[name="deliveryHopeDate_month"]:text').click(function() {
		showLpCalendar();
	});
	$('input[name="deliveryHopeDate_day"]:text').click(function() {
		showLpCalendar();
	});

// 支払い方法の判定
	$('input[name="payinfo"]:radio').click(function() {
		showCardSelection();
	});
	$('input[name="cardnum"]:radio').click(function() {
		showCardInfo();
	});

// お届け先入力欄の判定
	$('#destination').change(function() {
		showDestinationInfo();
	});

// 定期同根の判定
	$('#this-once').click(function() {
		showDeliveryInfo();
	});

// お届け日指定の判定
	$('[name^="day-appoint"]:radio').change(function() {
		activateDayAppointInput($(this).attr('id'));
	});

// のし設定の判定
	$('input[name^="wrappingpaper"]:radio').click(function() {
		showNoshiInfo();
	});

// カード情報の表示・非表示
	function showCardSelection() {
			if ($('input[name="payinfo"]:checked').attr('id')=='creditcard') {
				$('#creditcard_info_1,#creditcard_info_lp').slideDown('slow');
				showCardInfo()
			} else {
				$('#creditcard_info_1,#creditcard_info_lp').hide();
				showCardInfo()
			}
	}
	function showCardInfo() {
//			if ($('input[name="payinfo"]:checked').attr('id')=='creditcard' && $('input[name="cardnum"]:checked').attr('id')=='newcard') {
			if ($('input[name="payinfo"]:checked').attr('id')=='creditcard' && $('input[name="cardnum"]:checked').size() > 0) {
				$('#creditcard_info_2,#creditcard_info_lp_2').slideDown('slow');
			} else {
				$('#creditcard_info_2,#creditcard_info_lp_2').hide();
			}
	}

// お届け先入力欄の表示・非表示
	function showDestinationInfo() {
		if ($('#destination').val()=='new_destination') {
			$('#destination_info').slideDown('slow');
		} else {
			$('#destination_info').hide();
		}
	}

// お届け日時の表示・非表示
	function showDeliveryInfo() {
		if ($('#delivery_info').css('display') == 'block') {
			$('#delivery_info').hide();
		} else {
			$('#delivery_info').slideDown('slow');
		}
		return;
	}

// お届け日の入力欄disable ON/OFF
	function activateDayAppointInput(id) {
		inputId = id.replace(/-(yes|no)$/,'').replace(/(_[0-9]+|-[a-z])$/, '-input$1');
		if (!inputId.match(/-input/)) return;
		if ($('input[name="'+$('#'+id).attr('name')+'"]:checked').attr('id').match(/-no$/)) {
			$('#'+inputId).attr('disabled', 'disabled');
		} else {
			$('#'+inputId).removeAttr('disabled');
		}
		return;
	}

	// 冷凍カレンダー表示(日付クリック)
	function showCoolCalendar() {
		if ($('input[name="coolDeliveryFlg"]:checked').attr('id')=='cool-day-appoint-f-yes') {
			var vName = "coolDeliveryAppointedDate";
			var className = "cool_calendar";

			$('.' + className).remove();
			var start_ymd = $('#coolDeliveryDate').attr('value');
			// QPACEC ADD START IN 2014/02/26 消費税対応
			// 輸送日数
			var yusoCnt  = $('#normalYusoCount').attr('value');
			if (yusoCnt == null || yusoCnt =="") {
				yusoCnt = "0";
			}
			// QPACEC ADD END IN 2014/02/26 消費税対応
			// QPACEC UPD START IN 2014/02/26 消費税対応

			// fnc_dispCal_qpac(vname,className,start_ymd,14);
			fnc_dispCal_qpac(vName,className,start_ymd, yusoCnt, 14);
			// QPACEC UPD END IN 2014/02/26 消費税対応
		}
	}
	
	// 常温カレンダー表示(日付クリック)
	function showNormalCalendar() {
		if ($('input[name="normalDeliveryFlg"]:checked').attr('id')=='normal-day-appoint-f-yes') {
			var vname = "normalDeliveryAppointedDate";
			var className = "normal_calendar";
			
			$('.' + className).remove();
			var start_ymd = $('#normalDeliveryDate').attr('value');
			// QPACEC ADD START IN 2014/02/26 消費税対応
			// 輸送日数
			var yusoCnt  = $('#normalYusoCount').attr('value');
			if (yusoCnt == null || yusoCnt =="") {
				yusoCnt = "0";
			}
			// QPACEC ADD END IN 2014/02/26 消費税対応
			// QPACEC UPD START IN 2014/02/26 消費税対応
			// fnc_dispCal_qpac(vname,className,start_ymd,14);
			fnc_dispCal_qpac(vName,className,start_ymd, yusoCnt, 14);
			// QPACEC UPD END IN 2014/02/26 消費税対応
		}
	}
	
	// LPカレンダー表示(日付クリック)
	function showLpCalendar() {
		if ($('input[name="deliveryFlg"]:checked').attr('id')=='delivery-f-yes') {
			var vName = "deliveryHopeDate";
			var className = "lpcalendar";
	
			$('.' + className).remove();
			var start_ymd = $('#shortDeliveryDate').attr('value');
			// QPACEC ADD START IN 2014/02/26 消費税対応
			// 輸送日数
			var yusoCnt  = $('#yusoCount').attr('value');
			if (yusoCnt == null || yusoCnt =="") {
				yusoCnt = "0";
			}
			// QPACEC ADD END IN 2014/02/26 消費税対応
			// QPACEC UPD START IN 2014/02/26 消費税対応
			// fnc_dispCal_qpac(vname,className,start_ymd,14);
			fnc_dispCal_qpac(vName,className,start_ymd, yusoCnt, 14);
			// QPACEC UPD END IN 2014/02/26 消費税対応
		}
	}

	$('#closeDestination').click(function() {self.parent.tb_remove()});
	$('#setDestination').click(tb_remove);
	
// のし設定の表示・非表示
	function showNoshiInfo() {
		$('input[name^="wrappingpaper"]').each(function() {
			if ($('input[name="'+$(this).attr('name')+'"]:checked').attr('id').match(/^wrapping/)) {
				$('#'+$(this).attr('name')+'_info').slideDown('slow');
			} else {
				$('#'+$(this).attr('name')+'_info').hide();
			}
		});
	}

});

function yearView(){
	myDate = new Date();
	myYear = myDate.getFullYear();
	document.write(myYear);
}


