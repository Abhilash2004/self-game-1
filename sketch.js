var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(255,255,255);  
  if(playerCount === 3){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
}