var flag=true;
var mySwiper = new Swiper ('.swiper-container', {
	  	  direction:'vertical',
		  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		  }, 
		  onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		  }, 

		  onSlideChangeStart: function(swiper){
      		if(swiper.activeIndex >1 && swiper.activeIndex <6)
      			mySwiper.lockSwipeToNext();
    	  }
	  }) 

	  $("#lock1").click(function(){
	  	mySwiper.unlockSwipes();
	  	mySwiper.slideNext();
	  });

	   $("#lock2").click(function(){
	  	mySwiper.unlockSwipes();
	  	mySwiper.slideNext();
	  }); 

	   $("#lock3").click(function(){
	  	mySwiper.unlockSwipes();
	  	mySwiper.slideNext();
	  });   

	   $("#lock4").click(function(){
	  	mySwiper.unlockSwipes();
	  	mySwiper.slideNext();
	  }); 



	  $("#start").click(function(){
	  	var r = Math.floor(Math.random()*360+360*3);
	  	var x = 0;
	  	if(flag){
	  		flag=false;
	  		var timer = setInterval(function(){
		  		x++;
		  		if(x == r) {
		  			clearInterval(timer);
		  			flag=true;
		  		}
		  		$("#dial").css({
		  			"transform" : "rotate("+x+"deg)",
		  		});
	  		},5);	
	  	}else{
	  		alert("结果还没出，请稍等");
	  	}
	  }); 


	  $("#ret").click(function(){
	  	mySwiper.slideTo(0, 1000, true);

	  });     