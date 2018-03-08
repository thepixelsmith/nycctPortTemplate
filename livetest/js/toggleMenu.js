$(document).ready(function () {
    $('.toggleNav').click(function (e) {
        $('.mainNav').toggle();
        e.preventDefault();
    });
    $('.mainNav').click(function (e) {
        $('.mainNav').toggle();
    });
});