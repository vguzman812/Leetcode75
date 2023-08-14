// https://leetcode.com/problems/maximum-average-subarray-i/?envType=study-plan-v2&envId=leetcode-75 
function findMaxAverage(nums, k) {
    var maxAvg = -Infinity;
    var sum = 0;
    for (var i = 0; i < k; i++) {
        sum += nums[i];
    }
    maxAvg = sum;
    for (var i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxAvg = Math.max(maxAvg, sum);
    }
    return maxAvg / k;
}
