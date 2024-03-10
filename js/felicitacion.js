window.onload = function() {
    var params = new URLSearchParams(window.location.search);
    var nombre = params.get('nombre');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 400;   
    var fondo = new Image();
    fondo.onload = function() {
        ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height); 
        
        if (nombre) {
            ctx.font = "bold 40px Times New Roman";
            ctx.fillStyle = "#042608";
            ctx.fillText("¡Felicidades " + (nombre ? nombre : "jugador") + "!", 230, 90);
            ctx.fillText("Has rescatado a todos los animales.", 120, 150);
            ctx.fillText("Gracias por tu ayuda y tu dedicación.", 100, 210);
            ctx.fillText("Todos estamos en deuda contigo.", 130, 290);
        
        } else {
            ctx.font = "bold 40px Times New Roman";
            ctx.fillText("No se encontró el jugador :( ", 150, 220);
            ctx.fillText("Reinicia el juego ", 250, 280);
        }
    };
    fondo.src = '../img/background/marcoCarta.jpg'; 
};

var params = new URLSearchParams(window.location.search);
var nombre = params.get('nombre');
function reinicio(){
    window.location.href = "game.html?nombre=" + encodeURIComponent(nombre);
}