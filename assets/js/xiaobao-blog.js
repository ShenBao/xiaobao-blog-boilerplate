$(function () {
    $('#back-top').hide();
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });


    (function () {
        var $window = $(window);
        var $progress = $('.progress-indicator');
        $window.on('scroll', function () {
            var wh = $window.height();
            var h = $('body').height();
            var sHeight = h - wh;
            window.requestAnimationFrame(function () {
                var perc = Math.max(0, Math.min(1, $window.scrollTop() / sHeight));
                updateProgress(perc);
            });
        });
        function updateProgress(perc) {
            $progress.css({ width: perc * 100 + '%' });
        }
    }());










});