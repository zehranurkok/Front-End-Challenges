function birthday(s, d, m) {
    let ways = 0;
    let sum = 0;
    for(let i = 0; i < s.length; i++) {
        let arr = s.slice(i, i+m);
        sum = arr.reduce((x,y) => x+y);
        (sum === d) && ways++;
    }
    return ways
}