// Establezco las varibles encargadas de la lógica del juego

const palabras = ['BULBASAUR', 'IVYSAUR', 'VENUSAUR', 'CHARMANDER', 'CHARMELEON', 'CHARIZARD', 'SQUIRTLE', 'WARTORTLE', 'BLASTOISE', 'CATERPIE', 'METAPOD', 'BUTTERFREE', 'WEEDLE', 'KAKUNA', 'BEEDRILL', 'PIDGEY', 'PIDGEOTTO', 'PIDGEOT', 'RATTATA', 'RATICATE', 'SPEAROW', 'FEAROW', 'EKANS', 'ARBOK', 'PIKACHU', 'RAICHU', 'SANDSHREW', 'SANDSLASH', 'NIDORINA', 'NIDOQUEEN', 'NIDORINO', 'NIDOKING', 'CLEFAIRY', 'CLEFABLE', 'VULPIX', 'NINETALES', 'JIGGLYPUFF', 'WIGGLYTUFF', 'ZUBAT', 'GOLBAT', 'ODDISH', 'GLOOM', 'VILEPLUME', 'PARAS', 'PARASECT', 'VENONAT', 'VENOMOTH', 'DIGLETT', 'DUGTRIO', 'MEOWTH', 'PERSIAN', 'PSYDUCK', 'GOLDUCK', 'MANKEY', 'PRIMEAPE', 'GROWLITHE', 'ARCANINE', 'POLIWAG', 'POLIWHIRL', 'POLIWRATH', 'ABRA', 'KADABRA', 'ALAKAZAM', 'MACHOP', 'MACHOKE', 'MACHAMP', 'BELLSPROUT', 'WEEPINBELL', 'VICTREEBEL', 'TENTACOOL', 'TENTACRUEL', 'GEODUDE', 'GRAVELER', 'GOLEM', 'PONYTA', 'RAPIDASH', 'SLOWPOKE', 'SLOWBRO', 'MAGNEMITE', 'MAGNETON', , 'DODUO', 'DODRIO', 'SEEL', 'DEWGONG', 'GRIMER', 'SHELLDER', 'CLOYSTER', 'GASTLY', 'HAUNTER', 'GENGAR', 'ONIX', 'DROWZEE', 'HYPNO', 'KRABBY', 'KINGLER', 'VOLTORB', 'ELECTRODE', 'EXEGGCUTE', 'EXEGGUTOR', 'CUBONE', 'MAROWAK', 'HITMONLEE', 'HITMONCHAN', 'LICKITUNG', 'KOFFING', 'WEEZING', 'RHYHORN', 'RHYDON', 'CHANSEY', 'TANGELA', 'KANGASKHAN', 'HORSEA', 'SEADRA', 'GOLDEEN', 'SEAKING', 'STARYU', 'STARMIE', 'SCYTHER', 'JYNX', 'ELECTABUZZ', 'MAGMAR', 'PINSIR', 'TAUROS', 'MAGIKARP', 'GYARADOS', 'LAPRAS', 'DITTO', 'EEVEE', 'VAPOREON', 'JOLTEON', 'FLAREON', 'PORYGON', 'OMANYTE', 'OMASTAR', 'KABUTO', 'KABUTOPS', 'AERODACTYL', 'SNORLAX', 'ARTICUNO', 'ZAPDOS', 'MOLTRES', 'DRATINI', 'DRAGONAIR', 'DRAGONITE', 'MEWTWO', 'CHIKORITA', 'BAYLEEF', 'MEGANIUM', 'CYNDAQUIL', 'QUILAVA', 'TYPHLOSION', 'TOTODILE', 'CROCONAW', 'FERALIGATR', 'SENTRET', 'FURRET', 'HOOTHOOT', 'NOCTOWL', 'LEDYBA', 'LEDIAN', 'SPINARAK', 'ARIADOS', 'CROBAT', 'CHINCHOU', 'LANTURN', 'PICHU', 'CLEFFA', 'IGGLYBUFF', 'TOGEPI', 'TOGETIC', 'NATU', 'XATU', 'MAREEP', 'FLAAFFY', 'AMPHAROS', 'BELLOSSOM', 'MARILL', 'AZUMARILL', 'SUDOWOODO', 'POLITOED', 'HOPPIP', 'SKIPLOOM', 'JUMPLUFF', 'AIPOM', 'SUNKERN', 'SUNFLORA', 'YANMA', 'WOOPER', 'QUAGSIRE', 'ESPEON', 'UMBREON', 'MURKROW', 'SLOWKING', 'MISDREAVUS', 'UNOWN', 'WOBBUFFET', 'GIRAFARIG', 'PINECO', 'FORRETRESS', 'DUNSPARCE', 'GLIGAR', 'STEELIX', 'SNUBBULL', 'GRANBULL', 'QWILFISH', 'SCIZOR', 'SHUCKLE', 'HERACROSS', 'SNEASEL', 'TEDDIURSA', 'URSARING', 'SLUGMA', 'MAGCARGO', 'SWINUB', 'PILOSWINE', 'CORSOLA', 'REMORAID', 'OCTILLERY', 'DELIBIRD', 'MANTINE', 'SKARMORY', 'HOUNDOUR', 'HOUNDOOM', 'KINGDRA', 'PHANPY', 'DONPHAN', 'PORYGON2', 'STANTLER', 'SMEARGLE', 'TYROGUE', 'HITMONTOP', 'SMOOCHUM', 'ELEKID', 'MAGBY', 'MILTANK', 'BLISSEY', 'RAIKOU', 'ENTEI', 'SUICUNE', 'LARVITAR', 'PUPITAR', 'TYRANITAR', 'LUGIA', 'CELEBI', 'TREECKO', 'GROVYLE', 'SCEPTILE', 'TORCHIC', 'COMBUSKEN', 'BLAZIKEN', 'MUDKIP', 'MARSHTOMP', 'SWAMPERT', 'POOCHYENA', 'MIGHTYENA', 'ZIGZAGOON', 'LINOONE', 'WURMPLE', 'SILCOON', 'BEAUTIFLY', 'CASCOON', 'DUSTOX', 'LOTAD', 'LOMBRE', 'LUDICOLO', 'SEEDOT', 'NUZLEAF', 'SHIFTRY', 'TAILLOW', 'SWELLOW', 'WINGULL', 'PELIPPER', 'RALTS', 'KIRLIA', 'GARDEVOIR', 'SURSKIT', 'MASQUERAIN', 'SHROOMISH', 'BRELOOM', 'SLAKOTH', 'VIGOROTH', 'SLAKING', 'NINCADA', 'NINJASK', 'SHEDINJA', 'WHISMUR', 'LOUDRED', 'EXPLOUD', 'MAKUHITA', 'HARIYAMA', 'AZURILL', 'NOSEPASS', 'SKITTY', 'DELCATTY', 'SABLEYE', 'MAWILE', 'ARON', 'LAIRON', 'AGGRON', 'MEDITITE', 'MEDICHAM', 'ELECTRIKE', 'MANECTRIC', 'PLUSLE', 'MINUN', 'VOLBEAT', 'ILLUMISE', 'ROSELIA', 'GULPIN', 'SWALOT', 'CARVANHA', 'SHARPEDO', 'WAILMER', 'WAILORD', 'NUMEL', 'CAMERUPT', 'TORKOAL', 'SPOINK', 'GRUMPIG', 'SPINDA', 'TRAPINCH', 'VIBRAVA', 'FLYGON', 'CACNEA', 'CACTURNE', 'SWABLU', 'ALTARIA', 'ZANGOOSE', 'SEVIPER', 'LUNATONE', 'SOLROCK', 'BARBOACH', 'WHISCASH', 'CORPHISH', 'CRAWDAUNT', 'BALTOY', 'CLAYDOL', 'LILEEP', 'CRADILY', 'ANORITH', 'ARMALDO', 'FEEBAS', 'MILOTIC', 'CASTFORM', 'KECLEON', 'SHUPPET', 'BANETTE', 'DUSKULL', 'DUSCLOPS', 'TROPIUS', 'CHIMECHO', 'ABSOL', 'WYNAUT', 'SNORUNT', 'GLALIE', 'SPHEAL', 'SEALEO', 'WALREIN', 'CLAMPERL', 'HUNTAIL', 'GOREBYSS', 'RELICANTH', 'LUVDISC', 'BAGON', 'SHELGON', 'SALAMENCE', 'BELDUM', 'METANG', 'METAGROSS', 'REGIROCK', 'REGICE', 'REGISTEEL', 'LATIAS', 'LATIOS', 'KYOGRE', 'GROUDON', 'RAYQUAZA', 'JIRACHI', 'DEOXYS', 'TURTWIG', 'GROTLE', 'TORTERRA', 'CHIMCHAR', 'MONFERNO', 'INFERNAPE', 'PIPLUP', 'PRINPLUP', 'EMPOLEON', 'STARLY', 'STARAVIA', 'STARAPTOR', 'BIDOOF', 'BIBAREL', 'KRICKETOT', 'KRICKETUNE', 'SHINX', 'LUXIO', 'LUXRAY', 'BUDEW', 'ROSERADE', 'CRANIDOS', 'RAMPARDOS', 'SHIELDON', 'BASTIODON', 'BURMY', 'WORMADAM', 'MOTHIM', 'COMBEE', 'VESPIQUEN', 'PACHIRISU', 'BUIZEL', 'FLOATZEL', 'CHERUBI', 'CHERRIM', 'SHELLOS', 'GASTRODON', 'AMBIPOM', 'DRIFLOON', 'DRIFBLIM', 'BUNEARY', 'LOPUNNY', 'MISMAGIUS', 'HONCHKROW', 'GLAMEOW', 'PURUGLY', 'CHINGLING', 'STUNKY', 'SKUNTANK', 'BRONZOR', 'BRONZONG', 'BONSLY', 'HAPPINY', 'CHATOT', 'SPIRITOMB', 'GIBLE', 'GABITE', 'GARCHOMP', 'MUNCHLAX', 'RIOLU', 'LUCARIO', 'HIPPOPOTAS', 'HIPPOWDON', 'SKORUPI', 'DRAPION', 'CROAGUNK', 'TOXICROAK', 'CARNIVINE', 'FINNEON', 'LUMINEON', 'MANTYKE', 'SNOVER', 'ABOMASNOW', 'WEAVILE', 'MAGNEZONE', 'LICKILICKY', 'RHYPERIOR', 'TANGROWTH', 'ELECTIVIRE', 'MAGMORTAR', 'TOGEKISS', 'YANMEGA', 'LEAFEON', 'GLACEON', 'GLISCOR', 'MAMOSWINE', 'GALLADE', 'PROBOPASS', 'DUSKNOIR', 'FROSLASS', 'ROTOM', 'UXIE', 'MESPRIT', 'AZELF', 'DIALGA', 'PALKIA', 'HEATRAN', 'REGIGIGAS', 'GIRATINA', 'CRESSELIA', 'PHIONE', 'MANAPHY', 'DARKRAI', 'SHAYMIN', 'ARCEUS', 'VICTINI', 'SNIVY', 'SERVINE', 'SERPERIOR', 'TEPIG', 'PIGNITE', 'EMBOAR', 'OSHAWOTT', 'DEWOTT', 'SAMUROTT', 'PATRAT', 'WATCHOG', 'LILLIPUP', 'HERDIER', 'STOUTLAND', 'PURRLOIN', 'LIEPARD', 'PANSAGE', 'SIMISAGE', 'PANSEAR', 'SIMISEAR', 'PANPOUR', 'SIMIPOUR', 'MUNNA', 'MUSHARNA', 'PIDOVE', 'TRANQUILL', 'UNFEZANT', 'BLITZLE', 'ZEBSTRIKA', 'ROGGENROLA', 'BOLDORE', 'GIGALITH', 'WOOBAT', 'SWOOBAT', 'DRILBUR', 'EXCADRILL', 'AUDINO', 'TIMBURR', 'GURDURR', 'CONKELDURR', 'TYMPOLE', 'PALPITOAD', 'SEISMITOAD', 'THROH', 'SAWK', 'SEWADDLE', 'SWADLOON', 'LEAVANNY', 'VENIPEDE', 'WHIRLIPEDE', 'SCOLIPEDE', 'COTTONEE', 'WHIMSICOTT', 'PETILIL', 'LILLIGANT', 'BASCULIN', 'SANDILE', 'KROKOROK', 'KROOKODILE', 'DARUMAKA', 'DARMANITAN', 'MARACTUS', 'DWEBBLE', 'CRUSTLE', 'SCRAGGY', 'SCRAFTY', 'SIGILYPH', 'YAMASK', 'COFAGRIGUS', 'TIRTOUGA', 'CARRACOSTA', 'ARCHEN', 'ARCHEOPS', 'TRUBBISH', 'GARBODOR', 'ZORUA', 'ZOROARK', 'MINCCINO', 'CINCCINO', 'GOTHITA', 'GOTHORITA', 'GOTHITELLE', 'SOLOSIS', 'DUOSION', 'REUNICLUS', 'DUCKLETT', 'SWANNA', 'VANILLITE', 'VANILLISH', 'VANILLUXE', 'DEERLING', 'SAWSBUCK', 'EMOLGA', 'KARRABLAST', 'ESCAVALIER', 'FOONGUS', 'AMOONGUSS', 'FRILLISH', 'JELLICENT', 'ALOMOMOLA', 'JOLTIK', 'GALVANTULA', 'FERROSEED', 'FERROTHORN', 'KLINK', 'KLANG', 'KLINKLANG', 'TYNAMO', 'EELEKTRIK', 'EELEKTROSS', 'ELGYEM', 'BEHEEYEM', 'LITWICK', 'LAMPENT', 'CHANDELURE', 'AXEW', 'FRAXURE', 'HAXORUS', 'CUBCHOO', 'BEARTIC', 'CRYOGONAL', 'SHELMET', 'ACCELGOR', 'STUNFISK', 'MIENFOO', 'MIENSHAO', 'DRUDDIGON', 'GOLETT', 'GOLURK', 'PAWNIARD', 'BISHARP', 'BOUFFALANT', 'RUFFLET', 'BRAVIARY', 'VULLABY', 'MANDIBUZZ', 'HEATMOR', 'DURANT', 'DEINO', 'ZWEILOUS', 'HYDREIGON', 'LARVESTA', 'VOLCARONA', 'COBALION', 'TERRAKION', 'VIRIZION', 'TORNADUS', 'THUNDURUS', 'RESHIRAM', 'ZEKROM', 'LANDORUS', 'KYUREM', 'KELDEO', 'MELOETTA', 'GENESECT', 'CHESPIN', 'QUILLADIN', 'CHESNAUGHT', 'FENNEKIN', 'BRAIXEN', 'DELPHOX', 'FROAKIE', 'FROGADIER', 'GRENINJA', 'BUNNELBY', 'DIGGERSBY', 'FLETCHLING', 'FLETCHINDER', 'TALONFLAME', 'SCATTERBUG', 'SPEWPA', 'VIVILLON', 'LITLEO', 'PYROAR', 'FLABEBE', 'FLOETTE', 'FLORGES', 'SKIDDO', 'GOGOAT', 'PANCHAM', 'PANGORO', 'FURFROU', 'ESPURR', 'MEOWSTIC', 'HONEDGE', 'DOUBLADE', 'AEGISLASH', 'SPRITZEE', 'AROMATISSE', 'SWIRLIX', 'SLURPUFF', 'INKAY', 'MALAMAR', 'BINACLE', 'BARBARACLE', 'SKRELP', 'DRAGALGE', 'CLAUNCHER', 'CLAWITZER', 'HELIOPTILE', 'HELIOLISK', 'TYRUNT', 'TYRANTRUM', 'AMAURA', 'AURORUS', 'SYLVEON', 'HAWLUCHA', 'DEDENNE', 'CARBINK', 'GOOMY', 'SLIGGOO', 'GOODRA', 'KLEFKI', 'PHANTUMP', 'TREVENANT', 'PUMPKABOO', 'GOURGEIST', 'BERGMITE', 'AVALUGG', 'NOIBAT', 'NOIVERN', 'XERNEAS', 'YVELTAL', 'ZYGARDE', 'DIANCIE', 'HOOPA', 'VOLCANION', 'ROWLET', 'DARTRIX', 'DECIDUEYE', 'LITTEN', 'TORRACAT', 'INCINEROAR', 'POPPLIO', 'BRIONNE', 'PRIMARINA', 'PIKIPEK', 'TRUMBEAK', 'TOUCANNON', 'YUNGOOS', 'GUMSHOOS', 'GRUBBIN', 'CHARJABUG', 'VIKAVOLT', 'CRABRAWLER', 'CRABOMINABLE', 'ORICORIO', 'CUTIEFLY', 'RIBOMBEE', 'ROCKRUFF', 'LYCANROC', 'WISHIWASHI', 'MAREANIE', 'TOXAPEX', 'MUDBRAY', 'MUDSDALE', 'DEWPIDER', 'ARAQUANID', 'FOMANTIS', 'LURANTIS', 'MORELULL', 'SHIINOTIC', 'SALANDIT', 'SALAZZLE', 'STUFFUL', 'BEWEAR', 'BOUNSWEET', 'STEENEE', 'TSAREENA', 'COMFEY', 'ORANGURU', 'PASSIMIAN', 'WIMPOD', 'GOLISOPOD', 'SANDYGAST', 'PALOSSAND', 'PYUKUMUKU', 'SILVALLY', 'MINIOR', 'KOMALA', 'TURTONATOR', 'TOGEDEMARU', 'MIMIKYU', 'BRUXISH', 'DRAMPA', 'DHELMISE', 'COSMOG', 'COSMOEM', 'SOLGALEO', 'LUNALA', 'NIHILEGO', 'BUZZWOLE', 'PHEROMOSA', 'XURKITREE', 'CELESTEELA', 'KARTANA', 'GUZZLORD', 'NECROZMA', 'MAGEARNA']
let palabraFinal = palabras[Math.floor(Math.random() * palabras.length)];
let intentos = 6;
let historialAdivinanzas = [];

