
$(document).ready(function(){
    $("#btn_sub").click(function(){


        var mail = document.getElementById("inp_mail").value;
        if(mail == "123@qq.com"){
            $(window).attr('location', 'home_phone.html');
        }else{
            alert("test")
            
        }
    });
});