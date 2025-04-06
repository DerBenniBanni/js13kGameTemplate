export default function registerMouseEvents(game, canvas) {
    function getMousePosOverCanvas(ev) {    
        const canvasRect = canvas.getBoundingClientRect();
        const x = (ev.clientX - canvasRect.left) * (canvas.width / canvasRect.width); // Calculate the x position relative to the canvas
        const y = (ev.clientY - canvasRect.top) * (canvas.height / canvasRect.height); // Calculate the y position relative to the canvas
        return {x, y}; // Return the calculated position
    }
    
    function handleTouchEvent(ev, isStart) {
        ev.preventDefault(); // Prevent default action for the touch event
        const {x, y} = getMousePosOverCanvas(ev); // Get the mouse position over the canvas
        if(ev.pointerType == 'mouse' || true) {
            game.mousePos.x = x; // Update mouse position
            game.mousePos.y = y; // Update mouse position
            if(isStart){
                game.mousePosStart = game.mousePos.clone(); // Store the starting position of the mouse
            }
        }
        console.log(game.mousePos);
    }
    
    function handleTouchMoveEvent(ev) {
        ev.preventDefault(); // Prevent default action for the touch event
        const {x, y} = getMousePosOverCanvas(ev); // Get the mouse position over the canvas
        if(ev.pointerType == 'mouse' || true) {
            game.mousePos.x = x; // Update mouse position
            game.mousePos.y = y; // Update mouse position
        }
        console.log(game.mousePos);
    }
    
    document.addEventListener('pointerdown', (ev) => {
        handleTouchEvent(ev, true); // Register touchstart event
    });
    document.addEventListener('pointermove', (ev) => {
        handleTouchMoveEvent(ev); // Register touchstart event
    });
    document.addEventListener('pointerup', (ev) => {
        handleTouchEvent(ev, false); // Register touchstart event
    });
    document.addEventListener('pointercancel', (ev) => {
        handleTouchEvent(ev, false); // Register touchstart event
    });
}
