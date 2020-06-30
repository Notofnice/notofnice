var index2 = 0;/*初始化一个变量 指向下标*/
//点击点
$(".tab-btn .btn").click(function () {
    index2 = $(this).index();//获取点击该元素下标
    $(this).addClass("active").siblings().removeClass("active");
    $(".item").eq(index2).fadeIn().siblings().fadeOut();
});
//点击切换效果
$(".lr-tab .right").click(function () {
    index2 ++;
    if (index2 >4){ index2 = 0;}
    $(".item").eq(index2).fadeIn().siblings().fadeOut();
    $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");
});
$(".lr-tab .left").click(function () {
    index2 --;
    if(index2 < 0){index2 = 4;}
    $(".item").eq(index2).fadeIn().siblings().fadeOut();
    $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");
});
var time2 = setInterval(function () {
    index2 ++;
    if (index2 >4){ index2 = 0;}
    $(".item").eq(index2).fadeIn().siblings().fadeOut();
    $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");
},4000); //定时器 重复

$(function () {
	var speed = 400;//滚动速度
	var h = document.documentElement.clientWidth;
	//回到顶部
	$("#back_up").click(function () {
		$('html,body').animate({
			scrollTop: '0px'
		},speed);			
	});
});