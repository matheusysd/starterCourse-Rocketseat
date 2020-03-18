JS Rocketseat Challenges

Exercise 1:
* Create a button that when clicked creates a red square (100px high, 100px wide). 
* Whenever the button is clicked, a new square should appear on the screen. 
* Every time the mouse is over a square, change its color to a random color generated by the function below:
          
          function getRandomColor() {
           var letters = "0123456789ABCDEF";
           var color = "#";
           for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
           }
          }

Exercise 2:
Following the array:
```
var nomes = ["Diego", "Gabriel", "Lucas"];
```  
Fill a list (ul) on HTML like: 
* Diego
* Gabriel
* Lucas


After this: 
* Add an input text and a button.
* When the button is clicked, the function addName() must add the text as a name on the list.
* The input text must be deleted after the 'click'.