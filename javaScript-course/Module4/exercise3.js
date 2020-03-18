var bttnElement = document.querySelector("#list button")
var inputElement = document.querySelector("#list input")
var listElement = document.querySelector('#list ul');

bttnElement.onclick = search;
function search(){
    renderLoading();
    var userText = inputElement.value;
    inputElement.value = "";
    axios.get(`https://api.github.com/users/${userText}/repos`)
    .then(function(response){
        listElement.innerHTML = "";
        var qtdRepo = response.data.length;
        for (index = 0; index < qtdRepo; index++){
            var nameRepo = document.createElement('li');
            var nameText = document.createTextNode(response.data[index].name)
            nameRepo.appendChild(nameText)
            listElement.appendChild(nameRepo)
        }
    })
    .catch(function(error) {
        alert("Error 404.");
        listElement.innerHTML = "";
    })
}

function renderLoading(loading) {
    listElement.innerHTML = "";
    var textElement = document.createTextNode("Loading...");
    var loadingElement = document.createElement("li");
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
  }
