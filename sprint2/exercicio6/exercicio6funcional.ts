/**
 * Importe da classe funcional
 */
import { Funcional } from "./funcional";

class PeopleDataUsingFuncional extends Funcional{

    /**
     * Construtor criado para receber a lista com os dados das pessoas e posterior tratamento
     * @param list Recebe a lista com os dados para análise
     */
    constructor(list: Person[]) {
        super(list);
    }
}

let list : Person[] = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
]

const personBio = new PeopleDataUsingFuncional(list);
personBio.findBioFunctional(2);
console.log();
personBio.findNameFunctional(1);
console.log();
personBio.deleteFunctional(3);
console.log();

let teclado = require('prompt-sync')();
console.log('O que deseja alterar: name ou bio?');
const parameter: string = teclado();
console.log("Digite o  que será inserido nesse campo a ser alterado");
const value: string = teclado();

personBio.alterFunctional(4, parameter, value);
