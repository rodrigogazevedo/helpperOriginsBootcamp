"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Importe da classe funcional
 */
var funcional_1 = require("./funcional");
var PeopleDataUsingFuncional = /** @class */ (function (_super) {
    __extends(PeopleDataUsingFuncional, _super);
    /**
     * Construtor criado para receber a lista com os dados das pessoas e posterior tratamento
     * @param list Recebe a lista com os dados para análise
     */
    function PeopleDataUsingFuncional(list) {
        return _super.call(this, list) || this;
    }
    return PeopleDataUsingFuncional;
}(funcional_1.Funcional));
var list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
var personBio = new PeopleDataUsingFuncional(list);
personBio.findBioFunctional(2);
console.log();
personBio.findNameFunctional(1);
console.log();
personBio.deleteFunctional(3);
console.log();
var teclado = require('prompt-sync')();
console.log('O que deseja alterar: name ou bio?');
var parameter = teclado();
console.log("Digite o  que será inserido nesse campo a ser alterado");
var value = teclado();
personBio.alterFunctional(4, parameter, value);
