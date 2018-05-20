var computerMove = require('./computerMove');
var {bat1, bat2, ball} = require('./initial');

module.exports = function moveEverything() {
    ball.x = ball.x + ball.dx;
    ball.y = ball.y + ball.dy;
    bat1.y = bat1.newY;
    computerMove(bat2, ball);
    bat2.y += bat2.dy;
}