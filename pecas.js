const listaDePecas = ["Ar condicionada", "Motor", "Amortecedor"]

console.log (listaDePecas)

if(listaDePecas.length < 10) {
    console.log("É possivel cadastrar mais peças")
} else { 
    console.log("Não há mais espaço na listanode")
}

var peso = 100

if(peso > 99) {
    console.log("Peso da peça está adequado")
} else {
    console.log("Peso insuficiente")
}

let nomePeca = "s";

if (nomePeca.length > 3) {
    console.log("Nome adequado!!")
} else if(nomePeca.length == 0) {
    console.log("O nome não pode ser vazio")
} else {
    console.log("O nome deve possuir mais de 3 caracteres")
} 

// = - > Atribuição de valor, recebe
// == - > Verifica se o valor é igual
// === - > Verifica se o valor, e o tipo de dado, são iguais 


switch (nomePeca.length) {
    case 0: 
        console.log("O nome não pode ser vazio")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve possuir mais de 3 caracteres")        
        break;

    default:
        console.log("Nome adequado")
        break;

}