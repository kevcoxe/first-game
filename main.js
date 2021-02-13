// Create Player
var player1 = new Player(x=10, y=10, width=10, height=10, color="blue")
var players = [player1]
var worldObjects = [
    new Tree(x=50, y=50),
    new Tree(x=200, y=50),
    new Tree(x=350, y=50),
    new Tree(x=500, y=50),

    new Tree(x=50, y=200),
    new Tree(x=200, y=200),
    new Tree(x=350, y=200),
    new Tree(x=500, y=200),

    new Tree(x=50, y=350),
    new Tree(x=200, y=350),
    new Tree(x=350, y=350),
    new Tree(x=500, y=350),
]

var renderList = [];
renderList = renderList.concat(worldObjects)
renderList = renderList.concat(players)

var render = function () {

    clearCanvas(canvas);
    setBackground(canvas);

    renderList.forEach(function (item) {
        addElementToCanvas(item, canvas)
    })
}


var mainInterval = setInterval(function(){
    render();
    movePlayer();
}, 10)
