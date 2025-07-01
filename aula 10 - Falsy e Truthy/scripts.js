/*
Falsy quando um valor é considerado false e TRUTHY quando é considerado verdadeiro em contextos o
nde um boolean é obrigatório (condicionais e loops)
*/
console.log("### Exemplos de falsy ###")
console.log(false ? "Verdadeiro" : "Falso")
console.log(0 ? "Verdadeiro" : "Falso")
console.log(-0 ? "Verdadeiro" : "Falso")
console.log("" ? "Verdadeiro" : "Falso")
console.log(null ? "Verdadeiro" : "Falso")
console.log(undefined ? "Verdadeiro" : "Falso")
console.log(NaN ? "Verdadeiro" : "Falso")

// Exemplos de Truthy
console.log("### Exemplos de Truthy ###")
console.log(true ? "Verdadeiro" : "Falso")
console.log(1 ? "Verdadeiro" : "Falso")
console.log(-1 ? "Verdadeiro" : "Falso")
console.log({} ? "Verdadeiro" : "Falso") // Objeto vazio é verdadeiro
console.log([] ? "Verdadeiro" : "Falso") // array vazio é verdadeiro
console.log(" " ? "Verdadeiro" : "Falso") // espaço
console.log(Infinity ? "Verdadeiro" : "Falso") // Número infinito