import Circle from "../circle.js";

export default class Bush extends Circle {
    constructor(scene, {x, y, r}) {
        super(scene, {x, y, r}); // Call the parent class constructor
        this.type = "bush"; // Set the type of the object to "bush"
        this.color = '#008000'; // Set the color to green
    }
    update(deltaTime) {
        super.update(deltaTime); // Call the parent class update method
    }
    render(ctx) {
        ctx.fillStyle = this.color; // Set fill color to green
        ctx.beginPath(); // Start a new path
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); // Draw the circle 
        ctx.fill(); // Fill the circle with the current fill color
        ctx.closePath(); // Close the path
    }
}