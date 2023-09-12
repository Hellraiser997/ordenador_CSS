/**
 * Aqui é criada uma função para organização das propriedade a partir da const "propriedadesOrdenadas"...
 * ... usando os métodos "slice()" e "sort()" para organizar as propriedades;
 * Uma mensagem é mostrada ao usuário pelo console.log;
 * É utilizado o "forEach" para que os itens sejam mostrados separados em linhas.
 */
export function mostrarPropriedadesOrdenadas(propriedades) {
    const propriedadesOrdenadas = propriedades.slice().sort();
    console.log("Propriedades CSS ordenadas A-Z:");
    propriedadesOrdenadas.forEach(prop => console.log(prop))
}