interface Person {
    id: number, 
    name: string, 
    bio: string
}

const list2 : Person[] = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalist2a, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

function findNameImperativa(id: number): void {
    for(let index in list2) { 
        if (list2[index].id === id) {
            console.log(list2[index].name);
        }
    }
}

function findNameFunctional(id: number): void {
    const foundName = list2.filter((person) => person.id === id);
    const name = foundName.map(function(key) {
        return key.name;
    })
    console.log(name.join(''));
}

console.log("Função para achar o nome usando paradigma funcional: \n");
findNameFunctional(1);
console.log("\nFunção para achar o nome usando paradigma imperativa: \n");
findNameImperativa(2);