//轮播图
$(".banner1").banner({
	aimg:$(".banner1").find("img"),		
	left:$(".banner1").find("#left"),	
	right:$(".banner1").find("#right"),	
	isList:true,	
	autoPlay:true,	
	delayTime:2000,	
	moveTime:100,
	index:0
});

//选项卡
$(".biaoti li").click(function(){
	$(".biaoti li").css({
		color:""
	})
	$(".biaoti li").eq($(this).index()).css({
		color:"red"
	})
	$(".text .cont").css({
		display:"none"
	})
	$(".text .cont").eq($(this).index()).css({
		display:"block"
	})	
});

//楼层
$(".btns").children("li").click(function(){
	var index = $(this).index();
	var l = $(".floor").eq(index);
	var t = l.offset().top;
	$("html").stop().animate({
		scrollTop:t
	})
})