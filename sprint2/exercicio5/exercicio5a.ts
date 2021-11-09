class CountVogel {
    private word: string = '';

    /**
     * Construtor da classe
     * @param word recebe e armazena a string que é passada para contagem das vogais
     */
    constructor(word:string) {
        this.word = word;
    }

    /**
     * Método que verifica quantas vogais tem na string passada.
     * A string passada é quebrada em um array cujo cada elemento é verificado se é igual ao regex criado
     * (não importando se a palavra informada é maiuscula ou minuscula e verificando todas as 
     * correspondências em vez de parar após achar a primeira).
     * Ao final, imprime a quantidade de vogais achadas.
     */
    public countVogel(): void{
        let numberOfVogels: number = 0;
    
        const wordSeparate: string[] = this.word.split('')
        
        wordSeparate.forEach (function (letter) {
            if (letter.match(/[aeiou]/gi)) numberOfVogels++; 
        });
    
        console.log(numberOfVogels);
    }
}

/**
 * Cria o objeto CountVoguel e passa a string para verificar a quantidade de vogais presente nela.
 */
let obj: CountVogel = new CountVogel("1245");
obj.countVogel();
