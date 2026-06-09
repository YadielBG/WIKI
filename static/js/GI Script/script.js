// 🌑 OSCURECER FONDO AL HACER SCROLL
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  let opacity = Math.min(scroll / 500, 0.8);
  document.getElementById("overlay").style.background = `rgba(10,9,5,${opacity})`;
});

// 🔽 SCROLL HERO
function scrollToSection() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

// 🎮 VARIABLES DE CONTROL
let currentGame = "";
let currentStep = 0;
let currentCategory = "";
let typeInterval; 

// 🤖 EXPRESIONES MASCOTA
const mascotImages = [
  "/static/pet/GI Pet/0.png",
  "/static/pet/GI Pet/1.png",
  "/static/pet/GI Pet/2.png",
  "/static/pet/GI Pet/3.png",
  "/static/pet/GI Pet/4.png",
  "/static/pet/GI Pet/5.png",
  "/static/pet/GI Pet/6.png",
  "/static/pet/GI Pet/7.png",
  "/static/pet/GI Pet/8.png",
  "/static/pet/GI Pet/9.png"
];

// 🤖 FRASES DE LA MASCOTA (GENSHIN IMPACT)
const mascotDialogues = [
  "¡¿Cómo que 'comida de emergencia'?!",
  "El vino de osmanto sabe igual que lo recuerdo... pero ¿dónde están aquellos que comparten el recuerdo?",
  "¿No es explorar más divertido que trabajar?",
  "La derrota no es lo peor que le puede pasar a un guerrero... Lo peor es la pérdida de su propósito.",
  "Inmortalidad no significa que nada cambie... Significa que el cambio no te destruirá.",
  "Que las mareas limpien tus pecados.",
  "Esta oportunidad es bastante difícil de encontrar... Bueno, entonces, diviérteme.",
  "El primer paso para encontrar la verdad es dudar de lo que ya sabes.",
  "Qué frío.",
  "¡Salió el sol, ve a tomar el sol! ¡Salió la luna, ve a enterrar cuerpos!",
  "El destino está escrito en las estrellas, y no se puede cambiar, solo aceptar.",
  "La arrogancia de la humanidad termina aquí.",
  "¡Que comience el espectáculo!",
  "Si te encuentras en peligro y no sabes qué hacer, di mi nombre. Estaré allí.",
  "Hemos llegado al final de nuestro viaje antes de tiempo... pero tú debes continuar el tuyo. Nos volveremos a encontrar cuando alcances el final."
];

// 🤖 CAMBIO AUTOMATICO DE DIALOGOS FLOATING
setInterval(() => {
  const randomDialogue = mascotDialogues[Math.floor(Math.random() * mascotDialogues.length)];
  document.getElementById("floatingDialogue").innerText = randomDialogue;
}, 6000);

