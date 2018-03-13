
$("#elem1").hover (function(){
    ($(this).addClass("destacar"));
    ($("img").attr("src", "img/arbol.jpg"));},
        function(){
    ($(this).removeClass ("destacar"));
    ($("img").attr("src", "img/blanco.jpg"));
});

$("#elem2").hover (function(){
    ($(this).addClass("destacar")); 
    ($("img").attr("src", "img/lago.jpg"));},
    function(){
    ($(this).removeClass ("destacar"));
    ($("img").attr("src", "img/blanco.jpg"));
});

$("#elem3").hover (function(){
    ($(this).addClass("destacar")); 
    ($("img").attr("src", "img/rio.jpg"));},
    function(){
    ($(this).removeClass ("destacar"));
    ($("img").attr("src", "img/blanco.jpg"));
});


$("#elem4").hover (function(){
    ($(this).addClass("destacar")); 
    ($("img").attr("src", "img/sol.jpg"));},
    function(){
    ($(this).removeClass ("destacar"));
    ($("img").attr("src", "img/blanco.jpg"));
});




