//cheak num is integer without using isInteger

//1st way

let a = 23;

if(a%1 === 0){
    console.log("Integer")
} else {
    console.log("Not");
}

//2nd way
console.log(Number.isInteger(a));

//3rd way
console.log(Math.floor(a) === a);



