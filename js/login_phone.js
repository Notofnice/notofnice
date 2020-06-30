function zc(){
    window.location.href="register_phone.html";
}

$(document).ready(function(){
    $("#btn_login").click(function(){
        window.location.href="home_phone.html";

        var name = document.getElementById("uid").value;

        var pwd = document.getElementById("upwd").value;



        $.ajax({
            url: '#',
            type:'get',
            
            data:{
                loginName:name,
                loginPwd:pwd
            },
            async:false,
            timeout: 1000,
            cache: false,
            beforeSend: LoadFunction, //加载执行方法  
            error: erryFunction,  //错误执行方法  
            success: succFunction //成功执行方法  
        })
        

        function succFunction(data) {
            // var json = eval(data);

            var das = data.code;
            
            if(das == "200"){
                alert("登录成功")
                document.cookie="Iname="+name;
            
                $(window).attr('location', 'home.html');
            }

        }



        function LoadFunction() {
            alert("loading");
        }
        function erryFunction() {
            alert("error");
        }
    });

});
