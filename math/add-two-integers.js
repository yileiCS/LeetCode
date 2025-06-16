/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function(num1, num2) {
    if (num1 >= -100 && num1<= 100 && num2 >= -100 && num2 <= 100) {
        return (num1 + num2);
    }
    throw new Error ("Input values must be between -100 and 100.");
};