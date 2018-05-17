var {CANVAS_HEIGHT, CANVAS_WIDTH, BAT_WIDTH, BAT_HEIGHT} = require('./const');
var {ball, bat1, bat2} = require('./initial');
var drawRect = require('./drawRect');

module.exports = function drawEverything() {
    //canvas
    drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 'black');

    //ball
    drawRect(ball.x, ball.y, 10, 10, 'white');

    //bat1
    drawRect(bat1.x, bat1.y, BAT_WIDTH, BAT_HEIGHT, 'white');


    //bat2
    drawRect(bat2.x, bat2.y, BAT_WIDTH, BAT_HEIGHT, 'white');
}



