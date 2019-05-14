
const start= document.getElementById("start");

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    counterRender();
}

const quiz= document.getElementById("quiz");
const question= document.getElementById("question");
const counter= document.getElementById("counter");
const timeGauge= document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");


let questions = [
    {
    question:"According to Sirius Black, which member of Durmstrang is a former Death Eater?",
        choiceA:"Fenrir Greyback",
        choiceB:"Severus Snape",
        choiceC:"Igor Karkoff",
        choiceD:"Eloise Midgeon",
            correct:"Igor Karkoff",
    },

    {
    question:"What item do you have to tickle to be granted access into the Hogwarts kitchens?",
        choiceA:"A house elf",
        choiceB:"An apple",
        choiceC:"A pear",
        choiceD:"A mouse",
            correct:"A pear",
    },

    {
    question:"Cormac McLaggen tries out for which Quidditch position?",
        choiceA:"Keeper",
        choiceB:"Beater",
        choiceC:"Seeker",
        choiceD:"Chaser",
            correct:"Keeper",
    },

    {
    question:"The core of Harry Potters wand is made of which element?",
        choiceA:"Dragon Heart String",
        choiceB:"Unicorn Hair",
        choiceC:"Phoenix Feather",
        choiceD:"Thestral Hair",
            correct:"Phoenix Feather",
    },

    {
    question:"What book that Gilderoy Lockhart hold a book signing for in Flourish and Blotts?",
        choiceA:"Magical Me",
        choiceB:"Gadding with Ghouls",
        choiceC:"Year with the Yeti",
        choiceD:"Who am I?",
            correct:"Magical Me",
    },

    {
    question:"Which Horcrux does Harry Potter find in Bellatrix Lestranges vault?",
        choiceA:"Rowena Ravenclaw's Diadem",
        choiceB:"Helga Hufflepuff's Cup",
        choiceC:"Salazar Slytherins Ring",
        choiceD:"Tom Riddle's Diary",
            correct:"Helga Hufflepuff's Cup",
    },

    {
    question:"The Marauder's Map was created by a group of friends formed of Wormtail, Padfoot, Prongs and...?",
        choiceA:"Snivelus",
        choiceB:"Mooney",
        choiceC:"Phlegm",
        choiceD:"Lupin",
            correct:"Mooney",
    },

    {
    question:"Who hides a book on behalf of Harry in the Half-Blood Prince?",
        choiceA:"Ron Weasley",
        choiceB:"Rubeus Hagrid",
        choiceC:"Hermione Granger",
        choiceD:"Ginny Weasley",
            correct:"Ginny Weasley",
    },

    {
    question:"What form does Proffesor Snapes Patronus take?",
        choiceA:"A Doe",
        choiceB:"A Snake",
        choiceC:"An Otter",
        choiceD:"A Stag",
            correct:"A Doe",
    },

    {
    question:"What is the profession of Nicholas Flamel?",
        choiceA:"Wand Maker",
        choiceB:"Auror",
        choiceC:"Alchemist",
        choiceD:"Historian",
            correct:"Alchemist",
    },
];

let lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0;

function renderQuestion(){
let q = questions =[runningQuestionIndex];
question.innerHTML = "<p>" + q.question + "</p>";
choiceA.innerHTML = q.choiceA;
choiceB.innerHTML = q.choiceB;
choiceC.innerHTML = q.choiceC;
choiceD.innerHTML = q.choiceD;
}

//------------------------------------------------------------------//

const gaugeWidth = 10000; // 10 seconds per question
let count = 0;
const gaugeProgressUnit = gaugeWidth/questionTime;

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

let score = 0;
function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
        score++;
        answerIsCorrect();
    }
    else{
        answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex){
        count = 0;
        runningQuestionIndex++;
        questionRender();
    }
    else{
        clearInterval(TIMER);
    }
}

//------------------------------------------------------------------//