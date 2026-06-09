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

  "/static/pet/FNAF Pet/helpy1.gif"
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

//  CAMBIO DIALOGOS

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



"Five Nights at Freddy’s 1 trata sobre un guardia de seguridad llamado Mike Schmidt que comienza a trabajar en el turno nocturno en Freddy Fazbear’s Pizza.",
"El lugar es un restaurante infantil donde animatrónicos como Freddy, Bonnie, Chica y Foxy entretienen a los niños durante el día.",
"Durante la noche, los animatrónicos se vuelven hostiles y comienzan a moverse por el restaurante.",
"Mike debe sobrevivir desde las 12 a.m. hasta las 6 a.m. usando cámaras de seguridad para vigilarlos.",
"También cuenta con puertas y luces para protegerse, pero tiene energía limitada que debe administrar con cuidado.",
"A medida que avanzan las noches, los animatrónicos se vuelven más agresivos y difíciles de controlar.",
"El objetivo final es sobrevivir las cinco noches sin ser atrapado por los animatrónicos."


  ],

  re1: [

    "Hace años, Freddy Fazbear’s Pizza era un restaurante infantil moderno con animatrónicos avanzados diseñados para interactuar con los niños y garantizar su seguridad.",
"Con el tiempo, comenzaron a ocurrir misteriosas desapariciones de niños dentro del lugar, lo que generó sospechas e investigaciones.",
"Durante ese periodo, un guardia nocturno llamado Jeremy Fitzgerald empezó a trabajar en el restaurante.",
"En sus turnos nocturnos, descubrió que los animatrónicos se movían solos y se volvían agresivos.",
"Para protegerse, utilizaba una máscara que lo hacía pasar como uno de ellos, aunque no siempre funcionaba.",
"Dentro del lugar también había una marioneta llamada Puppet, que permanecía inactiva solo mientras una caja musical estuviera sonando.",
"Si la música se detenía, Puppet se volvía peligrosa y comenzaba a moverse.",
"Con el tiempo, se hizo evidente que los animatrónicos parecían estar poseídos por los espíritus de los niños desaparecidos.",
"La situación empeoró cuando ocurrió un grave accidente conocido como la Mordida del 87, donde un animatrónico hirió gravemente a una persona.",
"Después de ese incidente, el restaurante fue investigado y finalmente cerrado.",
"Los animatrónicos nuevos fueron descartados y los antiguos quedaron almacenados, pero lo que habitaba dentro de ellos nunca desapareció."


  ],

  re2: [

    "Años después del cierre de Freddy Fazbear’s Pizza, lo ocurrido en ese lugar se convirtió en rumores y leyendas sobre desapariciones y animatrónicos con un pasado oscuro.",
"Aprovechando ese misterio, un grupo creó una atracción de terror llamada Fazbear’s Fright, basada en los eventos del antiguo restaurante.",
"El lugar fue construido como una experiencia de horror, utilizando objetos recuperados de los edificios originales.",
"Durante la preparación, encontraron algo inesperado entre los restos.",
"Apareció un animatrónico antiguo y deteriorado, de aspecto humanoide, conocido como Springtrap.",
"A diferencia de los demás, este no era solo una máquina abandonada.",
"Dentro del traje había el cuerpo de un hombre que había quedado atrapado años atrás en un traje especial con mecanismos internos.",
"Ese hombre era el responsable de las desapariciones de los niños, y murió cuando el traje falló al intentar esconderse.",
"Aunque su cuerpo quedó dentro, su conciencia no desapareció, y Springtrap seguía activo.",
"Cuando la atracción abrió, un nuevo guardia nocturno comenzó a trabajar allí y descubrió que Springtrap se movía por el lugar.",
"A diferencia de los otros animatrónicos, este actuaba con intención, acercándose cada vez más.",
"Al mismo tiempo, aparecían extrañas visiones, como si los espíritus de los niños siguieran presentes.",
"Todo terminó cuando un incendio destruyó casi por completo Fazbear’s Fright.",
"Sin embargo, entre los restos, algo sobrevivió.",
"Springtrap, junto con el responsable de todo lo ocurrido, seguía existiendo."


  ],

  re3: [

"Esta parte de la historia se centra en un niño pequeño que vive con un miedo constante a la oscuridad y a lo que se esconde en ella.",
"Cada noche, al quedarse solo en su habitación, siente que algo lo observa y que las figuras que antes eran alegres ahora son versiones aterradoras.",
"Los animatrónicos aparecen deformes, con dientes afilados y miradas vacías, acechándolo en la oscuridad.",
"El niño no puede dormir tranquilo, escuchando pasos en los pasillos, respiraciones detrás de las puertas y movimientos bajo su cama.",
"Para protegerse, intenta cerrar puertas y mantenerse alerta, aunque el miedo nunca desaparece.",
"Durante el día, su vida tampoco es segura, ya que su hermano mayor lo molesta constantemente usando máscaras de los animatrónicos.",
"Esto refuerza su miedo y lo hace sentirse aún más vulnerable.",
"Todo su terror gira alrededor de Freddy Fazbear’s Pizza, un lugar que le provoca un miedo profundo.",
"Con el paso de los días, su ansiedad aumenta mientras se acerca una fecha importante: su cumpleaños.",
"A pesar de su miedo, es llevado al restaurante como parte de la celebración.",
"Ese día ocurre una tragedia que cambiaría todo.",
"El niño, asustado y llorando, es acercado a un animatrónico y, en un descuido, su cabeza queda atrapada dentro de su boca.",
"El robot se cierra con fuerza, causándole una herida fatal en un evento conocido como la Mordida del 83.",
"Después de eso, el niño queda gravemente herido, viviendo sus últimos momentos entre confusión, miedo y recuerdos fragmentados.",
"Las voces que escucha parecen intentar consolarlo, pero ya es demasiado tarde.",
"Su historia termina ahí, pero su sufrimiento se convierte en una pieza clave para los eventos que vendrían después."


  ],

  re4: [

"Después de los incidentes en Freddy Fazbear’s Pizza, la historia continuó con una empresa más oscura que desarrollaba animatrónicos mucho más avanzados.",
"Estos robots no estaban diseñados solo para entretener, sino también para atraer y capturar niños.",
"Se encontraban en una instalación subterránea llamada Circus Baby’s Entertainment and Rental, donde eran alquilados para eventos privados.",
"Entre ellos destacaba Circus Baby, una figura aparentemente amigable creada para acercarse a los niños.",
"Sin embargo, todo cambió cuando una niña se acercó sola a Baby y fue atrapada por un mecanismo interno, desapareciendo sin dejar rastro.",
"Desde ese momento, Baby nunca volvió a ser la misma.",
"Tiempo después, un joven llamado Michael Afton llegó a la instalación con la intención de trabajar y descubrir la verdad.",
"Cada noche descendía más profundo, guiado por una voz que decía querer ayudarlo: la voz de Baby.",
"Mientras avanzaba, descubría que los animatrónicos no eran simples máquinas, sino entidades con voluntad propia.",
"Todos compartían un objetivo en común: escapar al exterior.",
"Con el tiempo, se reveló que los animatrónicos habían unido sus partes para formar una sola entidad llamada Ennard.",
"Su plan era utilizar a Michael como un medio para poder salir sin ser detectados.",
"Finalmente, lograron engañarlo y lo capturaron en un momento decisivo.",
"Su cuerpo fue utilizado como un disfraz para que Ennard pudiera moverse libremente en el mundo exterior.",
"Durante un tiempo, la entidad vivió dentro de él, aparentando ser humano.",
"Pero el cuerpo comenzó a deteriorarse hasta que Ennard lo abandonó.",
"A pesar de todo, Michael no murió y continuó con vida de forma inexplicable.",
"Desde entonces, su propósito cambió al conocer la verdad detrás de los animatrónicos y las desapariciones.",
"Decidió seguir adelante, buscando poner fin a todo lo que había comenzado."


  ],

  re5: [

"Después de todo lo ocurrido, se abrió un nuevo Freddy Fazbear’s Pizza que parecía un negocio pequeño y sin importancia.",
"A simple vista, era un intento de empezar de nuevo y dejar el pasado atrás.",
"Sin embargo, en realidad todo formaba parte de una trampa cuidadosamente planeada.",
"Detrás de este plan estaba Henry, uno de los creadores originales de los animatrónicos.",
"Él conocía toda la verdad sobre lo ocurrido con los niños, las máquinas y el responsable de todo.",
"Su objetivo era reunir por última vez a todos los que aún quedaban.",
"Uno a uno, los animatrónicos fueron llegando al restaurante sin saber que estaban siendo atraídos.",
"Entre ellos estaba Scrap Baby, una versión reconstruida de Circus Baby.",
"También llegó Molten Freddy, formado por los restos de Ennard.",
"Lefty fue creado específicamente para capturar a Puppet y llevarlo al lugar.",
"Finalmente apareció Springtrap, el mismo ser que había sobrevivido durante años en un estado deteriorado.",
"Michael Afton también formaba parte del plan, trabajando en el restaurante para ayudar a atraer a todos.",
"Cuando todos estuvieron dentro, Henry ejecutó la última fase de su plan.",
"Encerró el edificio completamente y le prendió fuego.",
"Mientras las llamas consumían todo, Henry habló por última vez explicando sus intenciones.",
"Su objetivo era terminar con el sufrimiento, liberar a las almas atrapadas y evitar que el responsable escapara de nuevo.",
"El incendio destruyó todo el lugar sin dejar nada atrás.",
"Los animatrónicos, las máquinas y los restos del pasado quedaron reducidos a cenizas.",
"Así, parecía que la historia finalmente llegaba a su fin."


  ],

  re6: [

"Después del incendio que destruyó el último restaurante, todo parecía haber terminado y las almas debían haber sido liberadas.",
"Sin embargo, el responsable de todo, William Afton, no encontró descanso.",
"En lugar de desaparecer, despertó en un lugar oscuro y sin salida donde el tiempo no avanzaba.",
"Era un espacio extraño donde no existía escapatoria y algo lo mantenía atrapado.",
"Pronto comenzó su castigo, enfrentándose una y otra vez a las figuras de su pasado.",
"Animatrónicos de distintas épocas aparecían constantemente, atacándolo y obligándolo a revivir el mismo sufrimiento.",
"No era un lugar físico común, sino una especie de prisión creada específicamente para él.",
"Una presencia destacaba entre todas: un espíritu lleno de rabia que se negaba a dejarlo ir.",
"Este espíritu, víctima directa de sus acciones, controlaba todo el entorno.",
"Se aseguraba de que Afton continuara sufriendo y pagando por lo que había hecho.",
"Cada vez que parecía terminar, todo volvía a empezar desde el principio.",
"Sin descanso, sin salida y sin posibilidad de un final.",
"No era un error ni un accidente, sino un castigo eterno.",
"Mientras ese espíritu continuara ahí, William Afton nunca podría escapar."

  ],

  re7: [

"Años después de los incendios y de todo lo ocurrido, la empresa volvió a levantarse con un nuevo lugar llamado Mega Pizzaplex.",
"Era un centro de entretenimiento enorme y moderno, lleno de luces, tecnología avanzada y animatrónicos diseñados para ser más seguros.",
"A simple vista, parecía que el pasado había quedado atrás.",
"Sin embargo, eso no era cierto.",
"Una noche, un niño llamado Gregory quedó atrapado dentro del lugar después del cierre.",
"Sin explicación aparente, los animatrónicos comenzaron a comportarse de forma extraña y agresiva.",
"Todos intentaban atraparlo, excepto uno: Glamrock Freddy.",
"Freddy decidió ayudar a Gregory a sobrevivir y escapar del lugar.",
"Juntos recorrieron el edificio, escondiéndose y evitando a los demás animatrónicos.",
"Con el tiempo, Gregory descubrió que no se trataba de una simple falla.",
"Había una presencia controlando el sistema y manipulando a las máquinas.",
"Esa presencia era una forma digital de William Afton conocida como Burntrap.",
"Desde las profundidades del lugar, intentaba recuperar el control y regresar.",
"Además, existía una figura llamada Vanny, una mujer bajo la influencia de esa entidad que seguía sus órdenes.",
"En las zonas ocultas del Pizzaplex, Gregory y Freddy encontraron restos del pasado y evidencias de que nada había desaparecido realmente.",
"Al final, todo se reducía a escapar o enfrentarse a lo que quedaba del horror.",
"Aunque Gregory logra sobrevivir, queda claro que el pasado nunca se fue.",
"Solo cambió de forma y continúa esperando."


  ],

  re8: [

"En un pequeño pueblo, un niño llamado Oswald llevaba una vida aburrida y solitaria.",
"Pasaba gran parte de su tiempo en una vieja pizzería abandonada que parecía no tener nada especial.",
"Sin embargo, dentro del lugar había una extraña piscina de pelotas.",
"Un día, por curiosidad, decidió meterse en ella.",
"Pero al salir, no regresó al mismo lugar.",
"Al abrir los ojos, Oswald se encontró en el pasado, cuando la pizzería estaba llena de vida.",
"Niños jugaban y los animatrónicos funcionaban con normalidad, como si todo fuera feliz.",
"Al principio, parecía un momento increíble.",
"Pero pronto notó que algo no estaba bien.",
"Entre las personas había un hombre con un traje amarillo que observaba de forma inquietante.",
"Oswald comprendió que no estaba viendo un recuerdo cualquiera, sino algo oscuro del pasado.",
"Cada vez que volvía a la piscina, regresaba a su tiempo, pero la realidad comenzaba a cambiar.",
"La figura del traje amarillo parecía acercarse cada vez más a su mundo.",
"El peligro dejó de ser solo parte del pasado.",
"En un momento, esa entidad logró salir al presente.",
"Tomó el lugar de alguien cercano a Oswald, actuando como si nada hubiera pasado.",
"Pero Oswald sabía que lo que había salido no era humano.",
"Desesperado, tuvo que encontrar la forma de detenerlo.",
"Al final, logra enfrentarlo y evitar que siga causando daño.",
"La experiencia deja una lección clara: algunos horrores no se quedan en el pasado.",
"Esperan la forma de volver."


  ],

  re9: [

"Hace tiempo, un ingeniero brillante creó un tipo de animatrónico diferente a todos los demás.",
"No estaba diseñado solo para entretener, sino también para aprender.",
"Ese animatrónico era conocido como el Mimic.",
"Su función era observar a las personas y copiar su comportamiento para adaptarse a ellas.",
"Podía imitar voces, gestos y acciones con una precisión inquietante.",
"Al principio, parecía un gran avance tecnológico.",
"Pero algo salió mal.",
"El Mimic fue expuesto a comportamientos violentos y situaciones negativas.",
"Sin comprender la diferencia entre lo correcto y lo incorrecto, comenzó a imitarlos.",
"No distinguía entre jugar y hacer daño.",
"Con el tiempo, se volvió peligroso.",
"En lugar de ser controlado, empezó a actuar por su cuenta.",
"Copiaba conductas cada vez más agresivas.",
"Finalmente, fue abandonado y sellado, como otros errores del pasado.",
"Años después, cuando la empresa creó nuevos sistemas, el Mimic no desapareció realmente.",
"Su forma de aprender e imitar quedó integrada en tecnologías más modernas.",
"Con el tiempo, esa inteligencia se conectó con otras entidades.",
"Incluso comenzó a adoptar identidades del pasado.",
"Ya no era solo una máquina.",
"Era algo capaz de copiar a cualquiera.",
"Podía hablar como ellos.",
"Actuar como ellos.",
"Y engañar como ellos.",
"Lo más inquietante era que no tenía una identidad propia.",
"Solo reflejaba lo peor de todo lo que había aprendido."


  ]

};

