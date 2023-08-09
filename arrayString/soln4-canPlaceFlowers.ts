// https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let numAdjacentFree: number = 0;
    flowerbed.forEach((_, index) => {
        const prev: number = index-1;
        const next: number = index+1;
        if (!flowerbed[prev] && !flowerbed[index] && !flowerbed[next]){
            numAdjacentFree++;
            flowerbed[index] = 1
        }
    })
    return numAdjacentFree >= n
}
