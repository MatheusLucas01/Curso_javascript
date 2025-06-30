try {
    // Tenta executar algo
    console.log(result)
} catch (error) {
    // CAPTURA o erro para tratar
    console.log(error)
} finally { // Indepedente se dar certo ou errado, o finally encerra a condição
    console.log("Fim")
}

let result = 0

try {
    if (result === 0)
        throw new Error("O valor é igual a zero")
} catch (error) {
    console.log(error)

} finally {
    console.log("fIM")
}

let age = 12
try {
    console.log(
        age >= 18
            ? "Você é maior"
            : "Você é menor"
    )
} catch (error) {
    console.log("Opção inválida")
}