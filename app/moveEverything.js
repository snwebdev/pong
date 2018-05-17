var computerMove = require('./computerMove');

module.exports = function moveEverything(ball,bat1,bat2) {
    ball.x = ball.x + ball.dx;
    ball.y = ball.y + ball.dy;
    bat1.y = bat1.newY;
    computerMove(bat2, ball);
    bat2.y += bat2.dy;
}