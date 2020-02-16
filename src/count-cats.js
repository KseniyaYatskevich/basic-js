module.exports = function countCats(matrix) {
//  let count=0;
//  for(let i=0; i<=matrix.length-1; i++) {
//    for(let j=0; j<=matrix[i].length-1; j++) {
//     if(matrix[i][j]==="^^") {
//       count++;
//     }
//    }
//  }
//  return count;
return matrix.flat().filter(item => item === '^^').length;
};
