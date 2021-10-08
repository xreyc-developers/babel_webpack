import { wizard } from './modules/wizard.js'
import { barbarian } from './modules/barbarian.js'

//require('./index.css');
//import "./index.css"
import './main.css';

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