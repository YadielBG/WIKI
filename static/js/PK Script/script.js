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
let typeInterval; 

// 🤖 EXPRESIONES DE LA MASCOTA
const mascotImages = [
  "/static/pet/PK Pet/Mapaches_pokemon_8 UwU.png",
  "/static/pet/PK Pet/Mapaches_pokemon_2.png",
  "/static/pet/PK Pet/Mapaches_pokemon_7¿.png"
];

// 🤖 DIÁLOGOS ALEATORIOS
const mascotDialogues = [
  "¡La Pokédex está lista para ser consultada!",
  "¿Sabías que hay Pokémon que han vivido miles de años?",
  "¡Cuidado con el Team Rocket, andan cerca!",
  "¿Cuál es tu tipo elemental favorito?",
  "Investigar el pasado es la clave para entender el futuro Pokémon.",
  "¡Haz clic en un logo para empezar la investigación!"
];

setInterval(() => {
  const randomDialogue = mascotDialogues[Math.floor(Math.random() * mascotDialogues.length)];
  const diag = document.getElementById("floatingDialogue");
  if(diag) diag.innerText = randomDialogue;
}, 7000);

// 📖 BASE DE DATOS: HISTORIAS (Lore)
const stories = {
  "Pokémon Red": [
    "Kanto te espera. Elige a tu inicial y prepárate para vencer a los 8 líderes de gimnasio.",
    "El Team Rocket intenta robar el Silph Scope en Ciudad Azulona.",
    "Mewtwo aguarda en la Cueva Celeste como el desafío final tras la Liga Pokémon."
  ],
  "Pokémon Gold": [
    "Viaja por Johto y descubre el misterio de la Torre Quemada y los perros legendarios.",
    "Tras vencer la liga, podrás regresar a Kanto y enfrentar a los líderes originales.",
    "El enfrentamiento final ocurre en el Monte Plateado contra el legendario Rojo."
  ],
  "Pokémon Emerald": [
    "Hoenn está en peligro por la guerra entre el Team Magma y el Team Aqua.",
    "Despierta a Rayquaza en el Pilar Celeste para calmar a Groudon y Kyogre.",
    "El Frente de Batalla se abre para los entrenadores más experimentados."
  ],
  "Pokémon FireRed": [
    "Una versión modernizada de Kanto que incluye las misteriosas Islas Sete.",
    "Descubre el Lore de las Islas Sete y la conexión con la región de Johto.",
    "El Rubí y el Zafiro son necesarios para habilitar la comunicación con otras regiones."
  ],
  "Pokémon Platinum": [
    "En Sinnoh, el tiempo y el espacio se distorsionan debido al Team Galaxia.",
    "Entra al Mundo Distorsión para enfrentar a Giratina en su forma origen.",
    "Cynthia, la campeona más temida, te espera al final del camino."
  ],
  "Pokémon HeartGold": [
    "La versión definitiva de Johto con Pokémon que te siguen fuera de su Poké Ball.",
    "Captura a Ho-Oh o Lugia dependiendo de tu alma de entrenador.",
    "Participa en el Pokéathlon y desbloquea los secretos de las Ruinas de Alfa."
  ],
  "Pokémon Black 2": [
    "Dos años después de los eventos originales, Teselia ha cambiado drásticamente.",
    "El Neo Team Plasma intenta congelar la región usando el poder de Kyurem.",
    "Fusiona a Kyurem con Zekrom o Reshiram para obtener el poder definitivo."
  ],
  "Pokémon X": [
    "Kalos introduce el misterio de la Megaevolución y el arma definitiva de hace 3,000 años.",
    "Detén al Team Flare antes de que usen a Xerneas para su 'mundo hermoso'.",
    "Explora la Torre Maestra y domina el vínculo con tus Pokémon."
  ],
  "Pokémon Legends: Arceus": [
    "Explora la región de Hisui antes de que se llamara Sinnoh.",
    "Investiga las grietas espaciotemporales y calma a los Pokémon Señoriales.",
    "Reúne todas las tablas para encontrarte cara a cara con el creador: Arceus."
  ],
  "Pokémon Scarlet": [
    "Paldea te ofrece libertad total. Elige tu camino: Gimnasios, Dominantes o Team Star.",
    "Descubre el fenómeno de la Teracristalización en el foso de Paldea.",
    "El secreto de los Pokémon Paradoja se oculta en el Área Cero."
  ]
};

