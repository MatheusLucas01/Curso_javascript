// Escopo global, funciona em toda parte do código
var user = "Matheus"

// Escopo de bloco
{
    console.log(user)
}

/* 
A variável let, respeita o escopo em que ela foi criada, então só funciona lá.
Exemplo : A variável foi declarada dentro do bloco, então chamando ela fora, retornará erro. 
*/
{
    let idade = 18
    console.log(idade) // correto
}

console.log(idade) // incorreto

