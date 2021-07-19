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
    
}

export const triviasService = new TriviasService()