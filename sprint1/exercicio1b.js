"use strict";
function countVogelInput() {
    var word = document.getElementById("input_word").value;
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