// 📖 BASE DE DATOS DE HISTORIA (LORE)
const stories = {
  re0: [
    "Prólogo: Mondstadt — El Forastero que Atrapó el Viento.",
    "La historia comienza con dos gemelos viajeros interdimensionales que, al intentar abandonar el mundo de Teyvat, son interceptados por una misteriosa deidad autodenominada la Sustentadora de los Principios Celestiales.",
    "Tras una breve batalla, la deidad secuestra a uno de los hermanos y sella los poderes del otro, dejándolo sumido en un letargo de siglos.",
    "Al despertar en una época desconocida y completamente solo, el protagonista (el Viajero) rescata de morir ahogada a una pequeña criatura llamada Paimon, quien se convierte en su guía.",
    "Juntos viajan a Mondstadt, la nación del elemento Anemo y la libertad, la cual se encuentra bajo el asedio de Stormterror, un dragón ancestral corrompido por las fuerzas oscuras de la Orden del Abismo.",
    "El Viajero se alía con los Caballeros de Favonius y con un misterioso bardo llamado Venti, quien resulta ser Barbatos, el Arconte Anemo en persona.",
    "Tras purificar las lágrimas del dragón y derrotar la corrupción que lo controlaba en una batalla aérea, la paz regresa a Mondstadt.",
    "Sin embargo, en las afueras de la catedral, son emboscados por la Signora, una de las ejecutoras de los Fatui, quien le arrebata violentamente la Gnosis a Venti, revelando una conspiración continental para despojar a los dioses de su autoridad."
  ],
  re1: [
    "Capítulo I: Liyue — El Adiós del Soberano Arcaico.",
    "En busca de respuestas sobre la deidad que secuestró a su familiar, el Viajero se dirige a Liyue, la próspera nación del comercio y el elemento Geo.",
    "Su llegada coincide con el Rito del Descenso, la ceremonia anual en la que el Arconte Geo, Rex Lapis, desciende para guiar a su pueblo, pero el evento se transforma en caos cuando el cuerpo del dios cae inerte del cielo, aparentemente asesinado.",
    "Acusado injustamente de regicidio, el Viajero huye y se alía con Childe, otro ejecutor de los Fatui, y con los Adeptus, deidades guardianas celosas que amenazan con arrasar la ciudad si los gobernantes humanos son los culpables.",
    "Para limpiar su nombre, el protagonista colabora con un refinado y erudito consultor de una funeraria llamado Zhongli para organizar el funeral del Arconte.",
    "La tensión política escala hasta que Childe, buscando forzar la aparición del dios que cree oculto, libera utilizando réplicas de sellos antiguos a Osial, un temible dios marino que fue sellado milenios atrás.",
    "La crisis obliga a los humanos del gobierno de Liyue (las Siete Estrellas) y a los Adeptus a unirse en una batalla desesperada, culminando con el sacrificio de la Cámara de la Jade, el palacio flotante de Ningguang, para aplastar a la bestia.",
    "Tras la victoria, se revela que el mismísimo Zhongli era Rex Lapis; él había fingido su muerte para poner a prueba si la humanidad estaba lista para gobernarse sola y, satisfecho con el resultado, entrega voluntariamente su Gnosis a los Fatui como parte de un contrato secreto de magnitudes desconocidas."
  ],
  re2: [
    "Capítulo II: Inazuma — Omnipresencia sobre los Mortales.",
    "El viaje continúa hacia Inazuma, un archipiélago regido por el elemento Electro que se encuentra completamente aislado del resto del mundo debido a tormentas artificiales provocadas por su deidad, la Shogun Raiden.",
    "Al desembarcar, el Viajero descubre una nación sumida en la opresión debido al Decreto de Captura de Visiones, una ley con la que la Shogun confisca los amuletos mágicos de sus ciudadanos para alcanzar una 'Eternidad' estática e inmutable.",
    "Tras presenciar el sufrimiento de los habitantes locales, el protagonista se une a la resistencia rebelde en la isla Watatsumi, liderada por Sangonomiya Kokomi y Gorou.",
    "Durante el conflicto, se descubre que los Fatui han instigado la guerra civil desde las sombras para debilitar la nación y producir Visiones de engaño que consumen la vida de los soldados.",
    "El Viajero confronta a la Signora en el palacio real en un duelo a muerte sancionado por las leyes locales, resultando en la ejecución de la Fatui a manos de la Shogun.",
    "Finalmente, con la ayuda de la astuta suma sacerdotisa Yae Miko, el Viajero logra ingresar al plano mental de la Eutimia para enfrentarse a Ei, la verdadera identidad detrás de la marioneta mecánica de la Shogun.",
    "Canalizando las ambiciones y deseos de todas las personas a las que les arrebataron sus Visiones, el Viajero derrota a Ei, convenciéndola de abolir el decreto y permitiendo que Inazuma vuelva a abrir sus fronteras, aunque no logra evitar que otro ejecutor, Scaramouche, escape con la Gnosis Electro."
  ],
  re3: [
    "Capítulo III: Sumeru — El Pulso de Akasha, el Fuego de Kalpa.",
    "El protagonista viaja a Sumeru, la nación del elemento Dendro y el conocimiento, un lugar gobernado de forma pragmática por la Academia de Filosofía a través de la Terminal Akasha, un dispositivo implantado en los ciudadanos para compartir información de manera selectiva.",
    "La Academia desprecia a su actual deidad, la Reina Menor Kusanali (Nahida), manteniéndola encerrada en su palacio por considerarla indigna en comparación con la anterior y fallecida Arconte, Rukkhadevata.",
    "El Viajero se ve atrapado en un peligroso bucle temporal provocado por la Terminal Akasha durante el festival de Sabzeruz, descubriendo que la Academia está cosechando los sueños de la población para alimentar un proyecto secreto: la creación de un dios artificial utilizando el cuerpo modificado de Scaramouche, bajo la dirección del ejecutor Fatui conocido como El Doctor (Dottore).",
    "Formando una alianza con guerreros del desierto y eruditos disidentes como Alhaitham, Cyno, Dehya y Nilou, el Viajero organiza una revolución de gran escala para infiltrarse en la ciudad y liberar a Nahida.",
    "Tras una monumental batalla matemática y física contra el dios mecanizado, logran derrotar a Scaramouche.",
    "Nahida accede finalmente al Irminsul, el árbol místico que almacena la memoria de todo Teyvat, descubriendo que para salvar el mundo de una enfermedad espiritual debe borrar los últimos restos corrompidos de Rukkhadevata de la existencia misma de la historia, alterando los recuerdos de todos los habitantes excepto los del Viajero.",
    "Al concluir, Nahida se ve obligada a negociar sus dos Gnosis con Dottore a cambio de la destrucción de sus clones y de información prohibida sobre la falsedad del cielo y la existencia de otros seres de fuera de este mundo."
  ],
  re4: [
    "Capítulo IV: Fontaine — Mascarada de los Culpables.",
    "La siguiente parada es Fontaine, la nación del agua y la justicia tecnológica, la cual vive bajo la sombra de una profecía apocalíptica que asegura que las aguas del Mar Primigenio subirán hasta disolver a todos sus habitantes en líquido puro, dejando únicamente a la Arconte Hydro llorando sola en su trono.",
    "El Viajero se sumerge en la pomposa sociedad de la corte y la Ópera de la Epíclesis, donde la justicia se imparte como un espectáculo teatral dirigido por la excéntrica Arconte Furina y el estoico Juez Supremo, Neuvillette.",
    "Investigando una serie de extrañas desapariciones ligadas a este mar maldito, el Viajero desciende al Fuerte Merópide —una prisión submarina— cooperando con figuras locales como Navia, Wriothesley y el ilusionista Lyney para contener las primeras filtraciones del agua destructiva.",
    "La situación se vuelve insostenible cuando una colosal ballena devoradora de mundos emerge del fondo marino acelerando el cumplimiento de la profecía.",
    "En un juicio histórico sin precedentes, el pueblo declara culpable a su propia Arconte por no actuar para salvarlos, revelando el secreto mejor guardado de la nación: Furina es en realidad una humana común y corriente que fingió ser una deidad implacable durante 500 años para engañar a las leyes del destino y a las deidades celestiales, mientras la verdadera consciencia de la Arconte (Focalors) acumulaba energía en secreto para su propio sacrificio.",
    "Focalors se ejecuta a sí misma destruyendo definitivamente el trono divino del elemento Hydro, lo que devuelve los poderes absolutos de la creación a Neuvillette, quien resulta ser la reencarnación del Dragón Soberano del Agua.",
    "Con su autoridad restaurada, Neuvillette perdona los pecados originales de la población convirtiéndolos en verdaderos humanos inmunes a la disolución, deteniendo la catástrofe justo a tiempo, mientras la Gnosis es entregada pacíficamente a la ejecutora Fatui Arlecchino como compensación por su ayuda humanitaria."
  ],
  re5: [
    "Capítulo V: Natlan — Oda Incandescente de la Resurrección.",
    "El periplo conduce al Viajero a Natlan, la indómita nación del fuego, la guerra y los dragones, un territorio fragmentado en diversas tribus que conviven en un estado de combate continuo debido a la constante y destructiva invasión del Abismo, el cual amenaza con consumir las raíces mismas del reino.",
    "El protagonista se une a la Arconte Pyro, Mavuika, una líder guerrera humana que heredó el estatus divino y que coordina los torneos sagrados del Estadio de la Llama Sagrada para seleccionar a los héroes más fuertes capaces de adentrarse en las zonas de conflicto.",
    "A diferencia de otras naciones, la muerte en Natlan está ligada al ciclo de la Llama del Sagrado Retorno, un mecanismo ancestral que permite resucitar a los héroes caídos si sus nombres y hazañas son recordados con suficiente honor por sus tribus.",
    "El Viajero se ve envuelto en batallas tácticas masivas junto a guerreros locales para recuperar territorios corrompidos y reparar las reglas de la resurcción, las cuales comienzan a fallar debido al debilitamiento del poder elemental de la tierra.",
    "Los Fatui hacen su aparición bajo el mando de El Capitán (Il Capitano), quien busca intervenir de manera directa en el conflicto argumentando que la gestión de la Arconte está destinada al fracaso y que se necesita una reestructuración absoluta del orden de Natlan para evitar la extinción total del continente.",
    "Este arco bélico obliga al Viajero a comprender el peso del sacrificio humano y la necesidad de forjar alianzas definitivas antes del inminente choque contra las fuerzas más puras del Abismo, preparando el terreno para el enfrentamiento definitivo contra el orden impuesto por los cielos."
  ]
};

