module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let countDepth = 0;
        if(Array.isArray(arr)) {
            let count = 0;
            for(let i = 0; i< arr.length; i +=1) {                
                count = Math.max(this.calculateDepth(arr[i]), count);          
            }
            countDepth = count + 1;
        } 
        return countDepth;
    }
};