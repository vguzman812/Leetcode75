/**
 * https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75
 * 
 * @description
 * Given an array of integers arr, 
 * return true if the number of occurrences 
 * of each value in the array 
 * is unique 
 * or false otherwise.
 * 
 * @param {number[]} arr
 * @returns {boolean}
 * 
 * @example
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
 * 
 * Input: arr = [1,2]
 * Output: false
 * 
 * Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * Output: true
 * 
 * @constraints
 * 1 <= arr.length <= 1000
 * -1000 <= arr[i] <= 1000
 * 
 * @pseudocode
 *  initialize empty obj, freqMap to store frequency of each num in arr
 *  initialize mpty obj, unique Count to store frequency of each freq value
 *  Loop through each num in arr
 *      if num in freqMap, 
 *          increment it
 *      else 
 *          add num to freq map with value 1
 *  Loop through each key-value in freqMap
 *      let freq = value of current item
 *      if freq exists in uniqueCount
 *          return false
 *      else
 *          add freq to uniqueCount with value 1
 *  return true
 *      
 */

function uniqueOccurrences(arr: number[]): boolean {
    let freqMap = {}
    let uniqueCount = {}
    for (let num of arr){
        if (freqMap[num]) freqMap[num]++
        else freqMap[num] = 1
    }
    for (let key in freqMap){
        let frequency = freqMap[key]
        if (uniqueCount[frequency]) return false
        else uniqueCount[frequency] = 1
    }
    return true
};
