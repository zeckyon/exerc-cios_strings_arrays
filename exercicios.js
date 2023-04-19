/*let array
console.log("a.", array)

array = null
console.log('b.', array)

array = [3, 4, 5, 6 ,7 ,8 ,9 ,10, 11, 12, 13]
console.log("c. ", array.length)

let i = 0
console.log("d. " , array[i])

array[i+1] = 19
console.log("e. ", array)

const valor = array[i+6]
console.log('f .', valor)*/

/*const frase = prompt("Digite uma frase:")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)*/

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima no console a seguinte mensagem:
// O e-mail ... foi cadastrado com sucesso.
// Seja bem vindo(a), ...

/*let nomeUsuario = prompt("Digite seu nome:")
let emailUsuario = prompt("Digite seu e-mail:")

alert("O e-mail " + emailUsuario + " foi cadastrado com sucesso! \n\nSeja bem vindo(a), " + nomeUsuario + ".")*/

//1. Faça um programa, seguindo os passos:
//a) Crie um array vazio e guarde-o em uma variável, chamada "listaDeTarefas"
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazena-as, uma por uma, no array
//c) Imprima o array no console
//d) Peça ao usuário que digite o *indice* de uma tarefa que ele já realizou: 0,1,2
//e) Remova da lista o item de índice que o usuário escolheu
//f) Imprima o array no console

/*let listaDeTarefas = []
listaDeTarefas[0] = prompt("Cite a primeira tarefa por fazer no dia de hoje:")
listaDeTarefas[1] = prompt("Cite a segunda tarefa por fazer no dia de hoje:")
listaDeTarefas[2] = prompt("Cite a terceira tarefa por fazer no dia de hoje:")

alert("Tarefas por fazer:\n\n" + listaDeTarefas[0] + "," + listaDeTarefas[1] + "," +  listaDeTarefas[2])

let i = prompt("Digite qual a tarefa já realizada: 0,1 ou 2:")

listaDeTarefas.splice(i, 1)

alert(listaDeTarefas) */

//2. Imprima uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços.
/*
let frase = prompt("Digite uma frase:");
frase.trim
let array = frase.split(' ');
alert(array)
console.log(array) */


//3. Dado o array["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice
// quanto o tamanho do array.
/*
let listaFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let i = listaFrutas.indexOf(prompt("Digite a fruta que deseja encontrar o índice:"))

alert("Abacaxi se encontra no índice " + i + " e a array possui " + listaFrutas.length + " elementos.")*/

//4. Faça um programa que contenha um array com 5 das suas comidas favoritas, armazenado em uma variável. Em seguida, siga os passos:
//a) Imprima no console o array completo
//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas, *uma embaixo da outra*"
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista:

/*let comidasFav = ["Pizza" , "Lasanha", "Strogonoff", "Xis Bacon", "Churrasco"]

console.log(comidasFav)

alert("Essas são as minhas comidas favoritas:\n\n" + comidasFav[0] + "\n" + comidasFav[1] + "\n" + comidasFav[2] + "\n" + comidasFav[3] + "\n" + comidasFav[4])

let novaComida = prompt("Digite uma outra comida favorita:")
comidasFav.splice(1, 1, novaComida)
alert("Essas são as minhas comidas favoritas:\n\n" + comidasFav[0] + "\n" + comidasFav[1] + "\n" + comidasFav[2] + "\n" + comidasFav[3] + "\n" + comidasFav[4])*/


//5. Crie um script que pergunte 3 números ao usuário, coloque em uma array, depois exiba tal array. Modifique os elementos do array de modo que a sequencia de números
// ficar ao contrário. Ou seja, se digitou: 1, 2, 3
// Vai aparecer: 3, 2, 1

let numeros = [
    prompt("Digite um número:"),
    prompt("Digite outro número:"),
    prompt("Digite outro número:")
]

alert(numeros.reverse())

