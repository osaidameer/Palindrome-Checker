function palindrome(str) {
  let modstr = str.replace(/\s+|\W+|[_]/g, '').toLowerCase();
  console.log(modstr);
  let revstr = modstr.split('').reverse().join('');
  return revstr === modstr;
}

console.log(palindrome("_eye"));

/* Remaining tests
palindrome("eye");
palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome"); 
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym."); 
palindrome("1 eye for of 1 eye."); 
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
*/
