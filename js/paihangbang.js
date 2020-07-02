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
      var bookmessage = eval(data)
      //排行榜
      $.each(bookmessage,function(n,value){
        var div='';
        div+="<li class=\"book\">"+"<a href=\"tushuxiangqing.html?bookid="+bookmessage[n].BKID+"\">"+
                "<div><img src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\"></div>"+"</a>"+
                "<div>"+
                    "<div class=\"biaoti\">"+bookmessage[n].BKNAME+"</div>"+
                    "<div class=\"pingying\">"+CC2PY(bookmessage[n].BKNAME)+"</div>"+
                    "<div class=\"zuozhe\">"+
                        "<div class=\"name\">"+bookmessage[n].BKAUT+"</div>"+
                        "<div class=\"chubanshe\">"+bookmessage[n].BKCOM+"</div>"+
                    "</div>"+
                    "<div>"+
                        "<div class=\"riqi\">"+bookmessage[n].BKDATE+"</div>"+
                        "<div class=\"jiage\">"+bookmessage[n].BKPRICE+"元 </div>"+
                    "</div>"+
                    "<div class=\"jianjie\">"+bookmessage[n].BKW+"</div>"+
                "</div>"+
            "</li>";
        book+=div;
        
      });
      $(".paihangbang .books").append(book);
      
      //推荐书籍
      $.each(bookmessage,function(n,value){
        var div2='';
        if(bookmessage[n].BKID=="6"){
            return false;
        }
        div2+="<a href=\"tushuxiangqing.html?bookid="+bookmessage[n].BKID+"\">"+    
                    "<li class=\"tuijian_book\">"+
                        "<img src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
                        "<div class=\"bookname\">"+bookmessage[n].BKNAME+"</div>"+
                    "</li>"
                "</a>";
        book2+=div2;
        
      });
      $(".tuijian_books").append(book2);
      
    };
    function LoadFunction2() {
    };
    function erryFunction2(error) {
        alert("获取书籍数据失败");
    };
});