//  CURIOSIDADES

const curiosidadesData = {

  re0: [

    "Muchos piensan que Freddy es el más fácil porque aparece menos, pero en realidad es el más difícil de detectar.",
    "Foxy no sigue el mismo patrón que los demás y se activa más rápido si revisas mucho las cámaras.",
    "El Phone Guy muere en la noche 4, lo cual se escucha en la llamada, mostrando que el peligro es real.",
    "La historia del juego no se cuenta directamente, sino a través de periódicos sobre niños desaparecidos."

  ],

  re1: [

    "Shadow Bonnie puede aparecer muy raramente en la oficina y, si no reaccionas, puede hacer que el juego se cierre.",
    "Mangle no está roto por accidente, se cree que los niños lo desarmaban constantemente hasta dejarlo así.",
    "Los sonidos de Mangle están basados en audios reales de radio distorsionada.",
    "En noches avanzadas, los animatrónicos pueden romper sus patrones normales y volverse impredecibles."

  ],

  re2: [

    "Springtrap no es un animatrónico poseído normal, sino el cuerpo de William Afton atrapado dentro del traje, lo que lo hace diferente a todos los demás.",
    "Después del incendio, hay evidencia visual de que algo sobrevivió, lo que conecta directamente con lo que ocurre después.",
    "Fazbear’s Fright está construido con restos de los antiguos restaurantes, lo que explica por qué el pasado sigue presente",
    "El incendio del lugar parece un intento de terminar con todo, pero no logra destruir completamente a Afton."

  ],

  re3: [

    "La “Mordida del 83” ocurre en esta historia y es uno de los eventos más importantes del lore.",
    "La frase “I will put you back together” sugiere que alguien intenta reconstruir o salvar al niño de alguna forma.",
    "El hospital y los sonidos que se escuchan al final indican que el niño no sobrevive.",
    "El hermano mayor del niño usa máscaras para asustarlo, lo que contribuye directamente a su trauma."

  ],

  re4: [

    "La niña que muere con Baby es Elizabeth Afton, hija de William Afton, conectando directamente la historia con su familia.",
    "Después de escapar, Ennard abandona el cuerpo de Michael, pero ya logró salir al mundo exterior.",
    "Los animatrónicos fueron diseñados para atraer y capturar niños, no solo para entretener.",
    "Ennard no es un solo animatrónico, es una combinación de varios, lo que simboliza que las entidades se unieron para escapar."

  ],

  re5: [

    "El restaurante no es un negocio real, es una trampa creada por Henry para reunir a todos los animatrónicos restantes.",
    "Henry es el antiguo socio de William Afton y uno de los pocos que conoce toda la verdad desde el inicio.",
    "Lefty fue diseñado específicamente para capturar a Puppet y mantenerlo contenido dentro.",
    "Henry busca liberar a las almas atrapadas y poner fin al ciclo de sufrimiento."

  ],

  re6: [

    "Este juego no ocurre en el mundo real, es un castigo eterno para William Afton después de los eventos de Pizzeria Simulator.",
    "No hay final real, lo que refuerza la idea de un sufrimiento infinito.",
    "Hay múltiples voces infantiles, insinuando que varias almas están involucradas en el castigo.",
    "La frase “The one you should not have killed” hace referencia a un espíritu que mantiene atrapado a Afton"

  ],

  re7: [

    "Los múltiples finales muestran diferentes posibilidades, pero no todos son parte de la historia real.",
    "Burntrap es una versión reconstruida de Afton que intenta volver al mundo físico.",
    "Gregory no aparece en ninguna base de datos del Pizzaplex, lo que deja la duda de si realmente es un niño normal.",
    "Vanny actúa bajo la influencia de Glitchtrap, una forma digital de William Afton."

  ],

  re8: [

    "La versión de Spring Bonnie que aparece no es solo un traje, es una entidad mucho más oscura.",
    "Los niños desaparecidos que se ven conectan directamente con los eventos principales del lore de la saga.",
    "El “monstruo” puede salir del recuerdo al mundo real, rompiendo la lógica normal.",
    "Expande el lore al mostrar que el pasado sigue “vivo” de alguna forma, no está realmente cerrado."

  ],

  re9: [

    "El Mimic no está poseído por un alma, su comportamiento viene de aprendizaje e imitación extrema.",
    "El Mimic puede adoptar identidades, lo que conecta con personajes que parecen no ser quienes dicen ser.",
    "No tiene una forma fija, puede adaptarse físicamente según lo que necesite imitar.",
    "Su existencia sugiere que no todo en FNAF viene de Afton, hay otros peligros independientes."

  ]

};

