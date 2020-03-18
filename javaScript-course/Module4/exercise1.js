function checkHowOld(years){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(years >= 18){
                resolve();
            } else {
                reject();
            }
        }, 2000)
    })
}

checkHowOld(20)
    .then(() => {
        console.log("Older than 18.");
        return 15;
    })
    .catch(() => {
        console.log("Younger than 18.");
    })