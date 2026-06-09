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

// 🎮 VARIABLES
let currentGame = "";
let currentStep = 0;
let currentCategory = "";

// 🤖 EXPRESIONES MASCOTA (Rutas para tus imágenes del Kolog)
const mascotImages = [
  "static/img/ZDL Pet/an1.png",
  "static/img/ZDL Pet/an2.png",
  "static/img/ZDL Pet/an3.png",
  "static/img/ZDL Pet/an4.png",
  "static/img/ZDL Pet/an5.png"
];

// 🤖 DIÁLOGOS ALEATORIOS DEL KOLOG FLOTANTE
const mascotDialogues = [
  "¡Yajajá! Me encontraste.",
  "¿Has visto los misterios que esconde la Tableta Sheikah?",
  "Dicen que quedan tesoros enterrados en el Desierto Gerudo.",
  "¡Ten cuidado con los Guardianes si vas al Castillo!",
  "El gran Árbol Deku me contó una historia increíble.",
  "¿Llevas suficientes elixires en la alforja?",
  "La Espada Maestra aguarda al héroe elegido.",
  "Las Piedras Guía están brillando de nuevo.",
  "Sentí una presencia extraña cerca de la Montaña de la Muerte.",
  "¡No te olvides de recoger las semillas que encuentres!",
  "Ganon se hace más fuerte cada medianoche.",
  "La Princesa Zelda lleva mucho tiempo resistiendo.",
  "Hay santuarios antiguos ocultos detrás de las cascadas.",
  "¿Escuchaste la tonada que toca el bardo Kass?",
  "Los artefactos Zonnan esconden una energía muy antigua."
];

// 🤖 CAMBIO AUTOMÁTICO DE DIÁLOGOS
setInterval(() => {
  const randomDialogue = mascotDialogues[Math.floor(Math.random() * mascotDialogues.length)];
  document.getElementById("floatingDialogue").innerText = randomDialogue;
}, 7000);

// 📖 CRÓNICAS Y HISTORIAS DE LAS REGIONES
const stories = {
  re0: [
    "La Gran Meseta es considerada la cuna del reino de Hyrule.",
    "Aquí, el héroe despierta de un letargo de cien años en el Santuario de la Vida.",
    "Un misterioso anciano guía los primeros pasos del portador de la espada.",
    "El espíritu del Rey Roham revela la verdad sobre el Cataclismo.",
    "Cuatro santuarios antiguos deben ser completados para obtener la paravela.",
    "La Meseta quedó completamente aislada del resto del mundo por grandes acantilados.",
    "Desde aquí se observa la imponente silueta del Castillo corrompido."
  ],
  re1: [
    "La Montaña de la Muerte es un volcán activo y el hogar ancestral de los Goron.",
    "La Bestia Divina Vah Rudania provoca terremotos y lluvia de magma constantemente.",
    "Daruk, el intrépido Campeón Goron, protegió este territorio en el pasado.",
    "Los túneles de minería están llenos de rocas de fuego y minerales valiosos.",
    "Para sobrevivir al calor extremo, se necesita una armadura especial a prueba de fuego.",
    "El valor del joven guerrero Yunobo ayuda a debilitar el control del cataclismo.",
    "En la cima del cráter se esconde una de las fuentes de energía más inmensas."
  ],
  re2: [
    "La Región de los Manantiales alberga la majestuosa Región de los Zora.",
    "La Bestia Divina Vah Ruta genera lluvias interminables que amenazan con desbordar la presa.",
    "La Princesa Mipha, conocida por su tierno corazón y poder sanador, vigila el lugar.",
    "El Príncipe Sidon busca incansablemente la ayuda de un hyliano para salvar a su pueblo.",
    "Los guerreros Zora recuerdan con nostalgia y honor el sacrificio de su campeona.",
    "La armadura Zora permite nadar contra la corriente y escalar cascadas de agua.",
    "La paz regresa al palacio de cristal de coral una vez que cesa la tormenta."
  ],
  re3: [
    "El Desierto Gerudo es una vasta y peligrosa extensión de tormentas de arena.",
    "La Bestia Divina Vah Naboris invoca tormentas eléctricas letales sobre las dunas.",
    "Urbosa, la poderosa Matriarca y Campeona, dominaba el rayo con su espada.",
    "La Ciudad Gerudo prohíbe estrictamente la entrada de hombres hylianos.",
    "La joven matriarca Riju heredó la responsabilidad de recuperar el Casco del Trueno.",
    "El Clan Yiga acecha desde las sombras, robando artefactos y plátanos recios.",
    "Bajo la arena se esconden santuarios y fósiles de ballenas colosales."
  ],
  re4: [
    "El Castillo de Hyrule fue el corazón del reino, ahora envuelto en la malicia de Ganon.",
    "El Cataclismo de hace un siglo corrompió la tecnología de los Guardianes y los volcó en contra.",
    "La Princesa Zelda mantiene a raya el poder del Maligno usando su magia sagrada.",
    "Los pasadizos subterráneos esconden las antiguas celdas, la biblioteca y armas reales.",
    "Las estirpes de los monstruos más peligrosos custodian los accesos principales.",
    "Link debe reunir el poder de los cuatro espíritus de los Campeones para el asalto final.",
    "La profecía se cumple cuando la luz disipa la oscuridad eterna del trono."
  ]
};

