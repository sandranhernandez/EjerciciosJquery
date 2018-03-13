$(document).ready(function(){
    $("#carrete").hide();
});

$(document).on("click", function(){
    ($("#carrete").show());
    ($("h1").hide());
});

$("img").on("mouseover", function(){
    $(this).width(270);
});

$("img").on("mouseout", function(){
    $(this).width(250);
});


/*
$("#imagen1").hover(function(){
    ($("#imagen1").width(270));},
    function(){
    ($("#imagen1").width(250));
});

$("#imagen2").hover(function(){
    ($("#imagen2").width(270));},
    function(){
    ($("#imagen2").width(250));
});

$("#imagen3").hover(function(){
    ($("#imagen3").width(270));},
    function(){
    ($("#imagen3").width(250));
});

$("#imagen4").hover(function(){
    ($("#imagen4").width(270));},
    function(){
    ($("#imagen4").width(250));
});
*/




