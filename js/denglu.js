$(document).ready(function(){
    $("#submit").click(function(){
        var name = document.getElementById("name").value;
        var pwd = document.getElementById("password").value;
        $.ajax({
            url: 'http://localhost:8080/Web_Sakura/Login_PC',
            type:'get',
            data:{
                'loginName':name,
                'loginPwd':pwd
            },
            async:false,
            timeout: 1000,
            cache: false,
            beforeSend: LoadFunction, //加载执行方法  
            error: erryFunction,  //错误执行方法  
            success: succFunction //成功执行方法  
        });
        

        function succFunction(data) {
            // var json = eval(data);

            var das = data.code;
            
            if(das == "200"){
                alert("登录成功")
                if($("#checkboxFourInput").is(':checked'))
                {
                    var expdate = new Date();   //初始化时间
                    expdate.setTime(expdate.getTime() + 7 * 24 * 60 * 60 * 1000);   //时间单位毫秒
                    document.cookie = "name="+name+";expires="+expdate.toGMTString()+";path=/";
                }
                else
                {
                    var expdate = new Date();   //初始化时间
                    expdate.setTime(expdate.getTime() + 1 * 24 * 60 * 60 * 1000);   //时间单位毫秒
                    document.cookie = "name="+name+";expires="+expdate.toGMTString()+";path=/";
                }
                window.location.href="geren.html";
            }else{
                alert("用户名或密码错误");
            }

        };
        function LoadFunction() {
        };
        function erryFunction() {
            alert("登录失败")
        };
    });

});