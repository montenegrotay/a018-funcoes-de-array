//# Exercício 1

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

console.log(objeto) //para visualizar o objeto.


const objeto2 = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//Crie duas funcões que recebem como parâmetro um objeto.
//1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

function acessandoPropriedadeObjeto (objeto) {
    for(let propriedade in objeto)
    objeto[propriedade] = objeto[propriedade].toUpperCase()
   
    return objeto
}
acessandoPropriedadeObjeto(objeto)
console.log(objeto)


//2. A segunda deve retornar os valores do objeto como texto corrido.

function acessandoValoresObjeto (objeto) {
    textoCorrido = objeto.nome + objeto.profissao + objeto.username + objeto.senha

}
acessandoValoresObjeto(objeto)
console.log(textoCorrido)


//3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. 
//A funcão deve passar o objeto como argumento da funcão de callback,
//e em seguida imprimir o valor retornado.

//Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
//Repita o processo para a funcão 2




function acessandoObjeto (objeto, callback) {
    callback(objeto)
    console.log(objeto)
}
acessandoObjeto (objeto2,acessandoPropriedadeObjeto)
console.log(objeto2)

acessandoValoresObjeto(objeto2, acessandoValoresObjeto)
