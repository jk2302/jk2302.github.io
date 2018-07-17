// 随机显示文章与每日一句（碎念）
$(document).ready(
    function() {
        var con_captalnum = $("#showcon div");
        var con_diarynum = $("#diaryword div");
        var con_captalrand = Math.floor(Math.random() * con_captalnum.length + 0);
        var con_diaryrand = Math.floor(Math.random() * con_diarynum.length + 0);
        $(con_captalnum[con_captalrand]).css("display", "block");
        $(con_diarynum[con_diaryrand]).css("display", "block");
    }
);
//点击切换碎念
$(function() {
    $("#diaryword").click(function() {
        var con_diarynum1 = $("#diaryword div");
        $.each(con_diarynum1, function(i, value) {
            if ($(value).css("display", "block")) {
                $(value).css("display", 'none');
            }
        });
        var con_diaryrand1 = Math.floor(Math.random() * con_diarynum1.length + 0);
        $(con_diarynum1[con_diaryrand1]).css("display", "block");
    });
});

$(document).ready(
    function() {
        var Lilist = $("#conter").children();
        $.each(Lilist, function(i, ielem) {
            $($(ielem)).click(function() {
                $.each(Lilist, function(j, jelem) {
                    var display = (i == j ? 'block' : 'none');
                    $('#' + $(jelem).attr("id") + 's').css("display", display);
                });
            });
        });
    });


//关联目录文章
function tran(e) {
    var titletext = e.innerHTML;
    var Hlist = document.getElementsByTagName("h3");
    for (var i = 0; i < Hlist.length; i++) {
        if (Hlist[i].parentNode.style.display == "block") {
            Hlist[i].parentNode.style.display = "none";
        }
    }
    for (var j = 0; j < Hlist.length; j++) {
        if (Hlist[j].innerHTML == titletext) {
            Hlist[j].parentNode.style.display = "block";
            break;
        }
    }

}

// 日历
var date = new Date();
var year = date.getFullYear();
var tempyear = date.getFullYear();
var mon = date.getMonth() + 1;
var tempmon = date.getMonth() + 1;
var day = date.getDate();
var week = date.getDay();

function nowtime() {
    var date1 = new Date();
    if (date1.getHours() < 10 && date1.getMinutes() < 10 && date1.getSeconds() < 10) {
        $(".fullday div:first").text('0' + date1.getHours() + ':' + '0' + date1.getMinutes() + '  ' + '0' + date1.getSeconds());
    } else if (date1.getHours() < 10 && date1.getMinutes() < 10 && date1.getSeconds() >= 10) {
        $(".fullday div:first").text('0' + date1.getHours() + ':' + '0' + date1.getMinutes() + '  ' + date1.getSeconds());
    } else if (date1.getHours() < 10 && date1.getMinutes() >= 10 && date1.getSeconds() < 10) {
        $(".fullday div:first").text('0' + date1.getHours() + ':' + date1.getMinutes() + '  ' + '0' + date1.getSeconds());
    } else if (date1.getHours() >= 10 && date1.getMinutes() < 10 && date1.getSeconds() < 10) {
        $(".fullday div:first").text(date1.getHours() + ':' + '0' + date1.getMinutes() + '  ' + '0' + date1.getSeconds());
    } else if (date1.getHours() < 10 && date1.getMinutes() >= 10 && date1.getSeconds() >= 10) {
        $(".fullday div:first").text('0' + date1.getHours() + ':' + date1.getMinutes() + '  ' + date1.getSeconds());
    } else if (date1.getHours() >= 10 && date1.getMinutes() < 10 && date1.getSeconds() >= 10) {
        $(".fullday div:first").text(date1.getHours() + ':' + '0' + date1.getMinutes() + '  ' + date1.getSeconds());
    } else if (date1.getHours() >= 10 && date1.getMinutes() >= 10 && date1.getSeconds() < 10) {
        $(".fullday div:first").text(date1.getHours() + ':' + date1.getMinutes() + '  ' + '0' + date1.getSeconds());
    } else {
        $(".fullday div:first").text(date1.getHours() + ':' + date1.getMinutes() + '  ' + date1.getSeconds());
    }


};
setInterval(function() { nowtime(); }, 1000);
$(document).ready(function() {

    // $(".fullday div:first").text(hour + ':' + min + '  ' + sec);
    // 获取当月1号是星期几
    var week_one = new Date(year, mon - 1, '01').getDay();
    // 获取当月天数
    var day_num = new Date(year, mon, '0').getDate();
    if (mon < 10) {
        $("#nowmonth").text(year + '-' + '0' + mon);
    } else {
        $("#nowmonth").text(year + '-' + mon);
    }

    var daylist = $("#calendar td");
    // 前空日期无输入
    for (var k = 0; k <= week_one - 1; k++) {
        $(daylist[k]).text('-');
    }
    for (var i = week_one, j = 1; j <= day_num; i++, j++) {
        $(daylist[i]).text(j);
    };
    // 后空日期无输入
    for (var t = week_one + day_num; t < 42; t++) {
        $(daylist[t]).text('-');
    }
    $(daylist[day + week_one - 1]).css("background-color", "grey");
});

