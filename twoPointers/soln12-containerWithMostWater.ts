// https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=leetcode-75
function maxArea(height: number[]): number {
    let max: number = 0;
    let left: number = 0;
    let right:number = height.length -1
    while (left <= right){
        let currentArea:number = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, currentArea);
        if (height[left] < height[right]){
            left ++
        }
        else right --
    }
    return max
};

// find highest height and record which index it's at and height.
// look at next index. if current index > highest height, 
//      highest height == current index value
//      second highest height == last highest height index value.
// else if current index value > second highest height
//      second highest height = current index value
// width == highest index of the two heights - lowest index of the two heights.
// area = second highest height * width

