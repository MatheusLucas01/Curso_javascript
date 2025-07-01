/* Operadores condicionais ternários e if
*/

let age1 = 25
console.log(
    age1 >= 25 // Condição
        ? "Você pode comprar arma" // Se verdadeiro
        : "Você ainda não tem idade suficiente para comprar arma!") // Se falso

// let userName = prompt("Digite seu nome: ")
// let age = Number(prompt("Digite sua idade: "))

// window.alert(
//     `Olá ${userName}, seja bem vindo ao sistema, ótimo que você tenha ${age} anos.`,
//     age >= 18 // Condição
//     ? "Você pode entrar, já é maior de idade."
//     : "Infelizmente você não pode entrar nessa área, por ser menor."
// )

// Exemplos com if, é necessário usar as chaves para que todas as linhas sejam verificadas 
let hour = 11

if (hour <= 12) {
    console.log("Bom dia")
} else {
    console.log("Boa tarde")
}

// Operador ternário
let horas = 12
console.log(
    horas >= 12
        ? "Boa tarde"
        : "Bom dia"
)

// Exemplo if
let idade = 15
if (idade <= 18) {
    console.log("Você não pode digirir")
} else {
    console.log("Você pode dirigir.")
}

/*  == Verifica se o conteúdo é igual
    === Verifica se o conteúdo e o tipo são iguais. (Estritamente igual)
*/

// Exemplo operador ternário
let color = "Azul"
console.log(
    color != "Azul"
        ? "Diferente"
        : "Igual"
)

let tamanho = 23
console.log(
    tamanho <= 23
        ? "Número menor que 23"// Se verdadeiro
        : "Metragem maior que 23"
    // Se falso
)

let nota = 8
console.log(
    nota <= 5
        ? "Reprovado"
        : "Aprovado"
)
// Operador condicional com if, else if e else.
let disparos = 20

if (disparos <= 10) {
    console.log("Você atirou pouco!")
}
else if (disparos > 20) {
    console.log("Muito bem atirou muito")
}
else {

}