
window.onload = assignImages;

var intervalo;
var segundos = 0;
var minutos = 0;

// Variables que leen el nombre del jugador desde la URL
var params = new URLSearchParams(window.location.search);
var nombre = params.get('nombre');



function startCron(){
  var segundos = 0;
  var minutos = 0;
  intervalo = setInterval(startC, 1000);
}

function startC(){

  segundos++;
  if(segundos == 60){
      segundos = 0;
      minutos++;
  }
  
  var cronometro = document.getElementById("cronometro");
  cronometro.innerHTML =  (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);
}

/*function stopCron(){
  clearInterval(intervalo);
}*/


/*function stopMusic(){
    
}*/





//JUEGO
//generar el vector con el orden de las imagenes

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}

let arrayAnimals = [1, 2, 3, 4, 5, 6]; //indicar el orden en que aparecen las imagenes
let arrayDivs1 = [1,2,3]; //el orden en que se asignan los paisajes
let arrayDivs2 = [1,2,3]; //orden de los nombres 
let numeroNombre = {
  1: 'Aguila',
  2: 'Buffalo',
  3: 'Camello',
  4: 'Cocodrilo',
  5: 'Orca',
  6: 'Tigre',
  7: 'Pinguino'
};
let answers = {};  //animal : paisaje  or animal : nombre
let correctImage = {}; //div : imagen correcta
let correctAudio = {} //animal : audio correcto
let div;
let count =0; //para saber si ya se completo el nivel, despues de tres arrastres correctos se termina el nivel
let level = 1; //en que nivel estamos
let puntos=0;
let incorrectAudio = new Audio("../audio/InGame/wrong.mp3");


shuffleArray(arrayAnimals);
shuffleArray(arrayDivs1);
shuffleArray(arrayDivs2);






//funcion para alocal las imagenes en los divs, e indicar a traves del id que imagen le fue asignada
function assignImages(){
  
  if(level == 2){
    document.getElementById('ten').innerHTML = "";
    document.getElementById('eleven').innerHTML = "";
    document.getElementById('twelve').innerHTML = "";
  }
  for(let i = 1; i <= 3; i++){
    switch(i){
      case 1:
        document.getElementById('one').src = "../img/animals/" +arrayAnimals[0]+".png";
        document.getElementById('one').style.display = "block";
        div="one";
        correctAudio["one"] = "../audio/animal-sounds/"+arrayAnimals[0]+".mp3";
        break;
      case 2:
        document.getElementById('two').src = "../img/animals/" + arrayAnimals[0]+".png";
        document.getElementById('two').style.display = "block";
        div="two";
        correctAudio["two"] = "../audio/animal-sounds/"+arrayAnimals[0]+".mp3";

        break;
      case 3:
        document.getElementById('three').src = "../img/animals/" + arrayAnimals[0]+".png";
        document.getElementById('three').style.display = "block";
        div="three";
        correctAudio["three"] = "../audio/animal-sounds/"+arrayAnimals[0]+".mp3";

        break;
    }
    switch(arrayDivs1[0]){
      case 1:
        document.getElementById('four').src= "../img/animals/" + arrayAnimals[0]+".webp";
        answers[div] = "four";
        correctImage["four"] = "../img/animals/"+arrayAnimals[0]+""+arrayAnimals[0]+".png";
        div="ten";
        break;
      case 2:
        document.getElementById('five').src = "../img/animals/" + arrayAnimals[0]+".webp";
        answers[div] = "five";
        correctImage["five"] = "../img/animals/"+arrayAnimals[0]+""+arrayAnimals[0]+".png";
        div="eleven"
        break;
      case 3:
        document.getElementById('six').src = "../img/animals/" + arrayAnimals[0]+".webp";
        correctImage["six"] = "../img/animals/"+arrayAnimals[0]+""+arrayAnimals[0]+".png";
        answers[div] = "six";
        div="twelve";
        break;
    }
    switch(arrayDivs2[0]){
      case 1:
        document.getElementById('seven').innerHTML = numeroNombre[arrayAnimals[0]];
        document.getElementById('seven').style.display = "block";
        answers["seven"] = div;
        break;
      case 2:
        document.getElementById('eight').innerHTML = numeroNombre[arrayAnimals[0]];
        document.getElementById('eight').style.display = "block";
        answers["eight"] = div;
        break;
      case 3:
        document.getElementById('nine').innerHTML = numeroNombre[arrayAnimals[0]];
        document.getElementById('nine').style.display = "block";
        answers["nine"] = div;
        break;
    }
    arrayDivs1.shift();
    arrayDivs2.shift();
    arrayAnimals.shift();
  }
  arrayDivs1 = [1,2,3];
  arrayDivs2 = [1,2,3];
  shuffleArray(arrayDivs1);
  shuffleArray(arrayDivs2);
  if(level == 1)
    startCron();

}


function start(e,msg) {
	console.log("funcion start moviendo ",msg);
	e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
	e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
	e.target.style.opacity = '1'; 
}

/**
* Función que se ejecuta se termina de arrastrar el elemento. 
**/
function end(e){
	console.log("entre  funcion end");
	e.target.style.opacity = ''; // Restaura la opacidad del elemento			
	e.dataTransfer.clearData("Data");			
}

/**
* Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
**/
//El enter es opcional para el destino de colocacion y no es necesario para todos los escenarios de arrastrar y colocar 
function enter(e,msg) {
	console.log("funcion enter -> Tablero",msg+" retorno true");
	return true
}

/**
* Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
* Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
**/
function over(e,msg) {

  
	//if(e.target.className == "habitadBox" || e.target.className == "forLabels"){
    return false;
 
}
    
/**
* Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
**/

function drop(e,msg){
	//si queremos soltar en un area donde no se puede nos regresa al lugar de donde salio la imagen.

  let elementoArrastrado = e.dataTransfer.getData("Text");

  if(answers[elementoArrastrado] == e.target.id){
    
    // SONIDO EXITO AQUÍ
    


    console.log(" funcion drop "+msg);
    e.preventDefault(); // Para indicar que el soltado es permitido en esa zona porque 
                        //por default el navegador cancela los soltados de elementos.
    //e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
    let element = document.getElementById(elementoArrastrado);
    if(element.className == "animalImg"){
      e.target.src=""+correctImage[e.target.id]+""; 
      // Create an Audio object with the path to your audio file
      if(document.getElementById("iconoV").className == "fa-solid fa-volume-high"){
        const audio = new Audio(correctAudio[elementoArrastrado]);
        // Play the audio
        audio.play();
      }
    }else{
      e.target.innerHTML = element.innerHTML;
      
    }
    element.style.display = "none";
    console.log(""+correctImage[e.target.id]+"");
    comprobarPuzzle();
    puntos+=10;
  }else{
    //bajar puntos
    if(level == 1){
      puntos-=5;
    }else{
      puntos-=5;
    }

    //SONIDO ERROR AQUÍ
    if(document.getElementById("iconoV").className == "fa-solid fa-volume-high"){
      console.log("incorrecto");
      incorrectAudio.play();
    }

  }
  document.getElementById("puntos").innerHTML = "PUNTOS: "+puntos;
}

function comprobarPuzzle(){
	console.log("entre  funcion comprobarPuzzle");
  count++;
  console.log(count);
	if(count == 6){
    console.log("nivel completado");
    
    if(level == 2){
      //fin juego
      window.location.href = "felicitacion.html?nombre=" + encodeURIComponent(nombre);
    }else{
      level++;
      count = 0;

      intervalo=setInterval(function(){
        assignImages();
        clearInterval(intervalo);
      }, 2000);
      
    }
  }
}