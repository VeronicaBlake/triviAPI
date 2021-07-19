import { ProxyState } from "../AppState.js"
import { triviasService } from "../Services/TriviasService.js";

function _draw() {
  let trivia = ProxyState.trivia
  let template = ''
  trivia.forEach(p => template += p.Template)
  document.getElementById('trivia').innerHTML = template

//   document.getElementById('buttons').innerHTML = `
//   <button type="button" class="btn btn-warning" ${ProxyState.previous ? '' : 'disabled'}
//     onclick="app.triviasController.getMore('previous')">previous</button>
//   <button type="button" class="btn btn-success" ${ProxyState.next ? '' : 'disabled'}
//     onclick="app.triviasController.getMore('next')">next</button>`


}

export default class TriviasController{
     constructor() {
        ProxyState.on('trivia', _draw)
        this.getAll()
}

async getAll() {
    try {
      await triviasService.getAllTrivia()
    } catch (error) {
      window.alert("Something went wrong: " + error)
    }
  }
  shuffle(){
      triviasService.shuffle()
  }
}