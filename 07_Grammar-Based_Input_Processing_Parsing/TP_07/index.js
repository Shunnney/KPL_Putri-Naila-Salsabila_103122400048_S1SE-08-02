function toNumberArray(number) {
    let rawElements = [];

    if (Array.isArray(number)) {
        rawElements = number;
    } else if (typeof number === "string") {
        rawElements = number.split(/[,\s]+/);
    } else {
        return [];
    }

    return rawElements
        .map(item => item.trim()) 
        .filter(item => item !== "") 
        .map(item => Number(item))
        .filter(num => !isNaN(num)); 
}

console.log(toNumberArray("1, 2"));                         
console.log(toNumberArray(["1", "2"]));                  
console.log(toNumberArray(" 11,55,33  "));               
console.log(toNumberArray(["0.2", "-11", "abc23"]));    