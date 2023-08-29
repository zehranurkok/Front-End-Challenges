function matchingStrings(strings, queries) {
    let a = 0;
    let arr = [];
    for (let i = 0; i < queries.length; i++ ) {
        for ( let j = 0; j < strings.length; j++) {
            (queries[i] == strings[j]) && (a += 1);
        }
        arr.push(a);
        a = 0;
    } 
    return arr
}