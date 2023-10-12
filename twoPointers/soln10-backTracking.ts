/**
 * https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * given integer array nums
 * move all 0's to end
 * maintain relative order of non-zero elements
 * must do this in place without creating copy array
 *
 * @example
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Input: nums = [0]
 * Output: [0]
 *
 * @param {number[]} nums
 * @returns {number[]}
 *
 * @pseudocode
 *  function moveZeroes(nums: number[]):number[]{
 *      let leftPointer = 0
 *      let rightPointer = 0
 *      iterate through array with left pointer
 *      if left pointer is a zero
 *          right pointer starts at left + 1
 *          if right pointer is !== 0
 *              swap the zero on the left for the num on the right
 *              nums[left] = nums[right]
 *              nums[right] = 0
 *          else right pointer is 0 so we iterate right pointer
 *              right pointer ++
 *      return nums
 *  }
 */

function moveZeroes(nums: number[]): number[] {
	let lastNonZeroFoundAt = 0;
	for (let cur = 0; cur < nums.length; cur++) {
		if (nums[cur] !== 0) {
			let temp = nums[lastNonZeroFoundAt];
			nums[lastNonZeroFoundAt] = nums[cur];
			nums[cur] = temp;
			lastNonZeroFoundAt++;
		}
	}
	return nums;
}
