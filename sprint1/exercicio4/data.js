"use strict";
var list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
var editId = null;
function save() {
    var newPerson = readData();
    if (validateFields(newPerson)) {
        if (editId == null) {
            add(newPerson);
        }
        else {
            alter(editId, newPerson);
        }
    }
    listTable();
    cancel();
}
function add(newPerson) {
    list.push(newPerson);
}
function readData() {
    var nextId = list.length + 1;
    var nextName = document.getElementById('name').value;
    var nextBio = document.getElementById('bio').value;
    var newPerson = { "id": nextId, "name": nextName, "bio": nextBio };
    return newPerson;
}
function cancel() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('bio').value = '';
    document.getElementById('btn1').innerText = "Salvar";
    editId = null;
}
function validateFields(newPerson) {
    var msg = '';
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
function listTable() {
    var tbody = document.getElementById('tbody');
    tbody.innerText = '';
    for (var i = 0; i < list.length; i++) {
        var tr = tbody.insertRow();
        var td_id = tr.insertCell(0);
        var td_name = tr.insertCell(1);
        var td_bio = tr.insertCell(2);
        var td_edit = tr.insertCell(3);
        var td_delete = tr.insertCell(4);
        td_id.innerText = list[i].id.toString();
        td_name.innerText = list[i].name;
        td_bio.innerText = list[i].bio;
        var btnEdit = document.createElement('button');
        btnEdit.innerHTML = "Editar";
        td_edit.appendChild(btnEdit);
        td_edit.setAttribute("onclick", "preparationAlter(" + JSON.stringify(list[i]) + ")");
        var btnDelete = document.createElement('button');
        btnDelete.innerHTML = "Excluir";
        td_delete.appendChild(btnDelete);
        td_delete.setAttribute("onclick", "deleted(" + list[i].id + ")");
    }
}
function deleted(id) {
    var tbody = document.getElementById('tbody');
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list.splice(i, 1);
            tbody.deleteRow(i);
        }
    }
}
function preparationAlter(dados) {
    editId = dados.id;
    document.getElementById('id').value = dados.id.toString();
    document.getElementById('name').value = dados.name;
    document.getElementById('bio').value = dados.bio;
    document.getElementById('btn1').innerText = "Atualizar";
}
function alter(id, newPerson) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list[i].name = newPerson.name;
            list[i].bio = newPerson.bio;
        }
    }
}
