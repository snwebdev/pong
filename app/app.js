var {bat1, bat2, scores, ball} = require('./initial');
var {BAT_HEIGHT, BAT_WIDTH,BAT_H_SPACE, BAT_V_SPACE, COMP_SPEED} = require('./const');
var moveEverything = require('./moveEverything');
var checkMovement = require('./checkMovement');

console.log(bat2);

var canvas;
var canvasContext;

function getMousePosition(e) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    mouseX = e.clientX - rect.left - root.scrollLeft;
    mouseY = e.clientY - rect.top - root.scrollTop;
    return {x: mouseX, y: mouseY};

}

window.onload = function () {

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvas.style.cursor = "none";

    var fps = 30;
    setInterval(function () {
       moveEverything(ball,bat1,bat2);
        checkMovement(ball, bat1, bat2);
        drawEverything();

    }, 1000 / fps);

    canvas.addEventListener('mousemove', function (e) {
        mousePosition = getMousePosition(e);
        bat1.newY = mousePosition.y - BAT_HEIGHT / 2;
        // bat2.dy = mousePosition.y - BAT_HEIGHT / 2;
    })
}







function drawEverything() {
    //canvas
    drawRect(0, 0, canvas.width, canvas.height, 'black');

    //ball
    drawRect(ball.x, ball.y, 10, 10, 'white');

    //bat1
    drawRect(bat1.x, bat1.y, BAT_WIDTH, BAT_HEIGHT, 'white');
    bat1.dy = 0;

    //bat2
    drawRect(bat2.x, bat2.y, BAT_WIDTH, BAT_HEIGHT, 'white');
}

function drawRect(X, Y, width, height, colour) {
    canvasContext.fillStyle = colour;
    canvasContext.fillRect(X, Y, width, height);
}

