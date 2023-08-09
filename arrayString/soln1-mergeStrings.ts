function mergeAlternately(word1: string, word2: string): string {
    let len = Math.max(word1.length, word2.length);
    let response = ""
    for (let i = 0; i < len; i++){
        if (word1[i]) response += word1[i];
        if (word2[i]) response += word2[i]
    }
    return response
};