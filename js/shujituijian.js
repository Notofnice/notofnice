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
      var bookmessage = eval(data)

      $.each(bookmessage,function(n,value){
        var div='';
        if(bookmessage[n].BKCLASS==="推荐")
        {
        div+="<a class=\"card\" href=\"tushuxiangqing.html?bookid="+bookmessage[n].BKID+"\">"+
                "<div class=\"front\">"+
                    "<div class=\"book\">"+
                        "<img class=\"book_img1\" src=\"../image/"+bookmessage[n].BKIMG_GG+"\" alt=\"\">"+
                        "<div class=\"book_message\">"+
                            "<img class=\"book_img2\" src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
                            "<div>"+
                                "<div class=\"book_name\">"+bookmessage[n].BKNAME+"</div>"+
                                "<div class=\"book_jianjie\">"+bookmessage[n].BKW+"</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
                "<div class=\"back\">"+
                    "<div>"+
                        "<div class=\"back_book\">"+
                            "<img src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
                            "<div class=\"book_message2\">"+
                                "<div class=\"book_name\">"+bookmessage[n].BKNAME+"</div>"+
                                "<div class=\"book_zuozhe\">作者:"+bookmessage[n].BKAUT+"</div>"+
                                "<div class=\"book_chubanshe\">出版社:"+bookmessage[n].BKCOM+"</div>"+
                                "<div class=\"book_jiage\">定价:"+198+"元</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</a>";
        book+=div;
        }
      });
      $(".tuijian_books").append(book);
      
    
      
    };
    function LoadFunction2() {
    };
    function erryFunction2(error) {
        alert("获取书籍数据失败");
    };
});