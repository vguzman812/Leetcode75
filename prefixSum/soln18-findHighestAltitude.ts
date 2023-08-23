/**
 * PREP
 * https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75
 * @param {number[]} gain
 * @returns {number}
 * @description
 * There is a biker going on a road trip. 
 * The road trip consists of n + 1 points at different altitudes. 
 * The biker starts his trip on point 0 with altitude equal 0.
 * You are given an integer array gain of length n 
 * where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). 
 * Return the highest altitude of a point.
 * @example
 * Input: gain = [-5,1,5,0,-7]
 * Output: 1
 * Explanation: biker goes down 5 then up 1 then up 5 then 0 then down 7. highest altitude was 1
 * 
 * Input: gain = [-4,-3,-2,-1,4,3,2]
 * Output: 0
 * Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
 * @pseudoCode
 * initialize a max height variable
 * initialize current height variable
 * loop through our array
 *  add current element to current height
 *  compare max height and current height
 *  set max height to whichever is larger of the two
 * return max height
 */ 

function largestAltitude(gain: number[]): number {
    let max: number = 0;
    let current: number = 0;
    for (let i = 0; i < gain.length; i++){
        current += gain[i];
        max = Math.max(max, current);
    }
    return max;
};