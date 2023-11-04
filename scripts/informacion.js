
// Establezco las varibles encargadas de la lógica del juego

const palabras = ['BULBASAUR', 'IVYSAUR', 'VENUSAUR', 'CHARMANDER', 'CHARMELEON', 'CHARIZARD', 'SQUIRTLE', 'WARTORTLE', 'BLASTOISE', 'CATERPIE', 'METAPOD', 'BUTTERFREE', 'WEEDLE', 'KAKUNA', 'BEEDRILL', 'PIDGEY', 'PIDGEOTTO', 'PIDGEOT', 'RATTATA', 'RATICATE', 'SPEAROW', 'FEAROW', 'EKANS', 'ARBOK', 'PIKACHU', 'RAICHU', 'SANDSHREW', 'SANDSLASH', 'NIDORINA', 'NIDOQUEEN', 'NIDORINO', 'NIDOKING', 'CLEFAIRY', 'CLEFABLE', 'VULPIX', 'NINETALES', 'JIGGLYPUFF', 'WIGGLYTUFF', 'ZUBAT', 'GOLBAT', 'ODDISH', 'GLOOM', 'VILEPLUME', 'PARAS', 'PARASECT', 'VENONAT', 'VENOMOTH', 'DIGLETT', 'DUGTRIO', 'MEOWTH', 'PERSIAN', 'PSYDUCK', 'GOLDUCK', 'MANKEY', 'PRIMEAPE', 'GROWLITHE', 'ARCANINE', 'POLIWAG', 'POLIWHIRL', 'POLIWRATH', 'ABRA', 'KADABRA', 'ALAKAZAM', 'MACHOP', 'MACHOKE', 'MACHAMP', 'BELLSPROUT', 'WEEPINBELL', 'VICTREEBEL', 'TENTACOOL', 'TENTACRUEL', 'GEODUDE', 'GRAVELER', 'GOLEM', 'PONYTA', 'RAPIDASH', 'SLOWPOKE', 'SLOWBRO', 'MAGNEMITE', 'MAGNETON', , 'DODUO', 'DODRIO', 'SEEL', 'DEWGONG', 'GRIMER', 'SHELLDER', 'CLOYSTER', 'GASTLY', 'HAUNTER', 'GENGAR', 'ONIX', 'DROWZEE', 'HYPNO', 'KRABBY', 'KINGLER', 'VOLTORB', 'ELECTRODE', 'EXEGGCUTE', 'EXEGGUTOR', 'CUBONE', 'MAROWAK', 'HITMONLEE', 'HITMONCHAN', 'LICKITUNG', 'KOFFING', 'WEEZING', 'RHYHORN', 'RHYDON', 'CHANSEY', 'TANGELA', 'KANGASKHAN', 'HORSEA', 'SEADRA', 'GOLDEEN', 'SEAKING', 'STARYU', 'STARMIE', 'SCYTHER', 'JYNX', 'ELECTABUZZ', 'MAGMAR', 'PINSIR', 'TAUROS', 'MAGIKARP', 'GYARADOS', 'LAPRAS', 'DITTO', 'EEVEE', 'VAPOREON', 'JOLTEON', 'FLAREON', 'PORYGON', 'OMANYTE', 'OMASTAR', 'KABUTO', 'KABUTOPS', 'AERODACTYL', 'SNORLAX', 'ARTICUNO', 'ZAPDOS', 'MOLTRES', 'DRATINI', 'DRAGONAIR', 'DRAGONITE', 'MEWTWO', 'CHIKORITA', 'BAYLEEF', 'MEGANIUM', 'CYNDAQUIL', 'QUILAVA', 'TYPHLOSION', 'TOTODILE', 'CROCONAW', 'FERALIGATR', 'SENTRET', 'FURRET', 'HOOTHOOT', 'NOCTOWL', 'LEDYBA', 'LEDIAN', 'SPINARAK', 'ARIADOS', 'CROBAT', 'CHINCHOU', 'LANTURN', 'PICHU', 'CLEFFA', 'IGGLYBUFF', 'TOGEPI', 'TOGETIC', 'NATU', 'XATU', 'MAREEP', 'FLAAFFY', 'AMPHAROS', 'BELLOSSOM', 'MARILL', 'AZUMARILL', 'SUDOWOODO', 'POLITOED', 'HOPPIP', 'SKIPLOOM', 'JUMPLUFF', 'AIPOM', 'SUNKERN', 'SUNFLORA', 'YANMA', 'WOOPER', 'QUAGSIRE', 'ESPEON', 'UMBREON', 'MURKROW', 'SLOWKING', 'MISDREAVUS', 'UNOWN', 'WOBBUFFET', 'GIRAFARIG', 'PINECO', 'FORRETRESS', 'DUNSPARCE', 'GLIGAR', 'STEELIX', 'SNUBBULL', 'GRANBULL', 'QWILFISH', 'SCIZOR', 'SHUCKLE', 'HERACROSS', 'SNEASEL', 'TEDDIURSA', 'URSARING', 'SLUGMA', 'MAGCARGO', 'SWINUB', 'PILOSWINE', 'CORSOLA', 'REMORAID', 'OCTILLERY', 'DELIBIRD', 'MANTINE', 'SKARMORY', 'HOUNDOUR', 'HOUNDOOM', 'KINGDRA', 'PHANPY', 'DONPHAN', 'PORYGON2', 'STANTLER', 'SMEARGLE', 'TYROGUE', 'HITMONTOP', 'SMOOCHUM', 'ELEKID', 'MAGBY', 'MILTANK', 'BLISSEY', 'RAIKOU', 'ENTEI', 'SUICUNE', 'LARVITAR', 'PUPITAR', 'TYRANITAR', 'LUGIA', 'CELEBI', 'TREECKO', 'GROVYLE', 'SCEPTILE', 'TORCHIC', 'COMBUSKEN', 'BLAZIKEN', 'MUDKIP', 'MARSHTOMP', 'SWAMPERT', 'POOCHYENA', 'MIGHTYENA', 'ZIGZAGOON', 'LINOONE', 'WURMPLE', 'SILCOON', 'BEAUTIFLY', 'CASCOON', 'DUSTOX', 'LOTAD', 'LOMBRE', 'LUDICOLO', 'SEEDOT', 'NUZLEAF', 'SHIFTRY', 'TAILLOW', 'SWELLOW', 'WINGULL', 'PELIPPER', 'RALTS', 'KIRLIA', 'GARDEVOIR', 'SURSKIT', 'MASQUERAIN', 'SHROOMISH', 'BRELOOM', 'SLAKOTH', 'VIGOROTH', 'SLAKING', 'NINCADA', 'NINJASK', 'SHEDINJA', 'WHISMUR', 'LOUDRED', 'EXPLOUD', 'MAKUHITA', 'HARIYAMA', 'AZURILL', 'NOSEPASS', 'SKITTY', 'DELCATTY', 'SABLEYE', 'MAWILE', 'ARON', 'LAIRON', 'AGGRON', 'MEDITITE', 'MEDICHAM', 'ELECTRIKE', 'MANECTRIC', 'PLUSLE', 'MINUN', 'VOLBEAT', 'ILLUMISE', 'ROSELIA', 'GULPIN', 'SWALOT', 'CARVANHA', 'SHARPEDO', 'WAILMER', 'WAILORD', 'NUMEL', 'CAMERUPT', 'TORKOAL', 'SPOINK', 'GRUMPIG', 'SPINDA', 'TRAPINCH', 'VIBRAVA', 'FLYGON', 'CACNEA', 'CACTURNE', 'SWABLU', 'ALTARIA', 'ZANGOOSE', 'SEVIPER', 'LUNATONE', 'SOLROCK', 'BARBOACH', 'WHISCASH', 'CORPHISH', 'CRAWDAUNT', 'BALTOY', 'CLAYDOL', 'LILEEP', 'CRADILY', 'ANORITH', 'ARMALDO', 'FEEBAS', 'MILOTIC', 'CASTFORM', 'KECLEON', 'SHUPPET', 'BANETTE', 'DUSKULL', 'DUSCLOPS', 'TROPIUS', 'CHIMECHO', 'ABSOL', 'WYNAUT', 'SNORUNT', 'GLALIE', 'SPHEAL', 'SEALEO', 'WALREIN', 'CLAMPERL', 'HUNTAIL', 'GOREBYSS', 'RELICANTH', 'LUVDISC', 'BAGON', 'SHELGON', 'SALAMENCE', 'BELDUM', 'METANG', 'METAGROSS', 'REGIROCK', 'REGICE', 'REGISTEEL', 'LATIAS', 'LATIOS', 'KYOGRE', 'GROUDON', 'RAYQUAZA', 'JIRACHI', 'DEOXYS', 'TURTWIG', 'GROTLE', 'TORTERRA', 'CHIMCHAR', 'MONFERNO', 'INFERNAPE', 'PIPLUP', 'PRINPLUP', 'EMPOLEON', 'STARLY', 'STARAVIA', 'STARAPTOR', 'BIDOOF', 'BIBAREL', 'KRICKETOT', 'KRICKETUNE', 'SHINX', 'LUXIO', 'LUXRAY', 'BUDEW', 'ROSERADE', 'CRANIDOS', 'RAMPARDOS', 'SHIELDON', 'BASTIODON', 'BURMY', 'WORMADAM', 'MOTHIM', 'COMBEE', 'VESPIQUEN', 'PACHIRISU', 'BUIZEL', 'FLOATZEL', 'CHERUBI', 'CHERRIM', 'SHELLOS', 'GASTRODON', 'AMBIPOM', 'DRIFLOON', 'DRIFBLIM', 'BUNEARY', 'LOPUNNY', 'MISMAGIUS', 'HONCHKROW', 'GLAMEOW', 'PURUGLY', 'CHINGLING', 'STUNKY', 'SKUNTANK', 'BRONZOR', 'BRONZONG', 'BONSLY', 'HAPPINY', 'CHATOT', 'SPIRITOMB', 'GIBLE', 'GABITE', 'GARCHOMP', 'MUNCHLAX', 'RIOLU', 'LUCARIO', 'HIPPOPOTAS', 'HIPPOWDON', 'SKORUPI', 'DRAPION', 'CROAGUNK', 'TOXICROAK', 'CARNIVINE', 'FINNEON', 'LUMINEON', 'MANTYKE', 'SNOVER', 'ABOMASNOW', 'WEAVILE', 'MAGNEZONE', 'LICKILICKY', 'RHYPERIOR', 'TANGROWTH', 'ELECTIVIRE', 'MAGMORTAR', 'TOGEKISS', 'YANMEGA', 'LEAFEON', 'GLACEON', 'GLISCOR', 'MAMOSWINE', 'GALLADE', 'PROBOPASS', 'DUSKNOIR', 'FROSLASS', 'ROTOM', 'UXIE', 'MESPRIT', 'AZELF', 'DIALGA', 'PALKIA', 'HEATRAN', 'REGIGIGAS', 'GIRATINA', 'CRESSELIA', 'PHIONE', 'MANAPHY', 'DARKRAI', 'SHAYMIN', 'ARCEUS', 'VICTINI', 'SNIVY', 'SERVINE', 'SERPERIOR', 'TEPIG', 'PIGNITE', 'EMBOAR', 'OSHAWOTT', 'DEWOTT', 'SAMUROTT', 'PATRAT', 'WATCHOG', 'LILLIPUP', 'HERDIER', 'STOUTLAND', 'PURRLOIN', 'LIEPARD', 'PANSAGE', 'SIMISAGE', 'PANSEAR', 'SIMISEAR', 'PANPOUR', 'SIMIPOUR', 'MUNNA', 'MUSHARNA', 'PIDOVE', 'TRANQUILL', 'UNFEZANT', 'BLITZLE', 'ZEBSTRIKA', 'ROGGENROLA', 'BOLDORE', 'GIGALITH', 'WOOBAT', 'SWOOBAT', 'DRILBUR', 'EXCADRILL', 'AUDINO', 'TIMBURR', 'GURDURR', 'CONKELDURR', 'TYMPOLE', 'PALPITOAD', 'SEISMITOAD', 'THROH', 'SAWK', 'SEWADDLE', 'SWADLOON', 'LEAVANNY', 'VENIPEDE', 'WHIRLIPEDE', 'SCOLIPEDE', 'COTTONEE', 'WHIMSICOTT', 'PETILIL', 'LILLIGANT', 'BASCULIN', 'SANDILE', 'KROKOROK', 'KROOKODILE', 'DARUMAKA', 'DARMANITAN', 'MARACTUS', 'DWEBBLE', 'CRUSTLE', 'SCRAGGY', 'SCRAFTY', 'SIGILYPH', 'YAMASK', 'COFAGRIGUS', 'TIRTOUGA', 'CARRACOSTA', 'ARCHEN', 'ARCHEOPS', 'TRUBBISH', 'GARBODOR', 'ZORUA', 'ZOROARK', 'MINCCINO', 'CINCCINO', 'GOTHITA', 'GOTHORITA', 'GOTHITELLE', 'SOLOSIS', 'DUOSION', 'REUNICLUS', 'DUCKLETT', 'SWANNA', 'VANILLITE', 'VANILLISH', 'VANILLUXE', 'DEERLING', 'SAWSBUCK', 'EMOLGA', 'KARRABLAST', 'ESCAVALIER', 'FOONGUS', 'AMOONGUSS', 'FRILLISH', 'JELLICENT', 'ALOMOMOLA', 'JOLTIK', 'GALVANTULA', 'FERROSEED', 'FERROTHORN', 'KLINK', 'KLANG', 'KLINKLANG', 'TYNAMO', 'EELEKTRIK', 'EELEKTROSS', 'ELGYEM', 'BEHEEYEM', 'LITWICK', 'LAMPENT', 'CHANDELURE', 'AXEW', 'FRAXURE', 'HAXORUS', 'CUBCHOO', 'BEARTIC', 'CRYOGONAL', 'SHELMET', 'ACCELGOR', 'STUNFISK', 'MIENFOO', 'MIENSHAO', 'DRUDDIGON', 'GOLETT', 'GOLURK', 'PAWNIARD', 'BISHARP', 'BOUFFALANT', 'RUFFLET', 'BRAVIARY', 'VULLABY', 'MANDIBUZZ', 'HEATMOR', 'DURANT', 'DEINO', 'ZWEILOUS', 'HYDREIGON', 'LARVESTA', 'VOLCARONA', 'COBALION', 'TERRAKION', 'VIRIZION', 'TORNADUS', 'THUNDURUS', 'RESHIRAM', 'ZEKROM', 'LANDORUS', 'KYUREM', 'KELDEO', 'MELOETTA', 'GENESECT', 'CHESPIN', 'QUILLADIN', 'CHESNAUGHT', 'FENNEKIN', 'BRAIXEN', 'DELPHOX', 'FROAKIE', 'FROGADIER', 'GRENINJA', 'BUNNELBY', 'DIGGERSBY', 'FLETCHLING', 'FLETCHINDER', 'TALONFLAME', 'SCATTERBUG', 'SPEWPA', 'VIVILLON', 'LITLEO', 'PYROAR', 'FLABEBE', 'FLOETTE', 'FLORGES', 'SKIDDO', 'GOGOAT', 'PANCHAM', 'PANGORO', 'FURFROU', 'ESPURR', 'MEOWSTIC', 'HONEDGE', 'DOUBLADE', 'AEGISLASH', 'SPRITZEE', 'AROMATISSE', 'SWIRLIX', 'SLURPUFF', 'INKAY', 'MALAMAR', 'BINACLE', 'BARBARACLE', 'SKRELP', 'DRAGALGE', 'CLAUNCHER', 'CLAWITZER', 'HELIOPTILE', 'HELIOLISK', 'TYRUNT', 'TYRANTRUM', 'AMAURA', 'AURORUS', 'SYLVEON', 'HAWLUCHA', 'DEDENNE', 'CARBINK', 'GOOMY', 'SLIGGOO', 'GOODRA', 'KLEFKI', 'PHANTUMP', 'TREVENANT', 'PUMPKABOO', 'GOURGEIST', 'BERGMITE', 'AVALUGG', 'NOIBAT', 'NOIVERN', 'XERNEAS', 'YVELTAL', 'ZYGARDE', 'DIANCIE', 'HOOPA', 'VOLCANION', 'ROWLET', 'DARTRIX', 'DECIDUEYE', 'LITTEN', 'TORRACAT', 'INCINEROAR', 'POPPLIO', 'BRIONNE', 'PRIMARINA', 'PIKIPEK', 'TRUMBEAK', 'TOUCANNON', 'YUNGOOS', 'GUMSHOOS', 'GRUBBIN', 'CHARJABUG', 'VIKAVOLT', 'CRABRAWLER', 'CRABOMINABLE', 'ORICORIO', 'CUTIEFLY', 'RIBOMBEE', 'ROCKRUFF', 'LYCANROC', 'WISHIWASHI', 'MAREANIE', 'TOXAPEX', 'MUDBRAY', 'MUDSDALE', 'DEWPIDER', 'ARAQUANID', 'FOMANTIS', 'LURANTIS', 'MORELULL', 'SHIINOTIC', 'SALANDIT', 'SALAZZLE', 'STUFFUL', 'BEWEAR', 'BOUNSWEET', 'STEENEE', 'TSAREENA', 'COMFEY', 'ORANGURU', 'PASSIMIAN', 'WIMPOD', 'GOLISOPOD', 'SANDYGAST', 'PALOSSAND', 'PYUKUMUKU', 'SILVALLY', 'MINIOR', 'KOMALA', 'TURTONATOR', 'TOGEDEMARU', 'MIMIKYU', 'BRUXISH', 'DRAMPA', 'DHELMISE', 'COSMOG', 'COSMOEM', 'SOLGALEO', 'LUNALA', 'NIHILEGO', 'BUZZWOLE', 'PHEROMOSA', 'XURKITREE', 'CELESTEELA', 'KARTANA', 'GUZZLORD', 'NECROZMA', 'MAGEARNA']

