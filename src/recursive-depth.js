const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

    // if (!Array.isArray(arr) || arr.length == 0) return 0;

    calculateDepth(arr) {
        let one = ['['];
        let pair = { ['[']: ']' };
        let stack = [];
        let count = 0
        for (let i = 0; i < arr.length; i++){
            let cur = arr[i];
        if (one.includes(cur)) {
            stack.push(cur);
        } else {
            if (stack.length === 0) {
                return stack.length;
            }
        }
            let top = stack[stack.length - 1];
            if (pair[cur] === top) {
                count++;
                stack.pop();
                
            }
        
            return stack.length;
        }
    
    }
}
        // for (let item of arr) {
        //     if (!Array.isArray(item) || item.length==0) return 0;
        // };
        // let calc = arr.map(i => i.length).sort((a, b) => a - b);
        // for (let i = 0; i < calc.length - 1; i++){
        // if (calc[i + 1] - calc[i] > 1 ) return (calc[i] + 1);
        // }
        module.exports = {
            DepthCalculator
        };
    
