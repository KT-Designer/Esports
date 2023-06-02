// 電競電腦
$(document).ready(function () {
    // 初始化 Slider
    $('.slider').each(function () {
        var $slider = $(this);
        var $nav = $slider.find('.slider-nav .logo');
        var $slides = $slider.find('.slider-content .slide');

        // 當點選 ICON 時切換 Slide
        $nav.click(function () {
            var slideIndex = $(this).data('slide');
            $slides.hide();
            $slides.filter('[data-slide="' + slideIndex + '"]').show();
        });

        // 預設顯示第一張 Slide
        $nav.first().click();
    });
});