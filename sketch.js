var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =100;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var alien_img,alien;
var player_img;
var player1score =100;
var player2score =100;

function preload(){
 player_img =loadImage("player3.gif");
 alien_img = loadImage("center.gif");
 back_img = loadImage("space.gif");
  //fruitGroup = new Group();
  alienGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}