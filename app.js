//Importação dos recursos do readline;
import readline from "readline";
import { coletaPropriedades } from "./src/controllers/coleta.js";
import { mostrarPropriedadesOrdenadas } from "./src/controllers/display.js";

//Aqui é criada a constande readline para criar a interface;
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Nesta função, é mostrada uma mensagem ao usuário a partir do console.log;
 * Após isso, aguarda o usuário inserir os dados e guarda-os na variável "propriedades";
 * Quando finalizada, serão mostrados os dados inseridos pelo usuário a partir da "mostrarPropriedadesOrdenadas";
 * "rl.close" apenas fechará a interface readline após tudo ser concluído.
 */
async function main() {
    console.log('Ordenador de propriedades CSS');
    const propriedades = await coletaPropriedades();
    mostrarPropriedadesOrdenadas(propriedades);
    rl.close();
}

/**
 * Aqui, a função 'main()' é chamanada para coleta e ordenação das propriedades;
 * Caso haja algum erro durante a execução da função, será alertado a partir do console.log;
 * 'rl.close' é chamado para encerrar a interface.
 */
main().catch(error => {
    console.log("Ocorreu um erro:", error.message);
    rl.close
})
