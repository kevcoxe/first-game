
var canvas = document.getElementById("canvas");

var clearCanvas = function () {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

var setBackground = function () {
    // colors = ["red", "green", "blue", "black", "purple"];
    // canvas.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    canvas.style.backgroundColor = "black";
}

var addElementToCanvas = function (element) {
    canvas.appendChild(element.renderNode());
}