// 🎲 BASE DE DATOS: CURIOSIDADES
const curiosidadesData = {
  "Pokémon Red": ["MissingNo es un error de memoria.", "Estatua de Rhydon: El primer Pokémon diseñado.", "Mew fue añadido a último minuto."],
  "Pokémon Gold": ["Iba a ser el último juego de la saga.", "Celebi era imposible de atrapar sin evento.", "El mapa de Kanto fue reducido por falta de espacio."],
  "Pokémon Emerald": ["Rayquaza no necesita objeto para Megaevolucionar (en remakes).", "La región está basada en Kyushu, Japón."],
  "Pokémon FireRed": ["Fue el primer juego en incluir un adaptador inalámbrico.", "Se añadieron las Islas Sete para conectar con Hoenn."],
  "Pokémon Platinum": ["Giratina representa la antimateria.", "Es el juego de DS con la velocidad de surf más rápida."],
  "Pokémon HeartGold": ["Usa el motor de Platino para mejorar el rendimiento.", "Puedes caminar con cualquier Pokémon, incluso legendarios."],
  "Pokémon Black 2": ["Es la primera secuela directa numerada.", "Incluye el Pokémon World Tournament con líderes antiguos."],
  "Pokémon X": ["Primer juego principal en 3D.", "El tipo Hada se introdujo para balancear al tipo Dragón."],
  "Pokémon Legends: Arceus": ["No hay combates contra líderes de gimnasio tradicionales.", "Es el primer 'Mundo Abierto' de la franquicia."],
  "Pokémon Scarlet": ["Inspirado en la cultura y paisajes de España.", "Primer juego con cooperativo de hasta 4 jugadores."]
};

// 🕵️ BASE DE DATOS: MISTERIOS (Completada para los 10 juegos)
const misteriosData = {
  "Pokémon Red": [
    "El fantasma de la Torre Pokémon en Pueblo Lavanda.", 
    "¿Qué hay debajo de Diglett? La forma real de su cuerpo sigue siendo un enigma.",
    "La identidad del Dr. Fuji y su relación con la creación de Mewtwo."
  ],
  "Pokémon Gold": [
    "El misterio de las Ruinas de Alfa y la conexión de los Unown con el origen del mundo.", 
    "La verdadera identidad del padre de Plata (Silver), el rival de Johto.",
    "¿Por qué Rojo (Red) se aisló en la cima del Monte Plateado?"
  ],
  "Pokémon Emerald": [
    "Las inscripciones en Braille de las cámaras de los Regis (Regirock, Regice y Registeel).",
    "El misterio del Miraje Island (Isla Espejismo) que solo aparece bajo condiciones raras.",
    "¿Quién construyó el Pilar Celeste para invocar a Rayquaza?"
  ],
  "Pokémon FireRed": [
    "El mensaje oculto en el Punto de Enlace de las Islas Sete.",
    "La presencia de Deoxys en la Isla Origen y su llegada en un meteorito.",
    "¿Qué ocurrió con el Team Rocket tras su derrota definitiva en el Archipiélago?"
  ],
  "Pokémon Platinum": [
    "La casa de invitados de la Vieja Mansión y los fantasmas de la niña y el mayordomo.", 
    "El origen de Darkrai y Cresselia: la representación de las pesadillas y los sueños.",
    "La conexión de Giratina con el Mundo Distorsión y su destierro por Arceus."
  ],
  "Pokémon HeartGold": [
    "El evento secreto del Celebi que permite viajar al pasado para ver el origen de Silver.",
    "Las Ruinas de Sinjoh: el lugar donde Arceus puede crear un nuevo huevo legendario.",
    "¿Qué significan las grabaciones de radio extrañas en las Ruinas de Alfa?"
  ],
  "Pokémon Black 2": [
    "El misterio de la reserva natural y el Haxorus variocolor.",
    "¿Quiénes son realmente las musas de N, Anthea y Concordia?",
    "El barco fantasma (Fragata Plasma) y los experimentos con el ADN de Kyurem."
  ],
  "Pokémon X": [
    "La fantasma de Ciudad Luminalia que dice 'No eres el elegido'.", 
    "El cuarto cerrado de la central eléctrica que nunca se pudo abrir.",
    "El significado de los extraños grabados en las piedras de la Ruta 10."
  ],
  "Pokémon Legends: Arceus": [
    "¿Quién es realmente Volo y por qué su linaje está ligado a la mitología de Sinnoh?", 
    "El origen de los Pokémon Paradoja y las grietas espaciotemporales.",
    "¿Por qué el protagonista es el único capaz de usar el Arc Phone?"
  ],
  "Pokémon Scarlet": [
    "¿Quién es realmente Terapagos y cuál es su relación con la energía Teracristal?", 
    "El origen de los Pokémon Paradoja: ¿son del pasado/futuro o sueños materializados?",
    "El misterio del Libro Escarlata y las páginas borradas sobre el Área Cero."
  ]
};