//改变日期
$(function() {
    $("#premonth").click(function() {
        var daylist = $("#calendar td");
        var week_one = new Date(year, mon - 1, '01').getDay();
        tempmon -= 1;
        if (tempmon != mon || tempyear != year) {
            $(daylist[day + week_one - 1]).css("background-color", "transparent");
        } else {
            $(daylist[day + week_one - 1]).css("background-color", "grey");
        }
        if (tempmon == 0) {
            tempyear--;
            tempmon = 12;
            // 获取当月1号是星期几
            var week_one = new Date(tempyear, tempmon - 1, '01').getDay();
            // 获取当月天数
            var day_num = new Date(tempyear, tempmon, '0').getDate();
            $("#nowmonth").text(tempyear + '-' + tempmon);

            // 前空日期无输入
            for (var k = 0; k <= week_one - 1; k++) {
                $(daylist[k]).text('-');
            }
            for (var i = week_one, j = 1; j <= day_num; i++, j++) {
                $(daylist[i]).text(j);
            }
            // 后空日期无输入
            for (var t = week_one + day_num; t < 42; t++) {
                $(daylist[t]).text('-');
            }
        } else {
            // 获取当月1号是星期几
            var week_one = new Date(tempyear, tempmon - 1, '01').getDay();
            // 获取当月天数
            var day_num = new Date(tempyear, tempmon, '0').getDate();

            if (tempmon < 10) {
                $("#nowmonth").text(tempyear + '-' + '0' + tempmon);
            } else {
                $("#nowmonth").text(tempyear + '-' + tempmon);
            }

            var daylist = $("#calendar td");
            // 前空日期无输入
            for (var k = 0; k <= week_one - 1; k++) {
                $(daylist[k]).text('-');
            }
            for (var i = week_one, j = 1; j <= day_num; i++, j++) {
                $(daylist[i]).text(j);
            }
            // 后空日期无输入
            for (var t = week_one + day_num; t < 42; t++) {
                $(daylist[t]).text('-');
            }
        }

    });
    $("#nextmonth").click(function() {
        var daylist = $("#calendar td");
        var week_one = new Date(year, mon - 1, '01').getDay();
        tempmon += 1;
        if (tempmon != mon || tempyear != year) {
            $(daylist[day + week_one - 1]).css("background-color", "transparent");
        } else {
            $(daylist[day + week_one - 1]).css("background-color", "grey");
        }
        if (tempmon == 13) {
            tempyear++;
            tempmon = 1;
            // 获取当月1号是星期几
            var week_one = new Date(tempyear, tempmon - 1, '01').getDay();
            // 获取当月天数
            var day_num = new Date(tempyear, tempmon, '0').getDate();
            $("#nowmonth").text(tempyear + '-' + '0' + tempmon);

            // 前空日期无输入
            for (var k = 0; k <= week_one - 1; k++) {
                $(daylist[k]).text('-');
            }
            for (var i = week_one, j = 1; j <= day_num; i++, j++) {
                $(daylist[i]).text(j);
            }
            // 后空日期无输入
            for (var t = week_one + day_num; t < 42; t++) {
                $(daylist[t]).text('-');
            }
        } else {
            // 获取当月1号是星期几
            var week_one = new Date(tempyear, tempmon - 1, '01').getDay();
            // 获取当月天数
            var day_num = new Date(tempyear, tempmon, '0').getDate();

            if (tempmon < 10) {
                $("#nowmonth").text(tempyear + '-' + '0' + tempmon);
            } else {
                $("#nowmonth").text(tempyear + '-' + tempmon);
            }

            var daylist = $("#calendar td");
            // 前空日期无输入
            for (var k = 0; k <= week_one - 1; k++) {
                $(daylist[k]).text('-');
            }
            for (var i = week_one, j = 1; j <= day_num; i++, j++) {
                $(daylist[i]).text(j);
            };
            // 后空日期无输入
            for (var t = week_one + day_num; t < 42; t++) {
                $(daylist[t]).text('-');
            }
        }

    });
})


