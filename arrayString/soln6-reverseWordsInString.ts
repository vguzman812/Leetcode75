// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75

function reverseWords(s: string): string {
    let arr: string[] = s.trim().split(" ");
    arr = arr.filter(element => element !== undefined);
    return arr.join(" ")
};