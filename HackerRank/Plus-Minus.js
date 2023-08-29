function plusMinus(arr) {
    let p = 0; 
    let n = 0; 
    let z = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] < 0 ) { n++; }
        else if ( arr[i] > 0 ) { p++; }
        else { z++; }
    }
    
    let newArr = [(p/arr.length).toPrecision(6),(n/arr.length).toPrecision(6),(z/arr.length).toPrecision(6)];
    
    console.log(newArr[0]);
    console.log(newArr[1]);
    console.log(newArr[2]);
}