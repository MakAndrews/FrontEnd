$(function(a) {
  var x=0;
  setInterval(function() {
    x=x-400;
    $('.sliderHolder__Roller').css({
      'margin-left': x+'px'
    });
    if (x==-1600) {
      setTimeout(function(){x=400},1000)};
  }, 4000);

  setTimeout(function() {
      $('#ho_adv').hide();
  },10)


/*
  var menu = $('header ul li a');
  console.log(menu);
  for (i=0; i<menu.lenght; i++) {
    $(menu).on('click',function(event) {
      event.preventDeafult();
      var id = $(this).attr('href');
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top},1000);
    })
  }
*/
});
