/*
Operadores

7 (Exponenciação) -> **
6 Multiplicação -> *
5 
4
3
2
1

*/

var number = 2 + 3 * 4
console.log(number)

// Quando acrescenta-se o parenteses, ele é o primeiro a ser calculado!
var number = (2 + 3) * 3
// alert(number)

// Calculando média
let average = 5 + 8 + 7 / 3 // forma errada

// Forma correta, o que tá em parenteses será calculado primeiro.
let average2 = (7 + 5 + 10) / 3

// operadores lógicos
let one = 1
let two = 2

// Operador igual, porém olha pro conteúdo, não para o tipo.
console.log(one == two)

// Operador diferente, porém olha pro conteúdo, não para o tipo.
console.log(one != two)

// Estritamente igual a, olha para o (tipo e conteúdo)
let three = 3
let five = 5
console.log(three === five)
console.log(five === "5")

//Estritamente diferente (tipo e conteúdo)
console.log(five !== three)