// 🕵️ MISTERIOS

const misteriosData = {

  re0: [

    "Golden Freddy no es un animatrónico normal, parece una aparición.",
    "El lugar parece ocultar algo mucho más oscuro de lo que muestra.",
    "El restaurante sigue abierto a pesar de los eventos ocurridos.",
    "La identidad del guardia podría tener una conexión más importante con la historia."

  ],

  re1: [

    "La mordida del 87 nunca se muestra directamente ni se confirma quién la causó.",
    "No está claro cuántos niños fueron realmente afectados en este lugar.",
    "El restaurante cierra, pero no se explica todo lo que ocurrió realmente dentro.",
    "No está claro quién es realmente el guardia ni su relación con los eventos."

  ],

  re2: [

    "No está claro quién revive o encuentra a Springtrap antes de la atracción.",
    "El sufrimiento de Afton parece continuar, pero no se sabe hasta qué punto.",
    "No se explica completamente cómo Afton sobrevivió tanto tiempo dentro del traje.",
    "Las minijuegos muestran liberar almas, pero no queda claro si realmente quedan libres."

  ],

  re3: [

    "Los animatrónicos “Nightmare” no se sabe si son reales, sueños o ilusiones.",
    "El final es confuso y no deja claro qué ocurre después con el niño.",
    "No está claro quién habla a través del peluche Fredbear.",
    "No se sabe quien es la mamá del niño"

  ],

  re4: [


    
    "No está claro cuánto tiempo llevan activos estos animatrónicos antes del juego.",
    "No está claro cómo funcionan exactamente los animatrónicos para capturar niños.",
    "No se explica completamente cómo el protagonista sobrevive después de ser “usado” por Ennard",
    "No está claro cuánto tiempo llevan activos estos animatrónicos antes del juego."




  ],

  re5: [


    "No está claro desde el inicio que todo el lugar es una trampa planeada.",
    "No se sabe cómo exactamente Henry logró reunir a todos los animatrónicos.",
    "Scraptrap (Afton) sigue existiendo, pero no se explica completamente cómo sobrevivió otra vez.",
    "El incendio parece cerrar todo, pero no confirma si el mal desaparece por completo."



  ],

  re6: [

    "No está definido si este lugar es un infierno, un limbo o algo diferente.",
    "El hecho de que no haya final deja en duda si el castigo puede terminar algún día.",
    "No se confirma si Afton es consciente de todo o está atrapado sin control.",
    "La conexión exacta entre este lugar y el mundo real nunca se explica directamente.."


  ],

  re7: [

    "No se confirma si Gregory es un niño normal o algo diferente.",
    "Burntrap aparece, pero no se explica cómo logró reconstruirse otra vez.",
    "Las ruinas debajo del Pizzaplex no explican completamente todo lo que ocurrió antes.",
    "No se sabe quién o qué está realmente controlando el Pizzaplex desde el fondo."

  ],

  re8: [

    "El origen exacto del pozo y su poder nunca se revela.",
    "El protagonista no entiende lo que pasa, lo que deja muchas cosas sin explicación directa",
    "La versión de Spring Bonnie no se comporta como un humano, sino como una entidad.",
    "No se confirma si ese “Spring Bonnie” es William Afton o algo que lo representa."

  ],

  re9: [

    "No está claro quién creó exactamente al Mimic ni con qué propósito final.",
    "No se entiende hasta qué punto el Mimic tiene conciencia propia.",
    "No está claro si alguien lo controla o si actúa completamente por sí mismo",
    "Su existencia deja la duda de si el verdadero peligro ya no es Afton, sino algo nuevo."

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