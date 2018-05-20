

module.exports = function (canvas, X, Y, width, height, colour) {
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = colour;
    canvasContext.fillRect(X, Y, width, height);
}