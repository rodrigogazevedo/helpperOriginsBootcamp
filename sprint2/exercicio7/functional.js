"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functional = void 0;
var Functional = /** @class */ (function () {
    function Functional() {
    }
    /**
     * Método que verifica se uma lista é númerica ou não.
     * Se for retorna true, caso contrário, retorna false.
     * A verificação é feita utilizando o método funcional.
     * @param list O parametro recebido é uma lista para verificação.
     */
    Functional.prototype.verifyListIsNumberFunctional = function (list) {
        if (list.some(function (value) { return typeof value !== 'number'; })) {
            return false;
        }
        return true;
    };
    /**
     * Método que verifica qual o menor valor dentro de uma lista.
     * A verificação é feita utilizando o método funcional.
     * @param list O parametro recebido é uma lista para verificação.
     */
    Functional.prototype.verifySmallestNumberFunctional = function (list) {
        return Math.min.apply(Math, list);
    };
    /**
     * Método que verifica qual o maior valor dentro de uma lista.
     * A verificação é feita utilizando o método funcional.
     * @param list O parametro recebido é uma lista para verificação.
     */
    Functional.prototype.verifyGreatestNumberFunctional = function (list) {
        return Math.max.apply(Math, list);
    };
    /**
     * Método que verifica a média de valores dentro de uma lista.
     * A verificação é feita utilizando o método funcional.
     * @param list O parametro recebido é uma lista para verificação.
     */
    Functional.prototype.verifyAverageNumbersFunctional = function (list) {
        var reducer = function (previousValue, currentValue) { return previousValue + currentValue; };
        var sum = list.reduce(reducer);
        var quantity = list.length;
        return sum / quantity;
    };
    return Functional;
}());
exports.Functional = Functional;
