function countVogelInput() : void{
    const word: string = (<HTMLInputElement>document.getElementById("input_word")).value;

    let countVogel: number = 0;

    let wordSeparate: string[] = word.split('')
    
    wordSeparate.forEach (function (letter) {
        if (letter.match(/[aeiou]/gi)) countVogel++; 
    });
    
    (<HTMLInputElement>document.getElementById("output")).value = countVogel.toString();
}