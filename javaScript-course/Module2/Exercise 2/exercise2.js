var listElement = document.querySelector('#list ul');
var bttnElement = document.querySelector('#list button');
var inputElement = document.querySelector('#list input');
var names = ["Diego", "Gabriel", "Lucas"];

function renderNames() {
    listElement.innerHTML = '';
    for (name of names) {
    var  nameElement = document.createElement('li');
    var nameText = document.createTextNode(name);
    
    nameElement.appendChild(nameText);
    listElement.appendChild(nameElement);
    }
}

renderNames();

function addName() {
    var nameText = inputElement.value;
    names.push(nameText);
    inputElement.value = ''
    renderNames();
}

bttnElement.onclick = addName;
