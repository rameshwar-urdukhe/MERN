//cheak string is palndrom or not;

// check string is palindrome or not

function isPalindrome(str){
    let reverse = str.split("").reverse().join("");

    if(str === reverse){
        return true;
    } else {
        return false;
    }
}

//best approch

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("aba"));

console.log(isPalindrome("123"));
console.log(isPalindrome("121"));
console.log(isPalindrome("aba"));


