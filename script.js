$(document).ready(function () {

    for (var i = 1; i <= 15; i++) {
        $('.container').append("<div class='col'><div class='box'></div></div>");
    }

    $('.box').each(function () {
        var color = 'rgb(' + (Math.floor(256 * Math.random())) + ',' + (Math.floor(256 * Math.random())) + ',' + (Math.floor(256 * Math.random())) + ')';
        $(this).css("background-color", color).html(`<div style="color:` + color + `; text-align: center;">Popped!</div>`);

        var hCount = 0;
        $('.box').mouseover(function () {
            $(this).css({ "background-color": "" });
            $(this).off('mouseover');
            hCount++;
            if (hCount == 15) {
                setInterval(function () {
                    $('body').html(`<div class="msg">"WOW",All Balloons are Popped!<img src="/assets/images/image.gif" alt="Thank You"></div>`);
                }, 100);
            }
        });
    });
});