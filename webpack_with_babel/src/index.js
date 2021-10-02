import { wizard } from './wizard.js'
import { barbarian } from './barbarian.js'

const getUserId = (username) => {
    if(username == "xreyc") return 1
    return 2 
}

const obj = { a: "Aplha", b: "Bravo" }
const newObj = {...obj, c: "Charlie" }
console.log(newObj);

console.log(getUserId("xreyc"));
console.log(wizard);
console.log(barbarian);