// Defino la función que se ejecuta cuando se carga la página

document.addEventListener("DOMContentLoaded", () => {
  // Obtiene el valor de 'letters' desde los parámetros de la URL para establecer el número de letras de la palabra
  const urlParams = new URLSearchParams(window.location.search);
  const letters = urlParams.get("letters");

  // Actualiza el valor de "maxlength" del campo de entrada según el valor de "letters"

  if (letters) {
    const matchingWords = palabras.filter((palabra) => palabra.length === parseInt(letters));

    if (matchingWords.length > 0) {
      palabraFinal = matchingWords[Math.floor(Math.random() * matchingWords.length)];
    } else {
      alert(`No se encontraron palabras de ${letters} letras.`);
    }
  }

  // Defino las variables de las imágenes

  //const imagenPokemonSolucion = document.getElementById("solucion");
  const imagenPokemonSilueta = document.getElementById("silueta");
  const imagenPokemonBorrosaColor = document.getElementById("borrosa-color");
  const imagenPokemonBorrosa = document.getElementById("borrosa");
  const imagenPokemonMuyBorrosa = document.getElementById("muy-borrosa");

  // Defino las rutas de las imágenes

  // imagenPokemonSolucion.src = `data/solucion_pokemon/${palabraFinal}.png`;
  imagenPokemonSilueta.src = `data/siluetas_pokemon/${palabraFinal}.png`;
  imagenPokemonBorrosaColor.src = `data/siluetas_colores_borrosas/${palabraFinal}.png`;
  imagenPokemonBorrosa.src = `data/siluetas_grises_borrosas/${palabraFinal}.png`;
  imagenPokemonMuyBorrosa.src = `data/siluetas_grises_muy_borrosas/${palabraFinal}.png`;

  // Oculto las imágenes

  imagenPokemonSilueta.style.display = "none";
  // imagenPokemonSolucion.style.display = "none";
  imagenPokemonBorrosaColor.style.display = "none";
  imagenPokemonBorrosa.style.display = "none";
  imagenPokemonMuyBorrosa.style.display = "none";

  // Ejecuto la función jugar al hacer click en el botón "Submit"

  document.getElementById("submit").addEventListener("click", () => {
    jugar();
  });

  // Obtengo la referencia al campo de entrada

  const intento_palabra = document.getElementById("guess");

  // Ejecuto la función jugar al presionar la tecla "Enter"

  intento_palabra.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      jugar();
    }
  });

  // Defino la función principal del juego

  function jugar() {
    // Si el número de letras de la palabra es diferente al número de letras del campo de entrada, muestra una alerta

    if (intento_palabra.value.length !== palabraFinal.length) {
      alert(`Debes ingresar una palabra de ${palabraFinal.length} letras.`);
      return;
    }

    // Pongo la palabra en mayúsculas además establezco el campo de entrada en blanco y defino la variable mostrarLetra

    const guess = intento_palabra.value.toUpperCase();
    intento_palabra.value = "";
    let mostrarLetra = "";

    // Compruebo que la palabra pertenece a la lista de palabras

    if (!palabras.includes(guess)) {
      alert("Esa palabra no está en la lista.");
      return;
    }

    // Creo un set para las letras correctas y otro para las incorrectas

    const LetrasCorrectas = new Set();
    const LetrasIncorrectas = new Set();

    // Establezco el bucle para comprobar si la letra está en la palabra
    for (let i = 0; i < palabraFinal.length; i++) {

      // Si la letra está en la palabra, la añado al set de letras correctas y la muestro en verde

      if (palabraFinal[i] === guess[i]) {
        mostrarLetra += `<span class="letter green">${guess[i]}</span>`;
        LetrasCorrectas.add(guess[i]);
      }
      // Si no, la añado al set de letras incorrectas y la muestro en rojo

      else {
        mostrarLetra += `<span class="letter red">${guess[i]}</span>`;
        if (palabraFinal.includes(guess[i])) {
          LetrasIncorrectas.add(guess[i]);
        }
      }
    }

    // Compruebo si la letra está en la palabra pero no en la posición correcta y la muestro en amarillo
    for (let i = 0; i < palabraFinal.length; i++) {
      if (!LetrasCorrectas.has(guess[i]) && LetrasIncorrectas.has(guess[i])) {
        mostrarLetra = mostrarLetra.replace(`<span class="letter red">${guess[i]}</span>`, `<span class="letter yellow">${guess[i]}</span>`);
      }
    }

    // Ahora creo un div para cada adivinanza y lo añado al historial de adivinanzas insertando el div en el div con el id "guess-history" y un salto de línea al final de cada adivinanza en el historial

    const guessDiv = document.createElement("div");
    guessDiv.innerHTML = mostrarLetra;
    document.getElementById("guess-history").appendChild(guessDiv);
    const br = document.createElement("br");
    document.getElementById("guess-history").appendChild(br);

    // Resto un intento y actualizo el número de intentos restantes

    intentos--;
    document.getElementById("attempts").textContent = intentos;

    // Muestro una imagen a modo de pista según el número de intentos restantes

    if (intentos === 5) {
      imagenPokemonSilueta.style.display = "block";
    }
    if (intentos === 4) {
      imagenPokemonSilueta.style.display = "none";
      imagenPokemonMuyBorrosa.style.display = "block";
    }
    if (intentos === 3) {
      imagenPokemonMuyBorrosa.style.display = "none";
      imagenPokemonBorrosa.style.display = "block";
    }
    if (intentos === 2) {
      imagenPokemonBorrosa.style.display = "none";
      imagenPokemonBorrosaColor.style.display = "block";
    }
    if (intentos === 1) {
      imagenPokemonBorrosaColor.style.display = "none";
      imagenPokemonSolucion.style.display = "block";
    }
    if (intentos >= 0 && palabraFinal === guess) {

      // Muestro el mensaje de victoria, oculto el botón de enviar y muestro el botón de volver a jugar para redirigir a la página "index.html"

      document.getElementById("mensaje-victoria").style.display = "block";
      const victoria = document.createElement("div");
      victoria.innerHTML = "¡Has ganado!";
      document.getElementById("submit").style.display = "none";
      document.getElementById("volver-a-jugar").style.display = "block";
      const volverAJugarButton = document.getElementById('volver-a-jugar');

      volverAJugarButton.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }

    // si el jugador falla en el último intento, muestra la palabra de solución

    else if (intentos === 0 && palabraFinal !== guess) {
      // Muestro el mensaje de derrota, oculto el botón de enviar y muestro el botón de volver a jugar para redirigir a la página "index.html"

      var solucionElement = document.getElementById("solucion");
      var palabraSolucion = palabraFinal;
      solucionElement.innerHTML = palabraSolucion;
      document.getElementById("submit").style.display = "none";
      document.getElementById("volver-a-jugar").style.display = "block";
      const volverAJugarButton = document.getElementById('volver-a-jugar');

      volverAJugarButton.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }
  }
});


