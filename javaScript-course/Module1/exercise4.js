function experience(years){
    if (0 <= years < 1){
        if (years < 1){
            console.log("Beginner");
        }   
    } 
    if (1 <= years){
        if (years < 3){
            console.log("Intermediate");
        }
    } 
    if (3 <= years ){
        if (years <= 6){
            console.log("Advanced");
        }
    } 
    if (years >= 7){
        console.log("Jedi Master");
    }        
}

var yearsStudied = prompt("Type how many years you've been studying: ");
experience(yearsStudied);