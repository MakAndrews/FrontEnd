jQuery(document).ready(function(){
jQuery(".niceCheck").mousedown(  
function() {  
     changeCheck(jQuery(this));
});  

jQuery(".niceCheck1").mousedown(  
function() {  
     changeCheck1(jQuery(this));
});  

});  

function changeCheck(el)  
{  
     var el = el,  
        input = el.find("input").eq(0);  
     if(!input.attr("checked")) {  
        el.css("background","url(img/ch1Box1.gif) no-repeat");
        input.attr("checked", true)  
    } else {  
        el.css("background","url(img/ch1Box.gif) no-repeat");
        input.attr("checked", false)  
    }  
     return true;  
}  

function changeCheck1(el)  
{  
     var el = el,  
        input = el.find("input").eq(0);  
     if(!input.attr("checked")) {  
        el.css("background","url(img/chBox1.gif) no-repeat");
        input.attr("checked", true)  
    } else {  
        el.css("background","url(img/chBox.gif) no-repeat");
        input.attr("checked", false)  
    }  
     return true;  
}  
