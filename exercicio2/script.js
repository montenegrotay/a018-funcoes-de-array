//# Exercício 2
//Crie um array de números que contenha 8 números.
//Depois disso, utilize este array para criar duas funcões de array `map()`:
const numbers = [2, 4, 6, 8, 10, 12, 14, 16]

console.log(`Array numbers (original): ${numbers}`)

//1. A primeira deve retornar um novo array contendo os números múltiplicados por 3,
//Crie uma `const triplos`, 
//e guarde o valor do array nesta const;

const triplos = numbers.map(function(item){
    return item*3
})
console.log(`Multiplicados por 3: ${triplos}`)

//2. A segunda deve retornar um novo array contendo os números divididos por 2.
//Crie uma `const metades`, 
//e guarde o valor do array nesta const;

const numerosDivididosPor2 = numbers.map(function(item) {
    return item/2
})
console.log(`Dividos por 2: ${numerosDivididosPor2}`)
