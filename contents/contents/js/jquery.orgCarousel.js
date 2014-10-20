// JavaScript Document
$(function(){
	$('#carousel_frame').each(function(){
	var slideTime = 500;
	var delayTime = 5000;
	
	var $car_wid = $(this).width();
	var $car_hei = $(this).height();
	
	var $item_num = $(".carousel_item").size();
	var $item_wid_true = $(".carousel_item").width();
	var $item_wid_ma = parseInt($(".carousel_item").css("margin-right"));
	var $item_wid = $(".carousel_item").outerWidth(true);
    var $list = $("<ul></ul>");
	$("#indicator").append($list);
    for (var i = 0; i < $item_num; i++) {
          var counter = i+1;
          var $trackerBlip = $("<div>"+counter+"</div>");
          $trackerBlip = $("<div>&nbsp;</div>");
          $trackerBlip.addClass("tracker-individual-blip");
          $trackerBlip.css("cursor","pointer");
          $trackerBlip.attr("id","tracker-"+(i+1));
          var $listEntry = $("<li></li>");
          $listEntry.append($trackerBlip);
          $listEntry.css("float","left");
          $listEntry.css("list-style-type","none");
          $list.append($listEntry);
	}
    var updateTracker = function(oldCenter, newCenter) {
        // get selectors for the two trackers
        var $trackerContainer = $("#indicator");
        var $oldCenter = $trackerContainer.find("#tracker-"+oldCenter);
        var $newCenter = $trackerContainer.find("#tracker-"+newCenter);

        // change classes
        $oldCenter.removeClass("tracker-individual-blip-selected");
        $newCenter.addClass("tracker-individual-blip-selected");
    }

	$(".carousel").wrapAll('<div id="carousel_wrap"><div id="carousel_move"></div></div>');
	var $minuse_left = ($(this).width() - $item_wid_true ) / 2;
	$minuse_left = Math.floor($minuse_left);
	$("#carousel_wrap").css({
		width: ($car_wid),
		height: ($car_hei),
		position: "relative",
		overflow: "hidden"
	});
	var ulWidth = ($item_num)*($item_wid);
	$("#carousel_move").css({
		top: '0',
		left: -(ulWidth - $minuse_left),
		width: ((ulWidth)*3),
		height: ($car_hei),
		position: "absolute"
	});
	$("#carousel_wrap .carousel").css({
		width: (ulWidth),
		float: 'left'
	});
	$('#carousel_wrap .carousel').each(function(){
		$(this).clone().prependTo('#carousel_move');
		$(this).clone().appendTo('#carousel_move');
	});
	
	var newCenterItemNum = 1;
	var oldCenterItemNum = 1;
    updateTracker(oldCenterItemNum, newCenterItemNum);
	$("#carousel_prev").click(function(){
		clearInterval(setTimer);
		$('#carousel_move:not(:animated)').animate({left: '+=' + ($item_wid)},slideTime,function(){
			newCenterItemNum--;
			if(newCenterItemNum == 0){
				newCenterItemNum = $item_num;
			} 
        	updateTracker(oldCenterItemNum, newCenterItemNum);
			oldCenterItemNum--;
			if(oldCenterItemNum == 0){
				oldCenterItemNum = $item_num;
			} 
			carouselPosition();
		});
		timer();
	});
	$("#carousel_next").click(function(){
		clearInterval(setTimer);
		$('#carousel_move:not(:animated)').animate({left: '-=' + ($item_wid)},slideTime,function(){
			newCenterItemNum++;
			if(newCenterItemNum == $item_num + 1){
				newCenterItemNum = 1;
			}
        	updateTracker(oldCenterItemNum, newCenterItemNum);
			oldCenterItemNum++;
			if(oldCenterItemNum == $item_num + 1){
				oldCenterItemNum = 1;
			} 
			carouselPosition();
		});
		timer();
	});
	carouselPosition();
	function carouselPosition(){
		var ulLeft = parseInt($("#carousel_move").css('left'));
		var maskWidth = ($car_wid) - (($item_wid)*($item_num));
		if(ulLeft <= -(((ulWidth)*2)-$minuse_left)){
			$('#carousel_move').css({left:-(ulWidth - $minuse_left)});
		}else if(ulLeft == $minuse_left-$item_wid){
			$('#carousel_move').css({left:-(ulWidth - $minuse_left+$item_wid)});
		}
	}
	timer();
	function timer() {
		setTimer = setInterval(function(){
			$('#carousel_next').click();
		},delayTime);
	};
    function resizeContainer(e) {
			$("#carousel_frame").css("width","100%");
			$("#carousel_wrap").css("width","100%");
			$("#carousel_frame").css("margin","0 auto");
		var $car_wid = $("#carousel_frame").width();
    }
    $(window).bind("resize", resizeContainer);
});
});