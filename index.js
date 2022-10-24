const { exit } = require("process");
var readlineSync = require("readline-sync")
var score = 0
var userName = readlineSync.question(" you name please ");
console.log("welcome " + userName + " to the quizz of heet's life ! ")


var highScore = 0
function game(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase
     ()){
    console.log(" fantastic job ! you received a point ")
    score = score + 1 
    
  }else{
    console.log(" ooooops ! you lost a point ")
    score = score - 1 
  }
  console.log("your score is " + score);
  console.log("                ")
}
 var questions =[{
  question: " What's my age ? ",
  answer: "20"
} ,{
  question: "What is my hobby ? ",
  answer: "reading"
},{
  question: "my favourite song ? ",
  answer: "save your tears"
},{
  question: "What is my favourite movie ? ",
  answer: "fight club"
},{
  question: "my cheat snack ? ",
  answer: "vadapav"
}
  ]

for (var i=0; i< questions.length; i++){
  var currentQuestion = questions[i]
  game(currentQuestion.question, currentQuestion.answer)
}
console.log(" you achieved a score of ", score)
console.log("_______________")
console.log("you made a high score! ", score + " send a screenshot to get mentioned in the list ")
console.log("_______________")