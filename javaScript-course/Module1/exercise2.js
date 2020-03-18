var x = prompt("Enter the first number in the range:");
var y = prompt("Enter the second number in the range:");

var evenNumbers = [ ];
var indexN = 0;
function evenN(x,y){
    for (var index = x; index <= y ; index ++){
    if(index %2 == 0){
        evenNumbers[indexN] = index;
        indexN++;
    }
    }
    return console.log("The even numbers in the range:", evenNumbers);
}
evenN(x,y);
