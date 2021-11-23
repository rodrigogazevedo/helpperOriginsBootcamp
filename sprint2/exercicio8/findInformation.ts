import { ConcreteFactory } from "./concreteFactory";
import { Factory } from "./factory";

/**
 * Lista de pessoas
 */
let list : Person[] = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."},
    {"id" : 5, "name": "Jean David Ichbiah", "bio": "Jean Ichbiah foi um cientista da computação e o chefe de desenvolvimento inicial da linguagem Ada, uma linguagem de proposito geral e fortemente tipada com compiladores validados certificados.", "inventor": "Linguagem Ada"}
]


/**
 * A função funciona com uma instância de uma informação concreta, porém usando sua interface base.
 * @param person Interface utilizada para fazer as buscas de informações
 */
function findInformation(person: Factory) {
    console.log(person.showName(2, list));
    console.log(person.showBio(1, list));
    console.log();
    console.log(person.showInventor(list));
}

/**
 * Passa-se uma nova instância de uma classe concreta
 */
findInformation(new ConcreteFactory());