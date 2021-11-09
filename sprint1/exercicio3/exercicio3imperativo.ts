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
    list.forEach(function (value) {
        if (typeof value !== 'number')
            return false;
    })
    return true;
}

function verifySmallestNumberImperativa(list: number[]): number {
    let smallestNumber: number = 0;
    list.forEach((value: number, index: number) => {
        if (index == 0){
            smallestNumber = value;
        }
        if (value < smallestNumber) {
            smallestNumber = value;
        }
    });
    return smallestNumber;
}

function verifyGreatestNumberImperativa(list: number[]): number {
    let greatestNumber: number = 0;
    list.forEach((value: number) => {
        if (value > greatestNumber) {
            greatestNumber = value;
        }
    });
    return greatestNumber;
}

function verifyAverageNumbersImperativa(list: number[]): number {
    let sum: number = 0;
    let quantity: number = 0;
    list.forEach((value: number) => {
        sum += value;
        quantity++;
    });
    return sum/quantity;
}

let numbers : number[] = [2,3,5,6,10,15,8,20,31,50];
let result : {property: string, value: number}[] = [];

greatestSmallestAverageValueImperativa(numbers);