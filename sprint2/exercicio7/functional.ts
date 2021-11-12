export class Functional {
    /**
     * Método que verifica se uma lista é númerica ou não.
     * Se for retorna true, caso contrário, retorna false.
     * A verificação é feita utilizando o método funcional.
     * @param list O parametro recebido é uma lista para verificação.
     */
    verifyListIsNumberFunctional(list: number[]): boolean {
        if (list.some(value => typeof value !== 'number')) {
            return false;
        }
        return true;
    }

    /**
     * Método que verifica qual o menor valor dentro de uma lista.
     * A verificação é feita utilizando o método funcional.
     * @param list O parametro recebido é uma lista para verificação.
     */
    verifySmallestNumberFunctional(list: number[]): number {
        return Math.min(...list);
    }

    /**
     * Método que verifica qual o maior valor dentro de uma lista.
     * A verificação é feita utilizando o método funcional.
     * @param list O parametro recebido é uma lista para verificação.
     */
    verifyGreatestNumberFunctional(list: number[]): number {
        return Math.max(...list);
    }

    /**
     * Método que verifica a média de valores dentro de uma lista.
     * A verificação é feita utilizando o método funcional.
     * @param list O parametro recebido é uma lista para verificação.
     */
    verifyAverageNumbersFunctional(list: number[]): number {
        const reducer = (previousValue: number, currentValue: number) => previousValue + currentValue;
        const sum = list.reduce(reducer);
        const quantity = list.length;
        return sum / quantity;
    }

}