// 🎲 BASE DE DATOS DE CURIOSIDADES
const curiosidadesData = {
  re0: [
    "El verdadero poder de Venti: Aunque se presenta como el Arconte más débil porque le gusta flojear y beber, el lore revela que en el pasado Barbatos era ridículamente poderoso. Él modificó toda la geografía de Mondstadt usando sus vientos para cortar montañas enteras (como el actual Cabo Juramento) y arrojarlas al mar, transformando una región congelada en un valle templado.",
    "El misterio de Paimon y las estatuas: Si observas detenidamente las Estatuas de los Siete en Mondstadt, la figura del Arconte Anemo comparte un patrón de ropa y una corona casi idénticas al diseño de la ropa de Paimon. Esto ha alimentado la teoría de que Paimon está directamente conectada con Celestia o con un fragmento de un dios antiguo.",
    "El nombre real de Stormterror: El dragón Dvalin no siempre fue un monstruo. Se volvió loco debido a la sangre ponzoñosa del dragón oscuro Durin, a quien derrotó 500 años atrás para salvar la ciudad. La 'corrupción' que limpiamos en el juego es literalmente veneno físico y mental acumulado por siglos."
  ],
  re1: [
    "Zhongli y las ballenas de Mora: Como creador del Mora (la moneda de todo Teyvat), Zhongli utilizaba su propia Gnosis para acuñarla. Al entregar su Gnosis al final del arco, provocó una crisis económica silenciosa: ya no se puede crear más Mora en el mundo, lo que significa que el dinero en Teyvat ahora es un recurso finito.",
    "El sacrificio original de Guizhong: Zhongli no siempre fue el único protector de Liyue. Milenios atrás gobernaba junto a Guizhong, la Diosa del Polvo, quien era el cerebro y la ingeniera de la región (creadora de la Balista de Guizhong). Su trágica muerte en la Guerra de los Arcontes cambió la personalidad de Zhongli de un guerrero despiadado a un dios pacífico.",
    "La Cámara de la Jade es un arma nuclear: El palacio flotante de Ningguang no es solo un caprico de millonaria. Está construido con materiales alquímicos extremadamente raros y densos. Al dejarlo caer sobre el dios marino Osial, la enorme masa combinada con la energía elemental acumulada generó una explosión de magnitudes catastróficas, equivalente a un impacto táctico masivo."
  ],
  re2: [
    "La Shogun es un robot: La entidad con la que peleamos y caminamos la mayor parte del tiempo no es Ei (la Arconte), sino una marioneta mecánica idéntica a ella que programó hace siglos. Ei vive recluida en una dimensión de bolsillo dentro de su espada para evitar el 'desgaste' de su alma por el paso del tiempo.",
    "El origen de Scaramouche: Antes de unirse a los Fatui, el villano Scaramouche (Trotamundos) fue el primer prototipo de marioneta que Ei creó para probar si podía albergar su Gnosis. Al ver que el prototipo tenía la capacidad de llorar y sentir emociones, Ei consideró que era demasiado frágil, le selló los poderes y lo dejó libre, desatando su posterior rencor hacia los dioses.",
    "El precio de las Visiones de Engaño: Las fábricas de los Fatui en Inazuma utilizaban los restos del dios serpiente orobashi (el esqueleto gigante de la isla Yashiori) para crear las Visiones de Engaño. El precio que pagaban los soldados de la resistencia por usarlas no era magia, sino su propia fuerza vital, envejeciendo décadas en cuestión de días."
  ],
  re3: [
    "Borrado de la existencia real: Cuando Nahida borra a Rukkhadevata del Irminsul, no solo borró los recuerdos de la gente; modificó la historia escrita, los libros de la Academia y la base de datos del mundo. Para todo Teyvat, Nahida siempre fue la única Arconte Dendro desde el principio de los tiempos. El Viajero es el único que recuerda la verdad por ser un 'Descendido' ajeno a las reglas de ese mundo.",
    "El cielo es falso: Al final de este arco, Dottore le revela a Nahida un secreto crucial que los Fatui descubrieron: el cielo estrellado de Teyvat es una ilusión artificial creada por Celestia para ocultar la verdadera naturaleza del universo.",
    "Sumeru operaba como una Matrix: El sistema Akasha no era una simple enciclopedia en la oreja. La Academia lo utilizó para sumergir a toda la ciudad en un sueño colectivo repetitivo (el festival de Sabzeruz) durante cientos de ciclos mientras procesaba los cerebros de los ciudadanos como si fueran una supercomputadora para recolectar energía cognitiva."
  ],
  re4: [
    "El engaño de 500 años: Furina es posiblemente el personaje con mayor fuerza de voluntad del juego. Vivió medio milenio sufriendo en total soledad mental, actuando las 24 horas del día como una diosa egocéntrica frente a su pueblo, sabiendo que si pestañeaba o confesaba que era una humana normal, todos en su nación morirían disueltos.",
    "La inexistencia del Arconte Hydro: Al destruirse el trono divino de Focalors para devolverle los poderes a Neuvillette, el concepto mismo del 'Arconte Hydro' dejó de existir en el sistema del mundo. Celestia ya no tiene control sobre el elemento agua, abriendo un vacío de poder inédito en la historia de Teyvat.",
    "Los fontainianos eran palomas de agua: Técnicamente, los habitantes de Fontaine no eran humanos reales hasta el final del arco. La anterior Arconte (Egeria) los creó infundiendo agua del Mar Primigenio en cuerpos humanos porque quería que experimentaran la vida terrestre. Por eso la profecía los disolvía: simplemente regresaban a su estado líquido original."
  ],
  re5: [
    "Un Arconte sin inmortalidad: Mavuika es la única Arconte activa que es 100% humana. No posee un cuerpo divino eterno como Zhongli o Ei; en su lugar, utiliza una técnica de reencarnación de fuego y herencia de sangre. Esto significa que siente el dolor físico, el cansancio y el miedo a la muerte exactamente igual que cualquier mortal.",
    "La muerte no es el final oficial: El sistema de resurrección de Natlan demuestra que las almas en esa región se gestionan de forma distinta al resto del planeta. Mientras el nombre de un guerrero sea recordado con honor y gloria por su tribu, el ecosistema de la Llama Sagrada puede reconstruir su cuerpo físico, convirtiendo la memoria colectiva en una fuerza biológica real.",
    "El Capitán no usa Visión: A pesar de ser considerado uno de los mortales más fuertes de Teyvat (capaz de rivalizar directamente en combate cuerpo a cuerpo contra una Arconte), Il Capitano no posee una Visión otorgada por los dioses, lo que demuestra que los humanos pueden alcanzar niveles de poder apocalípticos mediante entrenamiento puro o magia antigua prohibida."
  ]
};

