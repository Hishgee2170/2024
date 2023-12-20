const obj = {
    a: 5,
    b: 10,
    c: 3,
};

function num(obj1) {
    let keys = Object.keys(obj1);
    let j = 0;
    for (let i = 0; i < keys.length; i++) {
        j += obj1[keys[i]];
    }
    return j;
}
console.log("Num:" + num(obj));
/*=======================================================*/
const strObj = {
    name: "john",
    age: 25,
    city: "ulaanbaatar",
};

function letter(strObj1) {
    let keys = Object.keys(strObj1);
    let l = [];
    let myArray = [];
    for (let i = 0; i < keys.length; i++) {
        if (typeof strObj1[keys[i]] === "string") {
            l[i] = strObj1[keys[i]];
            myArray[i] = l[i].slice(0, 1).toUpperCase() + l[i].slice(1);
            strObj1[i] = myArray[i];
        } else {
            myArray[i] = strObj1[keys[i]];
            strObj1[i] = myArray[i];
        }
    }
    return myArray;
}
console.log();

/*=======================================================*/

let multiplyObject = { a: 2, b: 3, c: 5 };

function multObj(multiplyObject1) {
    let key = Object.keys(multiplyObject1);
    let j = 1;
    for (let i = 0; i < key.length; i++) {
        j = multiplyObject1[key[i]] ** 2;
    }
    return j;
}
let result = multObj(multiplyObject1);
console.log(result);