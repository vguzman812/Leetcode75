/**
 * https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * Two strings are considered close if you can attain one from the other using the following operations:
 *  Operation 1: Swap any two existing characters.
 *      For example, abcde -> aecdb
 *  Operation 2: Transform every occurrence of one existing character into another existing character, 
 *  and do the same with the other character.
 *      For example, aacabb -> bbcbaa 
 *          (all a's turn into b's, and all b's turn into a's)
 * You can use the operations on either string as many times as necessary.
 * Given two strings, word1 and word2, 
 * return true if word1 and word2 are close, 
 * and false otherwise.
 * 
 * @example
 * Input: word1 = "abc", word2 = "bca"
 * Output: true
 * Explanation: You can attain word2 from word1 in 2 operations.
 * Apply Operation 1: "abc" -> "acb"
 * Apply Operation 1: "acb" -> "bca"
 * 
 * Input: word1 = "a", word2 = "aa"
 * Output: false
 * Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
 * 
 * Input: word1 = "cabbba", word2 = "abbccc"
 * Output: true
 * Explanation: You can attain word2 from word1 in 3 operations.
 * Apply Operation 1: "cabbba" -> "caabbb"
 * Apply Operation 2: "caabbb" -> "baaccc"
 * Apply Operation 2: "baaccc" -> "abbccc"
 * 
 * @param {string} word1
 * @param {string} word2
 * @returns {boolean}
 * 
 * @pseudocode
 *  Initialize freqMap1, freqMap2 as empty maps
 *  if length of word1 is not equal to length of word2 then
 *    return false
 *  for each char in word1 do
 *    freqMap1[char] = freqMap1[char] + 1 or set to 1 if it doesn't exist
 *  for each char in word2 do
 *    freqMap2[char] = freqMap2[char] + 1 or set to 1 if it doesn't exist
 *  keys1 = sorted keys of freqMap1
 *  keys2 = sorted keys of freqMap2
 *  values1 = sorted values of freqMap1
 *  values2 = sorted values of freqMap2
 *  if keys1 is not equal to keys2 then
 *    return false
 *  if values1 is not equal to values2 then
 *    return false
 *  return true
 *  
 * 
 */

function closeStrings(word1: string, word2: string): boolean {
    let freqMap1: { [key: string]: number } = {};
    let freqMap2: { [key: string]: number } = {};

    if (word1.length !== word2.length) return false;

    for (let char of word1) {
        freqMap1[char] ? freqMap1[char] += 1 : freqMap1[char] = 1;
    }
    
    for (let char of word2) {
        freqMap2[char] ? freqMap2[char] += 1 : freqMap2[char] = 1;
    }

    let keys1 = Object.keys(freqMap1).sort().toString();
    let keys2 = Object.keys(freqMap2).sort().toString();
    
    let values1 = Object.values(freqMap1).sort((a, b) => a - b).toString();
    let values2 = Object.values(freqMap2).sort((a, b) => a - b).toString();
    
    if (keys1 !== keys2) return false;
    if (values1 !== values2) return false;
    
    return true;
}
