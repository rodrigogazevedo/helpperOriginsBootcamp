"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imperative = void 0;
var Imperative = /** @class */ (function () {
    function Imperative() {
    }
    Imperative.prototype.verifyListIsNumberImperativa = function (list) {
        list.forEach(function (value) {
            if (typeof value !== 'number')
                return false;
        });
        return true;
    };
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
    Imperative.prototype.verifyGreatestNumberImperativa = function (list) {
        var greatestNumber = 0;
        list.forEach(function (value) {
            if (value > greatestNumber) {
                greatestNumber = value;
            }
        });
        return greatestNumber;
    };
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
