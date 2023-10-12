/**
 * https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * we are given an input string s
 * reverse the order of the words.
 * keep the letters in order.
 * words will be separated by 1 or more spaces
 * return reversed words with one space in between
 * may contain leading or trailing spaces
 * 
 * @param {string} s
 * @returns {string}
 * 
 * @example
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 * 
 * Input: s = "  hello world  "
 * Output: "world hello"
 * 
 * Input: s = "a good   example"
 * Output: "example good a"
 * 
 * @pseudocode
 *  trim string.
 *  split string by space
 *  filter out empty array elements
 *  reverse array
 *  join array
 *  see whats up
 */

function reverseWords(s: string): string {
    let trimmed = s.trim()
    let arr = trimmed.split(" ")
    let trimmedArr = arr.filter(e => e)
    let reversedArr = trimmedArr.reverse()
    let joinedString = reversedArr.join(" ")
    return joinedString
}

/**
 * OR:
 * return s.trim().split(" ").filter(e => e).reverse().join(" ")
 */
