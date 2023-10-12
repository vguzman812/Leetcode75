/**
 * https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * given an integer array nums
 * return integer array answer
 * answer[i] === product of ...nums except answer[i]
 * don't need to worry about bigint
 * must write O(n) and without division
 * 2 <= nums.length <= 105
 * -30 <= nums[i] <= 30
 * 
 * @example
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 * 
 * @param {number[]} nums
 * @returns {number[]} answer
 * 
 * @pseudocode
 * 	function calculateProduct(nums):
 * 	  Initialize leftProducts filled with 1s
 * 	  Initialize rightProducts filled with 1s
 * 	  Initialize answer filled with 1s
 * 	  // Calculate products of elements to the left of each index
 * 	  leftProduct = 1
 * 	  Loop i from 0 to length of nums:
 * 	    Store leftProduct in leftProducts[i]
 * 	    Update leftProduct by multiplying it with nums[i]
 * 	  // Calculate products of elements to the right of each index
 * 	  rightProduct = 1
 * 	  Loop i from last index to 0:
 * 	    Store rightProduct in rightProducts[i]
 * 	    Update rightProduct by multiplying it with nums[i]
 * 	  // Calculate final answer
 * 	  Loop i from 0 to length of nums:
 * 	    answer[i] = leftProducts[i] * rightProducts[i]
 * 	  return answer
 * 	
 */


function productExceptSelf(nums: number[]): number[] {
	let answer = Array(nums.length).fill(1);
	let leftArray = Array(nums.length).fill(1);
	let rightArray = Array(nums.length).fill(1);

	let leftProduct = 1;
	for (let i = 0; i < nums.length; i++) {
		leftArray[i] = leftProduct;
		leftProduct *= nums[i];
	}

	let rightProduct = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		rightArray[i] = rightProduct;
		rightProduct *= nums[i];
	}

	for (let i = 0; i < nums.length; i++) {
		answer[i] = rightArray[i] * leftArray[i];
	}

	return answer;
}
