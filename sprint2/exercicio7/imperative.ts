export class Imperative {
    verifyListIsNumberImperativa(list: number[]): boolean {
        list.forEach(function (value) {
            if (typeof value !== 'number')
                return false;
        })
        return true;
    }

    verifySmallestNumberImperativa(list: number[]): number {
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

    verifyGreatestNumberImperativa(list: number[]): number {
        let greatestNumber: number = 0;
        list.forEach((value: number) => {
            if (value > greatestNumber) {
                greatestNumber = value;
            }
        });
        return greatestNumber;
    }

    verifyAverageNumbersImperativa(list: number[]): number {
        let sum: number = 0;
        let quantity: number = 0;
        list.forEach((value: number) => {
            sum += value;
            quantity++;
        });
        return sum/quantity;
    }

}