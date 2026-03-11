//"Capitalize the first letter of each word"

function wordStartWithCapital(str){
  let allWords = str.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.substring(1);
  });

  return allWords.join(" ");
}

console.log(wordStartWithCapital("hi rameshwar how are you"));
