function greatestSmallestAverageValueImperativa (list: number[]): number {
    if (!verifyListIsNumberImperativa(list)) {
        console.log('A lista não é numérica');
        return -1;
    }

    result.push({property: "menor", value: verifySmallestNumberImperativa(list)});
    result.push({property: "maior", value: verifyGreatestNumberImperativa(list)});
    result.push({property: "média", value: verifyAverageNumbersImperativa(list)});

    console.log(result);

    return 0;
}

function verifyListIsNumberImperativa(list: number[]): boolean {

    for (let index = 0; index < list.length; index++) {
        if (typeof list[index] !== 'number')
            return false;
    }
    
    return true;
}

function verifySmallestNumberImperativa(list: number[]): number {
    let smallestNumber: number = 0;

    for (let index = 0; index < list.length; index++) {
        if (index == 0){
            smallestNumber = list[index];
        }
        if (list[index] < smallestNumber) {
            smallestNumber = list[index];
        }
    }

    return smallestNumber;
}

function verifyGreatestNumberImperativa(list: number[]): number {
    let greatestNumber: number = 0;

    for (let index = 0; index < list.length; index++) {
        if (index == 0){
            greatestNumber = list[index];
        }
        if (list[index] > greatestNumber) {
            greatestNumber = list[index];
        }
    }

    return greatestNumber;
}

function verifyAverageNumbersImperativa(list: number[]): number {
    let sum: number = 0;
    let quantity: number = 0;

    for (let index = 0; index < list.length; index++) {
        sum += list[index];
        quantity++;
    }

    return sum/quantity;
}

let numbers : number[] = [2,3,5,6,10,15,8,20,31,50];
let result : {property: string, value: number}[] = [];

greatestSmallestAverageValueImperativa(numbers);