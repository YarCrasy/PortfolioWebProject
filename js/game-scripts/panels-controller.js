//in the furute this data will be in a file
const gamesData = [
    {
        title: "Space Maze",
        descriptionEn: "You will play as Gabe, a engineer working in a cosmic warehouse, isolated because others went for vacation. In one of this days, you heard a strong noise and the light is cut off.",
        descriptionEs: "Jugarás como Gabe, un ingeniero que trabaja en un almacén cósmico, aislado porque los demás se fueron de vacaciones. En uno de estos días, escuchaste un fuerte ruido y se cortó la luz.",
        descriptionZh: "你将扮演Gabe，一个在宇宙仓库工作的工程师，因为其他人去度假而被孤立。在这一天，你听到了一声巨响，灯光熄灭了。",
        portraitSrc: "../../imgs/game-imgs/space-maze/portrait-sm.png",
        screenShootsSrc: [
            "../../imgs/game-imgs/space-maze/sm-screenshot1.png",
            "../../imgs/game-imgs/space-maze/sm-screenshot2.png",
            "../../imgs/game-imgs/space-maze/sm-screenshot3.png",
            "../../imgs/game-imgs/space-maze/sm-screenshot1.png",
            "../../imgs/game-imgs/space-maze/sm-screenshot3.png",
            "../../imgs/game-imgs/space-maze/sm-screenshot1.png",
            "../../imgs/game-imgs/space-maze/sm-screenshot3.png",
            "../../imgs/game-imgs/space-maze/sm-screenshot2.png",
        ]
    },
    {
        title: "Paper Pong",
        descriptionEn: "A simple pong with a paper heart.",
        descriptionEs: "Un pong simple con un corazón de papel.",
        descriptionZh: "一个简单的纸心乒乓球游戏。",
        portraitSrc: "../../imgs/game-imgs/paper-pong/portrait-ppong.png",
        screenShootsSrc: [
            "../../imgs/game-imgs/paper-pong/ppong-screenshot1.png",
            "../../imgs/game-imgs/paper-pong/ppong-screenshot2.png",
            "../../imgs/game-imgs/paper-pong/ppong-screenshot3.png",
            "../../imgs/game-imgs/paper-pong/ppong-screenshot4.png",
            "../../imgs/game-imgs/paper-pong/ppong-screenshot5.png",
            "../../imgs/game-imgs/paper-pong/ppong-screenshot2.png",
            "../../imgs/game-imgs/paper-pong/ppong-screenshot3.png",
            "../../imgs/game-imgs/paper-pong/ppong-screenshot1.png",
            "../../imgs/game-imgs/paper-pong/ppong-screenshot5.png",

        ]
    },
    {
        title: "Lucid Dream",
        descriptionEn: "A game made for the IlloJam 2024.\nMade in colaboration with: Laila Lahmami, Alejandro Rodriguez, Lydia Morant, Pau Gisbert.\nOh no! You fell asleep watching an IlloJuan stream and can't wake up. Try to wake up again before you can't scape! Walk through the maze and solve puzzles to recover the pieces of memories hidden in the most bizarre mini-games.",
        descriptionEs: "Un juego hecho para el IlloJam 2024.\nHecho en colaboración con: Laila Lahmami, Alejandro Rodriguez, Lydia Morant, Pau Gisbert.\n¡Oh no! Te quedaste dormido viendo una transmisión de IlloJuan y no puedes despertar. Intenta despertarte de nuevo antes de que no puedas escapar. Camina por el laberinto y resuelve acertijos para recuperar las piezas de recuerdos escondidas en los mini-juegos más extraños.",
        descriptionZh: "为IlloJam 2024制作的游戏。\n与Laila Lahmami, Alejandro Rodriguez, Lydia Morant, Pau Gisbert合作制作。\n哦不！你在看IlloJuan的直播时睡着了，无法醒来。试着再次醒来，否则你将无法逃脱！穿过迷宫并解决谜题，找回隐藏在最奇异的迷你游戏中的记忆碎片。",
        portraitSrc: "../../imgs/game-imgs/lucid-dream/portrait-ldream.png",
        screenShootsSrc: [
            "../../imgs/game-imgs/lucid-dream/ldream-screenshot1.jpg",
            "../../imgs/game-imgs/lucid-dream/ldream-screenshot2.jpg",
            "../../imgs/game-imgs/lucid-dream/ldream-screenshot3.jpg",
            "../../imgs/game-imgs/lucid-dream/ldream-screenshot4.jpg",
            "../../imgs/game-imgs/lucid-dream/ldream-screenshot5.jpg",
            "../../imgs/game-imgs/lucid-dream/ldream-screenshot6.jpg",
            "../../imgs/game-imgs/lucid-dream/ldream-screenshot4.jpg",
            "../../imgs/game-imgs/lucid-dream/ldream-screenshot2.jpg",
            "../../imgs/game-imgs/lucid-dream/ldream-screenshot3.jpg",
            "../../imgs/game-imgs/lucid-dream/ldream-screenshot5.jpg",

        ]
    },

]

