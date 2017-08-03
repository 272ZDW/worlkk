/**
 * Created by dllo on 17/8/3.
 */
var oWrap = document.getElementsByClassName("wrap")[0];

document.onmousewheel = function (ev) {
    var ev = ev || window.event;
    if(ev.wheelDelta > 0){
        $(".wrap").fadeIn("slow");

    }else{
        $(".wrap").fadeOut("slow");
    }
}