$("document").ready(function() {
    $("#anuncio")
    .text("¡CLICK! para cambiar de color")
    .width("500px")
    .height("500px")
    .hide()
    .fadeIn(3000)
});

let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"];

$("#anuncio").on("click", function() {
    let random = colores[Math.floor(Math.random() * colores.length)];
    $("#anuncio").css("background-color", random);
});
