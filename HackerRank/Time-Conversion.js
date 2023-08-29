function timeConversion(s) {
    const newS = s.slice(0,8); 
    const time = s.slice(8,10);
    const sArr = newS.split(":");
    let result;
    
    if (time == "AM" && sArr[0] == 12) { 
        result = "0" + ( parseInt(sArr[0]) - 12 ) + ":" + sArr[1] + ":" + sArr[2]; 
    } else if (time == "PM" && sArr[0] < 12) {
         result = ( parseInt(sArr[0]) + 12 ) + ":" + sArr[1] + ":" + sArr[2];
    } else {
        result = newS;
    }
    
    return result
}