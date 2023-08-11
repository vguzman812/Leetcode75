// https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
/**
 Do not return anything, modify nums in-place instead.
 */

 function moveZeroes(nums: number[]): void {
    let size: number = 0;
    for (let i = 0; i< nums.length; i++){
        if (nums[i] == 0) size ++;
        else if (size > 0) {
            let temp: number = nums[i];
            nums[i] = 0;
            nums[i - size] = temp;
        }
    }
};

// keep track of how many 0s we have come across
// iterate over the array
// if our current number is == 0 then we add to our size.
// otherwise if size is gresther than 0 or else we have counted at least 1 0,
// then we need to switch current iteration with 0 and put current iteration back however many zeroes we have come across.

/*
    we have a writing pointer and a reading pointer.
    increment through the array
    hold our current iteration value in a temporary variale.
    once held, then we set out curent iteration to 0.
    and if our temp var !== 0 then we put the temp value where our wirte pointer is pointging
    and we increment the write pointer
    next iteration
*/