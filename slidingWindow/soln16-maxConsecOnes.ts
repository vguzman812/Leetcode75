// https://leetcode.com/problems/max-consecutive-ones-iii/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @description Given a binary array nums and an integer k,
 * return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 * @example
 * Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
 * Output: 6
 * Explanation: [1,1,1,0,0,THIS ZERO HERE TURNED INTO A ONE,1,1,1,1,THIS ZERO IS NOW A ONE]
 * We were allowed to transform 2 zeros into ones. The ones we decided to flip are labelled
 * @example
 * Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
 * Output: 10             ^ ^       ^
 * Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
 *                       ^ ^       ^
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
function longestOnes(nums: number[], k: number): number {
	let left = 0;
	let right = 0;
	let maxOnes = 0;
	let zeroCount = 0;

	while (right < nums.length) {
		// Increase zeroCount if the current element is 0
		if (nums[right] == 0) {
			zeroCount = zeroCount + 1;
		}
		// Shrink the window if zeroCount is greater than k
		while (zeroCount > k) {
			if (nums[left] == 0) {
				zeroCount = zeroCount - 1;
				left = left + 1;
			}
		}
		// Update maxOnes if the current window size is greater
		maxOnes = Math.max(maxOnes, right - left + 1);

		// Move the right pointer
		right = right + 1;
	}
	return maxOnes;
}
