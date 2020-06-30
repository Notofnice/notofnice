document.querySelectorAll('.text_title2').forEach(elem => {
    elem.onmouseenter =
    elem.onmouseleave = e => {
      const tolerance = 5;
      const left = 0;
      const right = elem.clientWidth;
      let x = e.pageX - elem.offsetLeft;
      if (x - tolerance < left) x = left;
      if (x + tolerance > right) x = right;
      elem.style.setProperty('--x', `${x}px`);
    };
  
  });

var index2 = 0;/*初始化一个变量 指向下标*/
  //点击点
$(".tab-btn .btn").click(function () {
    index2 = $(this).index();//获取点击该元素下标
    $(this).addClass("active").siblings().removeClass("active");
    $(".guanggao img").eq(index2).fadeIn().siblings().fadeOut();
});
//点击切换效果
$(".lr-tab .right").click(function () {
    index2 ++;
    if (index2 >4){ index2 = 0;}
    $(".guanggao img").eq(index2).fadeIn().siblings().fadeOut();
    $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");
});
$(".lr-tab .left").click(function () {
    index2 --;
    if(index2 < 0){index2 = 4;}
    $(".guanggao img").eq(index2).fadeIn().siblings().fadeOut();
    $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");
});
  var time2 = setInterval(function () {
    index2 ++;
    if (index2 >4){ index2 = 0;}
    $(".guanggao img").eq(index2).fadeIn().siblings().fadeOut();
    $(".tab-btn .btn").eq(index2).addClass("active").siblings().removeClass("active");
},4000); //定时器 重复