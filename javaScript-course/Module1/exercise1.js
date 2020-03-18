var address = {
    street: "Pinheiros Street",
    number: 1293,
    neighborhood: "Centro",
    city: "São Paulo",
    state: "SP"
};
function show(address){
    return console.log("The user lives in",address.city,"/",address.state,",in",address.neighborhood,"neighborhood in",address.street,"on ",address.number," number.")
}
show(address);