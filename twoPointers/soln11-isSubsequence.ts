/**
 * https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * given two stirngs s and t
 * return bool
 * s is subsequence of t?
 * if you can delete stuff in t and make s then s is subsequence of t
 * probably just check if s comes in the same order in t then yes.
 *
 * @example
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 *
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 *
 * @pseudocode
 *  function isSubsequence(s: string, t: string): boolean {
 *    // Initialize s_pointer and t_pointer to 0
 *    let s_pointer = 0;
 *    let t_pointer = 0;
 *    // Iterate through string t
 *    while (t_pointer < t.length) {
 *      // If s_pointer exceeds s.length, that means all characters of s were found in t
 *      if (s_pointer === s.length) {
 *        return true;
 *      }
 *      // Compare current character of s with current character of t
 *      if (s[s_pointer] === t[t_pointer]) {
 *        // Move s_pointer to next character in s
 *        s_pointer++;
 *      }
 *      // Always move t_pointer to the next character in t
 *      t_pointer++;
 *    }
 *    // After iterating through t, if s_pointer has reached the end of s, then s is a subsequence of t
 *    return s_pointer === s.length;
 *  }
 *
 */

function isSubsequence(s: string, t: string): boolean {
	let s_pointer = 0;
	let t_pointer = 0;
	while (t_pointer < t.length) {
		if (s_pointer === s.length) {
			return true;
		}
		if (s[s_pointer] === t[t_pointer]) {
			s_pointer++;
		}
		t_pointer++;
	}
	return s_pointer === s.length;
}
