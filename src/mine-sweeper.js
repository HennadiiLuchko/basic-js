const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  };

  // const res = [];
  // for(let i = 0; i < matrix.length; i++) {
  //   let rowRes = [];
  //   for(let j = 0; j < matrix[i].length; j++) {
  //     let count = 0;
  //     if(matrix[i][j-1]) count++;
  //     if(matrix[i][j+1]) count++;

  //     if(i-1 >= 0) {
  //       if(matrix[i-1][j-1]) count++;
  //       if(matrix[i-1][j]) count++;
  //       if(matrix[i-1][j+1]) count++;
  //     }
  //     if(i+1 < matrix.length) {
  //       if(matrix[i+1][j-1]) count++;
  //       if(matrix[i+1][j]) count++;
  //       if(matrix[i+1][j+1]) count++;
  //     }

  //     rowRes.push(count);
  //   }

  //   res.push(rowRes)
  //   rowRes = [];

  // }

  // return res;

  const rows = matrix.length;
  const cols = matrix[0].length;
  const res = [];

  for (let i = 0; i < rows; i++) {
    const rowRes = [];

    for (let j = 0; j < cols; j++) {
      let count = 0;

      for (let k = i - 1; k <= i + 1; k++) {
        for (let l = j - 1; l <= j + 1; l++) {
          if (k >= 0 && l >= 0 && k < rows &&  l < cols && !(k === i && l === j)) {
            if (matrix[k][l]) {
              count++;
            }
          }
        }
      }
      rowRes.push(count);
    }

    res.push(rowRes);
  }

  return res;
}

module.exports = {
  minesweeper
};