// --- LÓGICA DE FUNCIONAMIENTO ---

function openSelector(category) {
  currentCategory = category;
  document.getElementById("gameSelector").classList.remove("hidden");
}

function closeSelector() {
  document.getElementById("gameSelector").classList.add("hidden");
  document.getElementById("mascotStory").classList.add("hidden");
  document.getElementById("curiosidadesTerminal").classList.add("hidden");
  document.getElementById("misteriosTerminal").classList.add("hidden");
}

function selectGame(game) {
  currentGame = game;
  currentStep = 0;

  // Reset de vistas
  document.getElementById("mascotStory").classList.add("hidden");
  document.getElementById("curiosidadesTerminal").classList.add("hidden");
  document.getElementById("misteriosTerminal").classList.add("hidden");

  if(currentCategory === "lore") {
    document.getElementById("mascotStory").classList.remove("hidden");
    showStory();
  } else if(currentCategory === "curiosidades") {
    showCuriosidades(game);
  } else if(currentCategory === "misterios") {
    showMisterios(game);
  }
}

function typeText(element, text) {
  clearInterval(typeInterval);
  element.innerHTML = "";
  let i = 0;
  typeInterval = setInterval(() => {
    element.innerHTML += text[i];
    i++;
    if(i >= text.length) clearInterval(typeInterval);
  }, 15);
}

function showStory() {
  const story = stories[currentGame] ? stories[currentGame][currentStep] : "Datos no encontrados.";
  typeText(document.getElementById("storyText"), story);
  document.getElementById("mascotImg").src = mascotImages[currentStep % mascotImages.length];
}

function nextStory() {
  currentStep++;
  if(currentStep >= stories[currentGame].length) {
    document.getElementById("storyText").innerText = "FIN DE LOS DATOS REGISTRADOS.";
    return;
  }
  showStory();
}

function showCuriosidades(game) {
  document.getElementById("curiosidadesTerminal").classList.remove("hidden");
  document.getElementById("curiosityAssistant").classList.remove("hidden");
  document.getElementById("curiosityText").innerText = "> SELECCIONA UNA ENTRADA...";
  const container = document.getElementById("filesContainer");
  container.innerHTML = "";

  if(curiosidadesData[game]) {
    curiosidadesData[game].forEach((text, index) => {
      const card = document.createElement("div");
      card.className = "file-card";
      card.innerHTML = `📁 DATA_${index+1}`;
      card.onclick = () => typeText(document.getElementById("curiosityText"), text);
      container.appendChild(card);
    });
  }
}

function showMisterios(game) {
  document.getElementById("misteriosTerminal").classList.remove("hidden");
  document.getElementById("misteryAssistant").classList.remove("hidden");
  document.getElementById("misteryText").innerText = "> ACCEDIENDO A ARCHIVOS CLASIFICADOS...";
  const container = document.getElementById("misteryFilesContainer");
  container.innerHTML = "";

  if(misteriosData[game]) {
    misteriosData[game].forEach((text, index) => {
      const card = document.createElement("div");
      card.className = "file-card";
      card.innerHTML = `⚠️ SECRET_${index+1}`;
      card.onclick = () => typeText(document.getElementById("misteryText"), text);
      container.appendChild(card);
    });
  }
}