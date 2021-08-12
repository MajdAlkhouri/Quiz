let questions = [
    {
        "question": "Das flächenmäßig kleinste Bundesland heißt??",
        "answer_1": "Berlin",
        "answer_2": "Hamburg",
        "answer_3": " Bremen",
        "answer_4": "Saarland",
        "right_answer": 3
    },

    {
        "question": "Was ist die “Goldene Himbeere”??",
        "answer_1": "Eine Nachspeise aus Russland ",
        "answer_2": "Das teuerste Schmuckstück der Welt",
        "answer_3": "Ein Preis für die schlechteste Leistung innerhalb eines Filmjahres",
        "answer_4": "Das Symbol einer Sekte ",
        "right_answer": 3
    },

    {
        "question": "Welche Gürtelfarbe existiert nicht im Kampfsport Karate?",
        "answer_1": "Schwarz",
        "answer_2": "rot",
        "answer_3": "grün",
        "answer_4": "Braun",
        "right_answer": 2
    },

    {
        "question": "Einen Feinschmecker nennt man auch?",
        "answer_1": "Gourmed",
        "answer_2": "Genießer",
        "answer_3": "Leckermäulchen",
        "answer_4": "Gourmet",
        "right_answer": 4
    },

    {
        "question": "Mit welcher Tiergruppe sind die Dinosaurier am engsten verwandt?",
        "answer_1": "Vögeln",
        "answer_2": "Eidechsen",
        "answer_3": "Alligatoren",
        "answer_4": "Affen",
        "right_answer": 1
    },
];

let rightquestions = 0;

let currentQuestion = 0;

let Audio_Win = new Audio('audio/win.mp3');
let Audio_Fail = new Audio('audio/wrong.mp3'); 



function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}

function showEndScreen() {
    document.getElementById('endscreen').style = ''; //End screen zu zeigen
    document.getElementById('questionbody').style = 'display : none'; // questionbody zu blenden
    document.getElementById('amount-Of-Questions').innerHTML = questions.length;
    document.getElementById('amount-right-questions').innerHTML = rightquestions;
    document.getElementById('header-image').src = 'img/win.jpg';
}

function showQuestion() {
    let isQuizFinnished = currentQuestion >= questions.length; //wenn aktuelle frage gleich oder gröẞer 7 ist dann
    if (isQuizFinnished) { //
        showEndScreen(); //dann  zeig die Endscreen  
    } else {
        updateProgressBar();

        showNextQuestion();
 
    }
}

function updateProgressBar(){
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100); // um den zahl zu runden !!
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}% `;

}

function showNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) { //selection ist ein String
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (richtigAnswerSelected(selectedQuestionNumber)) { //wenn die richtige antwort getroffen wurde
        document.getElementById(selection).parentNode.classList.add('bg-success');

        Audio_Win.play();
        rightquestions++;

    } else { // Überprüft, ob "selection" richtig ist und färbt die buttons rot oder grün
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        Audio_Fail.play();
    }

    document.getElementById('next-button').disabled = false;

}

function richtigAnswerSelected(selectedQuestionNumber){
 return  selectedQuestionNumber == questions['right_answer']; //WAS IST RETURN
}


function nextQuestion() {

    currentQuestion++; // die frage nummer erhöhen Z.B. von 0 auf 1


    document.getElementById('next-button').disabled = true; //??

    resetAnswerButtons();

    showQuestion();


}

function resetAnswerButtons() { // um die farben (rot und grün) beim nächsten frage zu entfernen.
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');



}


function restartGame() {
    document.getElementById('header-image').src = 'img/image.jpg';
    document.getElementById('questionbody').style = ''; //questionbody wieder zu zeigen 
    document.getElementById('endscreen').style = 'display:none'; //Endscreen auszublenden

    rightquestions = 0;

    currentQuestion = 0;

    init();
}

