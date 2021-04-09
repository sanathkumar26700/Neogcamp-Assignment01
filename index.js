var readlineSync = require('readline-sync');
 let score = 0;
var userName = readlineSync.question('HEY!! What\'s your name? ');
console.log('Welcome ' + userName +'!! let me check how well you know Sanath!');

function play(question,answer){
      var userAnswer = readlineSync.question(question);
  if(answer===userAnswer){
    console.log('Right answer :D');
    score++;
  }else{console.log('Wrong answer:(')}
console.log('Your Score:', score); 
}

var questions = [{
  question : "In which city does Sanath live in?",
  answer : "Bangalore"
},{
  question : "In which school did Sanath study in?",
  answer : "Prarthana"
},{
  question : "In which university is Sanath pursuing his UG?",
  answer : "Jain university"
},{
  question : "What is Sanath's favourite language?",
  answer : "Javascript"
},{
  question : "When will Sanath graduate from engineering ?",
  answer : "2022"
}
]
for(i=0; i < questions.length;i++){
  var currentquestion = questions[i];
  play(currentquestion.question,currentquestion.answer)
}
