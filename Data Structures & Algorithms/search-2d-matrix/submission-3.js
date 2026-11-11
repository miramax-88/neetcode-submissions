class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;

        let left = 0;
        let right = ROWS * COLS - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let row = Math.floor(mid / COLS);
            let col = mid % COLS;
            if (target === matrix[row][col]) return true;

            if (target < matrix[row][col]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return false;
    }
}
