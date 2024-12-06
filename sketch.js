let consejos = [];

let tempConsejos = []; // Array temporal para manejar las frases sin repetición
let consejoElegido = "clickeá para hacerle una consulta al tarot del gestor cultural";


function preload() {
  // Cargar el archivo de texto
  consejos = loadStrings('consejos.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(12);
  textWrap(WORD);
  

  // Inicializar el array temporal
  reiniciarTempConsejos();
}

function draw() {
  background(255);
  
  textSize(windowWidth / 90); // Ajustar tamaño del texto dinámicamente
  fill (0);
  textFont('Verdana');
  text('cucurucho', width/2, height - height/8);
  text('2024', width/2, height - height/10);
  
  textSize(windowWidth / 50); // Ajustar tamaño del texto dinámicamente
  fill(255,0,0);
  textFont('Courier New');
  text(consejoElegido, width / 2, height / 2);
}

function mousePressed() {
  if (tempConsejos.length === 0) {
    // Si se han mostrado todos los consejos, reiniciar
    reiniciarTempConsejos();
  }

  // Elegir un consejo al azar del array temporal
  let index = int(random(tempConsejos.length));
  consejoElegido = tempConsejos[index];

  // Eliminar el consejo elegido del array temporal
  tempConsejos.splice(index, 1);
}

function reiniciarTempConsejos() {
  // Reiniciar el array temporal con todos los consejos
  tempConsejos = consejos.slice(); // Copia del array original
}
