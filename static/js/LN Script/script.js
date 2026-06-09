// 🌑 OSCURECER FONDO
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  let opacity = Math.min(scroll / 500, 0.7);
  document.getElementById("overlay").style.background = `rgba(11,20,22,${opacity})`;
});

// 🔽 SCROLL HERO
function scrollToSection() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

//Variables
let currentGame = "";
let currentStep = 0;
let currentCategory = "";
let typeInterval;

const mascotImages = [
  "/static/pet/LN Pet/Mapaches_1.png",
  "/static/pet/LN Pet/Mapaches_2.png",
  "/static/pet/LN Pet/Mapaches_3.png",
  "/static/pet/LN Pet/Mapaches_4.png",
  "/static/pet/LN Pet/Mapaches_666.png",
  "/static/pet/LN Pet/Mapaches_777.png",
  "/static/pet/LN Pet/Mapaches_8cho.png",
  "/static/pet/LN Pet/Mapaches_9.png"
];

// BASE DE DATOS COMPLETA
const stories = {
  "Little Nightmares": [
    "Six despierta en Las Fauces, un navío sumergido lleno de invitados hambrientos.",
    "Debe evadir al Conserje y a los Chefs para sobrevivir al hambre que la consume.",
    "Tras derrotar a La Dama, Six absorbe su poder para encontrar una salida."
  ],
  "Little Nightmares II": [
    "Mono rescata a Six y juntos viajan a través de la Ciudad Pálida.",
    "La Torre de Señales deforma a los habitantes a través de las televisiones.",
    "Mono debe enfrentar al Thin Man para descubrir una verdad dolorosa."
  ],
  "Little Nightmares III": [
    "Low y Alone atraviesan La Espiral buscando una salida de este mundo perturbador.",
    "Cada uno posee una herramienta única: un arco y una llave inglesa.",
    "Deben cooperar para sobrevivir a las amenazas que acechan en la Necrópolis."
  ]
};

const curiosidadesData = {
  "Little Nightmares": ["Los Gnomos eran niños humanos.", "La Dama odia los espejos.", "El juego se llamó 'Hunger' originalmente."],
  "Little Nightmares II": ["Mono significa 'uno'.", "Six no tiene su abrigo al inicio.", "La Maestra puede estirar su cuello."],
  "Little Nightmares III": ["Es el primer juego con cooperativo online.", "Low viaja a través de espejos.", "Desarrollado por Supermassive Games."]
};

const misteriosData = {
  "Little Nightmares": ["¿Es La Dama la madre de Six?", "¿Por qué Six se vuelve caníbal?", "El origen de los ojos petrificantes."],
  "Little Nightmares II": ["¿Es el Thin Man un ciclo de Mono?", "¿Por qué Six soltó a Mono?", "La masa de ojos de la torre."],
  "Little Nightmares III": ["¿Quién es el bebé gigante?", "¿A dónde lleva La Espiral?", "¿Qué es 'La Nada'?"]
};

// FUNCIONES
function openSelector(category) {
  currentCategory = category;
  document.getElementById("gameSelector").classList.remove("hidden");
  document.getElementById("mascotStory").classList.add("hidden");
  document.getElementById("curiosidadesTerminal").classList.add("hidden");
  document.getElementById("misteriosTerminal").classList.add("hidden");
}

function selectGame(game) {
  currentGame = game;
  currentStep = 0;
  // Ocultar todo antes de mostrar lo nuevo
  ["mascotStory", "curiosidadesTerminal", "misteriosTerminal"].forEach(id => document.getElementById(id).classList.add("hidden"));

  if (currentCategory === 'lore') {
    document.getElementById("mascotStory").classList.remove("hidden");
    showStory();
  } else if (currentCategory === 'curiosidades') {
    renderCards(curiosidadesData[game], "filesContainer", "curiosityAssistant", "curiosityText", "📁 DATA_");
    document.getElementById("curiosidadesTerminal").classList.remove("hidden");
  } else if (currentCategory === 'misterios') {
    renderCards(misteriosData[game], "misteryFilesContainer", "misteryAssistant", "misteryText", "⚠️ SECRET_");
    document.getElementById("misteriosTerminal").classList.remove("hidden");
  }
}

function typeText(elementId, text) {
  const element = document.getElementById(elementId);
  if(!element) return;
  clearInterval(typeInterval);
  element.innerHTML = ""; // Usamos innerHTML para respetar espacios
  let i = 0;
  typeInterval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 30);
}

function showStory() {
  typeText("storyText", stories[currentGame][currentStep]);
}

function nextStory() {
  currentStep++;
  if (currentStep < stories[currentGame].length) {
    showStory();
  } else {
    document.getElementById("storyText").innerHTML = "> FIN DE LA CONEXIÓN.";
  }
}

function renderCards(data, containerId, assistantId, textId, prefix) {
  const container = document.getElementById(containerId);
  document.getElementById(assistantId).classList.remove("hidden");
  container.innerHTML = "";
  data.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerText = `${prefix}${index + 1}`;
    card.onclick = () => typeText(textId, item);
    container.appendChild(card);
  });
}

function closeSelector() { document.getElementById("gameSelector").classList.add("hidden"); }
function scrollToSection() { window.scrollTo({ top: window.innerHeight, behavior: "smooth" }); }