"use strict";
var CountVogel = /** @class */ (function () {
    /**
     * Construtor da classe
     * @param word recebe e armazena a string que é passada para contagem das vogais
     */
    function CountVogel(word) {
        this.word = '';
        this.word = word;
    }
    /**
     * Método que verifica quantas vogais tem na string passada.
     * A string passada é quebrada em um array cujo cada elemento é verificado se é igual ao regex criado
     * (não importando se a palavra informada é maiuscula ou minuscula e verificando todas as
     * correspondências em vez de parar após achar a primeira).
     * Ao final, imprime a quantidade de vogais achadas.
     */
    CountVogel.prototype.countVogel = function () {
        var numberOfVogels = 0;
        var wordSeparate = this.word.split('');
        wordSeparate.forEach(function (letter) {
            if (letter.match(/[aeiou]/gi))
                numberOfVogels++;
        });
        console.log(numberOfVogels);
    };
    return CountVogel;
}());
/**
 * Cria o objeto CountVoguel e passa a string para verificar a quantidade de vogais presente nela.
 */
var obj = new CountVogel("1245");
obj.countVogel();
