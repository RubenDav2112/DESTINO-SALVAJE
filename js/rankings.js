document.addEventListener("DOMContentLoaded", function() {
    lista();
});

function lista() {
    //aqui se obtiene el primer div
    var rankingsContainer = document.getElementById("rankingsContainer");
    rankingsContainer.innerHTML = "";

    //se crea el div para los titulos
    var filaTitulos = document.createElement("div");
    //se crea la fila en la que iran los titulos
    filaTitulos.classList.add("fila");
    filaTitulos.innerHTML = "<div class='titulo'>Nombre</div><div class='titulo'>Tiempo</div><div class='titulo'>Puntuación</div>";
    //el div que contiene la fila de los titulos se agregara al div principal
    rankingsContainer.appendChild(filaTitulos);

    //se almacenan los datos en un array
    var datos = [];
    //se recorren los datos del localstorage
    for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        if (clave.startsWith("datos_")) {//se rectifica que solo se almacenen los datos con _
            var datosAlmacenados = localStorage.getItem(clave);
            var datosParseados = JSON.parse(datosAlmacenados);
            datos.push(datosParseados);
        }
    } 
    
    //se ordena el vector
    datos.sort(function(a,b){
        return parseFloat(a.tiempo) - parseFloat(b.tiempo);
    });

    //se mostraran los datos, funcion para cada dato
    datos.forEach(function(dato){
            //se crea el segundo div donde ira la proxima fila que almacenara todos los datos del jugador
            var fila = document.createElement("div");
            fila.classList.add("fila");

            //se crea el div donde ira la primer columna, nombre
            var nombreColumna = document.createElement("div");
            nombreColumna.textContent = dato.nombre;
            nombreColumna.classList.add("dato");

            //se crea el segundo div donde ira el tiempo
            var tiempoColumna = document.createElement("div");
            tiempoColumna.textContent = dato.tiempo;
            tiempoColumna.classList.add("dato");

            //se crea el tercer div donde ira la puntuacion
            var puntuacionColumna = document.createElement("div");
            puntuacionColumna.textContent = dato.puntuacion;
            puntuacionColumna.classList.add("dato");

            // a el div que contiene a la fila de datos, se le almacenaran los div de cada columna
            fila.appendChild(nombreColumna);
            fila.appendChild(tiempoColumna);
            fila.appendChild(puntuacionColumna);

            //se almacena la fila en el div principal
            rankingsContainer.appendChild(fila);

            //se crea un div para espaciar el contenido
            var saltoLinea = document.createElement("div");
            saltoLinea.classList.add("salto-linea");
            rankingsContainer.appendChild(saltoLinea);
        });
}
        
