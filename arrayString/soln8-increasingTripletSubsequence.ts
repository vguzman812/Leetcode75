/**
 * @description 
 * given integer array nums
 * returns a bool
 * checking for a triple of indices [a, b, c]
 * a < b < c
 * and nums[a] < nums[b] < nums[c]
 * if exists return true else false
 * 
 * @param {number[]} nums
 * @returns {boolean}
 * 
 * @example
 * Input: nums = [1,2,3,4,5]
 * Output: true
 * 
 * Input: nums = [5,4,3,2,1]
 * Output: false
 * 
 * Input: nums = [2,1,5,0,4,6]
 * Output: true
 * Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 * 
 * @pseuducode
 *  function increasingTriplet(nums: number[]):boolean{
 *    find max value for first and second num
 *    iterate through nums
 *      if num <= first
 *        first is updated to current
 *      else num > first
 *      check if num <= second
 *        if so update second
 *      else current number > both first and second
 *      means first and second number are < max
 *      which means if we have a number > both first and second then we have triplet
 *        return true
 *    haven't found triplet
 *    return false
 *  }
 */

function increasingTriplet(nums) {
  let first = Number.MAX_VALUE;
  let second = Number.MAX_VALUE;

  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }

  return false;
}
