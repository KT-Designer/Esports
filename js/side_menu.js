// 浮動選單收合功能_PC
$(document).ready(function () {
    $(".close").click(function () {
        $(".menu_PC").addClass("closed").delay(500).queue(function (next) {
            $(".open").addClass("show");  // 500和CSS設的transform 0.5s
            next();
        });
    });

    $(".open").click(function () {
        $(".menu_PC").removeClass("closed");
        $(".open").removeClass("show");
    });
});
















