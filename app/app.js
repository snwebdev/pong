var {bat1} = require('./initial');
var {BAT_HEIGHT, BAT_WIDTH,BAT_H_SPACE, BAT_V_SPACE, COMP_SPEED} = require('./const');
var moveEverything = require('./moveEverything');
var checkMovement = require('./checkMovement');
var drawEverything = require('./drawEverything');
var drawDigit = require('./drawDigit');


var canvas;
var canvasContext;




window.onload = function () {

    canvas = document.getElementById('gameCanvas');
    canvas.style.cursor = "none";



    var fps = 30;
    setInterval(function () {

       moveEverything();
        checkMovement();
        drawEverything(canvas);


    }, 1000 / fps);

    canvas.addEventListener('mousemove', function (e) {
        mousePosition = getMousePosition(e);
        bat1.newY = mousePosition.y - BAT_HEIGHT / 2;

    })
}

function getMousePosition(e) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    mouseX = e.clientX - rect.left - root.scrollLeft;
    mouseY = e.clientY - rect.top - root.scrollTop;
    return {x: mouseX, y: mouseY};

}









