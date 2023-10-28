const palabras =  [
  "ABETO",  "ACTOR", "AGUAS",  "AGUDO",  "ALADO",  "ALBAS",  "ALTAR",  "ANTON",  "ATIZO",  "AVALA",  "AVION",  "AZUL",  "BABAS",  "BACAS",  "BACHE",  "BAJES",  "BALAS",  "BEBES",  "BELEN",  "BERTO",  "BICHO",  "BIZCO",  "BUENO",  "BUSCA",  "CABRA",  "CAFES",  "CAJAS",  "CALAR",  "CALAS",  "CALCA",  "CALLA",  "CALMA",  "CAMBA",  "CAMPO",  "CANAS",  "CANTOS",  "CAPTO",  "CARAS",  "CARLO",  "CARRO",  "CASAS",  "CATAR",  "CAIDA",  "CEJAS",  "CELIA",  "CENAS",  "CEPAS",  "CERCA",  "CERCO",  "CERDO",  "CHILE",  "CHINA",  "CIEGO",  "CINES",  "CITAS",  "CLARA",  "CLAVO",  "COLAS",  "COLON",  "COLON",  "CORAL",  "CORAS",  "COREA",  "CORRO",  "COSAS",  "COSTO",  "CRUDO",  "CURAR",  "DADOS",  "DAGAS",  "DATOS",  "DAÑOS",  "DEJAR",  "DEJES",  "DENSO",  "DICES",  "DIVOS",  "DOTES",  "DUNAS",  "DURES",  "DUROS",  "ELLOS",  "ECHAS",  "EDITO",  "ELEVO",  "EMULE",  "EMULO",  "ENOJE",  "ERROR",  "ESTAS",  "FALLO",  "FALTO",  "FERIA",  "FETOS",  "FIJOS",  "FILAS",  "FILIA",  "FINCA",  "GAFAS",  "GALAS",  "GALES",  "GALOS",  "GANAS",  "GANES",  "GASES",  "GASTO",  "GIRAS",  "GORDO",  "GORRO",  "GRAVE",  "GRITO",  "HACER",  "HALOS",  "HASTA",  "HECES",  "HIELO",  "IDEAS",  "INDIA",  "INFLO",  "ISLAS",  "JAPON",  "JEFAS",  "JERGA",  "JOSUE",  "JULIO",  "MALOS",  "MANIA",  "MARCA",  "MARCO",  "MARTI",  "MARIA",  "MELON",  "MENOS",  "METER",  "METRO",  "MOLER",  "MONTE",  "MORIR",  "NACER",  "NADAR",  "NARRO",  "NATAS",  "NAVES",  "NECIO",  "NIÑOS",  "NOTAS",  "NUBES",  "OBRAS",  "OCIOS",  "OLLAS",  "ONDAS",  "ONZAS",  "OPERA",  "OTROS",  "OVULO",  "OIRTE",  "PALAS",  "PARIS",  "PEDIR",  "PELEA",  "PELOS",  "PERAS",  "PERRO",  "PESOS",  "PILAS",  "PINTO",  "PODER",  "QATAR",  "QUEDO",  "QUEMA",  "QUITO",  "RELOJ",  "RUBIO",  "RASCO",  "RATAS",  "RATOS",  "REDES",  "REMAR",  "RENOS",  "RENTA",  "SABIO",  "SACAR",  "SALIR",  "SELVA",  "SANAR",  "SOPAS",  "SECAR",  "SERIO",  "SITUO",  "SOBAR",  "SONAR",  "SUBIR",  "SUCIO",  "SIETE",  "TABLA",  "TACOS",  "TANIA",  "TAPAS",  "TAZAS",  "TELON",  "TENER",  "TENIS",  "TERCO",  "TERSO",  "TEXAS",  "TIPOS",  "TIRAS",  "TODAS",  "TODOS",  "TOMAR",  "TOMAS",  "TONOS",  "TONTO",  "TOQUE",  "TORPE",  "TROTE",  "VACAS",  "VAGOS",  "VALER",  "VALOR",  "VECES",  "VEDAS",  "VELAS",  "VEMOS",  "VENAS",  "VENIR",  "VERDE",  "VIERA",  "VIGAS",  "VINOS",  "VIVIR","VOLAR","VOTAR","YATES","YEMAS","YEMEN","YENDO","YENES","YESCA","YOGUR", "YUGOS","ZONAS","ZORRO","ZURDO","ZARPA"
]
let palabraFinal = palabras[Math.floor(Math.random() * palabras.length)];
let intentos = 6;
let historialAdivinanzas = [];

document.getElementById("submit").addEventListener("click", () => {
  if (document.getElementById("guess").value.length !== palabraFinal.length) {
    alert(`Debes ingresar una palabra de ${palabraFinal.length} letras.`);
    return;
  }

  const guessInput = document.getElementById("guess");
  const guess = guessInput.value.toUpperCase();
  guessInput.value = "";

  let displayWord = "";

  const correctLetters = new Set();
  const incorrectLetters = new Set();

  for (let i = 0; i < palabraFinal.length; i++) {
    if (palabraFinal[i] === guess[i]) {
      displayWord += `<span class="letter green">${guess[i]}</span>`;
      correctLetters.add(guess[i]);
    } else {
      displayWord += `<span class="letter red">${guess[i]}</span>`;
      if (palabraFinal.includes(guess[i])) {
        incorrectLetters.add(guess[i]);
      }
    }
  }

  for (let i = 0; i < palabraFinal.length; i++) {
    if (!correctLetters.has(guess[i]) && incorrectLetters.has(guess[i])) {
      displayWord = displayWord.replace(`<span class="letter red">${guess[i]}</span>`, `<span class="letter yellow">${guess[i]}</span>`);
    }
  }

  const guessDiv = document.createElement("div");
  guessDiv.innerHTML = displayWord;
  document.getElementById("guess-history").appendChild(guessDiv);

  intentos--;
  document.getElementById("attempts").textContent = intentos;
  if (intentos !== 0 && palabraFinal === guess) {
    window.location.href = "victoria.html"; // Redirige al jugador a la página "ganaste.html" al ganar
  }
  else if (intentos === 0) {
    window.location.href = "derrota.html";
  }
});
