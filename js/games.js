const games = [
    { title: "Super Mario Bros", year: 1985, platform: "NES", image: "img/super-mario-bros.png", description: "Um clássico jogo de plataforma lateral onde Mario deve resgatar a Princesa Peach de Bowser." },
    { title: "The Legend of Zelda", year: 1986, platform: "NES", image: "img/the-legend-of-zelda.webp", description: "Um jogo de aventura de mundo aberto onde Link deve salvar Hyrule de Ganon." },
    { title: "Donkey Kong", year: 1981, platform: "Arcade", image: "img/donkey-kong.jpg", description: "Um clássico jogo de arcade onde Mario deve escalar escadas e evitar barris para resgatar Pauline de Donkey Kong." },
    { title: "Pac-Man", year: 1980, platform: "Arcade", image: "img/pac-man.jpg", description: "Um jogo de arcade baseado em labirintos onde Pac-Man deve comer todos os pontos enquanto evita os fantasmas." },
    { title: "Tetris", year: 1984, platform: "Game Boy", image: "img/tetris.jpg", description: "Um jogo de quebra-cabeça onde os jogadores devem girar e empilhar blocos que caem para criar linhas completas." },
    { title: "Metroid", year: 1986, platform: "NES", image: "img/metroid.png", description: "Um jogo de aventura de ação em plataforma lateral onde Samus Aran deve explorar um vasto mundo alienígena e derrotar Mother Brain." },
    { title: "Mega Man 2", year: 1988, platform: "NES", image: "img/mega-man-2.jpg", description: "Um plataforma onde Mega Man deve derrotar Dr. Wily e seus mestres robóticos." },
    { title: "Castlevania", year: 1986, platform: "NES", image: "img/castlevania.jpg", description: "Um jogo de aventura de ação em plataforma lateral onde Simon Belmont deve derrotar Drácula." },
    { title: "Street Fighter II", year: 1991, platform: "Arcade", image: "img/street-fighter-ii.jpg", description: "Um jogo de luta com um elenco de personagens icônicos de todo o mundo." },
    { title: "Sonic the Hedgehog", year: 1991, platform: "Sega Genesis", image: "img/sonic-the-hedgehog.jpg", description: "Um plataforma onde Sonic deve correr por níveis e derrotar Dr. Eggman." },
    { title: "Final Fantasy VII", year: 1997, platform: "PlayStation", image: "img/final-fantasy-vii.jpg", description: "Um jogo de RPG com uma história complexa e personagens memoráveis." },
    { title: "Chrono Trigger", year: 1995, platform: "SNES", image: "img/chrono-trigger.jpg", description: "Um jogo de RPG de viagem no tempo com um sistema de batalha único e uma história emocionante." },
    { title: "The Legend of Zelda: A Link to the Past", year: 1991, platform: "SNES", image: "img/a-link-to-the-past.jpg", description: "Um jogo de aventura de cima para baixo onde Link deve salvar Hyrule de Ganon." },
    { title: "Super Metroid", year: 1994, platform: "SNES", image: "img/super-metroid.jpg", description: "Um jogo de aventura de ação em plataforma lateral onde Samus Aran deve explorar um vasto mundo alienígena e derrotar Mother Brain." },
    { title: "Donkey Kong Country", year: 1994, platform: "SNES", image: "img/donkey-kong-country.jpg", description: "Um plataforma com Donkey Kong e Diddy Kong resgatando seus bananas de King K. Rool." },
    { title: "Contra", year: 1987, platform: "NES", image: "img/contra.jpg", description: "Um jogo de tiro em que dois comandos devem lutar contra hordas alienígenas." },
    { title: "Super Mario World", year: 1990, platform: "SNES", image: "img/super-mario-world.jpg", description: "Um jogo de plataforma lateral onde Mario deve resgatar a Princesa Peach de Bowser." },
    { title: "Duck Hunt", year: 1984, platform: "NES", image: "img/duck-hunt.jpg", description: "Um jogo de tiro com arma de luz onde os jogadores devem atirar em argila e patos." },
    { title: "Mega Man X", year: 1993, platform: "SNES", image: "img/mega-man-x.jpg", description: "Um plataforma onde Mega Man X deve derrotar os Maverick Hunters." },
    { title: "Double Dragon II: The Revenge", year: 1988, platform: "Arcade", image: "img/double-dragon-ii.jpg", description: "Um jogo de luta onde Billy e Jimmy Lee devem resgatar Marian do Black Shadow Clan." },
    { title: "Bubble Bobble", year: 1986, platform: "Arcade", image: "img/bubble-bobble.jpg", description: "Um jogo de plataforma e quebra-cabeça onde Bub e Bob devem resgatar seus filhos do malvado Baron Von Blubba." },
    { title: "Castlevania II: Simon's Quest", year: 1987, platform: "NES", image: "img/castlevania-ii.jpg", description: "Um jogo de aventura de cima para baixo onde Simon Belmont deve encontrar as partes da alma de Drácula." },
    { title: "Ninja Gaiden", year: 1988, platform: "NES", image: "img/ninja-gaiden.jpg", description: "Um jogo de ação em plataforma lateral onde Ryu Hayabusa deve vingar a morte de seu clã." },
    { title: "Street Fighter Alpha 3", year: 1998, platform: "Arcade", image: "img/street-fighter-alpha-3.jpg", description: "Um jogo de luta com um grande elenco de personagens da série Street Fighter." },
    { title: "EarthBound", year: 1994, platform: "SNES", image: "img/earthbound.jpg", description: "Um jogo de RPG com um humor único e uma história emocionante." },
    { title: "Punch-Out!!", year: 1987, platform: "NES", image: "img/punch-out.jpg", description: "Um jogo de boxe onde Little Mac deve derrotar uma série de oponentes desafiadores." },
    { title: "Gradius III", year: 1989, platform: "Arcade", image: "img/gradius-iii.jpg", description: "Um jogo de tiro onde os jogadores controlam uma nave espacial e devem derrotar o império alienígena." },
    { title: "R-Type", year: 1987, platform: "Arcade", image: "img/r-type.jpg", description: "Um jogo de tiro onde os jogadores controlam uma nave espacial e devem derrotar o Império Bydo." },
    { title: "The Legend of Zelda: Ocarina of Time", year: 1998, platform: "N64", image: "img/ocarina-of-time.jpg", description: "Um jogo de aventura 3D onde Link deve viajar no tempo para salvar Hyrule." },
    { title: "GoldenEye 007", year: 1997, platform: "N64", image: "img/goldeneye-007.jpg", description: "Um jogo de tiro em primeira pessoa baseado no filme de James Bond de mesmo nome." },
    { title: "Super Smash Bros.", year: 1999, platform: "N64", image: "img/super-smash-bros.jpg", description: "Um jogo de luta crossover com personagens das franquias mais populares da Nintendo." },
    { title: "Galaga", year: 1981, platform: "Arcade", image: "img/galaga.jpg", description: "Um jogo de tiro onde os jogadores controlam uma nave espacial e devem derrotar invasores alienígenas." },
    { title: "Space Invaders", year: 1978, platform: "Arcade", image: "img/space-invaders.jpg", description: "Um clássico jogo de arcade onde os jogadores controlam uma nave espacial e devem derrotar invasores alienígenas." },
    { title: "Asteroids", year: 1979, platform: "Arcade", image: "img/asteroids.jpg", description: "Um jogo de arcade espacial onde os jogadores controlam uma nave espacial e devem destruir asteroides." },
    { title: "Ms. Pac-Man", year: 1982, platform: "Arcade", image: "img/ms-pac-man.jpg", description: "Um jogo de arcade baseado em labirintos onde Ms. Pac-Man deve comer todos os pontos enquanto evita os fantasmas." },
    { title: "F-Zero", year: 1990, platform: "SNES", image: "img/f-zero.jpg", description: "Uma corrida futurista com veículos antigravidade e uma competição intensa." },
    { title: "Star Fox", year: 1993, platform: "SNES", image: "img/star-fox.jpg", description: "Um jogo de tiro em trilhos onde você controla uma nave espacial e precisa derrotar o Império de Andross." },
    { title: "Kid Icarus", year: 1987, platform: "NES", image: "img/kid-icarus.jpg", description: "Uma aventura de ação em que Pit precisa derrotar Medusa e salvar o Monte Olimpo." },
    { title: "Ice Climber", year: 1985, platform: "NES", image: "img/ice-climber.jpg", description: "Um jogo cooperativo de arcade onde dois jogadores precisam escalar montanhas geladas e derrotar o Yeti." },
    { title: "Bomberman", year: 1983, platform: "NES", image: "img/bomberman.jpg", description: "Um jogo de ação e quebra-cabeça onde você precisa usar bombas para derrotar inimigos e limpar fases." },
    { title: "Adventure Island", year: 1986, platform: "NES", image: "img/adventure-island.jpg", description: "Um plataforma onde Hiro precisa resgatar a Princesa Leilani e derrotar o vilão Rei Koopa." },
    { title: "Excitebike", year: 1984, platform: "NES", image: "img/excitebike.jpg", description: "Um jogo de corrida onde você precisa acelerar em pistas desafiadoras e evitar obstáculos." },
    { title: "Xevious", year: 1982, platform: "Arcade", image: "img/xevious.jpg", description: "Um shoot'em up onde você controla um caça e precisa derrotar o Império Zolgear." },
    { title: "Metal Slug", year: 1996, platform: "Arcade", image: "img/metal-slug.jpg", description: "Um jogo de tiro frenético com gráficos pixelados e muita ação." },
    { title: "Samurai Shodown II", year: 1994, platform: "Arcade", image: "img/samurai-shodown-ii.jpg", description: "Um jogo de luta ambientado no Japão feudal, com samurais e batalhas épicas." },
    { title: "Altered Beast", year: 1988, platform: "Sega Genesis", image: "img/altered-beast.jpg", description: "Um beat'em up onde um guerreiro grego precisa se transformar em diferentes bestas para derrotar o malvado Zeus." },
    { title: "Shining Force", year: 1992, platform: "Sega Genesis", image: "img/shining-force.jpg", description: "Um RPG tático com personagens carismáticos e batalhas épicas." },
    { title: "ToeJam & Earl", year: 1991, platform: "Sega Genesis", image: "img/toejam-earl.jpg", description: "Um plataforma com um estilo visual único e humorístico, onde dois alienígenas funk precisam encontrar sua nave espacial." },
    { title: "Sonic the Hedgehog 2", year: 1992, platform: "Sega Genesis", image: "img/sonic-the-hedgehog-2.jpg", description: "Um plataforma onde Sonic e Tails correm por fases desafiadoras e derrotam o Dr. Eggman." },
    { title: "Phantasy Star IV", year: 1993, platform: "Sega Genesis", image: "img/phantasy-star-iv.jpg", description: "Um RPG ambientado em um futuro distante, com uma história envolvente e personagens memoráveis." }
];