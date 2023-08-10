// https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75
function increasingTriplet(nums: number[]): boolean {
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;
  
    for (const num of nums) {
      if (num <= first) {
        first = num; // Update the smallest number found so far
      } else if (num <= second) {
        second = num; // Update the second smallest number found so far
      } else {
        return true; // If we find a number greater than both first and second, we have a triplet
      }
    }
  
    return false;
  }