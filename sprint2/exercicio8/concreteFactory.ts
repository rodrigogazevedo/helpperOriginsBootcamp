import { Factory } from "./factory";
import { ConcreteInformation } from "./concreteInformation";


export class ConcreteFactory extends Factory {
    /**
     * Método que usa como assinatura o tipo de produto abstrato, mesmo que o produto concreto seja realmente retornado do método.
     */
    public factoryMethod(): IInformation {
        return new ConcreteInformation();
    }
}