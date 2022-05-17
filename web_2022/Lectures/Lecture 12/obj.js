//Task 2 and 3
function setPairInObject(object, key, value) {
    if(key in object) {
        return;
    }

    object[key] = value;
}

function printKVFirst(object) {
    for(let key in object) {
        console.log("Key : " + key + ", value : " + object[key]);
    }
}

function printKVSecond(object) {
    for(const key of Object.keys(object)){
        console.log("Key : " + key + ", value : " + object[key]);
    }
}

let test = {
    width : 300,
    height : 200
}

setPairInObject(test, "height", 150);
console.log(test);

setPairInObject(test, "name", "roman");
console.log(test);

printKVFirst(test);
printKVSecond(test);