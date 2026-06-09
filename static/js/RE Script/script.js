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

  "/static/pet/RE Pet/neutro.png",
  "/static/pet/RE Pet/curioso.png",
  "/static/pet/RE Pet/miedo.png",
  "/static/pet/RE Pet/feliz.png",
  "/static/pet/RE Pet/enojo.png",
  "/static/pet/RE Pet/triste.png",
  "/static/pet/RE Pet/asombrado.png",
  "/static/pet/RE Pet/pregunta.png",
  "/static/pet/RE Pet/nerd.png",
  "/static/pet/RE Pet/indigno.png",

];

// 🤖 DIALOGOS MASCOTA

const mascotDialogues = [

  "Encontré nuevos archivos clasificados...",
  "Umbrella ocultó demasiadas cosas.",
  "No sé si deberíamos abrir esto...",
  "Leon sobrevivió a algo imposible.",
  "Raccoon City nunca debió existir.",
  "Los experimentos siguen apareciendo.",
  "Wesker siempre estaba un paso adelante.",
  "Tengo acceso parcial a la base de datos.",
  "Hay archivos corruptos por todas partes.",
  "La infección se propagó demasiado rápido.",
  "Algunos documentos fueron eliminados.",
  "La Mansión Spencer escondía horrores.",
  "No abras archivos marcados en rojo...",
  "Ese expediente tiene nivel de amenaza alto.",
  "Los registros de Umbrella son aterradores."

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

}, 7000);

// 📖 LORE COMPLETO

