// 🌑 OSCURECER FONDO AL HACER SCROLL
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  let opacity = Math.min(scroll / 500, 0.7);
  document.getElementById("overlay").style.background = `rgba(0,0,0,${opacity})`;
});

// 🔽 SCROLL AUTOMÁTICO DESDE HERO
function scrollToSection() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

// 🎮 VARIABLES DE CONTROL DE ESTADO
let currentGame = "";
let currentStep = 0;
let currentCategory = "";
let typeInterval; // Impide la superposición acelerada de caracteres

// 🤖 EXPRESIONES DE LA MASCOTA (Ajustadas para la ejecución interna de Live Server)
const mascotImages = [
  "static/pet/PPT Pet/0.png",
  "static/pet/PPT Pet/1.png",
  "static/pet/PPT Pet/2.png",
  "static/pet/PPT Pet/3.png",
  "static/pet/PPT Pet/4.png",
  "static/pet/PPT Pet/5.png",
  "static/pet/PPT Pet/6.png",
  "static/pet/PPT Pet/7.png",
  "static/pet/PPT Pet/8.png",
  "static/pet/PPT Pet/9.png"
];

// 🤖 DIÁLOGOS DE LA MASCOTA
const mascotDialogues = [
  "¡Hola, soy yo y te amo!",
  "Eres la primera persona en irrumpir aquí en años.",
  "Todos creen que el personal desapareció hace diez años. Nosotros seguimos aquí. Encuentra la flor.",
  "Abriste mi caja... Lamento mucho lo que pasó detrás de estas puertas.",
  "A mami no le gustan los tramposos.",
  "¡Él me hará parte de él!",
  "Esta es la Estación de Juegos. Es una estación de tren, pero es mucho más que eso.",
  "Para el Prototipo, no soy nada. Pero para mí, él lo es todo.",
  "Sé quién eres. Sé lo que hiciste.",
  "Esto es por su culpa. El Prototipo.",
  "¿No quieres jugar un juego conmigo?",
  "El Prototipo es la razón por la que todo está así. Tenemos que destruirlo.",
  "Lo llamaron 'La Hora de la Alegría'.",
  "Limpia el desastre. Para eso estás aquí, ¿verdad?",
  "¿Pensaste que podrías irte así sin más?"
];

// 🤖 CAMBIO AUTOMÁTICO DE DIÁLOGOS (CADA 7 SEGUNDOS)
setInterval(() => {
  const randomDialogue = mascotDialogues[Math.floor(Math.random() * mascotDialogues.length)];
  document.getElementById("floatingDialogue").innerText = randomDialogue;
}, 7000);

