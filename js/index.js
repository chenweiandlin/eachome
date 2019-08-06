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
		color:"#666"
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
});

//三级菜单
var ali = document.querySelectorAll(".ban-l ul li");
var obox = document.querySelector(".linlin");
for(var i=0;i<ali.length;i++){
	ali[i].onmouseover = function(){
		$(this).children(".linlin").css("display","block");
		this.style.background = "#fff";
		$(this).find("a").css("color","#333")
	};
	ali[i].onmouseout = function(){
		$(this).children(".linlin").css("display","none");
		this.style.background = "";
		$(this).find("a").css("color","#fff")
	}
};