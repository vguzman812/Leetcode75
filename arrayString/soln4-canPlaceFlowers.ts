/**
 * https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * Given integer array, flowerbed containing 0s and 1s
 * 0 === empty
 * 1 === occupied
 * given integer n
 * return boolean
 * true if n flowers can be planted without violating adjacency
 * false otherwise
 * 0 <= n <= flowerbed.length
 * 1 <= flowerbed.length <= 2 * 104
 *
 * @example
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 *
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @returns {boolean}
 *
 * @pseudocode
 *  seedsToPlant = n
 *  iterate through flowerbed
 *      if current bed is empty and !flowerbed i-1 and !flowebed i+1
 *          then plant a seed
 *          decrement seeds to plant
 *  return seeds to plant <= 0
 *
 */

var canPlaceFlowers = function (flowerbed, n) {
	let seedsToPlant = n;
	for (let i = 0; i < flowerbed.length; i++) {
		if (seedsToPlant === 0) break;
		let currentPlot = flowerbed[i];
		let nextPlot = flowerbed[i + 1];
		let prevPlot = flowerbed[i - 1];
		if (!currentPlot && !nextPlot && !prevPlot) {
            flowerbed[i] = 1;
			seedsToPlant--;
		}
	}
    return seedsToPlant <= 0
};
