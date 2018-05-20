/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var {bat1} = __webpack_require__(1);
	var {BAT_HEIGHT, BAT_WIDTH,BAT_H_SPACE, BAT_V_SPACE, COMP_SPEED} = __webpack_require__(2);
	var moveEverything = __webpack_require__(3);
	var checkMovement = __webpack_require__(5);
	var drawEverything = __webpack_require__(8);
	var drawDigit = __webpack_require__(10);


	var canvas;
	var canvasContext;




	window.onload = function () {

	    canvas = document.getElementById('gameCanvas');
	    canvas.style.cursor = "none";



	    var fps = 30;
	    setInterval(function () {

	       moveEverything();
	        checkMovement();
	        drawEverything(canvas);


	    }, 1000 / fps);

	    canvas.addEventListener('mousemove', function (e) {
	        mousePosition = getMousePosition(e);
	        bat1.newY = mousePosition.y - BAT_HEIGHT / 2;

	    })
	}

	function getMousePosition(e) {
	    var rect = canvas.getBoundingClientRect();
	    var root = document.documentElement;
	    mouseX = e.clientX - rect.left - root.scrollLeft;
	    mouseY = e.clientY - rect.top - root.scrollTop;
	    return {x: mouseX, y: mouseY};

	}











/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const {BAT_H_SPACE, BAT_WIDTH, BAT_HEIGHT} = __webpack_require__(2);


	module.exports = {
	    bat1: {
	        y: (600 - BAT_HEIGHT)/2,
	        x: BAT_H_SPACE,
	        dy: 0
	    },
	    bat2: {
	        y: (600 - BAT_HEIGHT)/2,
	        x: 800 - BAT_H_SPACE - BAT_WIDTH,
	        dy: 4,
	        maxSpeed: 20,
	        accel: 1
	    },
	    ball: {
	        x: 100,
	        y: 100,
	        dx: 10,
	        dy: 6,
	        size: 20,
	        inplay: true,
	        direction: "right"
	    },
	    scores: {
	        player: 0,
	        computer: 0
	    },
	    canvas: {},
	    canvasContext: {}
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	    BAT_HEIGHT: 100,
	    BAT_WIDTH: 15,
	    BAT_H_SPACE: 100,
	    BAT_V_SPACE: 30,
	    COMP_SPEED: 6,
	    CANVAS_HEIGHT: 600,
	    CANVAS_WIDTH: 800,
	    DIGIT_CELL_SIZE: 10,
	    PLAYER_SCORE_X: 150,
	    PLAYER_SCORE_Y: 50,
	    COMPUTER_SCORE_X: 500,
	    COMPUTER_SCORE_Y: 50,
	    SCORE_SPACE:10

	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var computerMove = __webpack_require__(4);
	var {bat1, bat2, ball} = __webpack_require__(1);

	module.exports = function moveEverything() {
	    ball.x = ball.x + ball.dx;
	    ball.y = ball.y + ball.dy;
	    bat1.y = bat1.newY;
	    computerMove(bat2, ball);
	    bat2.y += bat2.dy;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var {BAT_HEIGHT} = __webpack_require__(2);

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var {BAT_WIDTH, CANVAS_HEIGHT, CANVAS_WIDTH, BAT_H_SPACE, BAT_HEIGHT, BAT_V_SPACE} = __webpack_require__(2);
	var {scores} = __webpack_require__(1);
	var ballReset = __webpack_require__(6);
	var reverseBallDirection = __webpack_require__(7);
	var {bat1, bat2, ball} = __webpack_require__(1);


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



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var {CANVAS_HEIGHT, CANVAS_WIDTH} = __webpack_require__(2);
	module.exports = function ballReset(ball) {
	    ball.inplay = true;
	    ball.x = CANVAS_WIDTH / 2;
	    ball.y = CANVAS_HEIGHT / 2;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function reverseBallDirection(ball) {
	    if (ball.direction === "right") {
	        ball.direction = "left";
	    } else {
	        ball.direction = "right";
	    }
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var {CANVAS_HEIGHT, CANVAS_WIDTH, BAT_WIDTH, BAT_HEIGHT} = __webpack_require__(2);
	var {bat1, bat2, ball, scores} = __webpack_require__(1);
	var drawRect = __webpack_require__(9);
	drawDigit = __webpack_require__(10);
	var drawScore = __webpack_require__(12);



	module.exports = function drawEverything(canvas) {
	    //canvas
	    drawRect(canvas, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 'black');
	    //drawRect(canvas,200,200,100,100,'white');
	    //drawDigit(canvas);
	    drawScore(canvas);

	    //ball
	    drawRect(canvas, ball.x, ball.y, 10, 10, 'white');

	    //bat1
	    drawRect(canvas, bat1.x, bat1.y, BAT_WIDTH, BAT_HEIGHT, 'white');


	    //bat2
	    drawRect(canvas, bat2.x, bat2.y, BAT_WIDTH, BAT_HEIGHT, 'white');


	}





/***/ },
/* 9 */
/***/ function(module, exports) {

	

	module.exports = function (canvas, X, Y, width, height, colour) {
	    canvasContext = canvas.getContext('2d');
	    canvasContext.fillStyle = colour;
	    canvasContext.fillRect(X, Y, width, height);
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var drawRect = __webpack_require__(9);
	var {DIGIT_CELL_SIZE} = __webpack_require__(2);
	var digits = __webpack_require__(11);

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

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = [
	    [
	        1,1,1,
	        1,0,1,
	        1,0,1,
	        1,0,1,
	        1,1,1
	    ],
	    [
	        1,1,0,
	        0,1,0,
	        0,1,0,
	        0,1,0,
	        1,1,1
	    ],
	    [
	        1,1,1,
	        0,0,1,
	        1,1,1,
	        1,0,0,
	        1,1,1
	    ],
	    [
	        1,1,1,
	        0,0,1,
	        1,1,1,
	        0,0,1,
	        1,1,1
	    ],
	    [
	        1,0,1,
	        1,0,1,
	        1,1,1,
	        0,0,1,
	        0,0,1
	    ],
	    [
	        1,1,1,
	        1,0,0,
	        1,1,1,
	        0,0,1,
	        1,1,1
	    ],
	    [
	        1,0,0,
	        1,0,0,
	        1,1,1,
	        1,0,1,
	        1,1,1
	    ],
	    [
	        1,1,1,
	        0,0,1,
	        0,0,1,
	        0,0,1,
	        0,0,1
	    ],
	    [
	        1,1,1,
	        1,0,1,
	        1,1,1,
	        1,0,1,
	        1,1,1
	    ],
	    [
	        1,1,1,
	        1,0,1,
	        1,1,1,
	        0,0,1,
	        0,0,1
	    ],
	    [
	        0,0,0,
	        0,0,0,
	        0,0,0,
	        0,0,0,
	        0,0,0,

	    ]
	]

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var {PLAYER_SCORE_X, PLAYER_SCORE_Y, COMPUTER_SCORE_X, COMPUTER_SCORE_Y, DIGIT_CELL_SIZE, SCORE_SPACE} = __webpack_require__(2);
	var {scores} = __webpack_require__(1)
	var drawDigit = __webpack_require__(10);

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

/***/ }
/******/ ]);