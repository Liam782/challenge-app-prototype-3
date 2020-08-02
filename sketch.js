var canvas;

var gameState = 0;
var playerCount;
var allPlayers ;
var progress = 0;
var database;

var form, player, game;

var kid1,kid2,kid3,kid4;
var kid1Img,kid2Img,kid3Img,kid4Img;

var kids = [];

var logo,logoImg;

function preload(){
  kid1Img = loadImage('images/sprite1.png');
  kid2Img = loadImage('images/sprite2.png');
  kid3Img = loadImage('images/sprite3.png');
  kid4Img = loadImage('images/sprite4.png');

  logoImg = loadImage('images/App logo 3.png');
}


function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  app = new App();
  app.getState();
  app.start();
}


function draw(){
  if(playerCount === 3){
    app.update(1);
  }
  if(gameState === 1){
    clear();
    app.play();
  }
  if(gameState === 2){
    app.end();
  }
}
