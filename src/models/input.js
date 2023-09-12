//Importação da 'const rl' para cá, uma vez que não é preciso criar uma nova
//A criação de uma nova constante pode levar a problemas como duplicação dos caracteres digitados
import {rl} from "../../app.js"

/**
 * Aqui, é definida uma função na qual o usuário utiliza o prompt para inserir os dadoss/propriedades CSS
 * Esta retornará uma promessa, e dentro dela é utilizado a "rl.question" para que seja mostrado um prompt...
 * ... e aguarde a entrada do usuário. Este recebe como argumento o prompt e um "resolve", que serve como callback.
 */
export function entradaUsuario(prompt) {
    return new Promise(resolve => {
        rl.question(prompt, resolve)
    })
}