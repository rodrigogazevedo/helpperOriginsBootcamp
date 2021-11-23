"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imperative = void 0;
var Imperative = /** @class */ (function () {
    function Imperative() {
    }
    /**
     * Método que verifica se uma lista é númerica ou não.
     * Se for retorna true, caso contrário, retorna false.
     * A verificação é feita utilizando o método imperativa.
     * @param list O parametro recebido é uma lista para verificação.
     */
    Imperative.prototype.verifyListIsNumberImperativa = function (list) {
        list.forEach(function (value) {
            if (typeof value !== 'number')
                return false;
        });
        return true;
    };
    /**
     * Método que verifica qual o menor valor dentro de uma lista.
     * A verificação é feita utilizando o método imperativa.
     * @param list O parametro recebido é uma lista para verificação.
     */
    Imperative.prototype.verifySmallestNumberImperativa = function (list) {
        var smallestNumber = 0;
        list.forEach(function (value, index) {
            if (index == 0) {
                smallestNumber = value;
            }
            if (value < smallestNumber) {
                smallestNumber = value;
            }
        });
        return smallestNumber;
    };
    /**
     * Método que verifica qual o maior valor dentro de uma lista.
     * A verificação é feita utilizando o método imperativa.
     * @param list O parametro recebido é uma lista para verificação.
     */
    Imperative.prototype.verifyGreatestNumberImperativa = function (list) {
        var greatestNumber = 0;
        list.forEach(function (value) {
            if (value > greatestNumber) {
                greatestNumber = value;
            }
        });
        return greatestNumber;
    };
    /**
     * Método que verifica a média de valores dentro de uma lista.
     * A verificação é feita utilizando o método imperativa.
     * @param list O parametro recebido é uma lista para verificação.
     */
    Imperative.prototype.verifyAverageNumbersImperativa = function (list) {
        var sum = 0;
        var quantity = 0;
        list.forEach(function (value) {
            sum += value;
            quantity++;
        });
        return sum / quantity;
    };
    return Imperative;
}());
exports.Imperative = Imperative;