const stories = {

re0: [
"Rebecca Chambers investiga una serie de asesinatos extraños ocurridos en las montañas Arklay.",
"El equipo Bravo de S.T.A.R.S descubre un tren de Umbrella invadido por criaturas infectadas.",
"Rebecca conoce a Billy Coen, un ex marine acusado de múltiples asesinatos por el ejército.",
"Ambos descubren instalaciones secretas donde Umbrella realizaba experimentos biológicos ilegales.",
"El científico James Marcus fue traicionado y eliminado por los altos mandos de la corporación.",
"Las sanguijuelas infectadas heredaron parte de la conciencia y recuerdos de Marcus.",
"Los acontecimientos revelan el verdadero origen de la tragedia relacionada con el virus-T."
],

re1: [
"Chris Redfield y Jill Valentine investigan una serie de asesinatos ocurridos en las montañas Arklay.",
"Tras ser atacados por criaturas desconocidas, el equipo S.T.A.R.S encuentra refugio en la Mansión Spencer.",
"La mansión oculta laboratorios secretos donde Umbrella desarrollaba armas biológicas experimentales.",
"Los investigadores descubren que el virus-T fue responsable de las mutaciones observadas en la zona.",
"Albert Wesker revela su traición y utiliza al equipo como parte de un experimento de combate.",
"El Tyrant T-002 demuestra el potencial militar de las B.O.W creadas por Umbrella.",
"La mansión es destruida para eliminar pruebas, pero la corporación continúa operando en secreto."
],

re2: [
"Leon Kennedy llega a Raccoon City durante su primer día como oficial de policía novato.",
"Claire Redfield entra en la ciudad mientras busca pistas sobre el paradero de su hermano Chris.",
"El brote del virus-T ha transformado gran parte de la población en criaturas hostiles.",
"William Birkin utiliza el virus-G para sobrevivir, iniciando una peligrosa mutación incontrolable.",
"El Tyrant T-103, conocido como Mr. X, es enviado para eliminar testigos y recuperar información.",
"Ada Wong manipula a Leon mientras intenta obtener muestras de los experimentos de Umbrella.",
"El gobierno decide destruir Raccoon City para evitar que la infección se extienda."
],

re3: [
"Jill Valentine intenta escapar de Raccoon City durante las últimas horas del brote biológico.",
"Umbrella despliega a Nemesis, una poderosa arma biológica diseñada para eliminar miembros de S.T.A.R.S.",
"La criatura persigue a Jill constantemente mientras la ciudad se hunde en el caos.",
"Carlos Oliveira y otros mercenarios ayudan a rescatar supervivientes atrapados por la infección.",
"La expansión del virus provoca el colapso total de los servicios de emergencia.",
"Umbrella pierde el control de gran parte de sus experimentos dentro de la ciudad.",
"Raccoon City es destruida para contener definitivamente la propagación del brote."
],

re4: [
"Leon Kennedy es enviado a una región rural de España para rescatar a Ashley Graham.",
"Los habitantes de la zona están controlados por un antiguo parásito conocido como Las Plagas.",
"La secta de Los Illuminados planea utilizar la infección para expandir su influencia mundial.",
"Leon enfrenta criaturas mutadas y enemigos cada vez más peligrosos durante su misión.",
"Jack Krauser reaparece como adversario mientras trabaja para intereses desconocidos.",
"Osmund Saddler intenta utilizar a Ashley para infiltrar el gobierno estadounidense.",
"Leon logra detener el plan y destruye las operaciones principales de Los Illuminados."
],

re5: [

"Chris Redfield investiga actividades bioterroristas relacionadas con Umbrella en África.",
"Sheva Alomar se une a la misión como agente de la BSAA y compañera de combate.",
"La organización Tricell desarrolla nuevos experimentos basados en investigaciones anteriores.",
"Albert Wesker planea liberar el virus Uroboros para provocar una evolución forzada.",
"Los enfrentamientos incluyen algunas de las armas biológicas más poderosas vistas hasta entonces.",
"Chris descubre la verdad sobre la desaparición de su compañera Jill Valentine.",
"La batalla final culmina con la derrota definitiva de Wesker dentro de un volcán."
],

re6: [
"El bioterrorismo alcanza una escala global afectando múltiples países y gobiernos.",
"Leon Kennedy, Chris Redfield y Jake Muller protagonizan campañas conectadas entre sí.",
"El virus-C genera mutaciones impredecibles mucho más avanzadas que las anteriores.",
"Diversas organizaciones buscan aprovechar las armas biológicas con fines políticos y militares.",
"Ada Wong vuelve a verse involucrada en una conspiración de alcance internacional.",
"Los protagonistas enfrentan ataques masivos que amenazan la estabilidad mundial.",
"La crisis demuestra que el bioterrorismo se ha convertido en una amenaza permanente."
],

re7: [
"Ethan Winters viaja a Luisiana tras recibir un mensaje de su esposa desaparecida, Mia.",
"La familia Baker parece haber perdido completamente la cordura debido a una infección desconocida.",
"Eveline utiliza habilidades especiales para controlar mentalmente a quienes la rodean.",
"La mansión de los Baker esconde secretos relacionados con experimentos biológicos clandestinos.",
"Ethan descubre una nueva amenaza basada en un organismo fúngico mutado.",
"Las investigaciones revelan conexiones indirectas con antiguos proyectos relacionados con Umbrella.",
"El juego marca el regreso de la saga a una experiencia centrada en el terror."
],

re8: [
"Ethan Winters llega a una aldea aislada tras los acontecimientos ocurridos en Resident Evil 7.",
"Mother Miranda dirige una serie de experimentos relacionados con un antiguo organismo biológico.",
"Lady Dimitrescu y los demás señores controlan distintas regiones de la aldea.",
"Cada zona presenta nuevas amenazas y mutaciones con características únicas.",
"Ethan descubre información crucial sobre el origen de los sucesos recientes.",
"La verdad detrás de su propia existencia cambia por completo su perspectiva.",
"Los eventos conectan directamente con los secretos revelados en la entrega anterior."
],

re9: [
"Nuevas amenazas biológicas comienzan a surgir años después de los incidentes anteriores.",
"Diversas organizaciones intentan ocupar el vacío dejado por la caída de Umbrella.",
"La investigación revela experimentos más avanzados y peligrosos que los conocidos hasta ahora.",
"Viejos secretos relacionados con armas biológicas vuelven a salir a la luz.",
"Los protagonistas deben enfrentar una nueva generación de amenazas mutantes.",
"La tecnología y la ingeniería biológica continúan evolucionando de forma alarmante.",
"El futuro de la humanidad vuelve a verse comprometido por el bioterrorismo."
]

};

