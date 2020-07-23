/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let currentMin = Infinity;
    
    for(const price of prices){
        maxProfit = Math.max(maxProfit, price - currentMin);
        currentMin = Math.min(currentMin, price);
    }
    
    return maxProfit;
};