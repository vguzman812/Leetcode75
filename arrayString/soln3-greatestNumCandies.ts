// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // create storage array for booleans
    let result: boolean[] = [];
    // iterate through kids with candies
    for (let i = 0; i < candies.length; i++){
        let candiesPlusExtra: number = candies[i] + extraCandies;
        if (Math.max(...candies) <= candiesPlusExtra){
            result.push(true);
        }
        else {
            result.push(false);
        }
    }
    return result;
};

const highest = Math.max(...candies);
return kidsWithCandies.map((candy) => candy + extraCandies >= highest``)