// 音乐版块
$(document).ready(function() {
    var audio = $("#audio");
    var musicsrc = new Array("music/liangliang.mp3", "music/meilideshenhua.mp3", "music/mo.mp3");
    //linux系统不支持中文文件名，所以用关联数组关联中文歌名
    var musicname = new Array();
    musicname['music/liangliang.mp3'] = '凉凉';
    musicname['music/meilideshenhua.mp3'] = '美丽的神话';
    musicname['music/mo.mp3'] = '默';
    var music_num = musicsrc.length;
    var i_random = Math.floor(Math.random() * music_num + 0);
    var temp_i_random = i_random;

    audio.attr("src", musicsrc[i_random]);
    mus_name();
    // 显示歌名
    function mus_name() {
        var audio_url = $("#audio").attr("src");
        $("#music_name>span").text(musicname[audio_url]);
    }

    // 播放
    function player() {
        audio[0].play();
        $("#play").css("display", "none");
        $("#pause").css("display", "inline-table");
    }
    // 暂停
    function pause() {
        audio[0].pause();
        $("#play").css("display", "inline-table");
        $("#pause").css("display", "none");
    }


    //上一首
    $("#pre").click(function() {
        //清除音乐名定时
        clearInterval(t);
        if (temp_i_random == 0) {
            temp_i_random = music_num;
        }
        temp_i_random--;
        audio.attr("src", musicsrc[temp_i_random]);
        mus_name();
        player();
    });

    // 下一首
    $("#next").click(function() {
        //清除音乐名定时
        clearInterval(t);
        if (temp_i_random == music_num - 1) {
            temp_i_random = -1;
        }
        temp_i_random++;
        audio.attr("src", musicsrc[temp_i_random]);
        mus_name();
        player();
    });

    // 播放
    $("#play").click(function() {
        player();

    });

    // 暂停
    $("#pause").click(function() {
        pause();
    });

    // 播放完当前音乐，自动播放下一首。
    audio.bind("ended", function() {
        //清除音乐名定时
        clearInterval(t);

        if (temp_i_random == music_num - 1) {
            temp_i_random = -1;
        }
        temp_i_random++;
        audio.attr("src", musicsrc[temp_i_random]);
        mus_name();
        player();

    });

    // 改变时间格式
    function timeFormat(time) {
        // 分钟
        var tempmin = time / 60;
        var min = parseInt(tempmin);
        if (min < 10) {
            min = "0" + min;
        }
        // 秒
        var tempsec = time % 60;
        var sec = parseInt(tempsec);
        if (sec < 10) {
            sec = "0" + sec;
        }
        return min + ":" + sec;
    }
    //更新播放时间及进度条 
    function updatetime() {
        $("#currenttime").text(timeFormat(audio[0].currentTime));
        $("#duringtime").text(timeFormat(audio[0].duration));
        $("#range").val(audio[0].currentTime / audio[0].duration);
    }
    var settime = setInterval(updatetime, 1000);

    // 拖动进度条改变播放时间
    $("#range").change(function() {
        var val = $(this).val() * audio[0].duration;
        audio[0].currentTime = val;
        $("#currenttime").text(timeFormat(val));
    }).mousedown(function() {
        $(this).css("cursor", "w-resize");
        clearInterval(settime);
        $(this).mousemove(function() {
            val = $(this).val() * audio[0].duration;
            $("#currenttime").text(timeFormat(val));
        });
    }).mouseup(function() {
        $(this).css("cursor", "auto");
        settime = setInterval(updatetime, 1000);
    });
    var anim = $("#music_name>span");
    // span_width = anim.outerWidth()/2元素宽度的一半，方便计算偏移量
    var span_width = anim.outerWidth() / 2;
    var div_width = $("#music_name").width();
    var left_width = div_width * (-0.5) + (-span_width) + 'px';
    var right_width = div_width * (0.5) + span_width + 'px';
    // 歌名动画
    var t = setInterval(animation, 10);

    function animation() {
        anim.animate({
            left: left_width
        }, 5000);
        anim.animate({
            left: right_width
        }, 4);
        anim.animate({
            left: '0px'
        }, 5000);
    }
});