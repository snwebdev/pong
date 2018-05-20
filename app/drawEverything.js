var {CANVAS_HEIGHT, CANVAS_WIDTH, BAT_WIDTH, BAT_HEIGHT} = require('./const');
var {bat1, bat2, ball, scores} = require('./initial');
var drawRect = require('./drawRect');
drawDigit = require('./drawDigit');
var drawScore = require('./drawScore');



module.exports = function drawEverything(canvas) {
    //canvas
    drawRect(canvas, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 'black');
    //drawRect(canvas,200,200,100,100,'white');
    //drawDigit(canvas);
    drawScore(canvas);

    //ball
    drawRect(canvas, ball.x, ball.y, 10, 10, 'white');

    //bat1
    drawRect(canvas, bat1.x, bat1.y, BAT_WIDTH, BAT_HEIGHT, 'white');


    //bat2
    drawRect(canvas, bat2.x, bat2.y, BAT_WIDTH, BAT_HEIGHT, 'white');


}



