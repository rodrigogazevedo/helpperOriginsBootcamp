"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functional = void 0;
var Functional = /** @class */ (function () {
    function Functional() {
    }
    Functional.prototype.verifyListIsNumberFunctional = function (list) {
        if (list.some(function (value) { return typeof value !== 'number'; })) {
            return false;
        }
        return true;
    };
    Functional.prototype.verifySmallestNumberFunctional = function (list) {
        return Math.min.apply(Math, list);
    };
    Functional.prototype.verifyGreatestNumberFunctional = function (list) {
        return Math.max.apply(Math, list);
    };
    Functional.prototype.verifyAverageNumbersFunctional = function (list) {
        var reducer = function (previousValue, currentValue) { return previousValue + currentValue; };
        var sum = list.reduce(reducer);
        var quantity = list.length;
        return sum / quantity;
    };
    return Functional;
}());
exports.Functional = Functional;
