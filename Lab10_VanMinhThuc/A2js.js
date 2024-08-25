$(document).ready(function () {
    $('.go-to-top').click(function (event) {
        $('html, body').animate(
            { scrollTop: 0 }, 1000);
    });
});