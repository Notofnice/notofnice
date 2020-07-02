$(document).ready(function(){
    var test =window.location.href;
    var bookid=test.split("?bookid=")[1];
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
      var book1='';
      var bookmessage = eval(data)
      $.each(bookmessage,function(n,value){
        if(bookmessage[n].BKID===bookid){
            var div='';
            div+="<img src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
            "<div>"+
                "<div class=\"zuozhe\">作者:"+bookmessage[n].BKAUT+"</div>"+
                "<div class=\"chubanshe\">出版社:"+bookmessage[n].BKCOM+"</div>"+
                "<div class=\"chupingfang\">出品方:"+bookmessage[n].BKCOM2+"</div>"+
                "<div class=\"yuanzhuoming\">原作名:"+bookmessage[n].BKNAME2+"</div>"+
                "<div class=\"yizhe\">译者:"+bookmessage[n].BKAUT2+"</div>"+
                "<div class=\"jiage\">价格:"+bookmessage[n].BKPRICE+"元</div>"+
            "</div>";
            book1+=div;
            $(".bookname").append(bookmessage[n].BKNAME);
            $(".message_bottom").append(book1);
            $(".jianjie").append(bookmessage[n].BKW);
            return false;
        }
        
      });
      
    };
    function LoadFunction2() {
    };
    function erryFunction2(error) {
        alert("获取书籍数据失败");
    };

    //获得书评数据
    $.ajax({
      url: 'http://localhost:8080/Web_Sakura/Shuping_PC',
      type:'get',
      data:{},
      async:false,
      cache: false,
      beforeSend: LoadFunction, //加载执行方法  
      error: erryFunction,  //错误执行方法  
      success: succFunction //成功执行方法  
    });
    function succFunction(data) {
      console.log(data);
      var book2='';
      var bookmessage = eval(data)
      $.each(bookmessage,function(n,value){
        if(bookmessage[n].BKID===bookid){
          var div='';
          div+="<div class=\"shuping\">"+
                "<div class=\"yonghu\">"+
                    "<img src=\"../image/"+bookmessage[n].YHIMG+"\" alt=\"\">"+
                    "<div class=\"yonghu_name\">"+bookmessage[n].YHNAME+"</div>"+
                    "<div class=\"yonghu_riqi\">"+bookmessage[n].REDATE+"</div>"+
                "</div>"+
                "<div class=\"shuping_text\">"+bookmessage[n].RECONTEXT+"</div>"+
              "</div>";
          book2+=div;
          $(".book_shuping").append(div);
        }
        
      });
      
    };
    function LoadFunction() {
    };
    function erryFunction(error) {
        alert("获取书评数据失败");
    };
});