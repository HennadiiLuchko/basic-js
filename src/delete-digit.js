const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = []
  let arr = n.toString().split('')
    if(arr.length < 3) {
      arr.map(el => result.push(Number(el)))
    } else {
        for(let i = 0; i < arr.length - 1; i++) {
            result.push(Number(arr.filter((el, index) => index != i).join('')))
        }
    }
    return Math.max(...result)
}

module.exports = {
  deleteDigit
};
