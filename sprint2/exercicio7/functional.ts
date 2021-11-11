export class Functional {
    verifyListIsNumberFunctional(list: number[]): boolean {
        if (list.some(value => typeof value !== 'number')) {
            return false;
        }
        return true;
    }

    verifySmallestNumberFunctional(list: number[]): number {
        return Math.min(...list);
    }

    verifyGreatestNumberFunctional(list: number[]): number {
        return Math.max(...list);
    }

    verifyAverageNumbersFunctional(list: number[]): number {
        const reducer = (previousValue: number, currentValue: number) => previousValue + currentValue;
        const sum = list.reduce(reducer);
        const quantity = list.length;
        return sum / quantity;
    }

}