const curiosidadesData = {

re0: [
"Resident Evil 0 eliminó las clásicas cajas de objetos y permitió dejar recursos en cualquier lugar del mapa.",
"Billy Coen nunca volvió a protagonizar otro juego principal de la saga después de esta entrega.",
"Fue el último juego numerado de Resident Evil lanzado originalmente para Nintendo GameCube.",
"Las sanguijuelas de James Marcus fueron creadas utilizando el virus Progenitor como base experimental."
],

re1: [
"La introducción del Resident Evil original utilizó actores reales en lugar de personajes generados por computadora.",
"La Mansión Spencer fue diseñada para parecerse a las mansiones clásicas de películas de terror de los años 80.",
"El remake de 2002 añadió a los Crimson Heads, zombis más rápidos y peligrosos que los originales.",
"Muchos consideran que Resident Evil Remake es uno de los mejores remakes jamás creados."
],

re2: [
"Antes de su lanzamiento existió una versión casi terminada conocida por los fans como Resident Evil 1.5.",
"La Comisaría de Raccoon City originalmente era un museo de arte antes de convertirse en estación policial.",
"Mr. X fue diseñado para sorprender a los jugadores y generar tensión constante durante la exploración.",
"El remake de 2019 utilizó tecnología de captura facial avanzada para modernizar a sus personajes."
],

re3: [
"Nemesis fue uno de los primeros enemigos capaces de perseguir al jugador entre distintas áreas del juego.",
"Las decisiones rápidas podían modificar eventos y escenas durante la partida original.",
"El diseño de Jill Valentine en este juego se convirtió en uno de los más populares de toda la saga.",
"El remake eliminó algunas ubicaciones presentes en la versión clásica de 1999."
],

re4: [
"Uno de los prototipos tempranos de Resident Evil 4 terminó convirtiéndose en la saga Devil May Cry.",
"Popularizó la cámara sobre el hombro que después sería adoptada por numerosos juegos de acción.",
"Leon Kennedy tuvo varios diseños descartados antes de llegar a su apariencia definitiva.",
"Ha sido incluido en numerosas listas de los mejores videojuegos de todos los tiempos."
],

re5: [
"Fue el primer Resident Evil diseñado completamente alrededor del modo cooperativo.",
"El nuevo aspecto físico de Chris Redfield sorprendió a los fans por su notable cambio muscular.",
"Se convirtió en uno de los juegos más vendidos de toda la franquicia.",
"La batalla final contra Wesker dentro de un volcán es una de las escenas más recordadas de la saga."
],

re6: [
"Es uno de los Resident Evil con mayor cantidad de contenido y campañas jugables.",
"Permite controlar a varios protagonistas diferentes a lo largo de la historia.",
"Introduce algunas de las mayores secuencias de acción vistas en la franquicia.",
"Su desarrollo buscó combinar terror, acción y bioterrorismo a escala mundial."
],

re7: [
"Puede jugarse completamente en realidad virtual, aumentando enormemente la sensación de terror.",
"La familia Baker fue inspirada parcialmente por películas clásicas de horror sureño estadounidense.",
"Marcó el regreso de la saga al survival horror después de varias entregas centradas en la acción.",
"Fue el primer juego de Resident Evil desarrollado con el motor gráfico RE Engine."
],

re8: [
"Lady Dimitrescu mide aproximadamente 2,9 metros de altura según información oficial de Capcom.",
"Cada una de las zonas principales del juego fue diseñada para representar un tipo diferente de terror.",
"Es una secuela directa de Resident Evil 7 y continúa la historia de Ethan Winters.",
"Lady Dimitrescu se volvió viral meses antes del lanzamiento gracias a su enorme popularidad en internet."
],

re9: [
"Resident Evil Requiem fue revelado oficialmente durante el Summer Game Fest 2025.",
"La protagonista principal es Grace Ashcroft, hija de Alyssa Ashcroft de Resident Evil Outbreak.",
"El juego regresa a las ruinas de Raccoon City décadas después de su destrucción.",
"Su lanzamiento está programado para febrero de 2026 en consolas y PC."
]

};

