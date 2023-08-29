function compareTriplets(a, b) {
    let totalA = 0; 
    let totalB = 0;
    let total = [];
    for(let i = 0; i < 3; i++) {
        if (a[i] < b[i]) {
            totalB++;
        } else if (b[i] < a[i]) {
            totalA++;
        }
    }
    total[0] = totalA;
    total[1] = totalB;
    return total 
}