// 📖 HISTORIA COMPLETA DE POPPY PLAYTIME
const stories = {
  cap1: [
    "Diez años después del cierre de la fábrica, el protagonista, un ex-empleado de Playtime Co. recibe un misterioso paquete con una cinta VHS antigua y un mensaje.",
    "El protagonista regresa a la fábrica abandonada y se equipa con el GrabPack, una herramienta con dos manos artificiales extensibles.",
    "Al adentrarse en el vestíbulo principal, se encuentra con Huggy Wuggy, la enorme mascota azul. Tras reactivar la energía, Huggy desaparece.",
    "A medida que resuelve acertijos, Huggy Wuggy comienza a acecharlo desde las sombras.",
    "Finalmente, el monstruo lo acorrala, desatando una intensa persecución a través de las cintas transportadoras y conductos.",
    "El ex-empleado logra derribar una pesada pasarela metálica, haciendo que Huggy golpee varias tuberías y caiga al vacío hacia el abismo.",
    "Al final del capítulo, el protagonista encuentra la misteriosa 'habitación de la flor' y libera a Poppy Playtime de una vitrina de cristal."
  ],
  cap2: [
    "Poppy se muestra agradecida y promete ayudar al protagonista a escapar a través de un tren subterráneo llamado el Game Station.",
    "Antes de abordar, una elástica mano rosa atrapa a Poppy y la arrastra: se trata de Mommy Long Legs.",
    "Mommy Long Legs advierte que para obtener el código del tren debe superar tres desafíos mortales: Musical Memory, Wack-a-Wuggy y Statues.",
    "Durante las pruebas, el protagonista es testigo de la degradación mental de Mommy y cómo eliminó a otros juguetes.",
    "El protagonista se ve obligado a romper las reglas en el último juego (Statues) para no ser atrapado por PJ Pug-a-Pillar.",
    "Enfurecida, Mommy inicia una cacería. El protagonista logra atraerla hacia una trituradora industrial donde es destruida.",
    "Mientras agoniza, Mommy grita: '¡Él me hará parte de él!'. La mano mecánica del Prototipo emerge para llevarse su torso.",
    "El protagonista regresa al tren, introduce el código y aborda junto a Poppy. No obstante, ella desvía las vías hacia las profundidades del complejo. El tren se descarrila debido al exceso de velocidad."
  ],
  cap3: [
    "El protagonista despierta tras el choque y es arrastrado por CatNap hacia Playcare, el gigantesco orfanato subterráneo.",
    "Es contactado por Ollie, una voz infantil misteriosa que le explica que CatNap adora al Prototipo como a un dios y usa un gas alucinógeno rojo.",
    "Durante su exploración se enfrenta a los Smiling Critters corrompidos y descubre que CatNap solía ser un niño huérfano llamado Theodore Grambell.",
    "Se reencuentra con Poppy, quien revela que necesita ayuda para destruir al Prototipo y acabar con el sufrimiento de las almas atrapadas.",
    "Tras evadir a la desquiciada profesora Miss Delight, el ex-empleado electrocuta a CatNap en la sala de producción de gas.",
    "Mientras CatNap arde, el Prototipo desciende. CatNap acepta su destino y deja que el Prototipo se lleve su cuerpo para integrarlo a su estructura.",
    "Poppy muestra una cinta de video de 'La Hora de la Alegría'. Ambos descienden en un ascensor hacia el laboratorio central y el cubil del Experimento 1006."
  ]
};

// 🎲 CURIOSIDADES POPPY PLAYTIME
const curiosidadesData = {
  cap1: [
    "El destino oculto de Huggy Wuggy: Durante su caída, se ven manchas de sangre en las tuberías. Esto confirmó que los juguetes poseen anatomía interna real.",
    "La voz del comercial: La voz que narra el comercial antiguo de Poppy pertenece al propio fundador de la compañía, Elliot Ludwig.",
    "El jumpscare eliminado: En las primeras versiones, Huggy Wuggy no mordía a la cámara; te envolvía en un abrazo asfixiante haciendo honor a su nombre."
  ],
  cap2: [
    "Los restos de Huggy Wuggy: En la zona de tratamiento de agua se aprecian hilos de pelaje azul y sangre. El Prototipo arrastró su cuerpo para asimilarlo.",
    "El dilema moral de Mommy Long Legs: Su conciencia pertenecía a Marie Payne. Era violenta con los adultos pero profundamente cariñosa con los niños huérfanos.",
    "El juego de la oruga era mortal en la vida real: Playtime Co. usaba el juego de Statues para evaluar reflejos antes de seleccionarlos como sujetos de prueba."
  ],
  cap3: [
    "El trágico origen de CatNap: Theodore Grambell consideraba al Prototipo su amigo imaginario. Se electrocutó con un clip y el Prototipo le salvó la vida.",
    "La perturbadora estatua del Prototipo: CatNap construyó un altar hecho completamente de restos desmembrados de otros juguetes rechazados.",
    "El destino de los Smiling Critters: Fueron eliminados por no adorar al Prototipo. Los peluches pequeños se alimentaron de sus cuerpos para sobrevivir."
  ]
};

// 🕵️ MISTERIOS POPPY PLAYTIME
const misteriosData = {
  cap1: [
    "La identidad del protagonista: Los monstruos lo reconocen de inmediato y muestran rencor, tratándolo como un cómplice directo de los tormentos del pasado.",
    "¿Un científico principal?: Su dominio perfecto de la tecnología de la empresa refuerza la teoría de que pudo ser un supervisor de alto rango en busca de redención."
  ],
  cap2: [
    "La ambigüedad moral de Poppy: Pasa de ser una aliada desvalida a una figura manipuladora que te traiciona argumentando que eres demasiado perfecto para dejarte ir.",
    "¿La verdadera mente maestra?: Queda el debate de si actúa por un deseo genuino de justicia o si te usa para eliminar al Prototipo y reclamar el control de la empresa."
  ],
  cap3: [
    "El enigma de Ollie: Se comunica por un teléfono de juguete con conocimiento milimétrico de los sistemas. ¿Cómo sobrevivió un niño solo por más de una década?",
    "La trampa del Prototipo: Existe la inquietante posibilidad de que Ollie sea una identidad falsa del Prototipo (quien imita voces) para guiarte directo a su cubil."
  ]
};

