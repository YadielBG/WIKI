// 🌑 OSCURECER FONDO
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  let opacity = Math.min(scroll / 500, 0.7);
  document.getElementById("overlay").style.background = `rgba(0,0,0,${opacity})`;
});

// 🔽 SCROLL HERO
function scrollToSection() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

// 🎮 VARIABLES
let currentGame = "";
let currentStep = 0;
let currentCategory = "";

// 🤖 EXPRESIONES MASCOTA (Puedes poner sprites de Cuphead, Mugman, Dice, etc.)
const mascotImages = [
  "/static/pet/CUP Pet/explicacion.png",
  "/static/pet/CUP Pet/idea.png",
  "/static/pet/CUP Pet/juego.png",
  "/static/pet/CUP Pet/neutro.png"
];

// 🤖 DIALOGOS ALEATORIOS MASCOTA (Estilo gamer/Cuphead)
const mascotDialogues = [
  "¡No olvides hacer el Parry en las cosas rosas!",
  "El amuleto de la bomba de humo (Smoke Bomb) te salva la vida.",
  "¿Ya lograste pasar un jefe en rango S?",
  "King Dice te está esperando en el Casino...",
  "Grim Matchstick ha destruido más controles que cualquier otro jefe.",
  "¡Cuidado con los ataques en la fase final!",
  "El disparo 'Spread' hace un daño brutal de cerca.",
  "¿Prefieres jugar con Cuphead o con Mugman?",
  "Dicen que hay un modo secreto en blanco y negro.",
  "¡Wallop! Prepara tus dedos para el sufrimiento.",
  "Ahorra tus súper ataques para la última fase.",
  "La Chef Salterbaker esconde un gran secreto en el DLC.",
  "No te fíes de las ofertas del Diablo.",
  "¡Ese disparo Chaser viene genial para esquivar sin apuntar!"
];

// 🤖 CAMBIO AUTOMATICO DIALOGOS
setInterval(() => {
  const randomDialogue = mascotDialogues[Math.floor(Math.random() * mascotDialogues.length)];
  document.getElementById("floatingDialogue").innerText = randomDialogue;
}, 7000);

// 📖 LORE COMPLETO (Adaptado a los Mundos de Cuphead)
const stories = {
  re0: [ // Isla Tintero I
    "Cuphead y Mugman pierden sus almas en el casino del Diablo tras una mala racha.",
    "Para salvarse, el Diablo les ordena recolectar los contratos de alma de otros deudores.",
    "The Root Pack (las verduras vivientes) son tus primeros contrincantes en el huerto.",
    "Goopy Le Grande es una babosa gigante hiperactiva que te enseña a agacharte.",
    "Hilda Berg introduce las mecánicas aéreas transformándose en constelaciones.",
    "Cagney Carnation engaña con su apariencia de flor antes de desatar el caos.",
    "Cagney se estira y lanza semillas feroces en su fase final."
  ],
  re1: [ // Isla Tintero II
    "Llegamos a la segunda isla, donde la dificultad empieza a escalar brutalmente.",
    "Baroness Von Bon Bon te ataca desde su castillo de dulces usando a sus súbditos.",
    "Beppi The Clown convierte un parque de diversiones en una pesadilla de plataformas.",
    "Djimmi The Great usa magia e ilusiones dentro de una lámpara maravillosa.",
    "Wally Warbles es un pájaro gigante que te ataca desde su casa de madera.",
    "Grim Matchstick, el dragón verde, es considerado uno de los mayores muros del juego.",
    "La última fase de Grim divide sus disparos si les pegas, ¡un error fatal!"
  ],
  re2: [ // Isla Tintero III
    "La tercera isla está llena de jefes complejos con múltiples fases técnicas.",
    "Rumor Honeybottoms es una abeja reina que te obliga a escalar plataformas constantemente.",
    "Captain Brineybeard lucha desde su barco pirata invocando criaturas marinas.",
    "Werner Werman es un ratón militar que maneja un tanque mecánico casero.",
    "El robot del Dr. Kahl requiere precisión milimétrica para destruir sus tres zonas core.",
    "Cala Maria te petrifica en el aire obligándote a mover el joystick rápido.",
    "Phantom Express es un tren fantasma donde debes mover la plataforma con parries."
  ],
  re3: [ // El Casino e Infierno
    "Finalmente entramos al casino del Diablo para entregar los contratos.",
    "King Dice nos obliga a jugar un juego de mesa viviente usando el Parry en los dados.",
    "Debes enfrentar a los esbirros de King Dice dependiendo de tu suerte con el dado.",
    "Al llegar al final, King Dice te ataca con su baraja de cartas marchantes.",
    "El Diablo te ofrece unirte a él. Si te niegas, comienza la batalla final.",
    "La pelea ocurre en el mismísimo infierno mientras el suelo se desmorona.",
    "¡Al derrotarlo, liberan todas las almas de la Isla Tintero y salvan el día!"
  ],
  re4: [ // El DLC: The Delicious Last Course
    "Ms. Chalice pide ayuda a Cuphead y Mugman desde la Isla Tintero IV.",
    "El Chef Salterbaker conoce la receta de la Wondertart para revivir a Chalice.",
    "Debes recolectar ingredientes derrotando a los temibles jefes de la isla nevada.",
    "Glumstone the Giant te traga vivo para pelear dentro de su estómago.",
    "The Howling Aces son un escuadrón de perros aviadores que alteran tu pantalla rota.",
    "El Chef Salterbaker resulta ser el verdadero villano y quiere sus almas para la tarta.",
    "Tras derrotarlo en su panadería cósmica, el Chef se reforma y abre una pastelería pacífica."
  ],
  // Dejamos los espacios vacíos por si agregas más secciones en el HTML (RE5-RE9)
  re5: [], re6: [], re7: [], re8: [], re9: []
};

