var btnElement = document.querySelector('button.newButton');
btnElement.addEventListener('click', newBox);


function newBox() {
    var boxElement = document.createElement('div');
    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.backgroundColor = '#f00';

    document.querySelector('.box').appendChild(boxElement);   
boxElement.onmouseover = changeColor; 

function changeColor () {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0 ; i < 6 ; i++) {
        color += letters[Math.floor(Math.random() * 16 )]
    }
    boxElement.style.backgroundColor = color;
}
}
