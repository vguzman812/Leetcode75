// https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=leetcode-75
function productExceptSelf(nums) {
    const n = nums.length;
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    const answer = new Array(n);
  
    // Calculate left products for each element
    let leftProduct = 1;
    for (let i = 1; i < n; i++) {
      leftProduct *= nums[i - 1];
      leftProducts[i] = leftProduct;
    }
  
    // Calculate right products for each element
    let rightProduct = 1;
    for (let i = n - 2; i >= 0; i--) {
      rightProduct *= nums[i + 1];
      rightProducts[i] = rightProduct;
    }
  
    // Calculate final result by multiplying left and right products
    for (let i = 0; i < n; i++) {
      answer[i] = leftProducts[i] * rightProducts[i];
    }
  
    return answer;
  }
  