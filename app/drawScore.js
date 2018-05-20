var {PLAYER_SCORE_X, PLAYER_SCORE_Y, COMPUTER_SCORE_X, COMPUTER_SCORE_Y, DIGIT_CELL_SIZE, SCORE_SPACE} = require('./const');
var {scores} = require('./initial')
var drawDigit = require('./drawDigit');

module.exports = function(canvas){
    var blank = 10
    var playerDigit1, playerDigit2, computerDigit1, computerDigit2;
    if (scores.player > 9){
        playerDigit1 = scores.player.toString().charAt(0);
        playerDigit2 = scores.player.toString().charAt(1);
    } else {
        playerDigit1 = blank;
        playerDigit2 = scores.player.toString().charAt(scores.player.toString().length - 1);
    }

    if (scores.computer > 9){
        computerDigit1 = scores.computer.toString().charAt(0);
        computerDigit2 = scores.computer.toString().charAt(1);
    } else {
       computerDigit1 = blank;
       computerDigit2 = scores.computer.toString().charAt(scores.computer.toString().length - 1);
    }


    drawDigit(canvas, playerDigit1, PLAYER_SCORE_X, PLAYER_SCORE_Y);
    drawDigit(canvas, playerDigit2, PLAYER_SCORE_X + DIGIT_CELL_SIZE * 3 + SCORE_SPACE , PLAYER_SCORE_Y);

    drawDigit(canvas, computerDigit1, COMPUTER_SCORE_X, COMPUTER_SCORE_Y);
    drawDigit(canvas, computerDigit2, COMPUTER_SCORE_X + DIGIT_CELL_SIZE * 3 + SCORE_SPACE , COMPUTER_SCORE_Y);
}