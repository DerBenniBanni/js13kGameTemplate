import Rectangle from "./rectangle.js";

export default class Player extends Rectangle {
    constructor(scene, {x, y, width, height, color}) {
        super(scene, {x, y, width, height});
        this.type = "player";
        this.color = color;
    }

    
    update(deltaTime) {
        super.update(deltaTime); // Call the parent class update method

        /* Keyboard Input Handling 
        if(this.game.actionActive('left')) {
            this.x -= 100 * deltaTime; // Move left
        }
        if(this.game.actionActive('right')) {
            this.x += 100 * deltaTime; // Move right
        }
        if(this.game.actionActive('up')) {
            this.y -= 100 * deltaTime; // Move up
        }
        if(this.game.actionActive('down')) {
            this.y += 100 * deltaTime; // Move down
        }
        */
        /* Scene switching logic
        if(this.x > 300) {
            let name = this.scene.name == "level1" ? "level2" : "level1";
            let scene = this.game.getScene(name);
            scene.initialize();
            this.game.switchToScene(scene);
        }
        */
        /* Mouse Input Handling */
        this.x = this.game.mousePos.x - this.width / 2; // Center the player on the mouse position
        this.y = this.game.mousePos.y - this.height / 2; // Center the player on the mouse position
    }
}