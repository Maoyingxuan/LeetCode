/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = Number.MAX_VALUE
    let result = 0
    for(let price of prices){
        if (price < low) low = price
        if((price - low) > result)
            result = price - low
    }
    return result
};
console.log(maxProfit([7,1,5,3,6,4]))