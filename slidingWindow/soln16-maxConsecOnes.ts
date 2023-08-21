// https://leetcode.com/problems/max-consecutive-ones-iii/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @description Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
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
 */
function longestOnes(nums: number[], k: number): number {
    let maxCount = 0;
    let currentCount = 0;
    let left = 0;
    let flips = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num === 0) flips++
        while (flips > k) {
            if (nums[left] === 0) flips--
            left++
        }
        currentCount = i - left + 1
        maxCount = Math.max(maxCount,currentCount)
    }
    return maxCount
}

/**
 * keep track of max count
 * keep track of current Count
 * keep track of left pointer
 * keep track of zeroes we have transformed
 * iterate through array
 *  if current elemnt is 0, increment zeros we have transformed
 *  if zeroes we have transfored is now greater than k
 *          if array[left] === 0 
 *              decrement zeroes
 *          increment left pointer 
 *      repeat ad nauseum until zeroes is <= k
 *  current count is window length so right - left + 1
 *  compare current count to max count
 * return max count
 */


/*
Initialize maxCount as the maximum number of consecutive 1's found so far
Initialize left as the left pointer for the current window
Initialize zeros as the number of zeros in the current window

Start iterating through nums using right as the index
    If we find a zero at the current right index
        Increment zeros

    While zeros exceed k (we can't flip more than k zeros)
        If the element at the left index is zero
            Decrement zeros (since we're moving past this zero)
        Increment left to move the window to the right

    Update maxCount to be the maximum of maxCount and the length of the current window from left to right

Return maxCount

*/

