/**
 * PREP
 * @description Given a binary (0,1) array of numbers, delete one element from it. 
 *              Return the size of the longest non-empty subarray containing only 1s.
 *              Return 0 if there is no such subarray
 * @param {number[]} nums
 * @returns {number}
 * @example
 * input: nums = [1,1,0,1]
 * output: 3
 * Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
 * 
 * Input: nums = [0,1,1,1,0,1,1,0,1]
 * Output: 5
 * Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] 
 * longest subarray with value of 1's is [1,1,1,1,1].
 * 
 * Input: nums = [1,1,1]
 * Output: 2
 * Explanation: You must delete one element.
 * 
 * @pseudo
 *  
    Initialize max_length to 0
    Initialize left_pointer to 0
    Initialize right_pointer to 0
    Initialize zero_count to 0

    Iterate right_pointer from 0 to length of nums:
        If nums[right_pointer] is 0:
            Increment zero_count by 1
        If zero_count > 1:
            While zero_count > 1:
                If nums[left_pointer] is 0:
                    Decrement zero_count by 1
                Increment left_pointer by 1
        Set max_length to the maximum of max_length and (right_pointer - left_pointer)

    Return max_length - 1
 *
 */

    function longestSubarray(nums: number[]): number {
        let max_length = 0;
        let left = 0;
        let zeros = 0;
        for (let right = 0; right < nums.length; right++){
            if (nums[right] === 0) {
                zeros++
            }
            if (zeros > 1) {
                while (zeros > 1) {
                    if (nums[left] === 0) {
                        zeros--
                    }
                    left++
                }
            }
            max_length = Math.max(max_length, (right - left))
        }
        return max_length
    }
    