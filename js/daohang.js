document.querySelectorAll('.text_title').forEach(elem => {
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

function getCookie(key){
    var cookie = document.cookie;
    var arr = cookie.split("; ");
    for(var i=0;i<arr.length;i++){
        var newArr = arr[i].split("=");
        if(key == newArr[0]){
            return newArr[1];
        }
    }
}

$(document).ready(function(){
    var name = getCookie("name");
    var denglu = $("#no");
    var geren = $("#yes");
    if(name!=null){
      geren.css('display','block');
      denglu.css('display','none');
    }else{
      geren.css('display','none');
      denglu.css('display','block');
    }

});