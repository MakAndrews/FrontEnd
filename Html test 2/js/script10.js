(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
//*************************************************
var sM = $('.subMenu');
var smUL = $('.subMenu ul');

sM.hover(
	function() {
		smUL.slideDown(200);
		sm1UL.hide();
		smUL.animate({backgroundColor: "#ccc"},200);
	}, function() {
		smUL.slideUp(200);
		smUL.animate({backgroundColor: "#aaa"},200);
	}
)

var sM1 = $('.subMenu1');
var sm1UL = $('.subMenu1 ul');

$(sM1[0]).hover(
	function() {
		smUL.css('overflow','visible');
		$(sm1UL[0]).slideDown(200);
	}, function() {
		$(sm1UL[0]).slideUp(200);
	}
)

$(sM1[1]).hover(
	function() {
		$(sm1UL[0]).css('overflow','visible');
		$(sm1UL[1]).slideDown(200);
	}, function() {
		$(sm1UL[1]).slideUp(200);
	}
)
//*************************************************	
$("select").selectbox();
//*************************************************

})(jQuery);