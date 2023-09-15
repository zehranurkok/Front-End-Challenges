function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result;
    let sL1 = s.replace(/\s/g,"");
    sL1 = sL1.toLowerCase();
    let sL2 = sL1.split("");
    let sL3 = [...new Set(sL2)];
    let sL4 = sL3.sort();
    let sL5 = sL4.join("");
    if(sL5 == alphabet ){
        result = "pangram";
                
    } else { 
        result = "not pangram"; 
    }
    return result
}