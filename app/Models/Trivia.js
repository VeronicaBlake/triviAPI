
export default class Trivia{
    constructor({question, correct_answer, incorrect_answers}){
        this.question = question, 
        this.correctAnswer = correct_answer,
        this.incorrectAnswers = incorrect_answers
    }

    get Template() {
        return `
         <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${this.question}</h5>
                        <p class="btn btn-primary">${this.correctAnswers}</p>
                        <p class="btn btn-primary">${this.incorrectAnswers}</p>
                    </div>
                </div>`
    }
}


