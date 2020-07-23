/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sInd = 0, tInd = 0;
    
    while(sInd < s.length && tInd < t.length){
        if(s[sInd] === t[tInd]){
            sInd++;
            tInd++;
        } else {
            tInd++;
        }
    }
    
    return sInd === s.length;
};