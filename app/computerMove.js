var {BAT_HEIGHT} = require('./const');

module.exports = function computerMove(bat2, ball) {
    if (ball.direction == "left") {
        // bat2.dy = 0;
        // return;
    }
    {
        if (bat2.y + (BAT_HEIGHT / 2) > ball.y) {
            bat2.dy = bat2.dy - bat2.accel;
            if(bat2.dy < - bat2.maxSpeed) bat2.dy = -bat2.maxSpeed;

        } else {
            bat2.dy =bat2.dy + bat2.accel;
            if(bat2.dy > bat2.maxSpeed) bat2.dy = bat2.maxSpeed;
        }
    }
}