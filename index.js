var inputLelo = require('readline-sync');
var score=0;
// var q = ["Do I live in Kashmir?(y/n)" , "What is my age?"];
// var a = ["n","23"];
var QnA = [
  {
    q: "What is my name?",
    a: "Anuja Mukherjee",
    option: ["Ranjini Mukherjee", "Pulkit Mathur", "Anuja Mukherjee"]
  },
  {
    q: "Where do I work?",
    a: "Tech Mahindra",
    option: ["Tech Mahindra","TCS","CTS"]
  },
  {
    q:"what is MY fav Fruit?",
    a:"Mango",   
    option: ["Mango", "Orange", "Banana"]


  },
  {
    q:"what is my fav food ?",
    a: "Chinese",
    option: ["Biriyani","Chinese","Italiyan"]
  },
  {
    q:"where is my home town ?",
    a: "Kolkata",
    option: ["Kolkata","Durgapure","Asansole"]
  },
  {
    q:"what is my education qualifiation ?",
    a:"b.tech",
    option: ["b.tech","b.pharm","medicine"]
  },
  {
    q: "what is my fev dress ?",
    a: "lahenga",
    option: ["saree","lahenga","gown"]
  },
  {
    q:"Who is my favourite singer?",
    a:"Shreya Ghosal",
    option:["Shreya Ghosal","Arijit Singh","Atif Aslam"]
  },
  {
    q:"What's my favourite Movie?",
    a: "Interstellar",
    option:["Avengers","Life of Pi","Interstellar"]
  },
    {
    q:"What is my worst habit?",
    a: "Anger",
    option:["Anger","Perfectionism","Gossip"]
  },
  {
    q:"What's is my favourite subject?",
    a:"Computer Science",
    option:["Computer Science","Astrophysics","Politics"]
  },
   {
     q:"what is my fev story book ?" ,
     a: "The Magic thinking big",
     option :["The Magic thinking big","Wings of Fire","2 states"]
   },
   {
    q:"Whom do I admire the most?",
    a:"Netaji Subhas",
    option:["Vivekananda","Netaji Subhas","Gandhiji"]
  },
];


function check(obj){
  console.log(obj.q);
  var userAns = inputLelo.keyInSelect(obj.option,"Enter You Choice?",{cancel:false});
  if(obj.option[userAns] === obj.a){
    score = score+1;
    console.log("Right your score = "+score);
  } else {
    console.log("Wrong your score = "+score);
  }
}

for(var i =0;i<QnA.length;i++){
  check(QnA[i]);
}
console.log("Your final score is = "+score);
