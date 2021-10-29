function countVogelInput(): number {
    var word: string = (<HTMLInputElement>document.getElementById("input_word")).value;

    if (typeof word !== 'string') {
        console.log('Parametro informado não é uma string!');
        return 1;
    }

    let countVogel: number = 0;
    
    for (let i = 0; i < word.length; i++) {
        let letter: any = word.charAt(i);
        if (letter.match(/[aeiou]/gi)) countVogel++; 
    }
    
    return countVogel;
}
