/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let start = 0, end = A.length -1; 
    
    while(start < end){
        const mid = start + Math.floor((end - start)/2);
        
        if(A[mid] > A[mid-1] && A[mid] > A[mid+1]) return mid;
        else if(A[mid] > A[mid-1] && A[mid+1] > A[mid]) {
            start = mid + 1;
        }else {
            end = mid -1;
        }
    }
    
    return start;
};