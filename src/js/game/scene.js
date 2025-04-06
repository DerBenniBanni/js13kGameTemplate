export default class Scene {
    constructor(name, game) {
        this.name = name; // Name of the scene
        this.game = game; // Reference to the game instance
        this.objects = []; // Array to hold scene objects
        this.setupFunction = ()=>{};
    }

    addObject(object) {
        this.objects.push(object); // Add object to the scene
        return object; // Return the added object
    }

    setup(setupFunction) {
        this.setupFunction = setupFunction;
    }

    initialize() {
        this.objects = [];
        this.setupFunction(this);
    }

    update(deltaTime) {
        for (const object of this.objects) {
            object.update(deltaTime); // Update each object in the scene
        }
    }

    preRender(ctx) {
        ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height); // Clear the canvas
    }

    render(ctx) {
        for (const object of this.objects) {
            object.render(ctx); // Render each object in the scene
        }
    }

    postRender(ctx) {
        // Additional rendering logic can be implemented here
    }
}