module.exports = function reverseBallDirection(ball) {
    if (ball.direction === "right") {
        ball.direction = "left";
    } else {
        ball.direction = "right";
    }
}