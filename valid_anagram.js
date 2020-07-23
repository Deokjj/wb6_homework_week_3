/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const count = {};
    
    for(const char of s.split('')){
        count[char] = count[char] + 1 || 1;
    }
    
    for(const char of t.split('')){
        if(count.hasOwnProperty(char) === false) return false;
        count[char]--;
    }
    
    for(const key in count){
        if(count[key] !== 0) return false;
    }
    
    return true;
};