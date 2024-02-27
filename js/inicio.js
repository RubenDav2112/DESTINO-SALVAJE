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
    var musicBack=document.getElementById("musicBack");
    var musica = document.getElementById("iconoM");
    var imagenActual = musica.src;

    if(imagenActual.endsWith("music.png")){
        musica.src = "img/musicMute.png";
        musicBack.pause();
    }else{
        musica.src = "img/music.png";
        musicBack.play();
    }    
    
}

function creditosF(){
    window.location.href = "creditos.html";//Se debe cambiar no es el original
}