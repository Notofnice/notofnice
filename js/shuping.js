$(document).ready(function(){
    
    //获得书评数据
    $.ajax({
      url: 'http://localhost:8080/Web_Sakura/Shuping_PC',
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
      var book1='';
      var bookmessage = eval(data)
      $.each(bookmessage,function(n,value){
        var div='';
        div+="<div class=\"shuping\">"+
                "<img class=\"book_img\" src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
                "<div>"+
                    "<div class=\"yonghu\">"+
                        "<div class=\"yonghu_book\">阅读《"+bookmessage[n].BKNAME+"》</div>"+
                        "<img src=\"../image/"+bookmessage[n].YHIMG+"\" alt=\"\">"+
                        "<div class=\"yonghu_name\">"+bookmessage[n].YHNAME+"</div>"+
                        "<div class=\"yonghu_riqi\">"+bookmessage[n].REDATE+"</div>"+
                        "</div>"+
                        "<div class=\"shuping_text\">"+bookmessage[n].RECONTEXT+"</div>"+
                        "<div class=\"xiangqing\"><a href=\"shupingxiangqing.html?reviewid="+bookmessage[n].REID+"\"><button>详情</button></a></div>"+
                "</div>"+
            "</div>";
        book1+=div;
      });
      $(".book_shuping").append(book1);
    };
    function LoadFunction2() {
    };
    function erryFunction2(error) {
        alert("获取书评数据失败");
    };
});