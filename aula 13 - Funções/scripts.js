function message(){
    // Escopo da função, tudo que será responsável em executar
    console.log("Hello World!")
}
message()

/*
 - Parâmetro: É a variável (escopo da função) que irá receber um valor em uma função

- Argumento: É o valor que é passado para a função

*/ 
// Recebe o parametro username e o conteúdo será exibido pelo argumento
function message(username){
    console.log("olá", username)
}
message("Rodrigo") // Argumento
message("Ana")

function sum(a, b){ // Parâmetro: Variavel que irá receber o valor
console.log(a +b)
}
sum(10,20) // Argumento: Valor que é passado na função
sum(3,5)

function joinText(text1, text2 = "", text3){ // O text2 = "" -> Será um valor padrão, string vazia!
    console.log(text1, text2, text3)
}

joinText("Matheus", "Lucas", "Santos")

// --------------------------------------------------//
// Parte 2

function soma(a, b){
    let = result = a + b

    return result
}

let response = sum(7, 7) // Chamada da função, fora da função!
console.log(response)


// Escopo de função, utilizando mesmo antes de ser declarada.
// Dá certo por que acontece o Hoisting, a função é içada!

showMessage("Olá, Matheus")

function showMessage(message){
    console.log(message)
    // Função dentro de função
    endLine()

    function endLine(){
        console.log("---------")
    }
}

showMessage("Tudo bem?")


// Exemplo com return, chamando ela fora do escopo.
function division(a, b){
    let resultado = a / b
    return resultado
}

let chamada = division(10, 5)
console.log(chamada)