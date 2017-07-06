function palindrome(str) {
  // Good luck!
  str = str.replace(/[^a-z0-9]+/gi, '').toLowerCase();
  for (var i=0, j=str.length-1; i < j; i++, j--){
    if (str.charAt(i) != str.charAt(j)){return false;}
  }
  return true;
}



palindrome("1 eye for of 1 eye.");