// 🎮 ABRIR PANEL
function openSelector(category) {
  currentCategory = category;
  document.getElementById("gameSelector").classList.remove("hidden");
}

// ❌ CERRAR PANEL Y RESETEAR VISIBILIDAD DE TERMINALES
function closeSelector() {
  document.getElementById("gameSelector").classList.add("hidden");
  document.getElementById("mascotStory").classList.add("hidden");
  document.getElementById("curiosidadesTerminal").classList.add("hidden");
  document.getElementById("misteriosTerminal").classList.add("hidden");
}

// 🎮 INTERRUPTOR DE LOGOS
function selectGame(game) {
  currentGame = game;
  currentStep = 0;

  document.getElementById("mascotStory").classList.add("hidden");
  document.getElementById("curiosidadesTerminal").classList.add("hidden");
  document.getElementById("misteriosTerminal").classList.add("hidden");

  if(currentCategory === "lore") {
    document.getElementById("mascotStory").classList.remove("hidden");
    showStory();
  }
  if(currentCategory === "curiosidades") {
    showCuriosidades(game);
  }
  if(currentCategory === "misterios") {
    showMisterios(game);
  }
}

// ⌨️ EFECTO ESCRITURA MECÁNICA CONTROLADO
function typeText(element, text, speed = 25) {
  clearInterval(typeInterval);
  element.innerHTML = "";
  let i = 0;

  typeInterval = setInterval(() => {
    element.innerHTML += text[i];
    i++;
    if(i >= text.length) {
      clearInterval(typeInterval);
    }
  }, speed);
}

// 📖 CARGA DE HISTORIA
function showStory() {
  const story = stories[currentGame][currentStep];
  typeText(document.getElementById("storyText"), story);
  document.getElementById("mascotImg").src = mascotImages[currentStep % mascotImages.length];
}

// ⏭ INTERACTOR DE DIÁLOGOS DE HISTORIA
function nextStory() {
  currentStep++;
  if(currentStep >= stories[currentGame].length) {
    document.getElementById("storyText").innerText = "FIN DE LOS ARCHIVOS RECOBRADOS DEL CAPÍTULO.";
    return;
  }
  showStory();
}

// 🎲 DESPLIEGUE DINÁMICO DE CURIOSIDADES
function showCuriosidades(game) {
  document.getElementById("curiosidadesTerminal").classList.remove("hidden");
  
  // Mensaje base para que la interfaz nunca inicie vacía
  document.getElementById("curiosityText").innerText = "> SELECCIONA UNA CINTA VHS PARA REPRODUCIR...";
  document.getElementById("curiosityMascot").src = mascotImages[0];

  const container = document.getElementById("filesContainer");
  container.innerHTML = "";

  curiosidadesData[game].forEach((text, index) => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `📁 VHS_TAPE_${index+1}`;
    card.onclick = () => {
      typeText(document.getElementById("curiosityText"), text);
      document.getElementById("curiosityMascot").src = mascotImages[index % mascotImages.length];
    };
    container.appendChild(card);
  });
}

// 🕵️ DESPLIEGUE DINÁMICO DE MISTERIOS
function showMisterios(game) {
  document.getElementById("misteriosTerminal").classList.remove("hidden");
  
  // Mensaje base para que la interfaz nunca inicie vacía
  document.getElementById("misteryText").innerText = "> ACCEDIENDO A ARCHIVOS RESTRINGIDOS... SELECCIONA UN EXPEDIENTE:";
  document.getElementById("misteryMascot").src = mascotImages[0];

  const container = document.getElementById("misteryFilesContainer");
  container.innerHTML = "";

  misteriosData[game].forEach((text, index) => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `⚠️ RESTRICTED_${index+1}`;
    card.onclick = () => {
      typeText(document.getElementById("misteryText"), text);
      document.getElementById("misteryMascot").src = mascotImages[index % mascotImages.length];
    };
    container.appendChild(card);
  });
}