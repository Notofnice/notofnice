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

$(document).ready(function(){
    $("#exit").click(function(){
      var expdate = new Date();   //初始化时间
      expdate.setTime(expdate.getTime() + -1);   //时间单位毫秒
      document.cookie = "name= "+";expires="+expdate.toGMTString()+";path=/";
      window.location.href="index.html";
    });

    //获得用户数据
    var name = getCookie("name");
    $.ajax({
      url: 'http://localhost:8080/Web_Sakura/Yonghu_Message',
      type:'get',
      data:{
          'loginName':name,
      },
      async:false,
      cache: false,
      beforeSend: LoadFunction, //加载执行方法  
      error: erryFunction,  //错误执行方法  
      success: succFunction //成功执行方法  
    });
    function succFunction(data) {
        console.log(data);
        var name = data.name;
        var phone = data.phone;
        var address = data.address;
        var email = data.email;
        $(".yonghuming").html(name);
        $("#phone").html(phone);
        $("#address").html(address);
        $("#email").html(email);
      };
    function LoadFunction() {
    };
    function erryFunction() {
        alert("获取用户数据失败");
    };

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
      var bookmessage = eval(data)
      $.each(bookmessage,function(n,value){
        var div='';
        div+="<div class=\"book\">"+"<a href=\"tushuxiangqing.html?bookid="+bookmessage[n].BKID+"\">"+
                    "<img src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
                    "<div class=\"booktitle\">"+bookmessage[n].BKNAME+"</div>"+
                    "<div class=\"zuozhe\">"+bookmessage[n].BKAUT+"</div>"+"</a>"+
              "</div>"
        book+=div;
      });
      $(".books").append(book);
    };
    function LoadFunction2() {
    };
    function erryFunction2(error) {
        alert("获取书籍数据失败");
    };
});