// 🕵️ BASE DE DATOS DE MISTERIOS CRUCIALES
const misteriosData = {
  re0: [
    "1. La falsedad del cielo de Teyvat: 'Las estrellas y el cielo de Teyvat son una mentira absoluta, un engaño colosal' — Scaramouche / Dottore.",
    "En Teyvat, cuando miras al firmamento por la noche, ves constelaciones que rigen el destino de las personas y sus Visiones. Sin embargo, el juego ha dejado pistas de que este cielo es en realidad una especie de cúpula o 'huevo' artificial creado por Celestia (los dioses primordiales) para aislar al planeta del resto del universo.",
    "Implicaciones: Si el cielo es falso, significa que las estrellas que guían a los navegantes y astrólogos son proyecciones. El mapa del mundo podría estar invertido o contenido en una dimensión de bolsillo.",
    "El gran peligro: Se sugiere que Celestia creó este firmamento artificial no para proteger a la humanidad, sino para ocultar algo terrorífico del espacio exterior (el 'Mar de Estrellas' o el vacío cósmico) y para mantener a los habitantes atrapados en un ciclo de destino predeterminado del cual no pueden escapar."
  ],
  re1: [
    "2. Los 'Descendidos' y el borrado de la existencia: El árbol místico Irminsul almacena absolutamente todos los recuerdos, la historia y la información del mundo. Si algo se altera allí, el mundo entero lo olvida. Excepto los Descendidos.",
    "Los Descendidos son seres que no pertenecen a Teyvat y que llegaron de otros mundos. Debido a esto, sus mentes y registros no forman parte del Irminsul. Si el mundo entero sufre una alteración de memoria, un Descendido mantendrá sus recuerdos intactos.",
    "La anomalía de los gemelos: El juego confirma que el protagonista (el Viajero) es oficialmente el Cuarto Descendido. Lo verdaderamente misterioso es que, según los registros del propio Irminsul, su gemelo perdido NO es considerado un Descendido.",
    "El misterio: ¿Cómo es posible que dos gemelos que viajaban juntos por el cosmos ahora tengan un estatus diferente? Esto significa que el gemelo atrapado fue 'asimilado' por las leyes del planeta, haciendo que su origen se altere o que pertenezca a Teyvat de una manera que aún no se nos ha explicado. Además, abre la pregunta: si el protagonista es el cuarto, ¿quiénes fueron los tres primeros Descendidos?"
  ],
  re2: [
    "3. La verdadera naturaleza de Celestia y el ciclo de las naciones destruidas: Ruinas avanzadas como Khaenri'ah, o Espinadragón cayeron repentinamente por el lanzamiento de los Clavos Celestiales.",
    "Durante mucho tiempo se pensó que los dioses de Celestia destruían a las naciones simplemente por soberbia o por no adorar a los Arcontes (como el caso de Khaenri'ah, que era una civilización puramente humana y atea). Sin embargo, el lore oculto en artefactos y armas sugiere una verdad mucho más gris y retorcida.",
    "La teoría del control de plagas: Celestia parece actuar cada vez que una civilización humana alcanza un nivel de conocimiento o tecnología que amenaza con desenterrar el 'Conocimiento Prohibido' (una energía corrupta del Abismo que vuelve loca a la gente y destruye la realidad misma de Teyvat).",
    "El dilema moral: ¿Son los dioses de Celestia tiranos crueles que destruyen a la humanidad por diversión, o son guardianes desesperados que recurren al genocidio selectivo y al reinicio de civilizaciones para evitar que el planeta entero sea consumido por la corrupción del Abismo? Tu gemelo eligió al Abismo para destruir a Celestia, obligándote a preguntarte quién es el verdadero villano."
  ],
  re3: ["Selecciona las anomalías 1, 2 o 3 en las pestañas anteriores (Mondstadt, Liyue, Inazuma) para leer los registros maestros del Abismo."],
  re4: ["Selecciona las anomalías 1, 2 o 3 en las pestañas anteriores (Mondstadt, Liyue, Inazuma) para leer los registros maestros del Abismo."],
  re5: ["Selecciona las anomalías 1, 2 o 3 en las pestañas anteriores (Mondstadt, Liyue, Inazuma) para leer los registros maestros del Abismo."]
};

