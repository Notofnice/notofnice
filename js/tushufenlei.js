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

$(document).ready(function(){

    //获得书籍数据
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
      var book3='';
      var book4='';
      var book5='';
      var bookmessage = eval(data)

      $.each(bookmessage,function(n,value){
        if(bookmessage[n].BKCLASS==="小说")
        {
            var div='';
            div+="<div class=\"book\">"+"<a href=\"tushuxiangqing.html?bookid="+bookmessage[n].BKID+"\">"+
                    "<img src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
                    "<div class=\"book_name\">"+bookmessage[n].BKNAME+"</div>"+
                    "<div class=\"book_zuozhe\">"+bookmessage[n].BKAUT+"</div>"+"</a>"+
              "</div>"
            book+=div;
        }
        if(bookmessage[n].BKCLASS==="文学")
        {
            var div='';
            div+="<div class=\"book\">"+"<a href=\"tushuxiangqing.html?bookid="+bookmessage[n].BKID+"\">"+
                    "<img src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
                    "<div class=\"book_name\">"+bookmessage[n].BKNAME+"</div>"+
                    "<div class=\"book_zuozhe\">"+bookmessage[n].BKAUT+"</div>"+"</a>"+
              "</div>"
            book2+=div;
        }
        if(bookmessage[n].BKCLASS==="人文社科")
        {
            var div='';
            div+="<div class=\"book\">"+"<a href=\"tushuxiangqing.html?bookid="+bookmessage[n].BKID+"\">"+
                    "<img src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
                    "<div class=\"book_name\">"+bookmessage[n].BKNAME+"</div>"+
                    "<div class=\"book_zuozhe\">"+bookmessage[n].BKAUT+"</div>"+"</a>"+
              "</div>"
            book3+=div;
        }
        if(bookmessage[n].BKCLASS==="经济管理")
        {
            var div='';
            div+="<div class=\"book\">"+"<a href=\"tushuxiangqing.html?bookid="+bookmessage[n].BKID+"\">"+
                    "<img src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
                    "<div class=\"book_name\">"+bookmessage[n].BKNAME+"</div>"+
                    "<div class=\"book_zuozhe\">"+bookmessage[n].BKAUT+"</div>"+"</a>"+
              "</div>"
            book4+=div;
        }
        if(bookmessage[n].BKCLASS==="科技科普")
        {
            var div='';
            div+="<div class=\"book\">"+"<a href=\"tushuxiangqing.html?bookid="+bookmessage[n].BKID+"\">"+
                    "<img src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
                    "<div class=\"book_name\">"+bookmessage[n].BKNAME+"</div>"+
                    "<div class=\"book_zuozhe\">"+bookmessage[n].BKAUT+"</div>"+"</a>"+
              "</div>"
            book5+=div;
        }
        
      });
      $(".books[id='xiaoshuo'] .all_books").append(book);
      $(".books[id='wenxue'] .all_books").append(book2);
      $(".books[id='renwen'] .all_books").append(book3);
      $(".books[id='jingji'] .all_books").append(book4);
      $(".books[id='keji'] .all_books").append(book5);
      
    };
    function LoadFunction2() {
    };
    function erryFunction2(error) {
        alert("获取书籍数据失败");
    };
});