// Arrow function (função de seta)
const showMessage = () => {
    console.log("Oi")
}

showMessage()

/*
Usando arrow function + parametros + interpolação + argumentos ; 

arrow function -> const funcao = () => {}
parametros -> username, email --> Variaveis que recebem valor na função
interpolação -> `${username} ${email}`
argumentos -> "Matheus", "matheus@gmail.com" -> Valor que é passado na função.

*/
const showMessage2 = (username, email) => {
    console.log(`Olá ${username}, seu email é: ${email}`)
}

showMessage2("Matheus", "matheus@gmail.com")

const messages = (name, age) => {
    console.log(`Olá ${name}, seja bem vindo ao sistema. Legal você ter ${age} anos de idade.`)
}

messages("Matheus ", 22)
