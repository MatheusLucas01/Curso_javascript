// Como declarar uma variável sem valor, a variável var sobrescreve as outras, é mutável
var user
console.log(user)

// Variável com valor
var email = "matheus@email.com"

// Substituir o valor da variável 
email = "joao@email.com"
console.log(email)

var product = "Teclado"
var Product = "Mouse"
console.log(product, Product)

// Javascript é case sensitive, ou seja, sensivel a letras maiusculas e minusculas

// variávies let podem ser atualizadas, mas não declaradas novamente.
let user
console.log("Matheus Lucas")

let user = "Matheus@email.com"
console.log(email)


email = "matheuslucas@email.com"
console.log(email)

//Variável com valor fixo, não pode ser alterado!!
const number = 43
console.log(number)