// 🎮 ABRIR PANEL SELECTOR
function openSelector(category) {
  currentCategory = category;
  document.getElementById("gameSelector").classList.remove("hidden");
}

// ❌ CERRAR PANEL SELECTOR
function closeSelector() {
  document.getElementById("gameSelector").classList.add("hidden");
  document.getElementById("mascotStory").classList.add("hidden");
  document.getElementById("curiosidadesTerminal").classList.add("hidden");
  document.getElementById("misteriosTerminal").classList.add("hidden");
}

// 🎮 INTERRUPTOR DE CARGA DE REGIONES
function selectGame(game) {
  currentGame = game;
  currentStep = 0;

  document.getElementById("mascotStory").classList.add("hidden");
  document.getElementById("curiosidadesTerminal").classList.add("hidden");
  document.getElementById("misteriosTerminal").classList.add("hidden");

  // 📖 MOSTRAR CRÓNICAS (LORE)
  if(currentCategory === "lore") {
    document.getElementById("mascotStory").classList.remove("hidden");
    showStory();
  }

  // 🎲 MOSTRAR CURIOSIDADES
  if(currentCategory === "curiosidades") {
    showCuriosidades(game);
  }

  // 🕵️ MOSTRAR MISTERIOS
  if(currentCategory === "misterios") {
    showMisterios(game);
  }
}

