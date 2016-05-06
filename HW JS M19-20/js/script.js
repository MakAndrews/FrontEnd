$(function(a) {

  var currentPosition = 0;

  setInterval(function() {
    if (currentPosition == -2322) {
      setTimeout(function() {
        currentPosition = 0;
        $('.line').css(
          'margin-left', currentPosition+'px'
        )
      },2500);
    } else {
      currentPosition -=1161;
      $('.line').css(
        'margin-left', currentPosition+'px'
      );
    }
  },5000);

  var sliderButtons = $('.controls img');

  sliderButtons.on('click', function() {
    sliderButtons.attr('src','img/pas.png');
    $(this).attr('src','img/act.png');

      if ($(sliderButtons[0]).attr('src') == 'img/act.png') {
        currentPosition = 0;
        $('.line').css(
            'margin-left', currentPosition+'px'
        )
      } else {
        if ($(sliderButtons[1]).attr('src') == 'img/act.png') {
          currentPosition = -1161;
          $('.line').css(
              'margin-left', currentPosition+'px'
          )
        } else {
          if ($(sliderButtons[2]).attr('src') == 'img/act.png') {
            currentPosition = -2322;
            $('.line').css(
                'margin-left', currentPosition+'px'
            )
          }
        }
      }
  })

  setInterval(function() {
    if (currentPosition == 0) {
      sliderButtons.attr('src','img/pas.png');
      $(sliderButtons[0]).attr('src','img/act.png')
    } else {
      if (currentPosition == -1161) {
        sliderButtons.attr('src','img/pas.png');
        $(sliderButtons[1]).attr('src','img/act.png')
      } else {
        if (currentPosition == -2322) {
          sliderButtons.attr('src','img/pas.png');
          $(sliderButtons[2]).attr('src','img/act.png')
      }
    }
    }
  },100);

var services__El = $('.services__El a');

  $(services__El[0]).on('mouseover',function() {
    $(this).find('img').attr('src','img/pic0-act.jpg');
    $(this).css('color','#9e7923');
  });
  $(services__El[0]).on('mouseout',function() {
    $(this).find('img').attr('src','img/pic0.jpg');
    $(this).css('color','white');
  });

  $(services__El[1]).on('mouseover',function() {
    $(this).find('img').attr('src','img/pic1-act.jpg');
    $(this).css('color','#9e7923');
  });
  $(services__El[1]).on('mouseout',function() {
    $(this).find('img').attr('src','img/pic1.jpg');
    $(this).css('color','white');
  });

  $(services__El[2]).on('mouseover',function() {
    $(this).find('img').attr('src','img/pic2-act.jpg');
    $(this).css('color','#9e7923');
  });
  $(services__El[2]).on('mouseout',function() {
    $(this).find('img').attr('src','img/pic2.jpg');
    $(this).css('color','white');
  });

  $(services__El[3]).on('mouseover',function() {
    $(this).find('img').attr('src','img/pic3-act.jpg');
    $(this).css('color','#9e7923');
  });
  $(services__El[3]).on('mouseout',function() {
    $(this).find('img').attr('src','img/pic3.jpg');
    $(this).css('color','white');
  });

  var banners = $('.container__Banner');
  var markers = $('.panel__Marker');
  var names = $('.panel__Name');
  var texts = $('.banner__Text');

  $(banners[0]).css('height','186px');
  $(markers[0]).css({
    'background-color': '#f4b60d',
    'line-height': '30px',
    border: '1px solid white'
  });
  $(markers[0]).find('img').attr('src','img/whiteMinus.png');
  $(names[0]).css({
    'background-color': '#f4b60d',
    border: '1px solid white',
    color: 'white'
  });
  $(texts[0]).slideDown(500);

    $(banners[0]).on('click', function() {

      banners.css('height','38px');
      markers.css({
        'background-color': 'white',
        'line-height': '36px',
        border: '1px solid #e8e8e8'
      });
      markers.find('img').attr('src','img/plus.png');
      names.css({
        'background-color': 'white',
        border: '1px solid #e8e8e8',
        color: 'black'
      });
      texts.css('display','none');

      $(this).css('height','186px');
      $(markers[0]).css({
        'background-color': '#f4b60d',
        'line-height': '30px',
        border: '1px solid white'
      });
      $(markers[0]).find('img').attr('src','img/whiteMinus.png');
      $(names[0]).css({
        'background-color': '#f4b60d',
        border: '1px solid white',
        color: 'white'
      });
      $(texts[0]).slideDown(500);
    });

    $(banners[1]).on('click', function() {

      banners.css('height','38px');
      markers.css({
        'background-color': 'white',
        'line-height': '36px',
        border: '1px solid #e8e8e8'
      });
      markers.find('img').attr('src','img/plus.png');
      names.css({
        'background-color': 'white',
        border: '1px solid #e8e8e8',
        color: 'black'
      });
      texts.css('display','none');

      $(this).css('height','186px');
      $(markers[1]).css({
        'background-color': '#f4b60d',
        'line-height': '30px',
        border: '1px solid white'
      });
      $(markers[1]).find('img').attr('src','img/whiteMinus.png');
      $(names[1]).css({
        'background-color': '#f4b60d',
        border: '1px solid white',
        color: 'white'
      });
      $(texts[1]).slideDown(500);
    });

    $(banners[2]).on('click', function() {

      banners.css('height','38px');
      markers.css({
        'background-color': 'white',
        'line-height': '36px',
        border: '1px solid #e8e8e8'
      });
      markers.find('img').attr('src','img/plus.png');
      names.css({
        'background-color': 'white',
        border: '1px solid #e8e8e8',
        color: 'black'
      });
      texts.css('display','none');

      $(this).css('height','186px');
      $(markers[2]).css({
        'background-color': '#f4b60d',
        'line-height': '30px',
        border: '1px solid white'
      });
      $(markers[2]).find('img').attr('src','img/whiteMinus.png');
      $(names[2]).css({
        'background-color': '#f4b60d',
        border: '1px solid white',
        color: 'white'
      });
      $(texts[2]).slideDown(500);
    });

    $(banners[3]).on('click', function() {

      banners.css('height','38px');
      markers.css({
        'background-color': 'white',
        'line-height': '36px',
        border: '1px solid #e8e8e8'
      });
      markers.find('img').attr('src','img/plus.png');
      names.css({
        'background-color': 'white',
        border: '1px solid #e8e8e8',
        color: 'black'
      });
      texts.css('display','none');

      $(this).css('height','186px');
      $(markers[3]).css({
        'background-color': '#f4b60d',
        'line-height': '30px',
        border: '1px solid white'
      });
      $(markers[3]).find('img').attr('src','img/whiteMinus.png');
      $(names[3]).css({
        'background-color': '#f4b60d',
        border: '1px solid white',
        color: 'white'
      });
      $(texts[3]).slideDown(500);
    });

});
