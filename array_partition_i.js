/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let max = - Infinity, min = Infinity;
    const integersCount = {};
    let result = 0;
    
    for(const num of nums){ // O(n)
        integersCount[num] = integersCount[num] + 1 || 1;
        max = Math.max(max, num);
        min = Math.min(min, num);
     }
    
    let pair = [];
    for(let i = max; i > min -1; i--){ // O(n) because all integers are in the range of (-n, n)
        if(integersCount[i] === undefined) continue;
            
        // evaluate same number pairs
        const pairs = Math.floor(integersCount[i] /2);
        result += pairs * i;
        
        // has non-paired number
        if(integersCount[i] % 2 === 1){
            pair.push(i);
            
            if(pair.length === 2){
                result += Math.min(...pair);
                pair = [];
            }
        }
    }
    
    return result;
};