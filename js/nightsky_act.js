var start_two = 0;

function Des2(start_two) {
    var p = $("#night_word>p");
    var len = p.length;
    var color = new Array;
    color[0] = 'hotpink';
    color[1] = 'springgreen';
    color[2] = 'lemonchiffon';
    color[3] = 'yellow';
    color[4] = 'tomato';
    color[5] = 'aqua';
    color[6] = 'chartreuse';
    color[7] = 'olivedrab';
    color[8] = 'sienna';
    color[9] = 'mediumorchid';
    color[10] = 'olivedrab';
    var colorRandom = Math.floor(Math.random() * color.length + 0);
    var topRandom = Math.floor(Math.random() * (-50) - 70);
    var leftRandom = Math.floor(Math.random() * (-60) + 20);
    for (var i = 0; i < len || i <= start_two; i++) {
        // $(p[i]).fadeOut("slow");
        $(p[i]).css("display", "none");
        if (start_two == i) {
            $(p[start_two % len]).fadeIn("slow");
            // $(p[start_two % len]).css("display", "block");
            $(p[start_two % len]).css("color", color[colorRandom]);
            $("#night_word").css("top", topRandom + '%');
            $("#night_word").css("left", leftRandom + '%');
            break;
        }
    }

}
// $(".nav>ul>li:nth-of-type(3)").hover(function() {
//     var wordtime = setInterval("Des2(start_two++)", 3000);
// });


$(".nav>ul>li:last-child").mouseover(function() {
    // clearInterval(timer);
    var timer = setInterval(function() {
        Des2(start_two++);
    }, 3000);
    $(".nav>ul>li:last-child").mouseout(function() {
        clearInterval(timer);
    });
});