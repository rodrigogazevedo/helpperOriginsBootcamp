export class Imperative {
    /**
     * Método que verifica se uma lista é númerica ou não.
     * Se for retorna true, caso contrário, retorna false.
     * A verificação é feita utilizando o método imperativa.
     * @param list O parametro recebido é uma lista para verificação.
     */
    verifyListIsNumberImperativa(list: number[]): boolean {
        list.forEach(function (value) {
            if (typeof value !== 'number')
                return false;
        })
        return true;
    }

    /**
     * Método que verifica qual o menor valor dentro de uma lista.
     * A verificação é feita utilizando o método imperativa.
     * @param list O parametro recebido é uma lista para verificação.
     */
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

    /**
     * Método que verifica qual o maior valor dentro de uma lista.
     * A verificação é feita utilizando o método imperativa.
     * @param list O parametro recebido é uma lista para verificação.
     */
    verifyGreatestNumberImperativa(list: number[]): number {
        let greatestNumber: number = 0;
        list.forEach((value: number) => {
            if (value > greatestNumber) {
                greatestNumber = value;
            }
        });
        return greatestNumber;
    }

    /**
     * Método que verifica a média de valores dentro de uma lista.
     * A verificação é feita utilizando o método imperativa.
     * @param list O parametro recebido é uma lista para verificação.
     */
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