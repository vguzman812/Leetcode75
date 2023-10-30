/**
 * https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * array of numbers length n
 * array[i] is net gain in altitude between i and i + 1
 * return max altitude reached
 *
 * @param {number[]} gain
 * @returns {number}
 * @pseudocode
 * initialize max = 0
 * initialize current = 0
 * iterate through gain
 *      add current element to current
 *      max = Math.max(max, current)
 * return max
 *
 */

function largestAltitude(gain: number[]): number {
  let max = 0;
  let current = 0;
  gain.forEach((v) => {
    current += v;
    max = Math.max(current, max);
  });
  return max;
}
