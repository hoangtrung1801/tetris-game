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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tetromioes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tetromioes */ "./src/js/tetromioes.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var canvas = document.querySelector('canvas');
var scoreEl = document.querySelector('#score');
var highestScoreEl = document.querySelector('#highest-score');
var resetEl = document.querySelector('#reset');
var statusGame = document.querySelector('#status-game');
var startBtn = document.querySelector('#start-btn');
var c = canvas.getContext('2d'); // Variables

var ROW = 20;
var COLUMN = 10;
var sq = 20;
canvas.width = sq * COLUMN;
canvas.height = sq * ROW;

var boardGame = _toConsumableArray(Array(ROW).fill().map(function () {
  return _toConsumableArray(Array(COLUMN).fill(0));
}));

var PIECES = [[_tetromioes__WEBPACK_IMPORTED_MODULE_1__["I"], 'red'], [_tetromioes__WEBPACK_IMPORTED_MODULE_1__["J"], 'blue'], [_tetromioes__WEBPACK_IMPORTED_MODULE_1__["L"], 'orange'], [_tetromioes__WEBPACK_IMPORTED_MODULE_1__["O"], 'cyan'], [_tetromioes__WEBPACK_IMPORTED_MODULE_1__["S"], 'purple'], [_tetromioes__WEBPACK_IMPORTED_MODULE_1__["Z"], 'indigo'], [_tetromioes__WEBPACK_IMPORTED_MODULE_1__["T"], 'green']];
var score = 0;
var highestScore = 0;
var gameOver = false; // addEventListener

addEventListener('keydown', control);
resetEl.addEventListener('click', startGame);
startBtn.addEventListener('click', startGame); // Objects

function Piece(tetromino, color) {
  this.tetromino = tetromino;
  this.tetrominoN = 0;
  this.activeTetromino = this.tetromino[this.tetrominoN];
  this.color = color;
  this.x = 3;
  this.y = -2;
}

Piece.prototype.draw = function () {
  for (var row = 0; row < this.activeTetromino.length; row++) {
    for (var col = 0; col < this.activeTetromino.length; col++) {
      if (this.activeTetromino[row][col]) {
        draw(this.x + col, this.y + row, this.color);
      }
    }
  }
};

Piece.prototype.unDraw = function () {
  for (var row = 0; row < this.activeTetromino.length; row++) {
    for (var col = 0; col < this.activeTetromino.length; col++) {
      if (this.activeTetromino[row][col]) {
        draw(this.x + col, this.y + row, 'white');
      }
    }
  }
};

Piece.prototype.moveDown = function () {
  if (!this.collision(0, 1, this.activeTetromino)) {
    this.unDraw();
    this.y++;
    this.draw();
    dropStart = new Date();
  } else {
    this.lock();
    piece = randomPiece();
  }
};

Piece.prototype.moveRight = function () {
  if (!this.collision(1, 0, this.activeTetromino)) {
    this.unDraw();
    this.x++;
    this.draw();
  }
};

Piece.prototype.moveLeft = function () {
  if (!this.collision(-1, 0, this.activeTetromino)) {
    this.unDraw();
    this.x--;
    this.draw();
  }
};

Piece.prototype.rotate = function () {
  var nextPattern = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
  var kick = 0;

  if (this.collision(0, 0, nextPattern)) {
    if (this.x <= COLUMN / 2) kick = 1;else kick = -1;
  }

  if (!this.collision(kick, 0, nextPattern)) {
    this.unDraw();
    this.x += kick;
    this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.draw();
  }
};

Piece.prototype.collision = function (x, y, piece) {
  var newX, newY;

  for (var row = 0; row < piece.length; row++) {
    for (var col = 0; col < piece.length; col++) {
      newX = this.x + x;
      newY = this.y + y;
      if (!piece[row][col]) continue;
      if (newY < 0) continue;
      if (newX + col < 0 || newX + col >= COLUMN || newY + row >= ROW) return true;
      if (boardGame[newY + row][newX + col]) return true;
    }
  }

  return false;
};

Piece.prototype.lock = function () {
  for (var row = 0; row < this.activeTetromino.length; row++) {
    for (var col = 0; col < this.activeTetromino.length; col++) {
      if (!this.activeTetromino[row][col]) continue;

      if (this.y + row < 0) {
        // game over
        gameOver = true;
      }

      boardGame[this.y + row][this.x + col] = this.color;
    }
  }

  checkFullRow();
}; // Implementation


