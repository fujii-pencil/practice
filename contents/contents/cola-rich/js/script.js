$(window).load(function() {
	
	//スライド
	if($(".slide").length){
		$(".slide ul").bxSlider({
			pagerCustom: '.slide .thumbnail',
			controls: false,
			auto: true,
			pause: 5000,
			speed: 1000
		});
	}


	if($(".voiceBook").length){
		$(".voiceBook li").tile(2);
	}

	if($(".recommendList").length){
		$(".recommendList li").tile(6);
	}

	if($(".series01").length){
		$(".series01 dl").tile(3);
	}

	if($(".trouble").length){
		$(".trouble li:odd").addClass("flR");
	}
	
	if($(".recommendList").length){
		$(".recommendList li").tile(6);
	}
	
	$(".itemList").each(function() {
		$(this).children().children("li").children(".itemData1").tile(2);
		$(this).children().children("li").children(".itemData2").tile(2);
	});
	
	$(".itemList li:nth-child(2n)").css({
		"width":"332px",
		"border-left":"none"
	});
	
	
	/* タブ切替 */
	$(".showItem").click(function(){
		$('html, body').scrollTop(0);
		$("#compTab").css("display","none");
		$("#itemTab").css("display","block");		
		
		$("#headTab .showItem img").attr("src",$("#headTab .showItem img").attr("src").replace(/^(.+)_off(\.[a-z]+)$/, "$1_on$2"));	
		$("#headTab .showComp img").attr("src",$("#headTab .showComp img").attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1_off$2"));	
		$("#bottomTab .showItem img").attr("src",$("#bottomTab .showItem img").attr("src").replace(/^(.+)_off(\.[a-z]+)$/, "$1_on$2"));	
		$("#bottomTab .showComp img").attr("src",$("#bottomTab .showComp img").attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1_off$2"));
		
		if($(".voiceBook").length){
			$(".voiceBook li").tile(2);
		}
			
	});
	
	$(".showComp").click(function(){
		$('html, body').scrollTop(0);
		$("#compTab").css("display","block");
		$("#itemTab").css("display","none");			
		
		$("#headTab .showComp img").attr("src",$("#headTab .showComp img").attr("src").replace(/^(.+)_off(\.[a-z]+)$/, "$1_on$2"));	
		$("#headTab .showItem img").attr("src",$("#headTab .showItem img").attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1_off$2"));
		$("#bottomTab .showComp img").attr("src",$("#bottomTab .showComp img").attr("src").replace(/^(.+)_off(\.[a-z]+)$/, "$1_on$2"));	
		$("#bottomTab .showItem img").attr("src",$("#bottomTab .showItem img").attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1_off$2"));	
	});
	
		
});