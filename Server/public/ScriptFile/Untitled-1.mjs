import {js} from "./deleteMe.js";
// const js = [{id : 3},{id : 1},{id : 6},{id : 3}];

const arr = [2, 4, 7, 8];

function check(arr) {
    return arr > 5;
}

console.log(js.filter((js)=>{
    
    if(js.id > 1) {
        console.log("Filter: ");
        return js;
    }
}));

console.log(arr.find((arr)=>{
    
    if(arr > 5) {
        console.log("Find return only one 1 value what will be first appear: ");
        return arr;
    }
}));
