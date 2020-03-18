var bttnElement = document.querySelector("#list button")
var inputElement = document.querySelector("#list input")
var listElement = document.querySelector('#list ul');

bttnElement.onclick = search;
function search(){
    var userText = inputElement.value;
    axios.get(`https://api.github.com/users/${userText}/repos`)
    .then(function(response){
        var qtdRepo = response.data.length;
        for (index = 0; index < qtdRepo; index++){
            var nameRepo = document.createElement('li');
            var nameText = document.createTextNode(response.data[index].name)
            nameRepo.appendChild(nameText)
            listElement.appendChild(nameRepo)
            
        }
    })
    .catch(function(error) {
        console.warn(error);
    })
}
