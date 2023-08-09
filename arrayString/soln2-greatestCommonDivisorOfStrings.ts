// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75
function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return '';
    }
    const gcd = (a: number, b: number): number => (0 === b ? a : gcd(b, a % b));
    return str1.substring(0, gcd(str1.length, str2.length));
}