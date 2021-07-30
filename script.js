const quizData = [{
        question: 'How old is billy',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is this theme?',
        a: 'winter',
        b: 'spring',
        c: 'fall',
        d: 'summer',
        correct: 'd'
    },
    {
        question: 'What is the most used programming language',
        a: 'Java',
        b: 'C++',
        c: 'Ruby',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Where is Olympics 2020 held?',
        a: 'Tokyo',
        b: 'Kyoto',
        c: 'Okinawa',
        d: 'Osaka',
        correct: 'a'
    },
    {
        question: 'Which is the most used version control software now?',
        a: 'Microsoft Word',
        b: 'Microsoft Git',
        c: 'Git',
        d: 'Eclipse',
        correct: 'c'
    }
]

const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');


let currentQuiz = 0;
let score = 0;
let answer = undefined;

loadQuiz();

function loadQuiz() {

    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {



    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Try Again</button>`;
        }
    }


});