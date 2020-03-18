Exercise 1

Create a function that receives the age of a user and returns a Promise that after 2 seconds will return if the user is over 18 years old or not. If the user is over 18 years of age the result should do '.then', otherwise, do the '.catch'.
 
```
function checkHowOld(years) {
 // Return a promise
 }

checkHowOld(20)
   .then(function() {
     console.log("Older than 18");
   })
 .catch(function() {
     console.log("Younger than 18");
   });
```


Exercisie 2

Create a screen with one <input> that should be a Github user. After typing the username and clicking the button, the user's repository data must be searched by the Github API (according to the URL below) and shown on screen: 

 Example URL: https://api.github.com/users/diego3g/repos 
 Just change "diego3g" by the username. 
 
Then the repositories names should be placed on a list like the below:

<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>


Exercise 3

From the result of the previous example, add a screen loading indicator while the request is in progress:
```
<li> Loading ... </li>
```
Also, add an error message on screen if the Github user does not exist.
Tip: When the user does not exist, the request will do the .catch with error code 404
