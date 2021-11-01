"use strict";
function countVogelInput() {
    var word = document.getElementById("input_word").value;
    var countVogel = 0;
    var wordSeparate = word.split('');
    wordSeparate.forEach(function (letter) {
        if (letter.match(/[aeiou]/gi))
            countVogel++;
    });
    document.getElementById("output").value = countVogel.toString();
}
