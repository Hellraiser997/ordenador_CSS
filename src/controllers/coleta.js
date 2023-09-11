import { entradaUsuario } from "../models/input.js";


/**
 * Aqui, um loop é criado para que toda vez que o usuário digite uma propriedade, ela seja guardada no array...
 * ... e uma nova possa ser digitada logo em seguida.
 * Caso o usuário deseje sair, basta digitar "sair". 
 * Caso a propriedade não seja um número, esta será guardada no array. Caso seja, esta será ignorada. 
 */
export async function coletaPropriedades() {
    const propriedades = [];
    while (true) {
        const propriedade = await entradaUsuario(
            'Digite aqui as propriedades desejadas:'
        )
        if (propriedade.toLocaleUpperCase() === 'SAIR') {
            return propriedades;
        } else if (isNaN(propriedade)) {
            propriedades.push(propriedade);
        } else if (!isNaN(propriedades)) {
            console.log("Insira uma propriedade válida!")
        }
    }
}