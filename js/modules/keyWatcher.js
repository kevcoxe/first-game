
let keysPressed = {};

window.onkeydown = function(gfg){ 
    keysPressed[gfg.key] = true;
};

window.onkeyup = function(gfg) {
    delete keysPressed[gfg.key];
}