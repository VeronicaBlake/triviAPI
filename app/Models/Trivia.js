
export default class Trivia{
    constructor({category, question, correct_answer, incorrect_answers, type}){
        this.category = category
        this.question = question, 
        this.answers = [correct_answer, incorrect_answers]
        this.type = type
        
    }

    get Template() {
        return `
         <div class="card">
                    <div class="card-body">
                        <h5>Category: ${this.category}</h5>
                        <h3 class="card-title">${this.question}</h3>
                        <h6>${this.answers}</h6>
                    </div>
                </div>`
    }
}


