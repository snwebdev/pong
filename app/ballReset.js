var {CANVAS_HEIGHT, CANVAS_WIDTH} = require('./const');
module.exports = function ballReset(ball) {
    ball.inplay = true;
    ball.x = CANVAS_WIDTH / 2;
    ball.y = CANVAS_HEIGHT / 2;
}