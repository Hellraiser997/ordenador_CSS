//Importação dos recursos do readline;
import readline from "readline";
import { coletaPropriedades } from "./src/controllers/coleta.js";

//Aqui é criada a constande readline para criar a interface;
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Aqui é criada uma função para organização das propriedade a partir da const "propriedadesOrdenadas"...
 * ... usando os métodos "slice()" e "sort()" para organizar as propriedades;
 * Uma mensagem é mostrada ao usuário pelo console.log;
 * É utilizado o "forEach" para que os itens sejam mostrados separados em linhas.
 */
function mostrarPropriedadesOrdenadas(propriedades) {
    const propriedadesOrdenadas = propriedades.slice().sort();
    console.log("Propriedades CSS ordenadas A-Z:");
    propriedadesOrdenadas.forEach(prop => console.log(prop))
}

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