// ⌨️ MÁQUINA DE ESCRIBIR ANTI-SUPERPOSICIÓN
function typeText(element, text, speed = 18) {
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

// 📖 RENDERIZAR CAPÍTULO
function showStory() {
  const story = stories[currentGame][currentStep];
  typeText(document.getElementById("storyText"), story);
  document.getElementById("mascotImg").src = mascotImages[currentStep % mascotImages.length];
}

// ⏭ SIGUIENTE PÁGINA DEL CAPÍTULO
function nextStory() {
  currentStep++;
  if(currentStep >= stories[currentGame].length) {
    document.getElementById("storyText").innerText = "FIN DE LOS REGISTROS DISPONIBLES PARA ESTE CAPÍTULO. EL VIAJE DEBE CONTINUAR.";
    return;
  }
  showStory();
}

// 🎲 RENDERIZAR CURIOSIDADES REGIONALES
function showCuriosidades(game) {
  document.getElementById("curiosidadesTerminal").classList.remove("hidden");
  document.getElementById("curiosityText").innerText = "> SELECCIONA UN EXPEDIENTE REGIONAL PARA DESBLOQUEAR LOS DATOS...";
  document.getElementById("curiosityMascot").src = mascotImages[0];

  const container = document.getElementById("filesContainer");
  container.innerHTML = "";

  curiosidadesData[game].forEach((text, index) => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `🌟 REGION_FILE_${index+1}`;
    card.onclick = () => {
      typeText(document.getElementById("curiosityText"), text);
      document.getElementById("curiosityMascot").src = mascotImages[index % mascotImages.length];
    };
    container.appendChild(card);
  });
}

// 🕵️ RENDERIZAR MISTERIOS PROHIBIDOS
function showMisterios(game) {
  document.getElementById("misteriosTerminal").classList.remove("hidden");
  document.getElementById("misteryText").innerText = "> ADVERTENCIA: ACCEDIENDO A REPORTE PROHIBIDO. SELECCIONA UNA ANOMALÍA COGNITIVA:";
  document.getElementById("misteryMascot").src = mascotImages[0];

  const container = document.getElementById("misteryFilesContainer");
  container.innerHTML = "";

  misteriosData[game].forEach((text, index) => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `👁️ ANOMALY_DATA_${index+1}`;
    card.onclick = () => {
      typeText(document.getElementById("misteryText"), text);
      document.getElementById("misteryMascot").src = mascotImages[index % mascotImages.length];
    };
    container.appendChild(card);
  });
}