/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var {bat1, bat2, scores, ball, canvas} = __webpack_require__(/*! ./initial */ \"./app/initial.js\");\nvar {BAT_HEIGHT, BAT_WIDTH,BAT_H_SPACE, BAT_V_SPACE, COMP_SPEED} = __webpack_require__(/*! ./const */ \"./app/const.js\");\nvar moveEverything = __webpack_require__(/*! ./moveEverything */ \"./app/moveEverything.js\");\nvar checkMovement = __webpack_require__(/*! ./checkMovement */ \"./app/checkMovement.js\");\nvar drawEverything = __webpack_require__(/*! ./drawEverything */ \"./app/drawEverything.js\");\n\nconsole.log(bat2);\n\nvar canvas;\nvar canvasContext;\n\nfunction getMousePosition(e) {\n    var rect = canvas.getBoundingClientRect();\n    var root = document.documentElement;\n    mouseX = e.clientX - rect.left - root.scrollLeft;\n    mouseY = e.clientY - rect.top - root.scrollTop;\n    return {x: mouseX, y: mouseY};\n\n}\n\nwindow.onload = function () {\n\n\n    canvas = document.getElementById('gameCanvas');\n    canvasContext = canvas.getContext('2d');\n    canvas.style.cursor = \"none\";\n\n    var fps = 30;\n    setInterval(function () {\n\n      // moveEverything(ball,bat1,bat2);\n      //  checkMovement(ball, bat1, bat2);\n        drawEverything();\n\n\n    }, 1000 / fps);\n\n    canvas.addEventListener('mousemove', function (e) {\n        mousePosition = getMousePosition(e);\n        bat1.newY = mousePosition.y - BAT_HEIGHT / 2;\n        // bat2.dy = mousePosition.y - BAT_HEIGHT / 2;\n    })\n}\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ }),

/***/ "./app/ballReset.js":
/*!**************************!*\
  !*** ./app/ballReset.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var {CANVAS_HEIGHT, CANVAS_WIDTH} = __webpack_require__(/*! ./const */ \"./app/const.js\");\nmodule.exports = function ballReset(ball) {\n    ball.inplay = true;\n    ball.x = CANVAS_WIDTH / 2;\n    ball.y = CANVAS_HEIGHT / 2;\n}\n\n//# sourceURL=webpack:///./app/ballReset.js?");

/***/ }),

/***/ "./app/checkMovement.js":
/*!******************************!*\
  !*** ./app/checkMovement.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var {BAT_WIDTH, CANVAS_HEIGHT, CANVAS_WIDTH, BAT_H_SPACE, BAT_HEIGHT, BAT_V_SPACE} = __webpack_require__(/*! ./const */ \"./app/const.js\");\nvar {scores} = __webpack_require__(/*! ./initial */ \"./app/initial.js\");\nvar ballReset = __webpack_require__(/*! ./ballReset */ \"./app/ballReset.js\");\nvar reverseBallDirection = __webpack_require__(/*! ./reverseBallDirection */ \"./app/reverseBallDirection.js\");\n\nmodule.exports = function checkMovement(ball, bat1, bat2) {\n    //hit bat1\n    if (ball.x <= BAT_WIDTH + bat1.x) {\n        if (ball.inplay) {\n            if (ball.y > bat1.y &&\n                ball.y < (bat1.y + BAT_HEIGHT) &&\n                ball.inplay) {\n                ball.dx = -ball.dx;\n                reverseBallDirection(ball);\n            } else {\n                ball.inplay = false;\n            }\n        }\n\n    }\n\n    //hit bat2\n    if (ball.x + ball.size >= CANVAS_WIDTH - BAT_H_SPACE) {\n        if (ball.inplay) {\n            if (ball.y > bat2.y &&\n                ball.y < (bat2.y + BAT_HEIGHT)) {\n                ball.dx = -ball.dx;\n                reverseBallDirection(ball);\n            } else {\n                ball.inplay = false;\n            }\n        }\n    }\n\n    //hit top\n    if (ball.y <= 0) ball.dy = -ball.dy;\n\n    //hit bottom\n    if (ball.y + ball.size >= CANVAS_HEIGHT) ball.dy = -ball.dy;\n\n    //out left\n    if (ball.x + ball.size <= 0){\n        scores.comp++;\n        ballReset(ball);\n       // console.log(scores);\n    }\n\n    //out right\n    if (ball.x >= CANVAS_WIDTH) {\n        scores.player++;\n        ballReset(ball);\n        console.log(scores);\n    }\n\n    //bat 1 off bottom\n    if (bat1.y + BAT_HEIGHT + BAT_V_SPACE >= CANVAS_HEIGHT) bat1.y = CANVAS_HEIGHT- BAT_HEIGHT - BAT_V_SPACE;\n    if (bat2.y + BAT_HEIGHT + BAT_V_SPACE >= CANVAS_HEIGHT) {\n        bat2.y = CANVAS_HEIGHT - BAT_HEIGHT - BAT_V_SPACE;\n        bat2.dy = 0;\n    }\n\n    //bat 1 off top\n    if (bat1.y - BAT_V_SPACE <= 0) bat1.y = BAT_V_SPACE;\n    if (bat2.y - BAT_V_SPACE <= 0) {\n        bat2.y = BAT_V_SPACE;\n        bat2.dy = 0;\n    }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/checkMovement.js?");

