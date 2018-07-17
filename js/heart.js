var start_one = 0;

function Des1(start_one) {
    var love = $("#love>p");
    var len = love.length;
    for (var i = 0; i < len; i++) {
        $(love[i]).css("display", "none");
        if (start_one == i) {
            $(love[start_one]).fadeIn("slow");
            break;
        }
    }
}

// $(".nav>ul>li:nth-of-type(2)").hover(function() {
//     var dur = setInterval("Des1(start_one++)", 3000);
// });
$(".nav>ul>li:nth-of-type(2)").mouseover(function() {
    // clearInterval(timer);
    var timer = setInterval(function() {
        Des1(start_one++);
    }, 3000);
    $(".nav>ul>li:nth-of-type(2)").mouseout(function() {
        clearInterval(timer);
    });
});