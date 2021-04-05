var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(1680,750);
  database = firebase.database();
  console.log(database)
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("lightgreen");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}