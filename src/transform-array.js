const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error (`'arr' parameter must be an instance of the Array!`)
  } 

  let res = [...arr];

  if(res[0] === '--discard-prev' || res[0] === '--double-prev') {
      res[0]= null;
  };

  if(res[res.length-1] === '--double-next' || res[res.length-1] === '--discard-next') {
      res[res.length-1] = null;
  };

  for(let i = 0; i < res.length; i++) {
    if(res[i] === '--discard-prev') {
      res[i] = null;
      res[i-1] = null;
    };
    if(res[i] === '--discard-next') {
       res[i] = null;
       res[i+1] = null;
    };
    if(res[i] === '--double-prev') {
      res[i] = res[i-1]
    }
    if(res[i] === '--double-next') {
      res[i] = res[i+1]
    };

  }; 
 
  return res.filter(el=> el !== null)

}


module.exports = {
  transform
};