/***/ }),

/***/ "./app/computerMove.js":
/*!*****************************!*\
  !*** ./app/computerMove.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var {BAT_HEIGHT} = __webpack_require__(/*! ./const */ \"./app/const.js\");\n\nmodule.exports = function computerMove(bat2, ball) {\n    if (ball.direction == \"left\") {\n        // bat2.dy = 0;\n        // return;\n    }\n    {\n        if (bat2.y + (BAT_HEIGHT / 2) > ball.y) {\n            bat2.dy = bat2.dy - bat2.accel;\n            if(bat2.dy < - bat2.maxSpeed) bat2.dy = -bat2.maxSpeed;\n\n        } else {\n            bat2.dy =bat2.dy + bat2.accel;\n            if(bat2.dy > bat2.maxSpeed) bat2.dy = bat2.maxSpeed;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./app/computerMove.js?");

/***/ }),

/***/ "./app/const.js":
/*!**********************!*\
  !*** ./app/const.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    BAT_HEIGHT: 100,\n    BAT_WIDTH: 15,\n    BAT_H_SPACE: 100,\n    BAT_V_SPACE: 30,\n    COMP_SPEED: 6,\n    CANVAS_HEIGHT: 600,\n    CANVAS_WIDTH: 800\n\n}\n\n//# sourceURL=webpack:///./app/const.js?");

/***/ }),

/***/ "./app/drawEverything.js":
/*!*******************************!*\
  !*** ./app/drawEverything.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var {CANVAS_HEIGHT, CANVAS_WIDTH, BAT_WIDTH, BAT_HEIGHT} = __webpack_require__(/*! ./const */ \"./app/const.js\");\nvar {ball, bat1, bat2} = __webpack_require__(/*! ./initial */ \"./app/initial.js\");\nvar drawRect = __webpack_require__(/*! ./drawRect */ \"./app/drawRect.js\");\n\nmodule.exports = function drawEverything() {\n    //canvas\n    drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 'black');\n\n    //ball\n    drawRect(ball.x, ball.y, 10, 10, 'white');\n\n    //bat1\n    drawRect(bat1.x, bat1.y, BAT_WIDTH, BAT_HEIGHT, 'white');\n\n\n    //bat2\n    drawRect(bat2.x, bat2.y, BAT_WIDTH, BAT_HEIGHT, 'white');\n}\n\n\n\n\n\n//# sourceURL=webpack:///./app/drawEverything.js?");

/***/ }),

/***/ "./app/drawRect.js":
/*!*************************!*\
  !*** ./app/drawRect.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var {canvas, canvasContext} = __webpack_require__(/*! ./initial */ \"./app/initial.js\");\n\nmodule.exports = function drawRect(X, Y, width, height, colour) {\n    canvasContext.fillStyle = colour;\n    canvasContext.fillRect(X, Y, width, height);\n}\n\n//# sourceURL=webpack:///./app/drawRect.js?");

/***/ }),

/***/ "./app/initial.js":
/*!************************!*\
  !*** ./app/initial.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {BAT_H_SPACE, BAT_WIDTH, BAT_HEIGHT} = __webpack_require__(/*! ./const */ \"./app/const.js\");\n\n\nmodule.exports = {\n    bat1: {\n        y: (600 - BAT_HEIGHT)/2,\n        x: BAT_H_SPACE,\n        dy: 0\n    },\n    bat2: {\n        y: (600 - BAT_HEIGHT)/2,\n        x: 800 - BAT_H_SPACE - BAT_WIDTH,\n        dy: 4,\n        maxSpeed: 20,\n        accel: 1\n    },\n    ball: {\n        x: 100,\n        y: 100,\n        dx: 10,\n        dy: 6,\n        size: 20,\n        inplay: true,\n        direction: \"right\"\n    },\n    scores: {\n        player: 0,\n        comp: 0\n    },\n    canvas: {},\n    canvasContext: {}\n}\n\n//# sourceURL=webpack:///./app/initial.js?");

/***/ }),

/***/ "./app/moveEverything.js":
/*!*******************************!*\
  !*** ./app/moveEverything.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var computerMove = __webpack_require__(/*! ./computerMove */ \"./app/computerMove.js\");\n\nmodule.exports = function moveEverything(ball,bat1,bat2) {\n    ball.x = ball.x + ball.dx;\n    ball.y = ball.y + ball.dy;\n    bat1.y = bat1.newY;\n    computerMove(bat2, ball);\n    bat2.y += bat2.dy;\n}\n\n//# sourceURL=webpack:///./app/moveEverything.js?");

/***/ }),

/***/ "./app/reverseBallDirection.js":
/*!*************************************!*\
  !*** ./app/reverseBallDirection.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function reverseBallDirection(ball) {\n    if (ball.direction === \"right\") {\n        ball.direction = \"left\";\n    } else {\n        ball.direction = \"right\";\n    }\n}\n\n//# sourceURL=webpack:///./app/reverseBallDirection.js?");

/***/ })

/******/ });