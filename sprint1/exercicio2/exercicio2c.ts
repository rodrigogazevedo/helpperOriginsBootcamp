interface Person {
    id: number, 
    name: string, 
    bio: string
}

const list3 : Person[] = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

function deleteImperativa(id: number): void {
    const newList : Person[] = [];
    for(let index in list3) { 
        if (list3[index].id !== id) {
            newList.push(list3[index]);
        }
    }
    console.log(newList);
}

function deleteFunctional(id: number): void {
    const newList : Person[] = list3.filter((person) => person.id !== id);
    console.log(newList);
}

console.log("Função para deletar um registro usando paradigma funcional: \n");
deleteFunctional(1);
console.log("\nFunção para deletar um registro usando paradigma imperativa: \n");
deleteImperativa(2);