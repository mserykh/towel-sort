
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let result = [];

  if (typeof matrix === 'undefined') return result;

  const length = matrix.length;
  
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      result.push(...matrix[i]); 
    }
    else if (i % 2 !== 0) {
      result.push(...(matrix[i].reverse())); 
    }
  }
  return result;
}
