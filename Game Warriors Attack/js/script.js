$(function() {
  paramsChar1 = {
    minAttack: 0,
    maxAttack: 3,
    hp: 10,
    lvl: 1,
    attMod: 0,
    defMod: 0,
    speed: 3,
    positionLeft: 0,
    positionTop: 0
  }
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

/*
  //разминка
  console.log('hello everybody!');
  var params = {
    width: '20px',
    height: '20px',
    border: '1px solid blue',
    'background-color': 'skyblue',
    'margin-top': '20px',
    'margin-left': '20px',
    'border-radius': '100%'
  };

  localStorage.setItem('data',JSON.stringify(params));
  console.log(localStorage.getItem('data'));
//localStorage.clear();

  var params1 = {
    say: function (x) {
      console.log(x);
    }
  };
  params1.prototype = params;
  console.log(params1);
  params1.say('HEllO!');
  console.log(params1.prototype.border);

  $('body').append('<div>');
  $('div').css(JSON.parse(localStorage.getItem('data')));
  var n=20;
  setInterval (function () {
      n++;
      $('div').css({
        'margin-top': n+'px',
        'margin-left': n+'px'
      });
      if (n==40) {n=20};
  },50);
  */
  //кодинг MVC

});
