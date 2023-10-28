/**
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * given array nums filled with either 0's or 1's
 * delete one element from array
 * return length of longest subarray containing only 1s
 * return 0 if array empty
 *
 * @param {number[]} nums
 * @returns {number}
 * @pseudocode
 * function longestOnes(nums: Array, k: Integer) -> Integer:
 *     Initialize left = 0
 *     Initialize right = 0
 *     Initialize maxOnes = 0
 *     Initialize zeroCount = 0
 *
 *     while right < length of nums:
 *         // Increase zeroCount if the current element is 0
 *         if nums[right] == 0:
 *             zeroCount = zeroCount + 1
 *
 *         // Shrink the window if zeroCount is greater than k
 *         while zeroCount > k:
 *             if nums[left] == 0:
 *                 zeroCount = zeroCount - 1
 *             left = left + 1
 *
 *         // Update maxOnes if the current window size is greater
 *         maxOnes = max(maxOnes, right - left + 1)
 *
 *         // Move the right pointer
 *         right = right + 1
 *
 *     return maxOnes
 */

function longestSubarray(nums: number[]): number {
  let left = 0;
  let right = 0;
  let zeroes = 0;
  let maxLength = 0;

  while (right < nums.length) {
    let rightElement = nums[right];
    if (rightElement === 0) zeroes++;
    while (zeroes > 1) {
      let leftElement = nums[left];
      if (leftElement === 0) zeroes--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left);
    right++;
  }
  return maxLength;
}
console.log("result: expected:")
console.log(longestSubarray([1, 1, 0, 1]),3);
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]), 5);
console.log(longestSubarray([1, 1, 1]), 2);
console.log(longestSubarray([]), 0);
console.log(longestSubarray([0, 0, 0]), 0);
