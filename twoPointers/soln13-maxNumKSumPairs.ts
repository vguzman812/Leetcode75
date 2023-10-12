/**
 * https://leetcode.com/problems/max-number-of-k-sum-pairs/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * given integer array nums
 * given integer k
 * pick two numbers from array whose sum === k
 * remove those two numbers from array
 * return max number of operations performable on array
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 *
 * @example
 * Input: nums = [1,2,3,4], k = 5
 * Output: 2
 * Explanation: Starting with nums = [1,2,3,4]:
 * - Remove numbers 1 and 4, then nums = [2,3]
 * - Remove numbers 2 and 3, then nums = []
 * There are no more pairs that sum up to 5, hence a total of 2 operations.
 *
 * Input: nums = [3,1,3,4,3], k = 6
 * Output: 1
 * Explanation: Starting with nums = [3,1,3,4,3]:
 * - Remove the first two 3's, then nums = [1,4,3]
 * There are no more pairs that sum up to 6, hence a total of 1 operation.
 *
 * @pseudocode
 *  1. Initialize a hash table and set count = 0.
 *  2. Loop through each number x in nums.
 *      - If (k - x) exists in the hash table:
 *          - Increment count by 1.
 *          - Decrement the value of (k - x) in the hash table by 1.
 *          - If the value of (k - x) becomes 0, remove it from the hash table.
 *      - Else:
 *          - Increment the value of x in the hash table by 1.
 *  3. Return count.
 *
 */

function maxOperations(nums: number[], k: number): number {
	let hash = new Map();
	let count = 0;
	for (let num of nums) {
		const complement = k - num;

		if (hash.get(complement) > 0) {
			count++;
			hash.set(complement, hash.get(complement) - 1);
		} else {
			hash.set(num, (hash.get(num) || 0) + 1);
		}
	}
    return count
}
