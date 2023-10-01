/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75
 * 
 * @description
 * we ar given string s
 * reverse vowels but leave other letters alone
 * return reversed vowel word
 * vowels can appear upper or lower any # of times
 * 1 <= s.length <= 3 * 10^5
 * 
 * @example
 * Input: s = "hello"
 * Output: "holle"
 * 
 * Input: s = "leetcode"
 * Output: "leotcede"
 * 
 * @param {string} s
 * @returns {string}
 * 
 * @pseudocode
 *  create array with lowercase vowels
 *  create empty array to hold vowels
 *  iterate through s
 *      if vowels includes current character
 *          unshift current character on to vowel array
 *  iterate through s again.
 *      if vowels includes current character
 *          s[i] = vowel array.pop
 *  return s
 * 
 */

var reverseVowels = function (s: string) {
    let vowels: string[] = ["a", "e", "i", "o", "u"];
    let reversedVowels: string[] = [];
    let newString: string[] = s.split("")
    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i].toLowerCase())) {
        reversedVowels.unshift(s[i])
      }
    }
    console.log(reversedVowels)
    for (let i = 0; i < s.length; i++){
    if (vowels.includes(s[i].toLowerCase())) {
      const vowel = reversedVowels.shift()
      if (vowel !== undefined) newString[i] = vowel
    }
  }
  console.log(newString.join(""))
  return newString.join("")
  };
  
  reverseVowels("hello")