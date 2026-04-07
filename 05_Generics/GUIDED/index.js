 //{
 //let deretLarik = deret.split(' ');

  //for (const elemen of deretLarik) {
   // const n = +elemen;
   // let fz = "";

    // Fizz
   // if (n % 3 === 0) {
  //    fz += "Fizz";
    //}
    // Buzz
   // if (n % 5 === 0) {
    //  fz += "Buzz";
    //}

   // if (fz != '') {
    //  hasil += `${fz} `;
    //  continue;
  //  }

  //  hasil += `${n} `;
  //}

 // return hasil;
//}

let hasil = '';

for (let n = 1; n <= 20; n++) {
  let fz = ''; 

  if (n % 3 === 0) {
    fz += "Fizz";
  }

  if (n % 5 === 0) {
    fz += "Buzz";
  }

  if (fz !== '') {
    hasil += `${fz} `;
    continue;
  }

  hasil += `${n} `;
}

console.log(hasil);