// 🎲 CURIOSIDADES DE GAMER EXPERTO
const curiosidadesData = {
  re0: [
    "Originalmente las armas se compraban con un sistema diferente.",
    "The Root Pack tiene una fase secreta si no le pegas a la cebolla.",
    "Goopy Le Grande hace una reverencia antes de morir.",
    "El diseño de Hilda Berg está inspirado en Betty Boop."
  ],
  re1: [
    "Djimmi The Great te da vidas extra si giras en círculos en el mapa.",
    "Beppi el Payaso está inspirado en la estética de los parques de los años 30.",
    "Wally Warbles hace una referencia directa a los juegos de Woody Woodpecker.",
    "Grim Matchstick originalmente iba a escupir agua en vez de fuego."
  ],
  re2: [
    "El Dr. Kahl es un homenaje al Dr. Wily de Mega Man.",
    "Cala Maria tiene bocetos descartados donde era un calamar gigante.",
    "El Phantom Express rinde tributo a la animación 'Swing You Sinners!'",
    "Werner Werman habla con un marcado acento alemán en los textos."
  ],
  re3: [
    "King Dice está inspirado físicamente en el famoso músico Cab Calloway.",
    "Si aceptas el trato del Diablo obtienes un final malo secreto.",
    "La batalla con el Diablo tiene animaciones hechas 100% a mano en papel gigante.",
    "Puedes evitar pelear con algunos jefes de King Dice si dominas el Parry."
  ],
  re4: [
    "Ms. Chalice tiene un doble salto único y un dash con Parry incorporado.",
    "El DLC tardó años en desarrollarse debido al nivel extremo de detalle en su animación.",
    "La banda sonora del DLC reclutó a más de 110 músicos de Jazz reales.",
    "El Chef Salterbaker tiene las animaciones con más frames por segundo de todo el juego."
  ],
  re5: [], re6: [], re7: [], re8: [], re9: []
};

