/*---------------------------------------------
	TOP
  ---------------------------------------------*/

$(function() {


	//TOPスライド
	$(".slide ul").bxSlider({
		pagerCustom: '.slide .thumbnail',
		controls: true,
		auto: true,
		pause: 5000,
		speed: 1000
	});


	//carouFredSel
	$(".carousel ul").carouFredSel({
		auto       : 5000,
		width      : '100%',
		prev: '#btnPrev',
		next: '#btnNext',
		width      : '740px',
		items      : {
			visible: 3
		},
		scroll     : 1
	});


	//高さ揃え
	$(".topPickUp .detailBox dl").tile();

     //インフォメーションリスト
	$('.topNews li:odd').addClass('line');

});