function updatePanelsContainer() {
    const CONTAINER = document.getElementById("panels-container");

    gamesData.forEach(game => {
        //create all divs needed
        const NEW_PANEL = document.createElement("div");
        NEW_PANEL.classList.add("my-panel");

        const NEW_TITLE = document.createElement("div");
        NEW_TITLE.classList.add("game-title");

        const NEW_HORIZONTAL_DISPLAY = document.createElement("div");
        NEW_HORIZONTAL_DISPLAY.classList.add("horizontal-display");

        const NEW_GAME_IMGS = document.createElement("div");
        NEW_GAME_IMGS.classList.add("game-imgs");

        const NEW_PORTRAIT = document.createElement("div");
        NEW_PORTRAIT.classList.add("portrait");

        const NEW_SCREEN_SHOOTS = document.createElement("div");
        NEW_SCREEN_SHOOTS.classList.add("screenshoots");

        let screenShootsDiv = [];
        for (let i = 0; i < game.screenShootsSrc.length; i++) {
            screenShootsDiv.push(document.createElement("img"));
            screenShootsDiv[i].classList.add("screenshoot");
        }

        const NEW_DESCRIPTION = document.createElement("div");
        NEW_DESCRIPTION.classList.add("game-description");

        //set structure
        CONTAINER.appendChild(NEW_PANEL);

        NEW_PANEL.appendChild(NEW_TITLE);
        NEW_PANEL.appendChild(NEW_HORIZONTAL_DISPLAY);

        NEW_HORIZONTAL_DISPLAY.appendChild(NEW_GAME_IMGS);
        NEW_HORIZONTAL_DISPLAY.appendChild(NEW_DESCRIPTION);

        NEW_GAME_IMGS.appendChild(NEW_PORTRAIT);
        NEW_GAME_IMGS.appendChild(NEW_SCREEN_SHOOTS);

        for (let i = 0; i < screenShootsDiv.length; i++) {
            NEW_SCREEN_SHOOTS.appendChild(screenShootsDiv[i]);
        }

        //set data
        let temp = document.createElement("h1");
        temp.innerHTML = game.title;
        NEW_TITLE.appendChild(temp);

        temp = document.createElement("img");
        temp.src = game.portraitSrc;
        temp.alt = "portrait";
        temp.id = game.title.toLowerCase().replace(/\s+/g, '-'); // Add id attribute
        NEW_PORTRAIT.appendChild(temp);

        for (let i = 0; i < screenShootsDiv.length; i++) {
            screenShootsDiv[i].alt = "screenshoot";
            screenShootsDiv[i].src = game.screenShootsSrc[i];
            screenShootsDiv[i].setAttribute("onmouseover", `changePortrait(this, '${temp.id}')`); // Add onmouseover event
            screenShootsDiv[i].setAttribute("onmouseleave", "rstPortrait()"); // Add onmouseleave event
            NEW_SCREEN_SHOOTS.appendChild(screenShootsDiv[i]);
        }

        temp = document.createElement("h2");
        temp.classList.add("description-title");
        temp.innerHTML = "Description";
        NEW_DESCRIPTION.appendChild(temp);

        temp = document.createElement("p");
        if(document.documentElement.lang === "es"){
            temp.innerHTML = game.descriptionEs;
        }
        else if(document.documentElement.lang === "zh"){
            temp.innerHTML = game.descriptionZh;
        }
        else{
            temp.innerHTML = game.descriptionEn;
        }
        NEW_DESCRIPTION.appendChild(temp);

    });

    // Add "Coming Soon" panel
    const COMING_SOON_PANEL = document.createElement("div");
    COMING_SOON_PANEL.classList.add("my-panel");

    const COMING_SOON_DESCRIPTION = document.createElement("div");
    COMING_SOON_DESCRIPTION.classList.add("game-description");

    const COMING_SOON_TITLE = document.createElement("h2");
    COMING_SOON_TITLE.classList.add("description-title");
    COMING_SOON_TITLE.innerHTML = "Coming soon...";

    const COMING_SOON_TEXT = document.createElement("p");
    COMING_SOON_TEXT.innerHTML = "More games coming soon";

    COMING_SOON_DESCRIPTION.appendChild(COMING_SOON_TITLE);
    COMING_SOON_DESCRIPTION.appendChild(COMING_SOON_TEXT);
    COMING_SOON_PANEL.appendChild(COMING_SOON_DESCRIPTION);
    CONTAINER.appendChild(COMING_SOON_PANEL);
}

updatePanelsContainer();