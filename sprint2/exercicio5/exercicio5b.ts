class CountVogelInput {

    /**
     * Método que verifica quantas vogais tem na string passada.
     * A string vem de um input de um formulário HTML.
     * A função é chamada toda vez que algo é digitado no input.
     * A string passada é quebrada em um array cujo cada elemento é verificado se é igual ao regex criado
     * (não importando se a palavra informada é maiuscula ou minuscula e verificando todas as 
     * correspondências em vez de parar após achar a primeira).
     * Ao final, mostra em outro input a quantidade de vogais encontrada.
     */
    public countVogelInput(): void {
        const word: string = (<HTMLInputElement>document.getElementById("input_word")).value;
        
        let countNumberOfVogel: number = 0;

        const wordSeparate: string[] = word.split('')
    
        wordSeparate.forEach (function (letter) {
            if (letter.match(/[aeiou]/gi)) countNumberOfVogel++; 
        });
    
        (<HTMLInputElement>document.getElementById("output")).value = countNumberOfVogel.toString();
    }
}

/**
 * Cria o objeto CountVoguelInput e chama a função dentro da classe 
 * toda vez que o usuário termina de digitar algo no input para verificar a 
 * quantidade de vogais presente na string informada.
 */
const obj2: CountVogelInput = new CountVogelInput();
document.getElementById("input_word")!.onkeyup = function() {obj2.countVogelInput()};