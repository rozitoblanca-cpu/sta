// =====================================
// ELEMENTOS
// =====================================

const loader = document.getElementById("loader");
const transition = document.getElementById("transition");

const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");
const end = document.getElementById("end");

const start = document.getElementById("start");
const finish = document.getElementById("finish");

const typeWriter = document.getElementById("typeWriter");

const petals = document.getElementById("petals");

// =====================================
// PANTALLA DE CARGA
// =====================================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 2000);

});

// =====================================
// TEXTO DE LA CARTA
// =====================================

const texto = `Hola, princesa... ❤️

No sabés cuánto pensé en escribirte esto.

No hice esta página para convencerte.

La hice porque necesitaba abrirte mi corazón.

Mi amor...

Sé que me equivoqué.

Y entiendo si hoy ya no confiás en mí.

Solo quiero que sepas que me arrepiento de verdad.

Extraño hablar con vos.

Extraño hacerte sonreír.

Extraño preguntarte cómo estuvo tu día.

No puedo cambiar el pasado.

Pero sí puedo cambiar la persona que soy.

Y quiero demostrarlo con hechos.

No con palabras.

Gracias por llegar hasta aquí.

Te quiero mucho, princesa. ❤️`;

// =====================================
// EFECTO MÁQUINA DE ESCRIBIR
// =====================================

let posicion = 0;

function escribirCarta() {

    if (posicion < texto.length) {

        typeWriter.innerHTML += texto.charAt(posicion);

        posicion++;

        setTimeout(escribirCarta, 40);

    } else {

        setTimeout(() => {

            if (end) {

                end.classList.remove("hidden");

            }

            iniciarLluvia();

        }, 2000);

    }

}

// =====================================
// BOTÓN PRINCIPAL
// =====================================

if (start) {

    start.addEventListener("click", () => {

        transition.classList.add("show");

        setTimeout(() => {

            welcome.classList.add("hidden");

            letter.classList.remove("hidden");

            transition.classList.remove("show");

            escribirCarta();

            crearPetalos();

        }, 1000);

    });

}

// =====================================
// BOTÓN FINAL
// =====================================

if (finish) {

    finish.addEventListener("click", () => {

        alert("Gracias por leer, princesa ❤️");

    });

}

// =====================================
// PÉTALOS
// =====================================

function crearPetalos() {

    setInterval(() => {

        const petalo = document.createElement("div");

        petalo.className = "petal";

        petalo.innerHTML = "🌸";

        petalo.style.left = Math.random() * 100 + "vw";

        petalo.style.fontSize = (18 + Math.random() * 18) + "px";

        petalo.style.animationDuration = (6 + Math.random() * 5) + "s";

        petals.appendChild(petalo);

        setTimeout(() => {

            petalo.remove();

        }, 12000);

    }, 350);

}

// =====================================
// FRASES Y OSITOS
// =====================================

const mensajes = [

    "🧸",

    "❤️ Estoy enamorado de ti",

    "🌹 Me gustás",

    "💖 Te quiero, princesa",

    "🥺 Perdón, mi amor",

    "🧸"

];

function iniciarLluvia() {

    setInterval(() => {

        const item = document.createElement("div");

        item.className = "fall";

        item.innerHTML = mensajes[Math.floor(Math.random() * mensajes.length)];

        item.style.left = Math.random() * 100 + "vw";

        item.style.fontSize = (20 + Math.random() * 10) + "px";

        item.style.animationDuration = (6 + Math.random() * 5) + "s";

        document.body.appendChild(item);

        setTimeout(() => {

            item.remove();

        }, 12000);

    }, 500);

}