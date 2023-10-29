const palabras = ['BULBASAUR', 'IVYSAUR', 'VENUSAUR', 'CHARMANDER', 'CHARMELEON', 'CHARIZARD', 'SQUIRTLE', 'WARTORTLE', 'BLASTOISE', 'CATERPIE', 'METAPOD', 'BUTTERFREE', 'WEEDLE', 'KAKUNA', 'BEEDRILL', 'PIDGEY', 'PIDGEOTTO', 'PIDGEOT', 'RATTATA', 'RATICATE', 'SPEAROW', 'FEAROW', 'EKANS', 'ARBOK', 'PIKACHU', 'RAICHU', 'SANDSHREW', 'SANDSLASH', 'NIDORINA', 'NIDOQUEEN', 'NIDORINO', 'NIDOKING', 'CLEFAIRY', 'CLEFABLE', 'VULPIX', 'NINETALES', 'JIGGLYPUFF', 'WIGGLYTUFF', 'ZUBAT', 'GOLBAT', 'ODDISH', 'GLOOM', 'VILEPLUME', 'PARAS', 'PARASECT', 'VENONAT', 'VENOMOTH', 'DIGLETT', 'DUGTRIO', 'MEOWTH', 'PERSIAN', 'PSYDUCK', 'GOLDUCK', 'MANKEY', 'PRIMEAPE', 'GROWLITHE', 'ARCANINE', 'POLIWAG', 'POLIWHIRL', 'POLIWRATH', 'ABRA', 'KADABRA', 'ALAKAZAM', 'MACHOP', 'MACHOKE', 'MACHAMP', 'BELLSPROUT', 'WEEPINBELL', 'VICTREEBEL', 'TENTACOOL', 'TENTACRUEL', 'GEODUDE', 'GRAVELER', 'GOLEM', 'PONYTA', 'RAPIDASH', 'SLOWPOKE', 'SLOWBRO', 'MAGNEMITE', 'MAGNETON', , 'DODUO', 'DODRIO', 'SEEL', 'DEWGONG', 'GRIMER', 'SHELLDER', 'CLOYSTER', 'GASTLY', 'HAUNTER', 'GENGAR', 'ONIX', 'DROWZEE', 'HYPNO', 'KRABBY', 'KINGLER', 'VOLTORB', 'ELECTRODE', 'EXEGGCUTE', 'EXEGGUTOR', 'CUBONE', 'MAROWAK', 'HITMONLEE', 'HITMONCHAN', 'LICKITUNG', 'KOFFING', 'WEEZING', 'RHYHORN', 'RHYDON', 'CHANSEY', 'TANGELA', 'KANGASKHAN', 'HORSEA', 'SEADRA', 'GOLDEEN', 'SEAKING', 'STARYU', 'STARMIE', 'SCYTHER', 'JYNX', 'ELECTABUZZ', 'MAGMAR', 'PINSIR', 'TAUROS', 'MAGIKARP', 'GYARADOS', 'LAPRAS', 'DITTO', 'EEVEE', 'VAPOREON', 'JOLTEON', 'FLAREON', 'PORYGON', 'OMANYTE', 'OMASTAR', 'KABUTO', 'KABUTOPS', 'AERODACTYL', 'SNORLAX', 'ARTICUNO', 'ZAPDOS', 'MOLTRES', 'DRATINI', 'DRAGONAIR', 'DRAGONITE', 'MEWTWO', 'CHIKORITA', 'BAYLEEF', 'MEGANIUM', 'CYNDAQUIL', 'QUILAVA', 'TYPHLOSION', 'TOTODILE', 'CROCONAW', 'FERALIGATR', 'SENTRET', 'FURRET', 'HOOTHOOT', 'NOCTOWL', 'LEDYBA', 'LEDIAN', 'SPINARAK', 'ARIADOS', 'CROBAT', 'CHINCHOU', 'LANTURN', 'PICHU', 'CLEFFA', 'IGGLYBUFF', 'TOGEPI', 'TOGETIC', 'NATU', 'XATU', 'MAREEP', 'FLAAFFY', 'AMPHAROS', 'BELLOSSOM', 'MARILL', 'AZUMARILL', 'SUDOWOODO', 'POLITOED', 'HOPPIP', 'SKIPLOOM', 'JUMPLUFF', 'AIPOM', 'SUNKERN', 'SUNFLORA', 'YANMA', 'WOOPER', 'QUAGSIRE', 'ESPEON', 'UMBREON', 'MURKROW', 'SLOWKING', 'MISDREAVUS', 'UNOWN', 'WOBBUFFET', 'GIRAFARIG', 'PINECO', 'FORRETRESS', 'DUNSPARCE', 'GLIGAR', 'STEELIX', 'SNUBBULL', 'GRANBULL', 'QWILFISH', 'SCIZOR', 'SHUCKLE', 'HERACROSS', 'SNEASEL', 'TEDDIURSA', 'URSARING', 'SLUGMA', 'MAGCARGO', 'SWINUB', 'PILOSWINE', 'CORSOLA', 'REMORAID', 'OCTILLERY', 'DELIBIRD', 'MANTINE', 'SKARMORY', 'HOUNDOUR', 'HOUNDOOM', 'KINGDRA', 'PHANPY', 'DONPHAN', 'PORYGON2', 'STANTLER', 'SMEARGLE', 'TYROGUE', 'HITMONTOP', 'SMOOCHUM', 'ELEKID', 'MAGBY', 'MILTANK', 'BLISSEY', 'RAIKOU', 'ENTEI', 'SUICUNE', 'LARVITAR', 'PUPITAR', 'TYRANITAR', 'LUGIA', 'CELEBI', 'TREECKO', 'GROVYLE', 'SCEPTILE', 'TORCHIC', 'COMBUSKEN', 'BLAZIKEN', 'MUDKIP', 'MARSHTOMP', 'SWAMPERT', 'POOCHYENA', 'MIGHTYENA', 'ZIGZAGOON', 'LINOONE', 'WURMPLE', 'SILCOON', 'BEAUTIFLY', 'CASCOON', 'DUSTOX', 'LOTAD', 'LOMBRE', 'LUDICOLO', 'SEEDOT', 'NUZLEAF', 'SHIFTRY', 'TAILLOW', 'SWELLOW', 'WINGULL', 'PELIPPER', 'RALTS', 'KIRLIA', 'GARDEVOIR', 'SURSKIT', 'MASQUERAIN', 'SHROOMISH', 'BRELOOM', 'SLAKOTH', 'VIGOROTH', 'SLAKING', 'NINCADA', 'NINJASK', 'SHEDINJA', 'WHISMUR', 'LOUDRED', 'EXPLOUD', 'MAKUHITA', 'HARIYAMA', 'AZURILL', 'NOSEPASS', 'SKITTY', 'DELCATTY', 'SABLEYE', 'MAWILE', 'ARON', 'LAIRON', 'AGGRON', 'MEDITITE', 'MEDICHAM', 'ELECTRIKE', 'MANECTRIC', 'PLUSLE', 'MINUN', 'VOLBEAT', 'ILLUMISE', 'ROSELIA', 'GULPIN', 'SWALOT', 'CARVANHA', 'SHARPEDO', 'WAILMER', 'WAILORD', 'NUMEL', 'CAMERUPT', 'TORKOAL', 'SPOINK', 'GRUMPIG', 'SPINDA', 'TRAPINCH', 'VIBRAVA', 'FLYGON', 'CACNEA', 'CACTURNE', 'SWABLU', 'ALTARIA', 'ZANGOOSE', 'SEVIPER', 'LUNATONE', 'SOLROCK', 'BARBOACH', 'WHISCASH', 'CORPHISH', 'CRAWDAUNT', 'BALTOY', 'CLAYDOL', 'LILEEP', 'CRADILY', 'ANORITH', 'ARMALDO', 'FEEBAS', 'MILOTIC', 'CASTFORM', 'KECLEON', 'SHUPPET', 'BANETTE', 'DUSKULL', 'DUSCLOPS', 'TROPIUS', 'CHIMECHO', 'ABSOL', 'WYNAUT', 'SNORUNT', 'GLALIE', 'SPHEAL', 'SEALEO', 'WALREIN', 'CLAMPERL', 'HUNTAIL', 'GOREBYSS', 'RELICANTH', 'LUVDISC', 'BAGON', 'SHELGON', 'SALAMENCE', 'BELDUM', 'METANG', 'METAGROSS', 'REGIROCK', 'REGICE', 'REGISTEEL', 'LATIAS', 'LATIOS', 'KYOGRE', 'GROUDON', 'RAYQUAZA', 'JIRACHI', 'DEOXYS', 'TURTWIG', 'GROTLE', 'TORTERRA', 'CHIMCHAR', 'MONFERNO', 'INFERNAPE', 'PIPLUP', 'PRINPLUP', 'EMPOLEON', 'STARLY', 'STARAVIA', 'STARAPTOR', 'BIDOOF', 'BIBAREL', 'KRICKETOT', 'KRICKETUNE', 'SHINX', 'LUXIO', 'LUXRAY', 'BUDEW', 'ROSERADE', 'CRANIDOS', 'RAMPARDOS', 'SHIELDON', 'BASTIODON', 'BURMY', 'WORMADAM', 'MOTHIM', 'COMBEE', 'VESPIQUEN', 'PACHIRISU', 'BUIZEL', 'FLOATZEL', 'CHERUBI', 'CHERRIM', 'SHELLOS', 'GASTRODON', 'AMBIPOM', 'DRIFLOON', 'DRIFBLIM', 'BUNEARY', 'LOPUNNY', 'MISMAGIUS', 'HONCHKROW', 'GLAMEOW', 'PURUGLY', 'CHINGLING', 'STUNKY', 'SKUNTANK', 'BRONZOR', 'BRONZONG', 'BONSLY', 'HAPPINY', 'CHATOT', 'SPIRITOMB', 'GIBLE', 'GABITE', 'GARCHOMP', 'MUNCHLAX', 'RIOLU', 'LUCARIO', 'HIPPOPOTAS', 'HIPPOWDON', 'SKORUPI', 'DRAPION', 'CROAGUNK', 'TOXICROAK', 'CARNIVINE', 'FINNEON', 'LUMINEON', 'MANTYKE', 'SNOVER', 'ABOMASNOW', 'WEAVILE', 'MAGNEZONE', 'LICKILICKY', 'RHYPERIOR', 'TANGROWTH', 'ELECTIVIRE', 'MAGMORTAR', 'TOGEKISS', 'YANMEGA', 'LEAFEON', 'GLACEON', 'GLISCOR', 'MAMOSWINE', 'GALLADE', 'PROBOPASS', 'DUSKNOIR', 'FROSLASS', 'ROTOM', 'UXIE', 'MESPRIT', 'AZELF', 'DIALGA', 'PALKIA', 'HEATRAN', 'REGIGIGAS', 'GIRATINA', 'CRESSELIA', 'PHIONE', 'MANAPHY', 'DARKRAI', 'SHAYMIN', 'ARCEUS', 'VICTINI', 'SNIVY', 'SERVINE', 'SERPERIOR', 'TEPIG', 'PIGNITE', 'EMBOAR', 'OSHAWOTT', 'DEWOTT', 'SAMUROTT', 'PATRAT', 'WATCHOG', 'LILLIPUP', 'HERDIER', 'STOUTLAND', 'PURRLOIN', 'LIEPARD', 'PANSAGE', 'SIMISAGE', 'PANSEAR', 'SIMISEAR', 'PANPOUR', 'SIMIPOUR', 'MUNNA', 'MUSHARNA', 'PIDOVE', 'TRANQUILL', 'UNFEZANT', 'BLITZLE', 'ZEBSTRIKA', 'ROGGENROLA', 'BOLDORE', 'GIGALITH', 'WOOBAT', 'SWOOBAT', 'DRILBUR', 'EXCADRILL', 'AUDINO', 'TIMBURR', 'GURDURR', 'CONKELDURR', 'TYMPOLE', 'PALPITOAD', 'SEISMITOAD', 'THROH', 'SAWK', 'SEWADDLE', 'SWADLOON', 'LEAVANNY', 'VENIPEDE', 'WHIRLIPEDE', 'SCOLIPEDE', 'COTTONEE', 'WHIMSICOTT', 'PETILIL', 'LILLIGANT', 'BASCULIN', 'SANDILE', 'KROKOROK', 'KROOKODILE', 'DARUMAKA', 'DARMANITAN', 'MARACTUS', 'DWEBBLE', 'CRUSTLE', 'SCRAGGY', 'SCRAFTY', 'SIGILYPH', 'YAMASK', 'COFAGRIGUS', 'TIRTOUGA', 'CARRACOSTA', 'ARCHEN', 'ARCHEOPS', 'TRUBBISH', 'GARBODOR', 'ZORUA', 'ZOROARK', 'MINCCINO', 'CINCCINO', 'GOTHITA', 'GOTHORITA', 'GOTHITELLE', 'SOLOSIS', 'DUOSION', 'REUNICLUS', 'DUCKLETT', 'SWANNA', 'VANILLITE', 'VANILLISH', 'VANILLUXE', 'DEERLING', 'SAWSBUCK', 'EMOLGA', 'KARRABLAST', 'ESCAVALIER', 'FOONGUS', 'AMOONGUSS', 'FRILLISH', 'JELLICENT', 'ALOMOMOLA', 'JOLTIK', 'GALVANTULA', 'FERROSEED', 'FERROTHORN', 'KLINK', 'KLANG', 'KLINKLANG', 'TYNAMO', 'EELEKTRIK', 'EELEKTROSS', 'ELGYEM', 'BEHEEYEM', 'LITWICK', 'LAMPENT', 'CHANDELURE', 'AXEW', 'FRAXURE', 'HAXORUS', 'CUBCHOO', 'BEARTIC', 'CRYOGONAL', 'SHELMET', 'ACCELGOR', 'STUNFISK', 'MIENFOO', 'MIENSHAO', 'DRUDDIGON', 'GOLETT', 'GOLURK', 'PAWNIARD', 'BISHARP', 'BOUFFALANT', 'RUFFLET', 'BRAVIARY', 'VULLABY', 'MANDIBUZZ', 'HEATMOR', 'DURANT', 'DEINO', 'ZWEILOUS', 'HYDREIGON', 'LARVESTA', 'VOLCARONA', 'COBALION', 'TERRAKION', 'VIRIZION', 'TORNADUS', 'THUNDURUS', 'RESHIRAM', 'ZEKROM', 'LANDORUS', 'KYUREM', 'KELDEO', 'MELOETTA', 'GENESECT', 'CHESPIN', 'QUILLADIN', 'CHESNAUGHT', 'FENNEKIN', 'BRAIXEN', 'DELPHOX', 'FROAKIE', 'FROGADIER', 'GRENINJA', 'BUNNELBY', 'DIGGERSBY', 'FLETCHLING', 'FLETCHINDER', 'TALONFLAME', 'SCATTERBUG', 'SPEWPA', 'VIVILLON', 'LITLEO', 'PYROAR', 'FLABEBE', 'FLOETTE', 'FLORGES', 'SKIDDO', 'GOGOAT', 'PANCHAM', 'PANGORO', 'FURFROU', 'ESPURR', 'MEOWSTIC', 'HONEDGE', 'DOUBLADE', 'AEGISLASH', 'SPRITZEE', 'AROMATISSE', 'SWIRLIX', 'SLURPUFF', 'INKAY', 'MALAMAR', 'BINACLE', 'BARBARACLE', 'SKRELP', 'DRAGALGE', 'CLAUNCHER', 'CLAWITZER', 'HELIOPTILE', 'HELIOLISK', 'TYRUNT', 'TYRANTRUM', 'AMAURA', 'AURORUS', 'SYLVEON', 'HAWLUCHA', 'DEDENNE', 'CARBINK', 'GOOMY', 'SLIGGOO', 'GOODRA', 'KLEFKI', 'PHANTUMP', 'TREVENANT', 'PUMPKABOO', 'GOURGEIST', 'BERGMITE', 'AVALUGG', 'NOIBAT', 'NOIVERN', 'XERNEAS', 'YVELTAL', 'ZYGARDE', 'DIANCIE', 'HOOPA', 'VOLCANION', 'ROWLET', 'DARTRIX', 'DECIDUEYE', 'LITTEN', 'TORRACAT', 'INCINEROAR', 'POPPLIO', 'BRIONNE', 'PRIMARINA', 'PIKIPEK', 'TRUMBEAK', 'TOUCANNON', 'YUNGOOS', 'GUMSHOOS', 'GRUBBIN', 'CHARJABUG', 'VIKAVOLT', 'CRABRAWLER', 'CRABOMINABLE', 'ORICORIO', 'CUTIEFLY', 'RIBOMBEE', 'ROCKRUFF', 'LYCANROC', 'WISHIWASHI', 'MAREANIE', 'TOXAPEX', 'MUDBRAY', 'MUDSDALE', 'DEWPIDER', 'ARAQUANID', 'FOMANTIS', 'LURANTIS', 'MORELULL', 'SHIINOTIC', 'SALANDIT', 'SALAZZLE', 'STUFFUL', 'BEWEAR', 'BOUNSWEET', 'STEENEE', 'TSAREENA', 'COMFEY', 'ORANGURU', 'PASSIMIAN', 'WIMPOD', 'GOLISOPOD', 'SANDYGAST', 'PALOSSAND', 'PYUKUMUKU', 'SILVALLY', 'MINIOR', 'KOMALA', 'TURTONATOR', 'TOGEDEMARU', 'MIMIKYU', 'BRUXISH', 'DRAMPA', 'DHELMISE', 'COSMOG', 'COSMOEM', 'SOLGALEO', 'LUNALA', 'NIHILEGO', 'BUZZWOLE', 'PHEROMOSA', 'XURKITREE', 'CELESTEELA', 'KARTANA', 'GUZZLORD', 'NECROZMA', 'MAGEARNA']
let palabraFinal = palabras[Math.floor(Math.random() * palabras.length)];
let intentos = 6;
let historialAdivinanzas = [];

