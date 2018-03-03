$(document).ready(function () {
    $('.toggleNav').click(function (e) {
        //alert("this is clicked.");
        //$(this).toggleClass('active');
        $('.mainNav').toggle();
        e.preventDefault();
    });
    $('.mainNav').click(function (e){
        //alert("the main nav function is acive");
        $('.mainNav').toggle();
    });
});