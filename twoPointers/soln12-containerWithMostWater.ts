/**
 * https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * given integer array height length n
 * n vertical lines drawn such that two endpoints of ith line are (i, 0) and (i, height[i])
 * find two lines that form a container with the biggest area
 *
 * @example
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 *
 * Input: height = [1,1]
 * Output: 1
 *
 * @param {number[]} height
 * @returns {number} area
 * @pseudocode
 * maxArea is 0 initially
 * leftIndex side 0
 * rightIndex side  = height array length - 1
 * while left pointer less than or equal to right pointer
 *      let currentArea = (width aka right - left) * smallest height so Math.min(height[left], height[right])
 *      max = max value either currentArea or max
 *      change index value for either left or right
 *      if left value is smaller increment index
 *      if right value is smaller decrement index
 * return max
 */

function maxArea(height: number[]): number {
	let maxArea = 0;
	let leftIndex = 0;
	let rightIndex = height.length - 1;
	while (leftIndex <= rightIndex) {
		let currentWidth = rightIndex - leftIndex;
		let currentHeight = Math.min(height[leftIndex], height[rightIndex]);
		let currentArea = currentWidth * currentHeight;
		maxArea = Math.max(maxArea, currentArea);
		height[leftIndex] < height[rightIndex] ? leftIndex++ : rightIndex--;
	}
	return maxArea;
}
