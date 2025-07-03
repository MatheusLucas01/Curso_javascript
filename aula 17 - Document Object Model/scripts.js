// Obter título da página
console.log(document.title)

// Mostra as propriedades do objeto
console.dir()

// Para observar os eventos que acontecem
window.addEventListener("load", () => {
    console.log("Página carregada")
})

// Após o clique irá mostrar as informações da página
// addEventListener("click", (event) => {
//     event.preventDefault()
//     console.log(event)

// Mostra as informações do elemento que foi clicado
//     console.log(event.target)
// })

const ul = document.querySelector("ul")

ul.addEventListener("scroll", () => {
    console.log(ul.scrollTop)
})

// Adicionando evento no elemento button
const button = document.querySelector("button")
button.addEventListener("click", (event) => {
    event.preventDefault()

    console.log("Clicou")
})