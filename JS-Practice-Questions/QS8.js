//print string into alfpabetical letters

function printLater(str) {
   return str.toLowerCase().split("").sort().join("");
}

console.log(printLater("Rameshwar"));
