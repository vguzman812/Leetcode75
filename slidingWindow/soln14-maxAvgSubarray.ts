// https://leetcode.com/problems/maximum-average-subarray-i/?envType=study-plan-v2&envId=leetcode-75 
function findMaxAverage(nums: number[], k: number): number {
    let maxAvg: number = -Infinity;
    let sum: number = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    maxAvg = sum;
    for (let i = k; i < nums.length; i++){
        sum = sum - nums[i-k] + nums[i]
        maxAvg = Math.max(maxAvg, sum)
    }
    return maxAvg / k
}