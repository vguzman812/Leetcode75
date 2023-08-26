/**
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75
 *
 * @description
 * given two 0-indexed integer arrays, nums1, and nums2,
 * return a list answer of size 2 where:
 * answer[0] is a list of all distinct integers in nums1
 *  which are not present in nums2
 * answer[1] is same but for nums2
 * no sorting necessary
 *
 * @example
 * Input: [1,2,3], [2,4,6]
 * Output: [[1,3], [4,6]]
 * Explanation:
 * For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
 * For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[][]}
 *
 * @pseudocode
 *  initialize answer array as new sets of each argument
 *      [ansSet 1, ansSet 2] = [new Set(nums1), new Set(nums2)]
 *  filter answer set 1
 *      try to delete element from answer set 2.
 *          if deleted we get true, if not found we get false
 *     if we get true then we have deleted the item from set 2 and need to keep it in set 1
 *          so negate the bool
 *              !set2.delete(n)
 * return [[...answer set 1], [... answer set 2]]
 * 
 */

function findDifference(nums1: number[], nums2: number[]): number[][] {
    const [ansSet1, ansSet2] = [new Set(nums1), new Set(nums2)];
    
    return [
        [...ansSet1].filter(n => !ansSet2.delete(n)),
        [...ansSet2]
    ];
}


  
