const Data = [
  {
    question: "1 + 1 = ?",
    a: "2",
    b: "1",
    c: "10",
    d: "a and c",
    correctAnswers: "d",
  },
  {
    question: "95 decimal to binary?",
    a: "1111110",
    b: "0011100",
    c: "1011111",
    d: "1011100",
    correctAnswers: "c",
  },
  {
    question: "01111011 binary to decimal?",
    a: "123",
    b: "95",
    c: "88",
    d: "100",
    correctAnswers: "a",
  },
  {
    question: "What was the first capital of Somalia?",
    a: "Garoowe",
    b: "Kismayo",
    c: "Muqdisho",
    d: "Hargisa",
    correctAnswers: "c",
  },
  {
    question:
      "for ( let i = 1; i <= 10; i++){ if(i % 3 === 0){ i++; continue;  } console.log(i); };",
    a: "0 2 3 5 9 ",
    b: "1 2 5 8",
    c: "3 5 7 8",
    d: "All",
    correctAnswers: "b",
  },
];


const quiz = document.querySelector('#quiz');
const ans = document.querySelectorAll('.answer');
const questionElement = document.querySelector('#question');
const a_ans = document.querySelector("#a-ans")
const b_ans = document.querySelector("#b-ans")
const c_ans = document.querySelector("#c-ans")
const d_ans = document.querySelector("#d-ans")
const btn= document.querySelector("#submit")


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  selectAns()

  const currentData = Data[currentQuiz];

  questionElement.innerHTML = currentData.question;
  a_ans.innerHTML = currentData.a;
  b_ans.innerHTML = currentData.b;
  c_ans.innerHTML = currentData.c;
  d_ans.innerHTML = currentData.d;
}

function selectAns() {
  ans.forEach(ans => ans.checked = false)
}

function getSelected() {
  let answer


  ans.forEach(ans => {
    if(ans.checked){
      answer = ans.id
    }
  })

  return answer;
}

btn.addEventListener('click', () =>{
  const answer = getSelected()

  if(answer){
    if (answer === Data[currentQuiz].correctAnswers) {
      score++
    }

    currentQuiz++

    if (currentQuiz < Data.length) {
      loadQuiz();
    }else {
    quiz.innerHTML = `
    <h2>Your ans ${score}/${Data.length} questions correctly</h2>
    <button class="reload" onclick="location.reload()">Reload</button>
    `;
    }
  }
})