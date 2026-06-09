// 🌑 OSCURECER FONDO

window.addEventListener("scroll", () => {

  let scroll = window.scrollY;

  let opacity = Math.min(scroll / 500, 0.7);

  document.getElementById("overlay").style.background =
  `rgba(0,0,0,${opacity})`;

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

// 🤖 EXPRESIONES MASCOTA

const mascotImages = [

  "static/pet/UDTL Pet/neutro.png",
  "static/pet/UDTL Pet/curioso.png",
  "static/pet/UDTL Pet/miedo.png",
  "static/pet/UDTL Pet/feliz.png",
  "static/pet/UDTL Pet/enojo.png",
  "static/pet/UDTL Pet/tristeza.png",
  "static/pet/UDTL Pet/asombrado.png",
  "static/pet/UDTL Pet/pregunta.png",
  "static/pet/UDTL Pet/nerd.png",
  "static/pet/UDTL Pet/indignacion.png",

];

// 🤖 DIALOGOS MASCOTA

const mascotDialogues = [

  "* Parece que alguien guardó aquí.",
  "* El Underground está lleno de secretos.",
  "* Sans sabe más de lo que aparenta.",
  "* La determinación puede cambiarlo todo.",
  "* Algunos monstruos recuerdan cosas imposibles.",
  "* ¿Escuchaste hablar de W.D. Gaster?",
  "* Esta línea temporal parece estable.",
  "* Flowey está observando.",
  "* Los archivos del laboratorio siguen incompletos.",
  "* Las Ruinas esconden más de lo que parece.",
  "* Papyrus estaría orgulloso de este lugar.",
  "* Alphys borró parte de los registros.",
  "* Hay ecos extraños en Waterfall.",
  "* No todos los finales son felices.",
  "* El SAVE sigue activo."

];

// 🤖 CAMBIO AUTOMATICO DIALOGOS

setInterval(() => {

  const randomDialogue =
  mascotDialogues[
    Math.floor(
      Math.random() *
      mascotDialogues.length
    )
  ];

  document.getElementById(
    "floatingDialogue"
  ).innerText = randomDialogue;

}, 5000);

// 📖 LORE COMPLETO

const stories = {

  ruins: [
    "Frisk cae al Underground después de atravesar una grieta en el Monte Ebott.",
    "Flowey intenta engañar al humano utilizando falsas muestras de amistad.",
    "Toriel rescata a Frisk y lo guía a través de las Ruinas.",
    "Las Ruinas sirven como refugio para los humanos que caen al subsuelo.",
    "Toriel intenta convencer al jugador de permanecer allí para siempre.",
    "Frisk debe enfrentarse a Toriel para abandonar las Ruinas y continuar su viaje."
  ],

  snowdin: [
    "Frisk llega a Snowdin, una región cubierta por nieve y habitada por monstruos amistosos.",
    "Sans y Papyrus descubren la presencia del humano y comienzan a seguirlo.",
    "Papyrus intenta capturar a Frisk para unirse a la Guardia Real.",
    "Numerosos acertijos y trampas aparecen a lo largo del recorrido.",
    "La amistad con Papyrus puede cambiar el desarrollo de la aventura.",
    "El viaje continúa hacia las regiones más profundas del Underground."
  ],

  waterfall: [
    "Waterfall está formada por lagos, cuevas y cascadas iluminadas por flores brillantes.",
    "Undyne recibe órdenes de capturar al humano y comienza una persecución.",
    "Monster Kid acompaña ocasionalmente al jugador durante el recorrido.",
    "Antiguas inscripciones revelan la historia de la guerra entre humanos y monstruos.",
    "La determinación del jugador se pone a prueba constantemente.",
    "La región es clave para comprender el pasado del Underground."
  ],

  hotland: [
    "Hotland es una zona volcánica construida alrededor de enormes instalaciones tecnológicas.",
    "Alphys comienza a ayudar al jugador utilizando cámaras y dispositivos de comunicación.",
    "Mettaton aparece constantemente para protagonizar espectáculos y desafíos.",
    "Los laboratorios contienen investigaciones relacionadas con la Determinación.",
    "La relación entre Alphys y sus experimentos empieza a revelarse.",
    "Frisk se acerca cada vez más al castillo del rey Asgore."
  ],

  core: [
    "CORE suministra energía a todo el reino de los monstruos.",
    "El complejo está protegido por numerosos monstruos y sistemas de seguridad.",
    "Mettaton EX representa uno de los mayores desafíos del recorrido.",
    "La verdad sobre varios experimentos sale finalmente a la luz.",
    "Las decisiones tomadas durante la aventura comienzan a mostrar sus consecuencias.",
    "El castillo de Asgore se encuentra más allá de CORE."
  ],

  pacifist: [
    "Frisk logra completar la aventura sin matar a ningún monstruo.",
    "La amistad con los personajes principales permite desbloquear nuevos acontecimientos.",
    "Alphys revela información importante sobre sus investigaciones.",
    "La verdad sobre Asriel Dreemurr finalmente es descubierta.",
    "Los monstruos unen fuerzas para romper la barrera que los mantiene encerrados.",
    "El Final Pacifista Verdadero ofrece uno de los desenlaces más emotivos del juego."
  ],

  genocide: [
    "Frisk decide eliminar sistemáticamente a todos los monstruos del Underground.",
    "Los habitantes comienzan a notar la desaparición de sus compañeros.",
    "Las regiones se vuelven silenciosas y desoladas.",
    "Undyne adopta una poderosa nueva forma para intentar detener la masacre.",
    "Sans enfrenta directamente al jugador en uno de los combates más difíciles del juego.",
    "Las consecuencias de esta ruta alteran permanentemente el mundo de Undertale."
  ]

};
// 🕵️ MISTERIOS

const misteriosData = {

  ruins: [
    "No está completamente claro cuántos humanos llegaron antes que Frisk.",
    "Las Ruinas contienen estructuras mucho más antiguas de lo que parecen.",
    "Algunos diálogos sugieren que Toriel observó a numerosos humanos durante años.",
    "El verdadero alcance de los poderes de Flowey sigue siendo incierto."
  ],

  snowdin: [
    "Sans parece conocer detalles sobre líneas temporales alternativas.",
    "Numerosos comportamientos sugieren que Sans oculta información importante.",
    "El origen exacto de Sans y Papyrus nunca fue explicado oficialmente.",
    "Algunos secretos encontrados en Snowdin siguen sin respuesta."
  ],

  waterfall: [
    "Las antiguas escrituras dejan preguntas sobre la verdadera historia de la guerra.",
    "No se sabe cuántos eventos fueron omitidos de los registros históricos.",
    "Algunas profecías mencionadas en la región nunca son explicadas completamente.",
    "Existen detalles ocultos que parecen relacionarse con Gaster."
  ],

  hotland: [
    "Los experimentos de Alphys generaron consecuencias mucho mayores de las conocidas.",
    "La verdadera naturaleza de la Determinación continúa siendo debatida.",
    "Algunos archivos del laboratorio parecen estar incompletos o alterados.",
    "Existen referencias a investigaciones anteriores que jamás fueron explicadas."
  ],

  core: [
    "Se desconoce quién diseñó originalmente ciertas tecnologías utilizadas en CORE.",
    "Algunas máquinas parecen funcionar mediante principios desconocidos.",
    "Los registros históricos presentan inconsistencias relacionadas con esta instalación.",
    "Existen indicios de investigaciones ocultas más allá de lo mostrado."
  ],

  pacifist: [
    "El poder exacto de las almas humanas sigue siendo un misterio.",
    "Algunas habilidades mostradas por Asriel nunca reciben una explicación completa.",
    "La conexión entre Determinación y las líneas temporales permanece parcialmente desconocida.",
    "El futuro de los monstruos después del final queda abierto a interpretación."
  ],

  genocide: [
    "La verdadera identidad de Chara sigue siendo objeto de debate entre los fans.",
    "No está claro cuánto control posee realmente el jugador sobre los acontecimientos.",
    "Las consecuencias permanentes de esta ruta sugieren fuerzas que van más allá del juego.",
    "Muchos eventos parecen relacionados con entidades que nunca son reveladas completamente."
  ]

};

//curiosidades

const curiosidadesData = {

  ruins: [
    "Toriel fue uno de los primeros personajes creados por Toby Fox durante el desarrollo.",
    "Las Ruinas funcionan como un enorme tutorial disfrazado de zona narrativa.",
    "Flowey rompe constantemente la cuarta pared durante la aventura.",
    "Muchos jugadores nunca descubren todos los diálogos secretos de Toriel."
  ],

  snowdin: [
    "Sans se convirtió en uno de los personajes más populares de todo Undertale.",
    "Papyrus fue diseñado para parecer intimidante pero terminó siendo extremadamente carismático.",
    "La música de Snowdin es una de las canciones más reconocidas del juego.",
    "La casa de Sans y Papyrus contiene múltiples referencias ocultas."
  ],

  waterfall: [
    "La canción Waterfall es considerada una de las mejores piezas de la banda sonora.",
    "Undyne fue inspirada parcialmente por protagonistas de anime clásicos.",
    "Los ecos brillantes fueron creados para aumentar el misterio de la zona.",
    "Aquí se revelan varios detalles importantes sobre la guerra entre humanos y monstruos."
  ],

  hotland: [
    "Mettaton originalmente iba a tener una participación mucho menor en la historia.",
    "Alphys fue diseñada para representar inseguridad y ansiedad social.",
    "Muchos programas de televisión de Mettaton parodian concursos reales.",
    "Hotland contiene algunos de los momentos más cómicos del juego."
  ],

  core: [
    "CORE posee algunos de los enemigos más extraños de todo Undertale.",
    "Su música es una de las más intensas de la aventura.",
    "El diseño de la zona busca transmitir una sensación de complejidad tecnológica.",
    "Muchos jugadores consideran CORE una de las mejores áreas finales de un RPG."
  ],

  pacifist: [
    "El Final Pacifista Verdadero requiere cumplir condiciones específicas durante toda la aventura.",
    "Asriel Dreemurr posee una de las transformaciones más recordadas del juego.",
    "La mayoría de los personajes obtiene un final feliz en esta ruta.",
    "Muchos fans consideran este el final más importante de Undertale."
  ],

  genocide: [
    "La Ruta Genocida fue diseñada para cuestionar la obsesión por completar videojuegos al 100%.",
    "Sans posee una batalla exclusiva que solo aparece en esta ruta.",
    "La música cambia drásticamente para reflejar el deterioro del mundo.",
    "Las consecuencias pueden mantenerse incluso después de reiniciar la partida."
  ]

};



// 🎮 ABRIR PANEL

function openSelector(category) {

  currentCategory = category;

  document.getElementById(
    "gameSelector"
  ).classList.remove("hidden");

}

// ❌ CERRAR PANEL

function closeSelector() {

  document.getElementById(
    "gameSelector"
  ).classList.add("hidden");

  document.getElementById(
    "mascotStory"
  ).classList.add("hidden");

  document.getElementById(
    "curiosidadesTerminal"
  ).classList.add("hidden");

  document.getElementById(
    "misteriosTerminal"
  ).classList.add("hidden");

}

// 🎮 SELECCIONAR JUEGO

function selectGame(game) {

  currentGame = game;
  currentStep = 0;

  document.getElementById(
    "mascotStory"
  ).classList.add("hidden");

  document.getElementById(
    "curiosidadesTerminal"
  ).classList.add("hidden");

  document.getElementById(
    "misteriosTerminal"
  ).classList.add("hidden");

  // 📖 LORE

  if(currentCategory === "lore") {

    document.getElementById(
      "mascotStory"
    ).classList.remove("hidden");

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

  const story =
  stories[currentGame][currentStep];

  typeText(

    document.getElementById(
      "storyText"
    ),

    story

  );

  document.getElementById(
    "mascotImg"
  ).src =
  mascotImages[
    currentStep %
    mascotImages.length
  ];

}

// ⏭ SIGUIENTE

function nextStory() {

  currentStep++;

  if(
    currentStep >=
    stories[currentGame].length
  ) {

    document.getElementById(
      "storyText"
    ).innerText =
    "ARCHIVO FINALIZADO";

    return;

  }

  showStory();

}

// 🎲 CURIOSIDADES

function showCuriosidades(game) {

  document.getElementById(
    "curiosidadesTerminal"
  ).classList.remove("hidden");

  const container =
  document.getElementById(
    "filesContainer"
  );

  container.innerHTML = "";

  curiosidadesData[game].forEach((text,index)=>{

    const card =
    document.createElement("div");

    card.className = "file-card";

    card.innerHTML =
    `⭐ ENTRY_${index+1}`;

    card.onclick = ()=>{

      document.getElementById(
        "curiosityAssistant"
      ).classList.remove("hidden");

      typeText(

        document.getElementById(
          "curiosityText"
        ),

        text

      );

      document.getElementById(
        "curiosityMascot"
      ).src =
      mascotImages[
        index %
        mascotImages.length
      ];

    };

    container.appendChild(card);

  });

}

// 🕵️ MISTERIOS

function showMisterios(game) {

  document.getElementById(
    "misteriosTerminal"
  ).classList.remove("hidden");

  const container =
  document.getElementById(
    "misteryFilesContainer"
  );

  container.innerHTML = "";

  misteriosData[game].forEach((text,index)=>{

    const card =
    document.createElement("div");

    card.className = "file-card";

    card.innerHTML =
    `💀 SECRET_${index+1}`;

    card.onclick = ()=>{

      document.getElementById(
        "misteryAssistant"
      ).classList.remove("hidden");

      typeText(

        document.getElementById(
          "misteryText"
        ),

        text

      );

      document.getElementById(
        "misteryMascot"
      ).src =
      mascotImages[
        index %
        mascotImages.length
      ];

    };

    container.appendChild(card);

  });

}