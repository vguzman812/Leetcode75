/**
 * https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * given integer array chars
 * begin with empty string s
 * for eahc group of repeating chars in chars
 * if group length is 1
 *    add to s
 * if group length > 1
 *    add char to s and add #of repeats to s
 * s should not be returned separately
 * s should be stored in input array chars
 * repeat lengths of more than 1 digit should be separated so 27 = 2 7
 * can only use On memory
 * return length of new arrary
 *
 * @example
 * Input: chars = ["a","a","b","b","c","c","c"]
 * Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
 * Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3"
 *
 * Input: chars = ["a"]
 * Output: Return 1, and the first character of the input array should be: ["a"]
 * Explanation: The only group is "a", which remains uncompressed since it's a single character.
 *
 * Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
 * Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
 * Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
 *
 *
 * @param {string[]} chars
 * @returns {number} chars.length
 *
 * @pseudocode
 *  function stringCompression(chars: string[]): number{
 *    let writePointer = 0; // Pointer to indicate where we need to write the compressed string
 *    let readPointer = 0;  // Pointer to read the original string
 *    while (readPointer < chars.length) {
 *      let char = chars[readPointer];
 *      let count = 0;
 *      // Count the consecutive occurrences of char
 *      while (readPointer < chars.length && chars[readPointer] === char) {
 *        readPointer++;
 *        count++;
 *      }
 *      // Write the character to the array
 *      chars[writePointer] = char;
 *      writePointer++;
 *      // If there is more than one occurrence, write the count after the character
 *      if (count > 1) {
 *        let countStr = count.toString(); // convert the count to string to handle multiple digits
 *        for (let digit of countStr) {
 *          chars[writePointer] = digit;
 *          writePointer++;
 *        }
 *      }
 *    }
 *    // Return the length of the compressed array
 *    return writePointer;
 *  }
 *
 */

function compress(chars: string[]): number {
	let i = chars.length - 1;
	while (i >= 0) {
		const char = chars[i];
		let duplicateCount = 0;

		// move i left until no more duplicates
		while (i >= 0 && char === chars[i]) {
			duplicateCount += 1;
			i -= 1;
		}
		// if multiple duplicates
		if (duplicateCount > 1) {
			// delete characters after the first repeating char
			// it's i + 2 since i is before the repeating chars, and
			// the second repeating char needs replaced

			// replace with amount of duplicates
			// split digits into individual characacters
			// for example, 12 becomes "1", "2"
			chars.splice(i + 2, duplicateCount - 1, ...String(duplicateCount));
		}
	}

	return chars.length;
}
