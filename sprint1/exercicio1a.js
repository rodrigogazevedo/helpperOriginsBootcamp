"use strict";
function countVogel(word) {
    if (typeof word !== 'string') {
        console.log('Parametro informado não é uma string!');
        return -1;
    }
    var countVogel = 0;
    var wordSeparate = word.split('');
    wordSeparate.forEach(function (letter) {
        if (letter.match(/[aeiou]/gi))
            countVogel++;
    });
    console.log(countVogel);
}
countVogel('Piauiense');
