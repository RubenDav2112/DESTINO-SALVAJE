window.onload = function() {
    var audio = document.getElementById('musicBack');
    audio.play();
    var params = new URLSearchParams(window.location.search);
    var nombre = params.get('nombre');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 550;   
    var fondo = new Image();
    fondo.onload = function() {
        ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height); 
        
        if (nombre) {
            var datosAlmacenados = localStorage.getItem("datos_" + nombre);
            
            ctx.font = "bold 40px Times New Roman";
            ctx.fillStyle = "#042608";
            ctx.fillText("Hola " + (nombre ? nombre : "jugador") + ", necesitamos tu ayuda.", 60, 90);
            ctx.fillText("Los animales han perdido su hogar.", 60, 150);
            ctx.fillText("Para ayudarlos, debes moverlos hacia su ", 60, 200);
            ctx.fillText("casa lo más rápido posible.", 60, 240);
            ctx.fillText("¿Contamos contigo?", 230, 310);
            ctx.fillText("Mejor puntuación:", 240, 410);
            
        
            if (datosAlmacenados) {
                var datosJugador = JSON.parse(datosAlmacenados);
                
                if (datosJugador.tiempo && datosJugador.puntuacion) {
                    ctx.font = "bold 30px Times New Roman";
                    ctx.fillText("Tiempo: " + datosJugador.tiempo, 140, 470);
                    ctx.fillText("Puntos: " + datosJugador.puntuacion, 480, 470);
                }else{
                    ctx.font = "bold 30px Times New Roman";
                    ctx.fillText("No tienes puntuación aún", 230, 470);
                }
            }
        } else {
            ctx.font = "bold 40px Times New Roman";
            ctx.fillText("No se encontró el jugador :( ", 150, 220);
            ctx.fillText("Reinica el juego ", 250, 280);
        }
    };
    fondo.src = '../img/background/marcoCarta.jpg'; 
};

var params = new URLSearchParams(window.location.search);
var nombre = params.get('nombre');
function siguiente(){
    window.location.href = "game.html?nombre=" + encodeURIComponent(nombre);
}