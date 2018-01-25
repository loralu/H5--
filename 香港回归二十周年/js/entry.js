var imgRoot = "images/";

$(document).ready(function() {
	loadAssets();
});

function loadAssets() {
	var assets = [
		"p0_bg.png"	
	];
	var preload = new createjs.LoadQueue();
	console.log(preload);
	preload.on('progress', handleProgress);
	preload.on('complete', handleComplete);
	preload.setMaxConnections(1);

	var $loadPage = $('.loading');
	var $loadnum = $('.loading .timeline');

	function handleProgress(e) {
		var num = parseInt(preload.progress * 100);
		$loadnum.html("" + num + "%");
  /*   $(".timeLineShow").css({width:num*5});*/
	};

	function handleComplete(e) {

		$loadPage.hide();//关闭loading
		 init();
	};
	preload.loadManifest(assets,true,imgRoot);
};

function init(){
	setupSwiper();
	setupButtons();
};
function setupButtons(){
	$(".shareBtn").on("touchstart", function(){
		$(".shareTSMC").removeClass("slideHide");
	});

	$(".shareTSMC").on("touchstart", function(){
		$(this).addClass("slideHide");
	})
};
function setupSwiper(){
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',
	    followFinger:false,
	    onSlideChangeEnd: function(swiper){
	    	$(".swiper-slide:not(.swiper-slide-active)").find("section").addClass("slideHide");
			$(".swiper-slide-active").find("section").removeClass("slideHide");
	    }
	});
	$("#toSlide3").click(function(){
		mySwiper.slideTo(2, 500, true);//切换到第3个slide，速度为0.5秒
	});
	$("#toSlide4").click(function(){
		mySwiper.slideTo(3, 500, true);
	});
	$("#toSlide5").click(function(){
		mySwiper.slideTo(4, 500, true);
	});
	$("#toSlide6").click(function(){
		mySwiper.slideTo(5, 500, true);
	});
}
