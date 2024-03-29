function greatestSmallestAverageValueFuncional (list: number[]): number {
    const result2 : {property: string, value: number}[] = [];
    if (list.some(value => typeof value !== 'number')) {
        console.log('A lista não é numérica');
        return -1;
    }

    result2.push({property: "menor", value: verifySmallestNumberFuncional(list)});
    result2.push({property: "maior", value: verifyGreatestNumberFuncional(list)});
    result2.push({property: "média", value: verifyAverageNumbersFuncional(list)});

    console.log(result2);

    return 0;
}

//Deletar método pois não faz sentido 
function verifyListIsNumberFuncional(value: number): boolean {
    if (typeof value !== "number") return false;
    return true;
}

function verifySmallestNumberFuncional(list: number[]): number {
    return Math.min(...list);
}

function verifyGreatestNumberFuncional(list: number[]): number {
    return Math.max(...list);
}

function verifyAverageNumbersFuncional(list: number[]): number {
    const reducer: (previousValue: number, currentValue: number) => number = (previousValue: number, currentValue: number) => previousValue + currentValue;
    const sum: number = list.reduce(reducer);
    const quantity: number = list.length;
    return sum / quantity;
}

const numbers2 : number[] = [2,3,5,6,10,15,8,20,31,50];

greatestSmallestAverageValueFuncional(numbers2);