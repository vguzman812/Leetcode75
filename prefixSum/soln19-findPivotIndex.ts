/**
 * https://leetcode.com/problems/find-pivot-index/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where 
 * the sum of all the numbers strictly to the left of the index 
 * is equal to the sum of all the numbers strictly to the index's right.
 * If the index is on the left edge of the array, 
 * then the left sum is 0 because there are no elements to the left. 
 * This also applies to the right edge of the array
 * Return the leftmost pivot index. 
 * If no such index exists, return -1.
 * 
 * @param {number[]} nums
 * @returns {number}
 * @example
 * Input: nums = [1,7,3,6,5,6]
 * Output: 3
 * Explanation:
 * The pivot index is 3.
 * Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
 * Right sum = nums[4] + nums[5] = 5 + 6 = 11
 * 
 * Input: nums = [1,2,3]
 * Output: -1
 * Explanation:
 * There is no index that satisfies the conditions in the problem statement.
 * 
 * Input: nums = [2,1,-1]
 * Output: 0
 * Explanation:
 * The pivot index is 0.
 * Left sum = 0 (no elements to the left of index 0)
 * Right sum = nums[1] + nums[2] = 1 + -1 = 0
 * 
 * @pseudoCode
 * 
 *  initialize total sum = 0
 *  initialize left sum = 0;
 *  Calculate sum of array
 *      for each number in nums 
 *          totalSum += number
 *  iterate through array and find pivot index
 *      for index from 0 to length -1
 *          initialize right sum = total - left - current
 *          if left sum === rightsum you have found pivot
 *              return index
 *          else update left sum
 *              left = left + current
 *  if no pivot found
 *      return -1
 * 
 * @space O(1)
 * @time  O(n)
 */

function pivotIndex(nums: number[]): number {
    let total: number = 0;
    let left: number = 0;
    nums.forEach(number => {
        total += number
    })
    for (let i = 0; i < nums.length; i++){
        let right = total - left - nums[i]
        if (left === right) return i
        left += nums[i]
    }
    return -1
};