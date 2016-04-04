jQuery(document).ready(function(){
jQuery(".niceCheck").mousedown(  
function() {  
     changeCheck(jQuery(this));
});  
});  

function changeCheck(el)  
{  
     var el = el,  
        input = el.find("input").eq(0);  
     if(!input.attr("checked")) {  
        el.css("background","url(img/checkbox-1.png) no-repeat");
        el.css("background-color","#bbb");
        input.attr("checked", true)  
    } else {  
        el.css("background","url(img/checkbox--.png) no-repeat");
		el.css("background-color","#bbb");
        input.attr("checked", false)  
    }  
     return true;  
}  

