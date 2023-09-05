/**
 * https://leetcode.com/problems/decode-string/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * Given an encoded string return its decoded string
 * The encoding rule is: k[encoded_string],
 * where the encoded_string inside the square brackets is being repeated exactly k times.
 * Note that k is guaranteed to be a positive integer.
 * You may assume that the input string is always valid;
 * there are no extra white spaces, square brackets are well-formed, etc.
 * Furthermore, you may assume that the original data
 * does not contain any digits and that digits are only for those repeat numbers, k.
 * For example, there will not be input like 3a or 2[4].
 * The test cases are generated so that the length of the output will never exceed 10^5
 *
 * @param {string} s
 * @returns {string}
 *
 * @example
 * Input: s = "3[a]2[bc]"
 * Output: "aaabcbc"
 *
 * Input: s = "3[a2[c]]"
 * Output: "accaccacc"
 *
 * Input: s = "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 *
 * @constraints
 * 1 <= s.length <= 30
 * s consists of lowercase English letters, digits, and square brackets '[]'.
 * s is guaranteed to be a valid input.
 * All the integers in s are in the range [1, 300].
 *
 * @pseudocode
 *
 *  initialize stack
 *  initialize currr num = 0
 *  initialze current string to repeat = ""
 *  set up stack
 *  iterate through string s
 *  if current character is a digit
 *      set current number to new digit but make it scalable so we can take numbers like 4789
 *  else if current char is an opening bracket [
 *      push current string and multiplier to the stack
 *      reset current string and multiplier
 *  else if current char is closing bracket
 *      take most recent entry off of stack for num and string
 *      let num = stack.pop()
 *      let previous string = stack.pop()
 *      decode the most recent encoded string substring
 *      current string = prev + cur.repeat(num)
 *  else current char is a letter
 *      add current char to current string
 *  return current string
 *
 *   function decodeString(s: string): string {
 *     let stack = []
 *     let currNum = 0
 *     let currStr = ""
 *     for each char in s {
 *       if char is a digit {
 *         currNum = currNum * 10 + parseInt(char)
 *       } else if char == '[' {
 *         // Push the current string and multiplier to the stack
 *         stack.push(currStr)
 *         stack.push(currNum)
 *         // Reset current string and multiplier
 *         currStr = ""
 *         currNum = 0
 *       } else if char == ']' {
 *         // Pop multiplier and previous string
 *         let num = stack.pop()
 *         let prevStr = stack.pop()
 *         // Decode the most recent '[encoded_string]' substring
 *         currStr = prevStr + currStr.repeat(num)
 *       } else { // char is a letter
 *         currStr += char
 *       }
 *     }
 *     return currStr
 *   }
 *
 *
 */

function decodeString(s: string): string | null {
	let stack: (number | string)[] = [];
	let currNum = 0;
	let currStr = "";

	for (let i = 0; i < s.length; i++) {
		let char = s[i];

		if (!isNaN(parseInt(char, 10))) {
			currNum = currNum * 10 + parseInt(char);
		} else if (char === "[") {
			if (currNum === 0) {
				return null; // Missing number before [
			}
			stack.push(currStr);
			stack.push(currNum);
			currStr = "";
			currNum = 0;
		} else if (char === "]") {
			if (stack.length < 2) {
				return null; // Missing opening bracket or number
			}
			let num = stack.pop();
			let prevStr = stack.pop();

			if (typeof num !== "number" || typeof prevStr !== "string") {
				return null; // Invalid types found
			}

			currStr = prevStr + currStr.repeat(num);
		} else if (char >= "a" && char <= "z") {
			currStr += char;
		} else {
			return null; // Invalid character
		}
	}

	if (stack.length !== 0) {
		return null; // Unbalanced brackets
	}

	return currStr;
}