// 🕵️ MISTERIOS

const misteriosData = {

re0: [
"La verdadera conciencia de James Marcus dentro de las sanguijuelas nunca fue explicada completamente.",
"Se desconoce cuánto sabía Umbrella sobre los experimentos secretos de Marcus antes de su muerte.",
"Algunos documentos sugieren que existían instalaciones ocultas adicionales en las montañas Arklay.",
"Todavía hay dudas sobre el origen exacto de algunas variantes tempranas del virus-T."
],

re1: [
"Wesker utilizó a los miembros de S.T.A.R.S como sujetos de observación sin que ellos lo supieran.",
"No todos los experimentos realizados en la Mansión Spencer fueron identificados oficialmente.",
"Umbrella eliminó gran cantidad de pruebas antes de que las autoridades pudieran intervenir.",
"El destino de varios investigadores y empleados de la mansión sigue siendo desconocido."
],

re2: [
"Ada Wong trabajaba para una organización cuyos verdaderos objetivos nunca fueron revelados por completo.",
"Existen teorías sobre cuánto sabía realmente el gobierno antes de la caída de Raccoon City.",
"La destrucción de la ciudad eliminó innumerables pruebas relacionadas con Umbrella.",
"Algunos archivos sugieren que más personas escaparon de Raccoon City de las que se conocen."
],

re3: [
"Nemesis parecía mostrar una inteligencia superior a la de otras armas biológicas similares.",
"No está claro cuántas unidades Nemesis llegaron a ser creadas por Umbrella.",
"La obsesión de Nemesis por eliminar a los miembros de S.T.A.R.S sigue siendo tema de debate.",
"Muchos secretos de los laboratorios de Raccoon City desaparecieron junto con la ciudad."
],

re4: [
"El origen exacto de Las Plagas sigue siendo uno de los mayores misterios de la saga.",
"Los Illuminados existían mucho antes de los eventos mostrados en el juego.",
"No se sabe cuánto conocimiento oculto poseía realmente Osmund Saddler.",
"Algunos registros indican que podrían existir más muestras de Las Plagas fuera de España."
],

re5: [
"Las investigaciones de Umbrella en África parecen haber sido más extensas de lo revelado oficialmente.",
"Los cambios físicos de Wesker sugieren experimentos aún desconocidos para los jugadores.",
"Se desconoce si todas las muestras del virus Uroboros fueron destruidas.",
"Algunas organizaciones continuaron utilizando información obtenida de Umbrella tras su caída."
],

re6: [
"La expansión global del bioterrorismo sugiere la existencia de redes internacionales ocultas.",
"El virus-C comparte características con múltiples armas biológicas desarrolladas anteriormente.",
"Varias organizaciones continúan buscando el control de agentes virales avanzados.",
"El alcance real de la crisis mundial presentada en el juego nunca fue mostrado completamente."
],

re7: [
"La verdadera cantidad de experimentos similares a Eveline sigue siendo desconocida.",
"Los Baker fueron víctimas de circunstancias fuera de su control antes de convertirse en una amenaza.",
"Las capacidades del hongo mutamiceto parecen superar lo observado durante el juego.",
"Algunos documentos insinúan la existencia de proyectos biológicos relacionados en otras regiones."
],

re8: [
"Mother Miranda realizó investigaciones durante décadas sin ser descubierta por el mundo exterior.",
"El Megamiceto reescribe parte de la historia conocida sobre los virus y mutaciones de la saga.",
"La naturaleza completa de Ethan Winters continúa generando debates entre los fans.",
"Muchos secretos de la aldea desaparecieron junto con la destrucción de sus instalaciones."
],

re9: [
"Todavía se desconoce quién financia las nuevas amenazas biológicas presentadas en la historia.",
"Los acontecimientos podrían revelar información inédita sobre la destrucción de Raccoon City.",
"Existen especulaciones sobre el regreso de personajes vinculados a incidentes anteriores.",
"Los verdaderos objetivos detrás de los nuevos experimentos siguen siendo un misterio."
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
    `📁 FILE_${index+1}`;

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
    `⚠️ CLASSIFIED_${index+1}`;

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