var {canvas, canvasContext} = require('./initial');

module.exports = function drawRect(X, Y, width, height, colour) {
    canvasContext.fillStyle = colour;
    canvasContext.fillRect(X, Y, width, height);
}