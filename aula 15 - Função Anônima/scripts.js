// Função anõnima (não possui nome)
const showMessage1 = function(){
    return "Olá, Matheus."
}
console.log(showMessage1())

const showMessage2 = function(message, name){ // Message e name são parâmetros, que são as variáveis que recebem valor na função.
    return message + name
}
console.log(showMessage2("Olá ", "Lucas")) // Argumentos: Valores passados na função



const age = function(message, name){
    return message + name
}

console.log(age("Bom dia ", 22)) 