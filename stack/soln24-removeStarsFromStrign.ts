/**
 * https://leetcode.com/problems/removing-stars-from-a-string/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * Given string s which contains stars *
 * Allowed to remove a star AND closest non star character to left
 * return string after all stars removed
 * operation will always be possible
 * @param {string} s
 * @returns {string}
 * @example
 * Input: s = "leet**cod*e"
 * Output: "lecoe"
 * 
 * Input: s = "erase*****"
 * Output: ""
 * 
 * @pseudocode
 *  initialize stack
 *  iterate through s
 *      if current char is a star
 *          if stack length > 0
 *              pop mmost recent edition from stack
 *      else current char is NOT a star
 *          push current char onto stack
 *  return stack.join
 */

function removeStars(s: string): string {
    const stack: string[] = [];
  
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
      
        if (char === '*') {
            if (stack.length > 0) {
                stack.pop(); // Remove the closest non-star character to its left
            }
        } else {
            stack.push(char); // Push the non-star character into the stack
        }
    }
  
    return stack.join(''); // Return the string after all stars have been removed
}