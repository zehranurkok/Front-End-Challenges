function diagonalDifference(arr) {
    let lefttoright = 0;
    let righttoleft = 0;
    let dimention = arr.length - 1;
    let difference = 0;
    
    for (let i = 0; i <= dimention; i++) {
        for(let j = dimention; j >= 0; j--) {
            if (i == j && i + j != dimention) {
                lefttoright = lefttoright + arr[i][j];
            }
            else if (i + j == dimention && i != j) {
                righttoleft = righttoleft + arr[i][j];
            }
        }
    }
    difference = Math.abs(lefttoright - righttoleft);
    return difference
}