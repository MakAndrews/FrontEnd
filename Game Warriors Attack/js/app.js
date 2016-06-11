requirejs.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
  },
  shim: {
    'jquery': {
      exports: 'jquery'
    }
  }
})

require (
  [
    'jquery',
    'params1'
  ],
  function ($, params1) {
//    var d = $('.char1');
    console.log($);
/*    $('.char1').keydown(function(){
    if(event.keyCode==39)
       {
          params.positionLeft += 20;
          $('.char1').css({
            left: params.positionLeft,
            top: params.positionTop
          })
       }
})
*/
  }
);
