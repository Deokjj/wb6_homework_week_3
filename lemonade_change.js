/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const changes = {
        5: 0,
        10: 0
    };
    
    for(const bill of bills){
        if(bill === 5){
            changes[5]++;
        }
        else if(bill === 10){
            if(changes[5] < 1) return false;
            changes[5]--;
            changes[10]++;
        }
        else if(bill === 20){
            if(changes[5] > 0 && changes[10] > 0) {
                changes[5]--;
                changes[10]--;
            }
            else if(changes[5] > 2){
                changes[5] -= 3;
            } else{
                return false;
            }
        }
        else {
            throw Error;
        }
    }
    
    return true;
};