import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function entradaUsuario(prompt) {
    return new Promise(resolve => {
        rl.question(prompt, resolve)
    })
}

async function coletaPropriedades() {
    const propriedades = [];
    while (true) {
        const propriedade = await entradaUsuario(
            'Digite aqui as propriedades desejadas:'
        )
        if (propriedade.toLocaleUpperCase() === 'SAIR') {
            return propriedades;
        } else if (isNaN(propriedade)) {
            propriedades.push(propriedade);
        }
    }
}

function mostrarPropriedadesOrdenadas(propriedades) {
    const propriedadesOrdenadas = propriedades.slice().sort();
    console.log("Propriedades CSS ordenadas A-Z:");
    propriedadesOrdenadas.forEach(prop => console.log(prop))
}

async function main() {
    console.log('Ordenador de propriedades CSS');
    const propriedades = await coletaPropriedades();
    mostrarPropriedadesOrdenadas(propriedades);
    rl.close();
}

main().catch(error => {
    console.log("Ocorreu um erro:", error.message);
    rl.close
})
