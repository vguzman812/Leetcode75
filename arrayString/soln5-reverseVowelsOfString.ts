// https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75
function reverseVowels(s: string): string {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let spottedVowels: string[] = [];
    let newString: string[] = s.split("")
    for(let i = 0; i<s.length; i++){
        if(vowels.includes(s[i])){
            spottedVowels.push(s[i])
        }
    }
    for(let i = 0; i<s.length; i++){
        if(vowels.includes(s[i])){
            const vowel = spottedVowels.pop();
            if (vowel !== undefined) {
                newString[i] = vowel;
            }        
        }
    }
    return newString.join("")
};