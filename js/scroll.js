$(function () {
    // 字体-左右无缝滚动
    getSroll()
    // 字体-上下无缝滚动
    //定义div的class属性
    var $this = $(".scroll_lists");
    // console.log($this);
    //定义一个定时器的属性
    var scrollTimer;
    //鼠标悬停在页面上时页面停止翻转
    $this.hover(function () {
        //清除定时器
        clearInterval(scrollTimer);
        //鼠标离开时，页面继续翻转
    }, function () {
        scrollTimer = setInterval(function () {
            scrollNews($this);
        }, 2000);
    }).trigger("mouseout");
    //定义一个属性
    function scrollNews(nature) {
        // console.log(nature);
        //文字从ul第一个开始轮转
        var scroll = nature.find("ul:first");
        //定义li的第一个文字的高度
        var lineHeight = scroll.find("li:first").height();
        scroll.animate({ "margin-top": -lineHeight + "px" }, 600, function () {
            scroll.css({ "margin-top": "0px" }).find("li:first").appendTo(scroll);
        });
    }
})
// 动画效果
function getSroll() {
    var speed = 30
    var scroll_begin = $(".scroll_begin")[0];
    var scroll_end = $(".scroll_end")[0];
    var scroll_div = $(".scroll_div")[0];
    scroll_end.innerHTML = scroll_begin.innerHTML
    console.log(scroll_begin.innerHTML);

    function Marquee() {
        if (scroll_end.offsetWidth - scroll_div.scrollLeft <= 0){
            scroll_div.scrollLeft -= scroll_begin.offsetWidth
        } else{
            scroll_div.scrollLeft++
        }
    }
    var MyMar = setInterval(Marquee, speed)
    scroll_div.onmouseover = function() {
        clearInterval(MyMar)
    }
    scroll_div.onmouseout = function() {
        MyMar = setInterval(Marquee, speed)
    }
};
