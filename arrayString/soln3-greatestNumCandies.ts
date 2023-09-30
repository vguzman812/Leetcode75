/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * there are n kids with candies
 * i am given integer array candies
 * each candy candies[i] represents how many candies i kid has
 * I am also given an integer extraCandies that represents how many extra candies I have
 * return a bool array result of length n
 * where result[i] is true if ith kid has greatest # candies after being given extra
 * multiple kids can have greatest # candies
 * 2 <= n < = 100
 * 1 <= candies[i] <= 100
 * 1<= extraCandies <= 50
 * 
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]} result
 * 
 * @example
 * Input: candies = [2,3,5,1,3], extraCandies = 3
 * Output: [true,true,true,false,true] 
 * 
 * Input: candies = [4,2,1,1,2], extraCandies = 1
 * Output: [true,false,false,false,false] 
 * 
 * Input: candies = [12,1,12], extraCandies = 10
 * Output: [true,false,true]
 * 
 * @pseudocode
 *  make empty array result
 *  iterate through candies array
 *      add extra candies to current candy count
 *      check if Math.max(...candies array, current candy count) === current candy count
 *          if so then push true onto result array
 *          else push false
 *  return result
 *  
 */

function kidsWithCandies(candies: number[], extraCandies:number): boolean[] {
    let result:boolean[] = [];
    for (let i = 0; i < candies.length; i++){
        let currentCandyValue = candies[i];
        currentCandyValue += extraCandies;
        if (Math.max(...candies, currentCandyValue) === currentCandyValue){
            result.push(true);
        } else {
            result.push(false)
        }
    }
    return result
};