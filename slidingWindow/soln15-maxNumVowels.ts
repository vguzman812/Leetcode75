/**
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * given string s
 * given integer k
 * return max number of vowels in any substring of s with length k
 * vowels are a e i o u lowercase
 *
 * @param {string} s
 * @param {number} k
 * @returns {number} max num vowels
 *
 * @example
 * Input: s = "abciiidef", k = 3
 * Output: 3
 * Explanation: The substring "iii" contains 3 vowel letters.
 *
 * Input: s = "aeiou", k = 2
 * Output: 2
 * Explanation: Any substring of length 2 contains 2 vowels.
 *
 * Input: s = "leetcode", k = 3
 * Output: 2
 * Explanation: "lee", "eet" and "ode" contain 2 vowels.
 *
 * @pseudocode
 *
 * function maxVowels(s: string, k: number): number {
 *      // Initialize a set of vowels
 *      vowels = new Set(["a", "e", "i", "o", "u"])
 *
 *      // Initialize two pointers:
 *          let left = 0
 *          let right = k - 1
 *
 *      // Initialize counters:
 *          let maxCount = 0
 *          let currentCount = 0
 *
 *      // Create an initial array with elements from s using slice method
 *          initialArray = s.slice(left, right + 1)
 *
 *     //  Iterate through initialArray:
 *          for (element of initialArray){
 *              if (vowels.has(element)){
 *                  increment currentCount
 *                  increment maxCount
 *              }
 *          }
 *      // Iterate through the rest of the string:
 *          while (right < s.length - 1){
 *              let leftElement = s[left]
 *              let rightElement = s[right + 1]
 *
 *              if (vowels.has(leftElement)):
 *                  currentCount--
 *
 *              if (vowels.has(rightElement))
 *                  currentCount++
 *
 *              // Update pointers:
 *                  left++
 *                  right++
 *
 *              // Update maxCount:
 *                  maxCount = Math.max(maxCount, currentCount)
 *            }
 *      return maxCount
 * }
 */

function maxVowels(s: string, k: number): number {
	// Initialize a set of vowels
	let vowels = new Set(["a", "e", "i", "o", "u"]);
	// Initialize two pointers:
	let left = 0;
	let right = k - 1;
	// Initialize counters:
	let maxCount = 0;
	let currentCount = 0;
	// Create an initial array with elements from s using slice method
	let initialArray = s.slice(left, right + 1);
	//  Iterate through initialArray:
	for (let element of initialArray) {
		if (vowels.has(element)) {
			currentCount++;
			maxCount++;
		}
	}
	// Iterate through the rest of the string:
	while (right < s.length - 1) {
		let leftElement = s[left];
		let rightElement = s[right + 1];
		if (vowels.has(leftElement)) currentCount--;
		if (vowels.has(rightElement)) currentCount++;
		// Update pointers:
		left++;
		right++;
		// Update maxCount:
		maxCount = Math.max(maxCount, currentCount);
	}
	return maxCount;
}


/**
 * givne number k
 * print out every integer from  1 to k
 * when integer divisible by 3 print Fizz
 * when divisible by 5 print out Buzz
 * when divisible by both 3 and five print out Fizz Buzz
 * 
 * 
 * function fizzBuzz(k){
 *  // check if number % 3 === 0 and number % 5 === 0
 *      if so then return "Fizz Buzz"
 *  // check if number % 3 === 0
 *      if so then return "Fizz"
 *  // check if number % 5 === 0
 *      if so then return "Buzz"
 * }
 */