
$(function(){
	$("#cola_slide ul").bxSlider();
	
	/**/
	$(".btn_open p").click(function() {
		$(this).parent().next().slideToggle();
	});
	
	
	/**/
	if($("#pop").length){
	$('#pop').flexslider({
			animation: "slide",
			animationLoop: false,
			slideshow: false,
			controlNav: false,
			itemWidth: 280,
			itemMargin: 0,
			minItems:2,
			maxItems: 2
		});
	}
	
});

$(document).ready(function(e) {
	$('img[usemap]').rwdImageMaps();
});


(function() {
	var ind = $('#bothPageCount');

	$('#pop').flickSimple({
		snap: 300,
		vertical: false,
		horizontal: true,
		lock: true,
		paginate: 'x'
	});
	var fs = $('#pop').flickSimple();
	fs.onChange();
	
	$('#bothNowPaginate').html( fs.paginate );
	
	$('#bothPrevBtn').click( function() {
		fs.prevPage(1);
		return false;
	});
	$('#bothNextBtn').click( function() {
		fs.nextPage(1);
		return false;
	});

	$('#toggleDisabled').bind('click', function(e) {
		fs.disabled = !fs.disabled;
	});
})();

