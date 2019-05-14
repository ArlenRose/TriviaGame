const start= document.getElementById("start");
start.addEventListener("click",startQuiz);

const quiz= document.getElementById("quiz");
const question= document.getElementById("question");
const counter= document.getElementById("counter");
const timeGauge= document.getElementById("timeGauge");


let questions = [
   {
   question:"According to Sirius Black, which member of Durmstrang is a former Death Eater?",
       choiceA:"Fenrir Greyback",
       choiceB:"Severus Snape",
       choiceC:"Igor Karkoff",
       choiceD:"Eloise Midgeon",
           correct:"C",
   },

   {
   question:"What item do you have to tickle to be granted access into the Hogwarts kitchens?",
       choiceA:"A house elf",
       choiceB:"An apple",
       choiceC:"A pear",
       choiceD:"A mouse",
           correct:"C",
   },

   {
   question:"Cormac McLaggen tries out for which Quidditch position?",
       choiceA:"Keeper",
       choiceB:"Beater",
       choiceC:"Seeker",
       choiceD:"Chaser",
           correct:"A",
   },

   {
   question:"The core of Harry Potters wand is made of which element?",
       choiceA:"Dragon Heart String",
       choiceB:"Unicorn Hair",
       choiceC:"Phoenix Feather",
       choiceD:"Thestral Hair",
           correct:"C",
   },

   {
   question:"What book that Gilderoy Lockhart hold a book signing for in Flourish and Blotts?",
       choiceA:"Magical Me",
       choiceB:"Gadding with Ghouls",
       choiceC:"Year with the Yeti",
       choiceD:"Who am I?",
           correct:"A",
   },

   {
   question:"Which Horcrux does Harry Potter find in Bellatrix Lestranges vault?",
       choiceA:"Rowena Ravenclaw's Diadem",
       choiceB:"Helga Hufflepuff's Cup",
       choiceC:"Salazar Slytherins Ring",
       choiceD:"Tom Riddle's Diary",
           correct:"B",
   },

   {
   question:"The Marauder's Map was created by a group of friends formed of Wormtail, Padfoot, Prongs and...?",
       choiceA:"Snivelus",
       choiceB:"Mooney",
       choiceC:"Phlegm",
       choiceD:"Lupin",
           correct:"B",
   },

   {
   question:"Who hides a book on behalf of Harry in the Half-Blood Prince?",
       choiceA:"Ron Weasley",
       choiceB:"Rubeus Hagrid",
       choiceC:"Hermione Granger",
       choiceD:"Ginny Weasley",
           correct:"D",
   },

   {
   question:"What form does Proffesor Snapes Patronus take?",
       choiceA:"A Doe",
       choiceB:"A Snake",
       choiceC:"An Otter",
       choiceD:"A Stag",
           correct:"A",
   },

   {
   question:"What is the profession of Nicholas Flamel?",
       choiceA:"Wand Maker",
       choiceB:"Auror",
       choiceC:"Alchemist",
       choiceD:"Historian",
           correct:"C",
   },
];


function startQuiz(){
  start.style.display = "none";
  quiz.style.display = "";


  for (i = 0; i < questions.length; i++) {
    renderQuestion(i);
  }
   //counterRender();
}



function renderQuestion(runningQuestionIndex){
  let q = questions[runningQuestionIndex];
  $( "#quiz" ).before( "<div id='question'>" + (parseInt(runningQuestionIndex) + 1 ) + '. '+ q.question +"<ul><li><input type='radio' name='question"+runningQuestionIndex+"' value='A'>"+q.choiceA + "</li><li><input type='radio' name='question"+runningQuestionIndex+"' value='B'>"+q.choiceB + "</li><li><input type='radio' name='question"+runningQuestionIndex+"' value='C'>"+q.choiceC + "</li><li><input type='radio' name='question"+runningQuestionIndex+"' value='D'>"+q.choiceD + "</li></ul></div>");
}
//------------------------------------------------------------------//

const gaugeWidth = 100; // 10 seconds per question
let count = 0;
let questionTime = 100000;
const gaugeProgressunit = gaugeWidth/questionTime;



function counterRender(){
   if(count <= questionTime){
       counter.innerHTML = count;
       timeGauge.style.width = gaugeProgressUnit * count + "px";
       count++;
   }
  
   else{
       count = 0;
       answerIsWrong();
       if(runningQuestionIndex < lastQuestionIndex){
           runningQuestionIndex++;
           questionRender();
       }

       else{
           clearInterval(TIMER),
           scoreRender();
       }
   }
}

//------------------------------------------------------------------//


$('#submit').click(function() {
    let score = 0;
    var answers = $('form').serializeArray();
    for (i = 0; i < answers.length; i++) {

      ans_i = answers[i]['name'].replace("question", "")
      ans_val = answers[i]['value']
      if (questions[ans_i]['correct'] == ans_val){
        score +=1
      }else{
        $('#result').append((parseInt(ans_i)+1) + ', is wrong');
        console.log((parseInt(ans_i)+1) + ', is wrong');
      }

    }
    $('#result').append('Your score is '+ score+'/10');
    });
//------------------------------------------------------------------//

