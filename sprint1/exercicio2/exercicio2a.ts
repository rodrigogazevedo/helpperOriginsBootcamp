interface Person {
    id: number, 
    name: string, 
    bio: string
}

const list : Person[] = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

function findBioImperativa(id: number): void {
    for(let index in list) { 
        if (list[index].id === id) {
            console.log(list[index].bio);
        }
    }
}

function findBioFunctional(id: number): void {
    const foundBio: Person[] = list.filter((person) => person.id === id);
    const bio: string[] = foundBio.map(function(key) {
        return key.bio;
    })
    console.log(bio.join(''));
}

console.log("Função para achar bio usando paradigma funcional: \n");
findBioFunctional(1);
console.log("\nFunção para achar bio usando paradigma imperativa: \n");
findBioImperativa(2);