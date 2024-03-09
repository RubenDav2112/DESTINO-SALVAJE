function cambiarIcono(){
    var icono = document.getElementById("iconoV");
    var claseActual = icono.className;

    if(claseActual.includes("fa-solid fa-volume-high")){
        icono.className = "fa-solid fa-volume-xmark";
    }else{
        icono.className = "fa-solid fa-volume-high";
    }
}

function cambiarIconoM(){
    var musica = document.getElementById("iconoM");
    var imagenActual = musica.src;
    if(imagenActual.endsWith("music.png")){
        musica.src = "../img/icons/musicMute.png";
        musicafondo.pause();

    }else{
        musica.src = "../img/icons/music.png";
        musicafondo.play();
    }    
}

function creditosF(){
    window.location.href = "creditos.html";
}

const musicafondo = document.getElementById("musicBack");