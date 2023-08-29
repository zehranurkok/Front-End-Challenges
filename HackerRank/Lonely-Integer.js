function lonelyinteger(a) {
    let sortedA = a.sort(function(a, b){return a - b});
    let unique;
    
    for (let i = 0; i < a.length; i++) {
        if (sortedA[i] != sortedA[i+1]) {
            ( (i+1) == (a.length-1) ) ? unique = sortedA[i+1] : unique = sortedA[i];
        } else {
            i++;
        }
    }
    return unique
}