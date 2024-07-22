const keytar = require("./node_modules/keytar")




//id credit element desktop but FUCK THEM FOR CREATING THIS STUPID FUCKING THING
async function main(){
    
    userId = process.argv[2]
    deviceId = process.argv[3]
    const passphraseKey = `seshat|${userId}|${deviceId}`;
    console.log(await keytar.getPassword("element.io", passphraseKey));
}

main()