function countVogel(word: string): number{
    if (typeof word !== 'string') {
        console.log('Parametro informado não é uma string!');
        return -1;
    }

    let countVogel: number = 0;

    let wordSeparate: string[] = word.split('')
    
    wordSeparate.forEach (function (letter) {
        if (letter.match(/[aeiou]/gi)) countVogel++; 
    });

    console.log(countVogel);
    return 0;
}

countVogel('Piauiense')