// https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75
function isSubsequence(s: string, t: string): boolean {
    let pointerS: number = 0;
    let pointerT: number = 0;
    while (pointerT < t.length){
        if(t[pointerT] === s[pointerS]){
            pointerS++;
        }
        pointerT ++;
        if (pointerS === s.length){
            return true;
        }
    }
    return false
};
/*
time complexity is 2n
space complexity is 1
function isSubsequence(s, t)
    initialize pointerS to 0
    initialize pointerT to 0

    while pointerT is less than length of t
        if character at pointerT in t equals character at pointerS in s
            increment pointerS by 1
        end if

        increment pointerT by 1

        if pointerS equals length of s
            return true
        end if
    end while

    return false
end function
*/