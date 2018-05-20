var drawRect = require('./drawRect');
var {DIGIT_CELL_SIZE} = require('./const');
var digits = require('./digits');

module.exports = function (canvas, digit, x, y) {
    var digitArray = digits[digit];
    for (var row = 0; row < 5; row++) {
        for (var column = 0; column < 3; column++) {
            if (digitArray[row * 3 + column] === 1){
                colour = 'white'
            }else{
                colour = 'black'
            }
            // console.log("row="+row);
            // console.log('colimn='+column)
            // console.log("digitArray[row * 3 + column]="+digitArray[row * 3 + column]);
            // console.log("colour = "+colour)
            drawRect(canvas,
                x + column * DIGIT_CELL_SIZE,
                y + row * DIGIT_CELL_SIZE,
                DIGIT_CELL_SIZE,
                DIGIT_CELL_SIZE,
                colour);
        }
    }

}