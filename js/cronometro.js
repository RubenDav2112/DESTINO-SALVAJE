let intervalo;
function startCron(){
    var segundos = 0;
    var minutos = 0;
    intervalo = setInterval(start, 1000);
}

function start(){

    segundos++;
    if(segundos == 60){
        segundos = 0;
        minutos++;
    }
    var segundos = 0;
    var minutos = 0;
    var cronometro = document.getElementById("cronometro");
    cronometro.innerHTML =  (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);
}

function stopCron(){
    clearInterval(intervalo);
}

function stopMusic(){
    
}