// 🎲 CURIOSIDADES DE DESARROLLO / SECRETO
const curiosidadesData = {
  re0: [
    "El diseño del anciano es un homenaje directo al juego original de NES.",
    "Se puede bajar de la meseta usando técnicas de físicas sin usar la paravela.",
    "El Templo del Tiempo está modelado exactamente igual al de Ocarina of Time.",
    "Hay un Kolog escondido justo debajo del puente de madera."
  ],
  re1: [
    "Los Goron comen rocas, pero sus favoritas son los filetes de roca selectos.",
    "Si dejas caer comida al suelo en esta zona, se cocinará o quemará al instante.",
    "El escudo de madera se quema de inmediato debido a las altas temperaturas.",
    "Daruk era el único campeón capaz de generar un escudo de energía absoluta."
  ],
  re2: [
    "El Rey Zora es el gobernante más longevo de todo Hyrule en esta línea temporal.",
    "La estatua de Mipha fue esculpida por artesanos que la amaban profundamente.",
    "Los Zora sufren un daño terrible si son atacados con flechas eléctricas.",
    "Sidon tiene una sonrisa brillante que genera destellos de luz cómicos."
  ],
  re3: [
    "La tormenta de arena desactiva por completo el mapa de la Tableta Sheikah.",
    "Las morsas de la arena adoran escuchar música alegre mientras se desplazan.",
    "El Clan Yiga tiene su base secreta escondida en el Cañón de Calora.",
    "Urbosa consideraba a la Princesa Zelda como si fuera su propia hija."
  ],
  re4: [
    "La música del castillo cambia dinámicamente si estás adentro o afuera.",
    "Aquí se encuentra el escudo hyliano, el más resistente de todo el juego.",
    "Puedes encontrar el diario de la Princesa Zelda en sus habitaciones destruidas.",
    "El laboratorio de la cúspide contiene planos descartados de motocicletas."
  ]
};

// 🕵️ REGISTROS MÍSTICOS
const misteriosData = {
  re0: [
    "¿Quién colocó los Guardianes desactivados alrededor de las murallas?",
    "El misterio de las voces que llaman al héroe desde el agua sagrada.",
    "Los símbolos en las estructuras sugieren que la meseta flotaba en la antigüedad.",
    "El origen de la tecnología de resurrección sigue siendo un secreto absoluto."
  ],
  re1: [
    "Las extrañas pinturas rupestres que predicen el regreso del héroe de fuego.",
    "¿Por qué la lava no derrite las estructuras de piedra de los santuarios?",
    "El misterio del magma azul que fluye en las profundidades de la mina.",
    "La misteriosa desaparición de los antiguos herreros Goron."
  ],
  re2: [
    "Las crónicas grabadas en piedra relatan una inundación provocada artificialmente.",
    "El misterio detrás de la colosal Presa de la deidad de la montaña.",
    "¿Hacia dónde migran las mantarrayas de luz durante las noches sin luna?",
    "El canto secreto que abre el acceso al monumento conmemorativo."
  ],
  re3: [
    "Las estatuas de las Siete Heroínas esconden un santuario de alineación astral.",
    "¿Qué causó que el desierto se secara por completo hace miles de años?",
    "El misterio de la octava heroína exiliada en las cumbres nevadas.",
    "Las voces que susurran los nombres antiguos cuando hay tormentas de arena."
  ],
  re4: [
    "La sustancia viscosa conocida como Malicia parece tener voluntad propia.",
    "¿Dónde quedaron ocultos los cuerpos de los antiguos reyes de Hyrule?",
    "El misterio de la tecnología Sheikah que se activó sola el día del eclipse.",
    "Las recámaras ocultas del laboratorio que nunca fueron registradas en los planos."
  ]
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

// 🎮 SELECCIONAR JUEGO
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

  // 🕵️ MISTERIOS
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
    document.getElementById("storyText").innerText = "REGISTROS REGIONALES COMPLETADOS";
    return;
  }
  showStory();
}

// 🎲 CURIOSIDADES
function showCuriosidades(game) {
  document.getElementById("curiosidadesTerminal").classList.remove("hidden");
  const container = document.getElementById("filesContainer");
  container.innerHTML = "";

  curiosidadesData[game].forEach((text,index)=>{
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `📜 ARCHIVO_${index+1}`;
    card.onclick = ()=>{
      document.getElementById("curiosityAssistant").classList.remove("hidden");
      typeText(document.getElementById("curiosityText"), text);
      document.getElementById("curiosityMascot").src = mascotImages[index % mascotImages.length];
    };
    container.appendChild(card);
  });
}

// 🕵️ MISTERIOS
function showMisterios(game) {
  document.getElementById("misteriosTerminal").classList.remove("hidden");
  const container = document.getElementById("misteryFilesContainer");
  container.innerHTML = "";

  misteriosData[game].forEach((text,index)=>{
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `👁️ ANCESTRAL_${index+1}`;
    card.onclick = ()=>{
      document.getElementById("misteryAssistant").classList.remove("hidden");
      typeText(document.getElementById("misteryText"), text);
      document.getElementById("misteryMascot").src = mascotImages[index % mascotImages.length];
    };
    container.appendChild(card);
  });
}