// 🕵️ MEJORES STRATEGIES / BUILDS POR MUNDO
const misteriosData = {
  re0: [
    "Build Ideal: Usa 'Peashooter' para Hilda y 'Spread' para balancear a Cagney.",
    "Usa el amuleto 'Smoke Bomb' para pasar a través de las embestidas de Goopy.",
    "Estrategia: En Cagney Carnation, quédate en las plataformas flotantes al final.",
    "Guarda el Super I (Mega Blast) para limpiar instantáneamente la última fase de Hilda."
  ],
  re1: [
    "Build Ideal: 'Chaser' te permite concentrarte 100% en esquivar a Grim Matchstick.",
    "Para Beppi, el disparo 'Lobber' destruye sus fases en los carritos muy rápido.",
    "Estrategia: No uses disparos cargados contra las plataformas de la Baronesa.",
    "En Wally Warbles, mantén el avión pequeño para esquivar las plumas flotantes."
  ],
  re2: [
    "Build Ideal: El disparo 'Roundabout' es clave para Rumor Honeybottoms.",
    "Para el Dr. Kahl, destruye primero la antena láser para evitar la muerte instantánea.",
    "Estrategia: Usa las bombas del avión cuando Cala Maria esté congelándote.",
    "En Phantom Express, equípate Super II (Invencibilidad) para la fase final del tren."
  ],
  re3: [
    "Build Ideal: 'Charge' o 'Spread' limpian a los esbirros de King Dice en segundos.",
    "Aprende el ritmo del dado: salta justo un frame antes del color que quieres.",
    "Estrategia contra el Diablo: En la fase de las plataformas, usa 'Spread' hacia arriba.",
    "El amuleto 'P. Sugar' hace que el primer parry sea automático, ideal para la baraja de King Dice."
  ],
  re4: [
    "Build Ideal: El nuevo disparo 'Crackshot' es el mejor del juego para apuntar automático.",
    "Jugar como Ms. Chalice hace que los jefes del DLC se sientan mucho más orgánicos.",
    "Estrategia: Contra los aviadores, configura tus controles para bloquear el eje si te cuesta voltear.",
    "El amuleto 'Cursed Relic' añade un reto extremo cambiando tu arma al azar cada vez que dejas de disparar."
  ],
  re5: [], re6: [], re7: [], re8: [], re9: []
};

// 🎮 ABRIR PANEL
function openSelector(category) {
  currentCategory = category;
  document.getElementById("gameSelector").classList.remove("hidden");
}

// ❌ CERRAR PANEL
function closeSelector() {
  document.getElementById("gameSelector").classList.add("hidden");
  document.getElementById("mascotStory").classList.add("hidden");
  document.getElementById("curiosidadesTerminal").classList.add("hidden");
  document.getElementById("misteriosTerminal").classList.add("hidden");
}

// 🎮 SELECCIONAR JUEGO / MUNDO
function selectGame(game) {
  currentGame = game;
  currentStep = 0;

  document.getElementById("mascotStory").classList.add("hidden");
  document.getElementById("curiosidadesTerminal").classList.add("hidden");
  document.getElementById("misteriosTerminal").classList.add("hidden");

  // 📖 LORE
  if(currentCategory === "lore") {
    document.getElementById("mascotStory").classList.remove("hidden");
    showStory();
  }

  // 🎲 CURIOSIDADES
  if(currentCategory === "curiosidades") {
    showCuriosidades(game);
  }

  // 🕵️ MISTERIOS / STRATEGIES
  if(currentCategory === "misterios") {
    showMisterios(game);
  }
}

// ⌨️ EFECTO TEXTO
function typeText(element, text, speed = 25) {
  element.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    element.innerHTML += text[i];
    i++;
    if(i >= text.length) {
      clearInterval(interval);
    }
  }, speed);
}

// 📖 MOSTRAR LORE
function showStory() {
  const story = stories[currentGame][currentStep];
  typeText(document.getElementById("storyText"), story);
  document.getElementById("mascotImg").src = mascotImages[currentStep % mascotImages.length];
}

// ⏭ SIGUIENTE
function nextStory() {
  currentStep++;
  if(currentStep >= stories[currentGame].length) {
    document.getElementById("storyText").innerText = "DATOS DE ISLA COMPLETADOS";
    return;
  }
  showStory();
}

// 🎲 CURIOSIDADES
function showCuriosidades(game) {
  document.getElementById("curiosidadesTerminal").classList.remove("hidden");
  const container = document.getElementById("filesContainer");
  container.innerHTML = "";

  curiosidadesData[game].forEach((text, index) => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `☕ SECRET_${index+1}`;
    card.onclick = () => {
      document.getElementById("curiosityAssistant").classList.remove("hidden");
      typeText(document.getElementById("curiosityText"), text);
      document.getElementById("curiosityMascot").src = mascotImages[index % mascotImages.length];
    };
    container.appendChild(card);
  });
}

// 🕵️ MISTERIOS / STRATEGIES
function showMisterios(game) {
  document.getElementById("misteriosTerminal").classList.remove("hidden");
  const container = document.getElementById("misteryFilesContainer");
  container.innerHTML = "";

  misteriosData[game].forEach((text, index) => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `🎯 STRAT_${index+1}`;
    card.onclick = () => {
      document.getElementById("misteryAssistant").classList.remove("hidden");
      typeText(document.getElementById("misteryText"), text);
      document.getElementById("misteryMascot").src = mascotImages[index % mascotImages.length];
    };
    container.appendChild(card);
  });
}