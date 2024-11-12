
//in the furute this data will be in a file
const gamesData = [
    {
        title: "Space Maze",
        description: "You will play as Gabe, a engineer working in a cosmic warehouse, isolated because others went for vacation. In one of this days, you heard a strong noise and the light is cut off.",
        portraitSrc: "../imgs/game-imgs/space-maze/portrait-sm.png",
        screenShootsSrc: [
            "../imgs/game-imgs/space-maze/sm-screenshot1.png",
            "../imgs/game-imgs/space-maze/sm-screenshot2.png",
            "../imgs/game-imgs/space-maze/sm-screenshot3.png",
            "../imgs/game-imgs/space-maze/sm-screenshot1.png",
            "../imgs/game-imgs/space-maze/sm-screenshot3.png",
            "../imgs/game-imgs/space-maze/sm-screenshot1.png",
            "../imgs/game-imgs/space-maze/sm-screenshot3.png",
            "../imgs/game-imgs/space-maze/sm-screenshot2.png",
        ]
    },
    {
        title: "Paper Pong",
        description: "A simple pong with a paper heart.",
        portraitSrc: "../imgs/game-imgs/paper-pong/portrait-ppong.png",
        screenShootsSrc: [
            "../imgs/game-imgs/paper-pong/ppong-screenshot1.png",
            "../imgs/game-imgs/paper-pong/ppong-screenshot2.png",
            "../imgs/game-imgs/paper-pong/ppong-screenshot3.png",
            "../imgs/game-imgs/paper-pong/ppong-screenshot4.png",
            "../imgs/game-imgs/paper-pong/ppong-screenshot5.png",
            "../imgs/game-imgs/paper-pong/ppong-screenshot2.png",
            "../imgs/game-imgs/paper-pong/ppong-screenshot3.png",
            "../imgs/game-imgs/paper-pong/ppong-screenshot1.png",
            "../imgs/game-imgs/paper-pong/ppong-screenshot5.png",

        ]
    },
    {
        title: "Lucid Dream",
        description: "A game made for the IlloJam 2024.\nMade in colaboration with: Laila Lahmami, Alejandro Rodriguez, Lydia Morant, Pau Gisbert.\nOh no! You fell asleep watching an IlloJuan stream and can't wake up. Try to wake up again before you can't scape! Walk through the maze and solve puzzles to recover the pieces of memories hidden in the most bizarre mini-games.",
        portraitSrc: "../imgs/game-imgs/lucid-dream/portrait-ldream.png",
        screenShootsSrc: [
            "../imgs/game-imgs/lucid-dream/ldream-screenshot1.jpg",
            "../imgs/game-imgs/lucid-dream/ldream-screenshot2.jpg",
            "../imgs/game-imgs/lucid-dream/ldream-screenshot3.jpg",
            "../imgs/game-imgs/lucid-dream/ldream-screenshot4.jpg",
            "../imgs/game-imgs/lucid-dream/ldream-screenshot5.jpg",
            "../imgs/game-imgs/lucid-dream/ldream-screenshot6.jpg",
            "../imgs/game-imgs/lucid-dream/ldream-screenshot4.jpg",
            "../imgs/game-imgs/lucid-dream/ldream-screenshot2.jpg",
            "../imgs/game-imgs/lucid-dream/ldream-screenshot3.jpg",
            "../imgs/game-imgs/lucid-dream/ldream-screenshot5.jpg",

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
        NEW_PORTRAIT.appendChild(temp);

        for (let i = 0; i < screenShootsDiv.length; i++) {
            screenShootsDiv[i].alt = "screenshoot";
            screenShootsDiv[i].src = game.screenShootsSrc[i];
            NEW_SCREEN_SHOOTS.appendChild(screenShootsDiv[i]);
        }

        temp = document.createElement("h2");
        temp.classList.add("description-title");
        temp.innerHTML = "Description";
        NEW_DESCRIPTION.appendChild(temp);

        temp = document.createElement("p");
        temp.innerHTML = game.description;
        NEW_DESCRIPTION.appendChild(temp);

    });


}

updatePanelsContainer();