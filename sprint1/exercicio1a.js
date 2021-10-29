"use strict";
function countVogel(word) {
    if (typeof word !== 'string') {
        console.log('Parametro informado não é uma string!');
        return 1;
    }
    var countVogel = 0;
    for (var i = 0; i < word.length; i++) {
        var letter = word.charAt(i);
        if (letter.match(/[aeiou]/gi))
            countVogel++;
    }
    return countVogel;
}
countVogel('Piauiense');
