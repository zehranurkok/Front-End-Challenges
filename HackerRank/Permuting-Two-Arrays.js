function twoArrays(k, A, B) {
    const newA = A.sort(function(a,b){return a-b});
    const newB = B.sort(function(a,b){return b-a});
    for(let i = 0; i < A.length; i++) {
        if (newA[i] + newB[i] < k) {
            return "NO"
        }
    }
    return "YES"
}