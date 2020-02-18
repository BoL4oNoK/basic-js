module.exports = class DepthCalculator {
    calculateDepth( arr, current = 1, arrDepth = []) {
        arrDepth.push(current);
        arr.forEach(element => {
            if (Array.isArray(element)) this.calculateDepth(element, current + 1, arrDepth); 
        });

        var depth = 1;
        arrDepth.forEach(element => {
            if (element > depth) depth = element;
        });
        return depth;
    }
};