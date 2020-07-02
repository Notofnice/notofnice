$(document).ready(function(){
    $("#submit").click(function(){
        var name = document.getElementById("name").value;
        var pwd = document.getElementById("password").value;
        var pwd2 = document.getElementById("password2").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;
        $.ajax({
            url: 'http://localhost:8080/Web_Sakura/Zhuce_PC',
            type:'get',
            data:{
                'logName':name,
                'logPwd':pwd,
                'Uaddress':address,
                'Uemail':email,
                'Uphone':phone
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
                alert("注册成功");
                
                window.location.href="denglu.html";
            }else{
                alert("注册失败");
            }

        };
        function LoadFunction() {
        };
        function erryFunction() {
            alert("注册失败");
        };
    });

});