// Me conecto al archivo JSON para obtener los datos de los Pokémon
const requestURL = 'https://diegodesantos1.github.io/Ironhack_Proyecto_Final/data/pokemon.json';

// Realizo una solicitud para obtener los datos del archivo JSON
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

// Definir el evento load para la solicitud
request.onload = function () {
    const pokemonData = request.response;

    // Definir el evento click para el botón de búsqueda
    document.getElementById("buscar").addEventListener("click", () => {
        // Obtener el valor del campo de búsqueda
        const busqueda = document.getElementById("busqueda").value.trim().toUpperCase();

        // Buscar el Pokémon por su nombre en el array

        const pokemonEncontrado = pokemonData.find(pokemon => pokemon.name.toUpperCase() === busqueda);

        // Mostrar la información del Pokémon
        if (pokemonEncontrado) {
            const informacionPokemon = document.getElementById("datos-pokemon");
            informacionPokemon.innerHTML = `
                <img src="data/soluciones/${pokemonEncontrado.name.toUpperCase()}.png" alt="${pokemonEncontrado.name.toUpperCase()}">
                <h2>${pokemonEncontrado.name}</h2>
                <p>Generación: ${pokemonEncontrado.gen}</p>
                <p>Altura: ${pokemonEncontrado.height}</p>
                <p>Peso: ${pokemonEncontrado.weight}</p>
                <p>Tipo: ${pokemonEncontrado.type}</p>
                <p>Especies: ${pokemonEncontrado.species}</p>
                <p>Habilidades: ${pokemonEncontrado.abilities}</p>
            `;
        } else {
            alert("No se encontró ningún Pokémon con ese nombre.");
        }
        // quito el texto del campo de búsqueda
        document.getElementById("busqueda").value = "";
    });
    // Definir el evento keyup para el campo de búsqueda
    document.getElementById("busqueda").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            // Obtener el valor del campo de búsqueda
            const busqueda = this.value.trim().toUpperCase();

            // Buscar el Pokémon por su nombre en el array
            const pokemonEncontrado = pokemonData.find(pokemon => pokemon.name.toUpperCase() === busqueda);

            // Mostrar la información del Pokémon
            if (pokemonEncontrado) {
                const informacionPokemon = document.getElementById("datos-pokemon");
                informacionPokemon.innerHTML = `
                <img src="data/soluciones/${pokemonEncontrado.name.toUpperCase()}.png" alt="${pokemonEncontrado.name}">
                <h2>${pokemonEncontrado.name}</h2>
                <p>Generación: ${pokemonEncontrado.gen}</p>
                <p>Altura: ${pokemonEncontrado.height}</p>
                <p>Peso: ${pokemonEncontrado.weight}</p>
                <p>Tipo: ${pokemonEncontrado.type}</p>
                <p>Especies: ${pokemonEncontrado.species}</p>
                <p>Habilidades: ${pokemonEncontrado.abilities}</p>
            `;
            } else {
                alert("No se encontró ningún Pokémon con ese nombre.");
            }
            // quito el texto del campo de búsqueda
            this.value = "";
        }
    });
};


