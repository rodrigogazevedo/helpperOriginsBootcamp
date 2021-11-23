let list : {id: number, name: string, bio: string}[] = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

let editId: number | null = null;

function save(): void {
    let newPerson: {id: number, name: string, bio: string} = readData();

    if (validateFields(newPerson)){
        if (editId == null) {
            add(newPerson);
        } else {
            alter(editId, newPerson);
        }
    }

    listTable();
    cancel();
}

function add(newPerson: {id: number, name: string, bio: string}) {
    list.push(newPerson);
}

function readData(): {id: number, name: string, bio: string}{
    let nextId: number = list.length + 1;
    let nextName: string = (<HTMLInputElement>document.getElementById('name')).value;
    let nextBio: string = (<HTMLInputElement>document.getElementById('bio')).value;
    let newPerson: {id: number, name: string, bio: string} = {"id": nextId, "name": nextName, "bio": nextBio};
    return newPerson;
}

function cancel(): void {
    (<HTMLInputElement>document.getElementById('id')).value = '';
    (<HTMLInputElement>document.getElementById('name')).value = '';
    (<HTMLInputElement>document.getElementById('bio')).value = '';

    document.getElementById('btn1')!.innerText = "Salvar";
    editId = null;
}

function validateFields(newPerson: {id: number, name: string, bio: string}): boolean {
    let msg = '';

    if (newPerson.name == '') {
        msg += '-Informe o nome da Pessoa \n';
    }

    if (newPerson.bio == '') {
        msg += '-Informe a bio da Pessoa \n';
    }

    if (msg != '') {
        alert(msg);
        return false;
    }

    return true;
}

function listTable(): void {
    let tbody = document.getElementById('tbody') as HTMLTableElement;
    tbody!.innerText = '';

    for(let i = 0; i < list.length; i++) {
        let tr = tbody.insertRow();

        let td_id = tr.insertCell(0);
        let td_name = tr.insertCell(1);
        let td_bio = tr.insertCell(2);
        let td_edit = tr.insertCell(3);
        let td_delete = tr.insertCell(4);

        td_id.innerText = list[i].id.toString();
        td_name.innerText = list[i].name;
        td_bio.innerText = list[i].bio;
        
        let btnEdit = document.createElement('button');
        btnEdit.innerHTML = "Editar";
        td_edit.appendChild(btnEdit);
        td_edit.setAttribute("onclick", "preparationAlter("+ JSON.stringify(list[i]) +")");

        let btnDelete = document.createElement('button');
        btnDelete.innerHTML = "Excluir";
        td_delete.appendChild(btnDelete);
        td_delete.setAttribute("onclick", "deleted("+list[i].id+")");
    }
}

function deleted(id: number) {
    let tbody = document.getElementById('tbody') as HTMLTableElement;

    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list.splice(i,1);
            tbody.deleteRow(i);
        }
    }
}

function preparationAlter(dados: {id: number, name: string, bio: string}) {
    editId = dados.id;
    (<HTMLInputElement>document.getElementById('id')).value = dados.id.toString();
    (<HTMLInputElement>document.getElementById('name')).value = dados.name;
    (<HTMLInputElement>document.getElementById('bio')).value = dados.bio;

    document.getElementById('btn1')!.innerText = "Atualizar";
}

function alter (id: number, newPerson: {id: number, name: string, bio: string}){
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list[i].name = newPerson.name;
            list[i].bio = newPerson.bio;
        }
    }
}