/*---------------------------------------------
	共通
  ---------------------------------------------*/

$(window).load(function () {
	//URL anchor scrollEvent
	var data_chara = "";
	data_chara = location.href.split("?tab")[1];
	if(data_chara != null){
		//
		$("#compTab").css("display","block");
		$("#itemTab").css("display","none");			
		
		$("#headTab .showComp img").attr("src",$("#headTab .showComp img").attr("src").replace(/^(.+)_off(\.[a-z]+)$/, "$1_on$2"));	
		$("#headTab .showItem img").attr("src",$("#headTab .showItem img").attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1_off$2"));
		$("#bottomTab .showComp img").attr("src",$("#bottomTab .showComp img").attr("src").replace(/^(.+)_off(\.[a-z]+)$/, "$1_on$2"));	
		$("#bottomTab .showItem img").attr("src",$("#bottomTab .showItem img").attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1_off$2"));	
	}
	
	
	
	
	//=================================================

	//タブレット用glovalnav
	var ua = navigator.userAgent;
	if(ua.indexOf('iPad') != -1 || ua.indexOf('Android') != -1){
	//リンク削除
	$("#globalNav li span.link").each(function(){
		$(this).unwrap();
	});
	//タップした時、メニューが表示
	$("#globalNav li").click(function(){
		$(".subNav").css("display","none");
			//同じメニューを再タップした時、メニューを非表示
			if ($(this).hasClass("selectMenu")) {
				//on
				$(this).removeClass("selectMenu");
			}
			else{
				$("#globalNav li").removeClass("selectMenu");
				$(this).addClass("selectMenu");
				$(".subNav",this).css("display","block");				
		}
	});
		}else {		  
			//PC用globalnav
			// 2014/6/11 ADD STA サイトリニューアル対応
			if(!$("#globalNav")){
				return;
			}
			// 2014/6/11 ADD END サイトリニューアル対応
			$("#globalNav li").hover(
				function(){
					$(this).find(".subNav").show();
					$("#globalNav li a").removeClass("select");
					$(this).addClass("select");
					},
				function(){
					$(this).find(".subNav").hide();
					$(this).removeClass("select")			
		});
	}


	//タブ背景切替
	// 2014/6/11 ADD STA サイトリニューアル対応
	if(!$("#footerNav01")){
		return;
	}
	// 2014/6/11 ADD END サイトリニューアル対応
	$("#footerNav01").addClass("tab01");
	
	$(".fnav01").click(function() {
		$("#footerNav01").removeClass();
		$("#footerNav01").addClass("tab01");	
	});
	$(".fnav02").click(function() {
		$("#footerNav01").removeClass();
		$("#footerNav01").addClass("tab02");		
	});
	$(".fnav03").click(function() {
		$("#footerNav01").removeClass();
		$("#footerNav01").addClass("tab03");		
	});


	//タブコンテンツ切替
	$(".tab li").click(function() {
		var num = $(".tab li").index(this);
		$(".tabContents").addClass("disnon");
		$(".tabContents").eq(num).removeClass("disnon");
		$(".tab li").removeClass("select");
		$(this).addClass("select")
	});

	
	//===========================================
	//商品詳細タブ
	//===========================================
	if($(".pDetail").length){
		$(".ptab li").click(function() {
			
			var num = $(".ptab li").index(this);
			$(".ptabContents").addClass("disnon");
			$(".ptabContents").eq(num).removeClass("disnon");
			$(".ptab li").removeClass("select");
			$(this).addClass("select");
			/**/
			$(".ptab_btm li").removeClass("select");
			$(".ptab_btm li").eq(num).addClass("select");
		});
		
		/**/
		$(".ptab_btm li").click(function() {
			var num = $(".ptab_btm li").index(this);
			$(".ptabContents").addClass("disnon");
			$(".ptabContents").eq(num).removeClass("disnon");
			$(".ptab_btm li").removeClass("select");
			$(this).addClass("select");
			/**/
			$(".ptab li").removeClass("select");
			$(".ptab li").eq(num).addClass("select");
		});
	}


	//ページ内リンク
	$("a[href^='#']").click(function(){
	 $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');
	 return false;
	 })


	// pageTop
	var scrollbtn = $('.pageTop a');
		scrollbtn.hide();
		if ($(this).scrollTop() > 200) { 
		scrollbtn.fadeIn(); 
		} else { 
		scrollbtn.fadeOut(); 
		}
		$(window).scroll(function () {
		if ($(this).scrollTop() > 200) { 
		scrollbtn.fadeIn(); 
		} else { 
		scrollbtn.fadeOut(); 
		}
	});


	//ヘッダーテキストボックス
	var textBox = jQuery("input:text");
	
	textBox.focus(function(){
		if(this.value == this.defaultValue){
			jQuery(this).val('');
		}
	}).blur(function(){
	
		if(jQuery(this).val() == ''){
			jQuery(this).val(this.defaultValue)
		}
	});
	
	
	//FAQ TILE 高さ揃え
	if($(".faqUser").length){
		$(".faqUser dl dd.heightLine-faq1").tile();
		
		if($(".colorLink").length){
			$(".faqUser dl .colorLink").tile();
		}
	}
	
});


/*==============================================*/
//Footerタブ切り替え (aojiru,skin_care,health)
/*==============================================*/
function changeFooterTab(tempobj){
	
	if(tempobj == "aojiru"){
		//no change
	}
	else if(tempobj == "skin_care"){
		$("#footerNav01").removeClass("tab01");
		$("#footerNav01").addClass("tab02");
		
		$("#footerNav01 .tab li").removeClass("select");
		$("#footerNav01 .tab li#fnavSkincare").addClass("select");
		
		$("#fnavAojiruContents").addClass("disnon");
		$("#fnavSkincareContents").removeClass("disnon");
		$("#fnavHealthContents").addClass("disnon");
		
	}
	else if(tempobj == "health"){
		$("#footerNav01").removeClass("tab01");
		$("#footerNav01").addClass("tab03");
		
		$("#footerNav01 .tab li").removeClass("select");
		$("#footerNav01 .tab li#fnavHealth").addClass("select");
		
		$("#fnavAojiruContents").addClass("disnon");
		$("#fnavSkincareContents").addClass("disnon");
		$("#fnavHealthContents").removeClass("disnon");
	}
}



function yearView(){
	myDate = new Date();
	myYear = myDate.getFullYear();
	document.write(myYear);
}

//現サイト美容液ファンデ（下記URL）のページのスクリプトを参考に改変。
//http://www.kyusai.co.jp/products/foundation.html
//
// 対象の select タグに id を指定して、関数呼び出し時のを指定してください。
// ページ内に複数 select タグがある場合はid名が重複しないようにしてください。
// 例）itemId1、itemId2、.......
//
// ◆使用例（色白肌用、selectタグのidが"itemId"の場合）
// 　今回のみ　　　　　：goCart("itemId");
// 　定期（毎月の場合）：goCart("itemId", 1);
// 　定期（隔月の場合）：goCart("itemId", 2);
// 対象のボタンのリンクに<a href="javascript:goCart("itemId");">〜〜</a>のように記載


function goCart(itemId, teikiFlag) {
	if( document.getElementById(itemId).value != 0 ) {
		var teikiParam = "";
		if (teikiFlag == 1 || teikiFlag == 2) {
			teikiParam = "&courseKbn="+teikiFlag;
		}
		location.href="/front/app/catalog/detail/addcart?commodityCode="+document.getElementById(itemId).value+teikiParam;
	} else {
		alert("色をお選びください");
	}
}

function goCart(itemId2, teikiFlag) {
	if( document.getElementById(itemId2).value != 0 ) {
		var teikiParam = "";
		if (teikiFlag == 1 || teikiFlag == 2) {
			teikiParam = "&courseKbn="+teikiFlag;
		}
		location.href="/front/app/catalog/detail/addcart?commodityCode="+document.getElementById(itemId2).value+teikiParam;
	} else {
		alert("色をお選びください");
	}
}
