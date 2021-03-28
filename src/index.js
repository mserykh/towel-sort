
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (typeof matrix === 'undefined') return [];

  const length = matrix.length;
  let result = [];
  
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
