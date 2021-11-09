"use strict";
function greatestSmallestAverageValueImperativa(list) {
    if (!verifyListIsNumberImperativa(list)) {
        console.log('A lista não é numérica');
        return -1;
    }
    result.push({ property: "menor", value: verifySmallestNumberImperativa(list) });
    result.push({ property: "maior", value: verifyGreatestNumberImperativa(list) });
    result.push({ property: "média", value: verifyAverageNumbersImperativa(list) });
    console.log(result);
    return 0;
}
function verifyListIsNumberImperativa(list) {
    list.forEach(function (value) {
        if (typeof value !== 'number')
            return false;
    });
    return true;
}
function verifySmallestNumberImperativa(list) {
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
}
function verifyGreatestNumberImperativa(list) {
    var greatestNumber = 0;
    list.forEach(function (value) {
        if (value > greatestNumber) {
            greatestNumber = value;
        }
    });
    return greatestNumber;
}
function verifyAverageNumbersImperativa(list) {
    var sum = 0;
    var quantity = 0;
    list.forEach(function (value) {
        sum += value;
        quantity++;
    });
    return sum / quantity;
}
var numbers = [2, 3, 5, 6, 10, 15, 8, 20, 31, 50];
var result = [];
greatestSmallestAverageValueImperativa(numbers);
