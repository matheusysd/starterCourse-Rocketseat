function hasHability(skills){
    if (skills.indexOf("Javascript") >= 0){
        return true;
    }
    else{
        return false;
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];
if (hasHability(skills) == true){
    console.log("Has skill.")
}else {
    console.log("Hasn't skill")
}