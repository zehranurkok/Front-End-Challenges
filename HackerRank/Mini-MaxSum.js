function miniMaxSum(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    let minV = sum - max;
    let maxV = sum - min; 
    
    console.log(minV + " " + maxV);
}