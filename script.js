let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "lady Gaga",
        "answer_3": "Tim Berners-lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },

    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": " &lt;frameset&gt;",
        "right_answer": 2
    },

    {
        "question": "Wie definiert man in JavaScript eine Variable ?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right_answer": 4
    },

    {
        "question": "Wie wählst du alle Elemente vom typ &lt;a&gt; mit dem attribut title aus?",
        "answer_1": "a [title] {...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a=title {...}",
        "right_answer": 1
    },
];

let rightquestions = 0;

let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}



function showQuestion() {

    if (currentQuestion >= questions.length) {
        // TODO : Show End Screen

        document.getElementById('endscreen').style = '';
        document.getElementById('questionbody').style = 'display : none';

        document.getElementById('amount-Of-Questions').innerHTML = questions.length;

        document.getElementById('amount-right-questions').innerHTML = rightquestions;

    } else {

        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;

        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];

    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection)
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');

        rightquestions++;

    } else {

        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');

    }

    document.getElementById('next-button').disabled = false;

}


function nextQuestion() {

    currentQuestion++; // die frage nummer erhöhen Z.B. von 0 auf 1


    document.getElementById('next-button').disabled = true;

    resetAnswerButtons();

    showQuestion();


}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');



}



