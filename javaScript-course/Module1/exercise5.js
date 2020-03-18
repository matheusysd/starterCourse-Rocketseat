var users = [
    {
    name: "Diego",
    skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
    name: "Gabriel",
    skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];
function show(users){
    for (var index = 0; index < users.length; index++){
        var output = [ ];
        output += (users[index].name);
        output += (" has the following skills: ");
        for (var indexY = 0; indexY < users[index].skills.length; indexY++){
            output += ( users[index].skills[indexY]);
            if (indexY != 2){
            output += (", ")
            }else{
                output += ('.')
            }
        }
    console.log(output);
    }
}
show(users);