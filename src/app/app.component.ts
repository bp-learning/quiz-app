import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    // #ViewChild
    private currentQuiz = 0;
    private answer: string | null = null;
    private quizData = [
        {
            question: "Which language runs in a web browser?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },

        {
            question: "What does CSS stand for?",
            a: " Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats",
            correct: "b",
        },

        {
            question: "What does HTML stands for?",
            a: "HyperText Markup Language",
            b: "HyperText and links Markup Language",
            c: "HighText Machine Language",
            d: "None of these",
            correct: "a",
        },

        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "1991",
            correct: "b",
        },
    ];

    public questionText = "Question Text 1";
    public answer1 = "";
    public answer2 = "";
    public answer3 = "";
    public answer4 = "";
    public score = 0;
    public quizLength = this.quizData.length;
    public showResult = false;
   

    loadQuiz() {
        console.log("Loading Quiz");
        // deselectAnswers()

        const currentQuizData = this.quizData[this.currentQuiz];

        console.log(currentQuizData);

        this.questionText = currentQuizData.question;
        this.answer1 = currentQuizData.a;
        this.answer2 = currentQuizData.b;
        this.answer3 = currentQuizData.c;
        this.answer4 = currentQuizData.d;
    }

    submitAnswer(value: string) {
        this.answer = value;
    }

    submitButtonClickHandler() {
        console.log("Submit Button clicked")

        const answer = this.answer;

        if (answer) {
            if (answer === this.quizData[this.currentQuiz].correct) {
                this.score++;
            }

            this.currentQuiz++;

            if (this.currentQuiz < this.quizData.length) {
                this.loadQuiz()
            }
            else {
                this.showResult = true;
            }
        }
    }

    ngOnInit() {
        this.loadQuiz();
    }

}

/*




function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer;

  answerEls.forEach(answerEl => {
      if (answerEl.checked) {
          answer = answerEl.id
      }
  })

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
      if (answer === quizData[currentQuiz].correct) {
          score++;
      }

      currentQuiz++;

      if (currentQuiz < quizData.length) {
          loadQuiz()
      }
      else {
          quiz.innerHTML = `
              <h2>You answered ${score} / ${quizData.length} questions correctly </h2>

              <button onclick="location.reload()">Reload</button>
          `
      }
  }
})
*/
