$(document).foundation();

$(function() {
    var $window = $(window);
    var $headerObj = $('.header');

    $(".js-rotate").textrotator({
      animation: "flipCube",
      separator: ";",
      speed: 2000
    });

    var $centreMarginObj = $('.js-centre');
    var $centreMarginHeight;
    var centreMargin = function () {
        $centreMarginHeight = $window.outerHeight() - $headerObj.outerHeight() - $centreMarginObj.outerHeight();
        if ($centreMarginHeight < 0)
            $centreMarginHeight = 0;
        $centreMarginObj.css('margin', $centreMarginHeight / 2 + 'px auto 0');
    }
    centreMargin();
    $window.resize(centreMargin);
});