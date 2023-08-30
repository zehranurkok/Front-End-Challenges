function countingSort(arr) {
    let a = [];
    while (a.length < 100) {a.push(0);}
    
    for (let i =  0; i < arr.length; i++) {
        a[arr[i]]++;
    }
    return a
}