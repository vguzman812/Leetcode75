// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75
function maxVowels(s, k) {
    var vowels = {
        a: "a",
        e: "e",
        i: "i",
        o: "o",
        u: "u",
    };
    var count = 0;
    var maxCount = 0;
    // Count vowels in the initial window of length k
    for (var i = 0; i < k; i++) {
        if (vowels.hasOwnProperty(s[i])) {
            count++;
        }
    }
    maxCount = count;
    // Slide the window one character at a time
    for (var i = k; i < s.length; i++) {
        // If the character leaving the window is a vowel, decrease the count
        if (vowels.hasOwnProperty(s[i - k])) {
            count--;
        }
        // If the character entering the window is a vowel, increase the count
        if (vowels.hasOwnProperty(s[i])) {
            count++;
        }
        // Update the maximum count if the current count is greater
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
}
;