document.addEventListener("DOMContentLoaded", () => {
  // Obtén el valor de 'letters' desde los parámetros de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const letters = urlParams.get("letters");


  if (letters) {
    const matchingWords = palabras.filter((palabra) => palabra.length === parseInt(letters));

    if (matchingWords.length > 0) {
      palabraFinal = matchingWords[Math.floor(Math.random() * matchingWords.length)];
    } else {
      alert(`No se encontraron palabras de ${letters} letras.`);
    }
  }
  console.log(palabraFinal);
  // Agrega el código para cargar la imagen del Pokémon al inicio del juego
  const pokemonImage = document.getElementById("pokemon-image");
  pokemonImage.src = `data/imagenes_pokemon/${palabraFinal}.png`;
  pokemonImage.style.display = "none";  // Inicialmente, oculta la imagen

  document.getElementById("submit").addEventListener("click", () => {
    jugar();
  });

  const guessInput = document.getElementById("guess");

  // Agregar un evento al presionar la tecla "Enter" en el campo de entrada
  guessInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      jugar();
    }
  });

  function jugar() {
    if (guessInput.value.length !== palabraFinal.length) {
      alert(`Debes ingresar una palabra de ${palabraFinal.length} letras.`);
      return;
    }

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
    // Inserta un salto de línea al final de cada adivinanza en el historial
    const br = document.createElement("br");
    document.getElementById("guess-history").appendChild(br);

    intentos--;
    document.getElementById("attempts").textContent = intentos;
    if (intentos >= 0 && palabraFinal === guess) {
      //añade un mensaje de victoria
      document.getElementById("mensaje-victoria").style.display = "block";
      const victoria = document.createElement("div");
      victoria.innerHTML = "¡Has ganado!";
      //añade la imagen del pokemon
      pokemonImage.style.display = "block";
      //añade el botón de volver a jugar
      //ahora haz que no puedas seguir jugando
      document.getElementById("submit").style.display = "none";
      pokemonImage.style.display = "block";
      // Haz que aparezca el botón de volver a jugar
      document.getElementById("volver-a-jugar").style.display = "block";
      const volverAJugarButton = document.getElementById('volver-a-jugar');
      volverAJugarButton.addEventListener('click', () => {
        // Redirige a la página "index.html"
        window.location.href = 'index.html';
      });
    }
    // si el jugador falla en el último intento, muestra la palabra de solución
    else if (intentos === 0 && palabraFinal !== guess) {
      // Obtén la referencia al elemento <span> con el id "solucion"
      var solucionElement = document.getElementById("solucion");

      // Obtén la palabra de solución de tu variable palabraFinal
      var palabraSolucion = palabraFinal;

      // Inserta la palabra de solución en el elemento <span>
      solucionElement.innerHTML = palabraSolucion;
      //ahora haz que no puedas seguir jugando
      document.getElementById("submit").style.display = "none";
      pokemonImage.style.display = "block";
      // Haz que aparezca el botón de volver a jugar
      document.getElementById("volver-a-jugar").style.display = "block";
      const volverAJugarButton = document.getElementById('volver-a-jugar');
      volverAJugarButton.addEventListener('click', () => {
        // Redirige a la página "index.html"
        window.location.href = 'index.html';
      });
    }
  }
});

