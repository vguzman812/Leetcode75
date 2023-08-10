// https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75
function increasingTriplet(nums: number[]): boolean {
    let first = Infinity;
    let second = Infinity;

    nums.forEach(num => {
        if(num < first) first = num;
        else if (num < second) second = num;
        else return true;
    })
    return false;
  }
  