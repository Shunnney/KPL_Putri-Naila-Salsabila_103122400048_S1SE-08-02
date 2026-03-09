const arr1 = [1, 2, 3, 4, 5];

function mulOfArray(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i ++  ) {
           result = result + arr[i];
       }
    }
    
    return result;


const arr1Result = mulOfArray(arr1);
console.log(arr1Result);