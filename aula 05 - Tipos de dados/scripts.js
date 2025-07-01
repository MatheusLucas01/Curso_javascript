// Tipos primitivos

/*
String - Guarda texto
Number - Números
Boolean - True or false
null - Vazio
undefined - Indefinido

*/

let user_name = "matheus"
let email = "matheus@email.com"
console.log(typeof user_name) // type0f --> Qual o tipo?

// aspas duplas
console.log("one string with quotation marks")

// aspas duplas e aspas simples
console.log('Para aparecer a aspas duplas "usa-se assim".')

// Usando acento grave, permite escrever multiplas linhas
console.log(`
    Uma string com acento grave
    permite escrever múltiplas linhas
    `)

// Template literals
console.log(`Olá, ${user_name}. Você conectou com o E-mail: ${email}, seja bem vindo ao sistema!`)

let name = "Matheus"
let idade = 22

console.log(`Olá ${name}, você tem ${idade} anos!`)

// Tipo number
console.log(3)
console.log(4.5)
console.log(-3)

// Tipo boolean
let isLoading = true
console.log(typeof isLoading)

// Undefined e Null
let emptiness
console.log("O valor é ", emptiness) // Variável não definida

let empty = null
console.log("O valor é: ", empty) // Variável vazia

