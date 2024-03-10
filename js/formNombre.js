function guardarNombre() {
    var nombre = document.getElementById("aliasInput").value;
    
    if(nombre.trim() !== "") {
        var datosGuardados = localStorage.getItem("datos_" + nombre);
        var tiempo = "";
        var puntuacion = "";
        
        if (datosGuardados) {
            var datosParseados = JSON.parse(datosGuardados);
            tiempo = datosParseados.tiempo;
            puntuacion = datosParseados.puntuacion;
        } else {
            var datos = {
                nombre: nombre,
                tiempo: tiempo,
                puntuacion: puntuacion
            };

            localStorage.setItem("datos_" + nombre, JSON.stringify(datos));
        }
        window.location.href = "comienzo.html?nombre=" + encodeURIComponent(nombre);
    } else {
        alert("Ingresa tu nombre amigo!");
    }
}

window.onload = function() {
    var audio = document.getElementById('musicBack');
    audio.play();
}

