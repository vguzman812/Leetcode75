/**
 * https://leetcode.com/problems/maximum-average-subarray-i/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * given interger array nums
 * nums has length n
 * given integer k
 * find contiguous subarray whose length === k
 * AND that subarray has the maximum average value
 * return the max avg value
 * five decimal places max
 * 
 * @example
 * Input: nums = [1,12,-5,-6,50,3], k = 4
 * Output: 12.75000
 * Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 * 
 * Input: nums = [5], k = 1
 * Output: 5.00000
 * 
 * @param {number[]} nums
 * @param {number} k
 * @returns {number} max avg value
 * 
 * @pseudocode
 *  function findMaxAverage(nums: number[], k: number): number {
 *      let max = -Infinity
 *      let sum = 0
 *      // Iterate through nums starting at index 0 until i <= nums.length - k.
 *      for (let i = 0; i <= nums.length - k; i++) {
 *          // Calculate the sum of the current subarray of length k.
 *          if (i !== 0) {
 *              // If i is not 0, subtract the leftmost element and add the rightmost element.
 *              sum = sum - nums[i - 1] + nums[i + k - 1]
 *          } else {
 *              // If i is 0, it's our first iteration, so calculate the initial sum.
 *              for (let j = 0; j < k; j++) {
 *                  sum += nums[j]
 *              }
 *          }
 *          
 *          // Calculate the average of the current subarray.
 *          let avg = sum / k
 *          
 *          // Update max with the maximum average found so far.
 *          max = Math.max(max, avg)
 *      }
 *      
 *      // Format max to five decimal places.
 *      return Number(max.toFixed(5))
 *  }
 */

function findMaxAverage(nums: number[], k: number): number {
    let max = -Infinity
    let sum = 0

    // Iterate through nums starting at index 0 until i <= nums.length - k.
    for (let i = 0; i <= nums.length - k; i++) {
        // Calculate the sum of the current subarray of length k.
        if (i !== 0) {
            // If i is not 0, subtract the leftmost element and add the rightmost element.
            sum = sum - nums[i - 1] + nums[i + k - 1]
        } else {
            // If i is 0, it's our first iteration, so calculate the initial sum.
            for (let j = 0; j < k; j++) {
                sum += nums[j]
            }
        }
        
        // Calculate the average of the current subarray.
        let avg = sum / k
        
        // Update max with the maximum average found so far.
        max = Math.max(max, avg)
    }
    
    // Format max to five decimal places.
    return Number(max.toFixed(5))
}
