//树叶动画
function animation(actelement) {
    var w = $(document.body).width();
    var h = $(document.body).height() - 80;
    var imgleftX_len = $(actelement).offset().left;
    var imgrightX_len = w - imgleftX_len;
    var imgupY_len = $(actelement).offset().top;
    var imgdownY_len = h - imgupY_len;
    var freeX = Math.random() > 0.5 ? (-imgleftX_len) : (imgrightX_len);
    var freeX2 = Math.random() > 0.5 ? (-w) : (w);
    var freeY = imgdownY_len;
    var offX = 20;
    var actX = Math.floor(Math.random() * freeX) + 'px';
    var actY = Math.floor(Math.random() * freeY) + 'px';
    $(actelement).animate({
        left: actX,
        top: actY,
        opacity: "0"
    }, 5000);
}

function leaf() {
    $("#imgact").empty();
    $("#imgact").css({
        "position": "absolute",
        "position": "relative",
        "zIndex": "10",
        "width": "100%",
        "height": "100%"
    });
    var irandom = Math.floor(Math.random() * 20 + 40);
    for (var i = 0; i < irandom; i++) {
        var imgRandom = Math.floor(Math.random() * 13 + 1);
        var imgelement = document.createElement("img");
        var w = $(document.body).width() - 100;
        var h = $(document.body).height() - 50;
        var toprandom = document.body.scrollTop - 120;
        var leftrandom = Math.floor(Math.random() * w + 5);
        $(imgelement).css({
            "position": "absolute",
            "zIndex": "10",
            "width": "80",
            "height": "90",
            "marginTop": toprandom,
            "marginLeft": leftrandom,
            "opacity": "0.8",
        });
        $(imgelement).attr("src", "./img/leaf/" + imgRandom + ".png");
        $("#imgact").append(imgelement);
        animation(imgelement);
    }
}
var WindowTimers = setInterval("leaf()", 5000);