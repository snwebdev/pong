var {BAT_WIDTH, CANVAS_HEIGHT, CANVAS_WIDTH, BAT_H_SPACE, BAT_HEIGHT, BAT_V_SPACE} = require('./const');
var {scores} = require('./initial');
var ballReset = require('./ballReset');
var reverseBallDirection = require('./reverseBallDirection');
var {bat1, bat2, ball} = require('./initial');


module.exports = function checkMovement() {

    var bat = new Audio('./sounds/bat.wav');
    var wall = new Audio('./sounds/wall.wav');
    var out = new Audio('./sounds/out.wav');
    //hit bat1
    if (ball.x <= BAT_WIDTH + bat1.x) {
        if (ball.inplay) {
            if (ball.y + ball.size > bat1.y &&
                ball.y < (bat1.y + BAT_HEIGHT) &&
                ball.inplay) {
                ball.dx = -ball.dx;
                reverseBallDirection(ball);
                bat.play();
            } else {
                ball.inplay = false;
            }
        }

    }

    //hit bat2
    if (ball.x + ball.size >= CANVAS_WIDTH - BAT_H_SPACE) {
        if (ball.inplay) {
            if (ball.y + ball.size > bat2.y &&
                ball.y < (bat2.y + BAT_HEIGHT) &&
                ball.inplay) {
                ball.dx = -ball.dx;
                reverseBallDirection(ball);
                bat.play();
            } else {
                ball.inplay = false;
            }
        }
    }

    //hit top
    if (ball.y <= 0){
        ball.dy = -ball.dy;
        wall.play();
    }

    //hit bottom
    if (ball.y + ball.size >= CANVAS_HEIGHT) {
        ball.dy = -ball.dy;
        wall.play();
    }

    //out left
    if (ball.x + ball.size <= 0){
        scores.computer++;
        ballReset(ball);
        out.play();
       // console.log(scores);
    }

    //out right
    if (ball.x >= CANVAS_WIDTH) {
        scores.player++;
        ballReset(ball);
        console.log(scores);
        out.play();
    }

    //bat 1 off bottom
    if (bat1.y + BAT_HEIGHT + BAT_V_SPACE >= CANVAS_HEIGHT) bat1.y = CANVAS_HEIGHT- BAT_HEIGHT - BAT_V_SPACE;
    if (bat2.y + BAT_HEIGHT + BAT_V_SPACE >= CANVAS_HEIGHT) {
        bat2.y = CANVAS_HEIGHT - BAT_HEIGHT - BAT_V_SPACE;
        bat2.dy = 0;
    }

    //bat 1 off top
    if (bat1.y - BAT_V_SPACE <= 0) bat1.y = BAT_V_SPACE;
    if (bat2.y - BAT_V_SPACE <= 0) {
        bat2.y = BAT_V_SPACE;
        bat2.dy = 0;
    }

}

