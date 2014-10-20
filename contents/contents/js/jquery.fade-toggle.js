$(document).ready(function(){
	//Hide (Collapse) the toggle containers on load
	$(".toggle_container").hide(); 
	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	/*
	$(".trigger").click(function(){
      $(this).toggleClass("active").next().animate({
        opacity: 'toggle',
        height:  'toggle'
		}, 'normal');	
	  	return false; //Prevent the browser jump to the link anchor
	});
	*/
	var $trigger = $(".trigger");
	var $toggle_container = $(".toggle_container");
	var anchors = new Array();
	for($i = 0; $i < $trigger.size(); $i++){
		var offset = $trigger.eq($i).offset().top;
		anchors.push(offset);
	}
	var target = 0;
	$toggle_container.eq(0).show();
	$trigger.eq(0).toggleClass("active");
	$trigger.each(function(){
			$(this).click(function(){
				var index = $trigger.index(this);
				if($(this).hasClass("active")){
					$(this).toggleClass("active").next().animate({opacity: 'toggle',height:  'toggle'}, 'normal');
				}else{
					for($i = 0; $i < $trigger.size(); $i++){
						if( $trigger.eq($i).hasClass("active")){
							$trigger.eq($i).toggleClass("active").next().animate({opacity: 'toggle',height:  'toggle'}, {duration:'normal'});
						}
					}
					$(this).toggleClass("active").next().animate({opacity: 'toggle',height:  'toggle'}, {duration:'normal',complete: function(){$(this).toggleClass("active").next().css("display","block")}});
				}
				$("html, body").animate({scrollTop:anchors[index]}, {duration:1000});
	  			return false; //Prevent the browser jump to the link anchor
			});
	});
});
