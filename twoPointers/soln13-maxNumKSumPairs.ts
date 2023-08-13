// https://leetcode.com/problems/max-number-of-k-sum-pairs/?envType=study-plan-v2&envId=leetcode-75
function maxOperations(a: number[], k: number): number {
    let map = new Map<number, number>();
    let cnt = 0;
	
	// filling the map
    for(let i of a) {
        map.set(i, (map.get(i)??0) + 1);
    }
    
    for(let n of a) {
        let nCnt = map.get(n); 
        
		// if n is not present in map continue traversal choose next n (if any)
		if(!nCnt) continue; 
		
		// if n is present choose it and deduct the count
        map.set(n, nCnt-1);
		
		// get the count of complement
        let nCnt1 = map.get(k - n);
		
		// if count of n and n complement exist then its a hit increase count
        if (nCnt && nCnt1) {
            map.set(k - n, nCnt1 - 1);
            cnt++;
        } else {
			// no complement exist so release the choosen n by setting count of n
            map.set(n, nCnt);
        }
    }
    return cnt;
};