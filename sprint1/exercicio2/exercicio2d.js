"use strict";
var teclado = require('prompt-sync')();
var list4 = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function alterImperativa(id) {
    console.log('O que deseja alterar: name ou bio?');
    var parameter = teclado();
    console.log("Digite o  que será inserido nesse campo a ser alterado");
    var value = teclado();
    for (var index in list4) {
        if (list4[index].id === id) {
            if (parameter === "bio") {
                list4[index].bio = value;
            }
            else if (parameter === "name") {
                list4[index].name = value;
            }
        }
    }
    console.log(list4);
}
function alterFunctional(id) {
    console.log('O que deseja alterar: name ou bio?');
    var parameter = teclado();
    console.log("Digite o  que será inserirdo nesse campo a ser alterado");
    var value = teclado();
    list4.map(function (person) {
        if (person.id === id) {
            if (parameter === 'bio') {
                person.bio = value;
            }
            else if (parameter === 'name') {
                person.name = value;
            }
        }
    });
    console.log(list4);
}
console.log("Função para alterar um registro usando paradigma funcional: \n");
alterFunctional(1);
console.log("\nFunção para alterar um registro usando paradigma imperativa: \n");
alterImperativa(2);
