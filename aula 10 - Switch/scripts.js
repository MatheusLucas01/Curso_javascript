// O switch case atua como se fosse um loop, analisando o valor de cada caso, e executando o bloco de código correspondente ao caso que for verdadeiro. Com o break, o loop é interrompido!

let notes = 6

switch (notes) {
    case 1:
        console.log("Consultar pedido")
        break
    case 2:
        console.log("Falar com atendente")
        break
    case 3:
        console.log("Cancelar Pedido")
        break
    default: // Caso não exista nenhuma condição.
        console.log("Opção Inválida")
}

let age = 1

switch (age) {
    case 1:
        console.log("Você é menor!")
        break
    case 2:
        console.log("Você é maior!")
    default:
        console.log("Opção onválida")

}
let note = 2

switch (note) {
    case 1:
        console.log("Errou")
        break
    case 2:
        console.log("Acertou")
        break
    default:
        console.log("Opção inválida.")
}
