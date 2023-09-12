import {rl} from "../../app.js"

export function entradaUsuario(prompt) {
    return new Promise(resolve => {
        rl.question(prompt, resolve)
    })
}