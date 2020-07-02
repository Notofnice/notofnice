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

$(document).ready(function(){

    //获得推荐书籍数据
    $.ajax({
      url: 'http://localhost:8080/Web_Sakura/Xinshu_PC',
      type:'get',
      data:{},
      async:false,
      cache: false,
      beforeSend: LoadFunction2, //加载执行方法  
      error: erryFunction2,  //错误执行方法  
      success: succFunction2 //成功执行方法  
    });
    function succFunction2(data) {
      console.log(data);
      var book='';
      var book2='';
      var bookmessage = eval(data)
      //首页新书速递
      $.each(bookmessage,function(n,value){
        if(bookmessage[n].BKID==="11")
        {
            return false;
        }
        var div='';
        div+="<div class=\"book\">"+"<a href=\"tushuxiangqing.html?bookid="+bookmessage[n].BKID+"\">"+
                    "<img src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
                    "<div class=\"booktitle\">"+bookmessage[n].BKNAME+"</div>"+
                    "<div class=\"zuozhe\">"+bookmessage[n].BKAUT+"</div>"+"</a>"+
              "</div>"
        book+=div;
      });
      $(".books").append(book);

      //首页畅销图书榜
      $.each(bookmessage,function(n,value){
        if(bookmessage[n].BKID==="10")
        {
            return false;
        }
        var div='';
        div+="<li>"+(n+1)+".<div class=\"paihangbang_bookname\">"+bookmessage[n].BKNAME+"</div>"+"<a href=\"tushuxiangqing.html?bookid="+bookmessage[n].BKID+"\">"+"<div class=\"paihangbang_buy\">去购买</div>"+"</a>"+"</li>";
        book2+=div;
      });
      $(".paihangbang_list").append(book2);
    };
    function LoadFunction2() {
    };
    function erryFunction2(error) {
        alert("获取书籍数据失败");
    };
});