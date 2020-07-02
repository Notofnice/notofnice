$(document).ready(function(){
    $('body').on("click",'.heart',function(){
	    var A=$(this).attr("id");
	    var B=A.split("like");
	    var messageID=B[1];
	    var C=parseInt($("#likeCount"+messageID).html());
	    $(this).css("background-position","")
	    var D=$(this).attr("rel");
        
	    if(D === 'like') 
	    {      
	        $("#likeCount"+messageID).html(C+1);
	        $(this).addClass("heartAnimation").attr("rel","unlike");
	    }
	    else
	    {
	        $("#likeCount"+messageID).html(C-1);
	        $(this).removeClass("heartAnimation").attr("rel","like");
	        $(this).css("background-position","left");
	    }
	});
	

	var test =window.location.href;
	var reviewid=test.split("?reviewid=")[1];
	var bookid='';
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
        if(bookmessage[n].REID===reviewid){
			bookid=bookmessage[n].BKID;
            var div='';
            div+="<div class=\"title\"></div>"+
            "<div class=\"yonghu\">"+
				"<img src=\"../image/"+bookmessage[n].YHIMG+"\" alt=\"\">"+
                "<div class=\"yonghu_name\">"+bookmessage[n].YHNAME+"</div>"+
                "<div class=\"yonghu_book\">阅读《"+bookmessage[n].BKNAME+"》</div>"+
                "<div class=\"yonghu_riqi\">"+bookmessage[n].REDATE+"</div>"+
            "</div>"+
            "<div class=\"shuping_text\"><pre>"+bookmessage[n].RECONTEXT+"</pre></div>"+
            "<div class=\"feed\" id=\"feed2\">"+
                "<div class=\"heart\" id=\"like2\" rel=\"like\"></div>"+
                "<div class=\"likeCount\" id=\"likeCount2\">10</div>"+
            "</div>";
            book1+=div;
            $(".left").append(book1);
            return false;
        }
      });
    };
    function LoadFunction2() {
    };
    function erryFunction2(error) {
        alert("获取书评数据失败");
	};
	
	$.ajax({
		url: 'http://localhost:8080/Web_Sakura/Xinshu_PC',
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
			  div+="<div ><a class=\"book_title\" href=\"tushuxiangqing.html?bookid="+bookmessage[n].BKID+"\">>"+bookmessage[n].BKNAME+"</a></div>"+
			  			"<img src=\"../image/"+bookmessage[n].BKIMG+"\" alt=\"\">"+
			  			"<div>"+
							  "<div class=\"zuozhe\">作者:"+bookmessage[n].BKAUT+"</div>"+
							  "<div class=\"chubanshe\">出版社:"+bookmessage[n].BKCOM+"</div>"+
							  "<div class=\"chupingfang\">出品方:"+bookmessage[n].BKCOM2+"</div>"+
							  "<div class=\"yuanzhuoming\">原作名:"+bookmessage[n].BKNAME2+"</div>"+
							  "<div class=\"yizhe\">译者:"+bookmessage[n].BKAUT2+"</div>"+
							  "<div class=\"jiage\">价格:"+bookmessage[n].BKPRICE+"元</div>"+
			  		"</div>";
			  book2+=div;
			  $(".right").append(book2);
			  return false;
		  }
		});
	  };
	  function LoadFunction() {
	  };
	  function erryFunction(error) {
		  alert("获取书评数据失败");
	  };
});

