//reverse each word of string 

let str = "Hellow My Name is a Rameshwar";

let result = str
  .split(" ")
  .map((word) => word.split("").reverse().join(""))
  .join(" ");

console.log(result);


