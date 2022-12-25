//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function calculateDiagonals(matrix) {
   const n = matrix.length;
   let leftDiagonalSum = 0;
   let rightDiagonalSum = 0;

   matrix.map((row, rowIndex) => {
        row.map((x, itemIndex) => {
            if (rowIndex === itemIndex) { 
                leftDiagonalSum += matrix[rowIndex][itemIndex];
            }
            if (rowIndex + itemIndex === n - 1) {
                rightDiagonalSum += matrix[rowIndex][itemIndex];
            }
        });
    });
    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}

const matrix = [
  [2, 3,  4,  8], 
  [5, 3, -1, -5],
  [9, 8, -2, 12],
  [2, 3,  4,  8]
];

console.log(calculateDiagonals(matrix));