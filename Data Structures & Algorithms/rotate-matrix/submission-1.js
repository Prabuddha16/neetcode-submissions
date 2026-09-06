class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        // return this.brute(matrix);
        return this.optimal(matrix);
    }

    optimal(matrix) {
        // S1 - Reverse matrix vertically
        matrix.reverse();

        // S3 - Transpose the matrix
        for (let i = 0; i < matrix.length; i++) {
            for (let j = i + 1; j < matrix.length; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
    }

    brute(matrix) {
        // S1 - Initialize
        const n = matrix.length;
        const matrixArr = Array.from({ length: n }, () => Array(n).fill(0));

        // S2 - Rotate matrix elements
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                matrixArr[j][n - 1 - i] = matrix[i][j];
            }
        }

        // S3 - Assign rotated elements to actual matrix
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                matrix[i][j] = matrixArr[i][j];
            }
        }
    }
}
