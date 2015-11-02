$(document).ready(function () {
    $('.btnmobile').click(function () {
        $('.main_nav').toggle();
    });

    $(function () {
        $('.small-img img').hover(function () {
            var imgSrc = $(this).attr('src');
            $('.large-img img').attr('src', imgSrc);
        });

        $(function () {
            var slideAuto = setInterval(slideGo, 7000);
            $('.slide_nav_item.g').click(function () {
                slideGo();
                clearInterval(slideAuto);
            });
            $('.slide_nav_item.b').click(function () {
                slideBack();
                clearInterval(slideAuto);
            });
            $('.slide_nav_item.g').dblclick(function () {
                slideAuto = setInterval(slideGo, 7000);
            });
            function slideGo() {
                if ($('.slide_item.first').next().size()) {
                    $('.slide_item.first').fadeIn(1000, function () {
                        $(this).removeClass('first').next().fadeOut().addClass('first');
                    });
                } else {
                    $('.slide_item.first').fadeIn(1000, function () {
                        $('.slide_item').removeClass('first');
                        $('.slide_item:eq(0)').fadeOut().addClass('first');
                    });
                }
            }
            function slideBack() {
                if ($('.slide_item.first').index() > 1) {
                    $('.slide_item.first').fadeIn(1000, function () {
                        $(this).removeClass('first').prev().fadeOut().addClass('first');
                    });
                } else {
                    $('.slide_item.first').fadeIn(1000, function () {
                        $('.slide_item').removeClass('first');
                        $('.slide_item:last-of-type').fadeOut().addClass('first');
                    });
                }
            }
        });
    });
});
