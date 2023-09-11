import {rl} from "../../app"

export function entradaUsuario(prompt) {
    return new Promise(resolve => {
        rl.question(prompt, resolve)
    })
}