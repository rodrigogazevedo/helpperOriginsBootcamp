/**
 * Interface com a assinatura das funções utilizadas 
 */
interface IInformation{
    bio(index: number, list: Person[]): string;
    name(index: number, list: Person[]): string;
    inventor(list: Person[]): string;
}