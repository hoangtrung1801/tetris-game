import utils from './utils'
import { I, J, L, O, S, T, Z } from './tetromioes';

const canvas = document.querySelector('canvas')
const scoreEl = document.querySelector('#score');
const highestScoreEl = document.querySelector('#highest-score');
const resetEl = document.querySelector('#reset');
const statusGame = document.querySelector('#status-game');
const startBtn = document.querySelector('#start-btn');
const c = canvas.getContext('2d')

// Variables
const ROW = 20;
const COLUMN = 10;
const sq = 20;

canvas.width = sq * COLUMN; 
canvas.height = sq * ROW; 

let boardGame = [...Array(ROW).fill().map(() => [...Array(COLUMN).fill(0)])]
const PIECES = [
  [I, 'red'],
  [J, 'blue'],
  [L, 'orange'],
  [O, 'cyan'],
  [S, 'purple'],
  [Z, 'indigo'],
  [T, 'green'],
]
let score = 0;
let highestScore = 0;
let gameOver = false;

// addEventListener
addEventListener('keydown', control);

resetEl.addEventListener('click', startGame);

startBtn.addEventListener('click', startGame);

// Objects
function Piece(tetromino, color) {
  this.tetromino = tetromino;
  this.tetrominoN = 0;
  this.activeTetromino = this.tetromino[this.tetrominoN];
  this.color = color;

  this.x = 3;
  this.y = -2;
}

Piece.prototype.draw = function() {
  for(let row=0;row<this.activeTetromino.length;row++) {
    for(let col=0;col<this.activeTetromino.length;col++) {
      if(this.activeTetromino[row][col]){
        draw( this.x + col,  this.y + row, this.color );
      }
    }
  }
}

Piece.prototype.unDraw = function() {
  for(let row=0;row<this.activeTetromino.length;row++) {
    for(let col=0;col<this.activeTetromino.length;col++) {
      if(this.activeTetromino[row][col]){
        draw(this.x + col, this.y + row, 'white' );
      }
    }
  }
}

Piece.prototype.moveDown = function() {
  if(!this.collision(0, 1, this.activeTetromino)) {
    this.unDraw();
    this.y++;
    this.draw();

    dropStart = new Date();
  } else {
    this.lock();
    piece = randomPiece();
  }
}

Piece.prototype.moveRight = function() {
  if(!this.collision(1, 0, this.activeTetromino)) {
    this.unDraw();
    this.x++;
    this.draw();
  }    
}

Piece.prototype.moveLeft = function() {
   if(!this.collision(-1, 0, this.activeTetromino)) {
    this.unDraw();
    this.x--;
    this.draw();
  }  
}

Piece.prototype.rotate = function() {
  let nextPattern = this.tetromino[( this.tetrominoN + 1 ) % this.tetromino.length];
  let kick = 0;
  if(this.collision(0, 0, nextPattern)) {
    if(this.x <= COLUMN / 2) kick = 1;
    else kick = -1;
  } 
  if(!this.collision(kick, 0, nextPattern)){
    this.unDraw();
    this.x += kick;
    this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.draw();

  }
}

Piece.prototype.collision = function(x, y, piece) {
  let newX, newY;
  
  for(let row=0;row<piece.length;row++) {
    for(let col=0;col<piece.length;col++)  {
      newX = this.x + x;
      newY = this.y + y;
      if(!piece[row][col]) continue;
      if(newY < 0) continue;
      if(newX + col < 0 || newX + col >= COLUMN || newY + row >= ROW) return true;
      if(boardGame[newY + row][newX + col]) return true;
    }
  }
  return false;
}

Piece.prototype.lock = function() {
  for(let row=0;row<this.activeTetromino.length;row++) {
      for(let col=0;col<this.activeTetromino.length;col++) {
      if(!this.activeTetromino[row][col]) continue;
      if(this.y + row < 0) {
        // game over
        gameOver = true;
      }
      boardGame[this.y + row][this.x + col] = this.color;
    }
  }
  checkFullRow();
}

// Implementation
let dropStart = new Date();
let piece = randomPiece();
function init() { // col = x, row = y

  for(let row=0; row<ROW; row++) {
    for(let col=0; col<COLUMN; col++) {
      draw(col, row, boardGame[row][col] ? boardGame[row][col] : 'white');
    }
  }

}

// control move
function control(event) {
  if(gameOver) return;
  if(event.key === 'ArrowDown') {
    piece.moveDown();
  } else if(event.key === 'ArrowUp') {
    piece.rotate();
  } else if(event.key === 'ArrowRight') {
    piece.moveRight();
  } else if(event.key === 'ArrowLeft') {
    piece.moveLeft();
  }
}

// random piece
function randomPiece() {
  let piece = PIECES[Math.floor( Math.random() * PIECES.length )];
  return new Piece(piece[0], piece[1]);
}

// check full row
function checkFullRow() {
  for(let row=0;row<ROW; row++) {
    let isFullRow = true;
    for(let col=0;col<COLUMN;col++) {
      if(!boardGame[row][col]) {
        isFullRow = false;
        break;
      }
    }
    if(!isFullRow) continue;
    
    boardGame.splice(row, 1);
    boardGame = [[...Array(COLUMN).fill(0)], ...boardGame];
    incScore();
    init();
  }
}

function incScore() {
  score += 10;
  scoreEl.textContent = score;
}


// Animation Loop
let timeInterval = 500;
let animationId;
function animate() {
  animationId = requestAnimationFrame(animate)
  if(gameOver) {
    stopGame();
  }

  let now = new Date();
  if(now - dropStart > timeInterval) {
    piece.moveDown();
    dropStart = new Date();
  } 
}

function startGame() {
  gameOver = false;
  dropStart = new Date();
  piece = randomPiece();
  score = 0

  scoreEl.textContent = 0;
  boardGame.forEach(el => el.fill(0));

  statusGame.style.display = 'none';

  init();
  animate();
}

function draw(x, y, color) {
  c.fillStyle = color;
  c.fillRect(x*sq, y*sq, sq, sq);
  c.strokeStyle = 'black';
  c.strokeRect(x*sq, y*sq, sq, sq);
}

function stopGame() {
  console.log('game over');
  highestScore = Math.max(score, highestScore);
  highestScoreEl.textContent = highestScore;
  cancelAnimationFrame(animationId);

  statusGame.style.display = 'flex';
}

init();
