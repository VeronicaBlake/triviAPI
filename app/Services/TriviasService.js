import { ProxyState } from "../AppState.js"
import Trivia from "../Models/Trivia.js"
import { api } from "./AxiosService.js"

class TriviasService{
    async getAllTrivia(url){
        const res = await api.get(url)
        console.log(res.data.results)

        ProxyState.next = res.data.next
        ProxyState.previous = res.data.previous

        let trivia = res.data.results.map(t => new Trivia(t))
        ProxyState.trivia = trivia
    }

    async shuffleAns(){
        var currentIndex = ProxyState.answers, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

        return array;
    }
    // shuffle(){
    //     if (Proxystate.type = 'multiple') {
    //     let randIndex = Math.floor(Math.random() * 3)
    //     let array = ProxyState.answers.splice(randIndex, 0, this.correct)
    //     console.log(array)
    // }
}

export const triviasService = new TriviasService()