var dropStart = new Date();
var piece = randomPiece();

function init() {
  // col = x, row = y
  for (var row = 0; row < ROW; row++) {
    for (var col = 0; col < COLUMN; col++) {
      draw(col, row, boardGame[row][col] ? boardGame[row][col] : 'white');
    }
  }
} // control move


function control(event) {
  if (gameOver) return;

  if (event.key === 'ArrowDown') {
    piece.moveDown();
  } else if (event.key === 'ArrowUp') {
    piece.rotate();
  } else if (event.key === 'ArrowRight') {
    piece.moveRight();
  } else if (event.key === 'ArrowLeft') {
    piece.moveLeft();
  }
} // random piece


function randomPiece() {
  var piece = PIECES[Math.floor(Math.random() * PIECES.length)];
  return new Piece(piece[0], piece[1]);
} // check full row


function checkFullRow() {
  for (var row = 0; row < ROW; row++) {
    var isFullRow = true;

    for (var col = 0; col < COLUMN; col++) {
      if (!boardGame[row][col]) {
        isFullRow = false;
        break;
      }
    }

    if (!isFullRow) continue;
    boardGame.splice(row, 1);
    boardGame = [_toConsumableArray(Array(COLUMN).fill(0))].concat(_toConsumableArray(boardGame));
    incScore();
    init();
  }
}

function incScore() {
  score += 10;
  scoreEl.textContent = score;
} // Animation Loop


var timeInterval = 500;
var animationId;

function animate() {
  animationId = requestAnimationFrame(animate);

  if (gameOver) {
    stopGame();
  }

  var now = new Date();

  if (now - dropStart > timeInterval) {
    piece.moveDown();
    dropStart = new Date();
  }
}

function startGame() {
  gameOver = false;
  dropStart = new Date();
  piece = randomPiece();
  score = 0;
  scoreEl.textContent = 0;
  boardGame.forEach(function (el) {
    return el.fill(0);
  });
  statusGame.style.display = 'none';
  init();
  animate();
}

function draw(x, y, color) {
  c.fillStyle = color;
  c.fillRect(x * sq, y * sq, sq, sq);
  c.strokeStyle = 'black';
  c.strokeRect(x * sq, y * sq, sq, sq);
}

function stopGame() {
  console.log('game over');
  highestScore = Math.max(score, highestScore);
  highestScoreEl.textContent = highestScore;
  cancelAnimationFrame(animationId);
  statusGame.style.display = 'flex';
}

init();

/***/ }),

/***/ "./src/js/tetromioes.js":
/*!******************************!*\
  !*** ./src/js/tetromioes.js ***!
  \******************************/
/*! exports provided: I, J, L, O, S, T, Z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return Z; });
var I = [[[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]], [[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]], [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]];
var J = [[[1, 0, 0], [1, 1, 1], [0, 0, 0]], [[0, 1, 1], [0, 1, 0], [0, 1, 0]], [[0, 0, 0], [1, 1, 1], [0, 0, 1]], [[0, 1, 0], [0, 1, 0], [1, 1, 0]]];
var L = [[[0, 0, 1], [1, 1, 1], [0, 0, 0]], [[0, 1, 0], [0, 1, 0], [0, 1, 1]], [[0, 0, 0], [1, 1, 1], [1, 0, 0]], [[1, 1, 0], [0, 1, 0], [0, 1, 0]]];
var O = [[[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]];
var S = [[[0, 1, 1], [1, 1, 0], [0, 0, 0]], [[0, 1, 0], [0, 1, 1], [0, 0, 1]], [[0, 0, 0], [0, 1, 1], [1, 1, 0]], [[1, 0, 0], [1, 1, 0], [0, 1, 0]]];
var T = [[[0, 1, 0], [1, 1, 1], [0, 0, 0]], [[0, 1, 0], [0, 1, 1], [0, 1, 0]], [[0, 0, 0], [1, 1, 1], [0, 1, 0]], [[0, 1, 0], [1, 1, 0], [0, 1, 0]]];
var Z = [[[1, 1, 0], [0, 1, 1], [0, 0, 0]], [[0, 0, 1], [0, 1, 1], [0, 1, 0]], [[0, 0, 0], [1, 1, 0], [0, 1, 1]], [[0, 1, 0], [1, 1, 0], [1, 0, 0]]];

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map