import Game from "./game/game.js";
import Scene from "./game/scene.js"; 
import Player from "./game/objects/player.js";
import config from "./config.js"; 
import registerKeys from "./game/input/keyboard.js";
import registerMouseEvents from "./game/input/pointer.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("mainCanvas");
    window.game = new Game(canvas);

    registerKeys(game); // Register actions with the game
    game.registerActions(config.actions); // Register keyboard events

    registerMouseEvents(game, canvas); // Register mouse events

  
    const level1 = game.addScene(new Scene("level1", game));
    level1.setup((scene) => {
        scene.addObject(new Player(scene, {x: 50, y: 50, width: 50, height: 50, color: '#0ff'}));
    });
    level1.initialize();
    
   
    const level2 = game.addScene(new Scene("level2", game));
    level2.setup((scene) => {
        scene.addObject(new Player(scene, {x: 50, y: 50, width: 50, height: 50, color: '#f00'}));
    });
   


    // Start the game loop
    game.start();

});
