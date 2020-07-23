/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);
    let result = 0;
    
    let gInd = 0, sInd = 0;
    while(gInd < g.length && sInd < s.length){
        // child is content with minimum size of the remaining cookies
        if(g[gInd] <= s[sInd]){
            gInd++;
            sInd++;
            result++;
        // current Index child needs bigger cookie than current Index cookie
        } else if(g[gInd] > s[sInd]){
            sInd++;
        }
    }
    
    return result;
};