"use strict";
function greatestSmallestAverageValueFuncional(list) {
    if (list.some(function (value) { return typeof value !== 'number'; })) {
        console.log('A lista não é numérica');
        return -1;
    }
    result2.push({ property: "menor", value: verifySmallestNumberFuncional(list) });
    result2.push({ property: "maior", value: verifyGreatestNumberFuncional(list) });
    result2.push({ property: "média", value: verifyAverageNumbersFuncional(list) });
    console.log(result2);
    return 0;
}
function verifyListIsNumberFuncional(value) {
    if (typeof value !== "number")
        return false;
    return true;
}
function verifySmallestNumberFuncional(list) {
    return Math.min.apply(Math, list);
}
function verifyGreatestNumberFuncional(list) {
    return Math.max.apply(Math, list);
}
function verifyAverageNumbersFuncional(list) {
    var reducer = function (previousValue, currentValue) { return previousValue + currentValue; };
    var sum = list.reduce(reducer);
    var quantity = list.length;
    return sum / quantity;
}
var numbers2 = [2, 3, 5, 6, 10, 15, 8, 20, 31, 50];
var result2 = [];
greatestSmallestAverageValueFuncional(numbers2);
