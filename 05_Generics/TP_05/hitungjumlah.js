function hitung(teks, tipe) {
    let hasil = 0;

    for (const c of teks) {
        if (tipe === "semua") {
            hasil++;

        } else if (tipe === "huruf") {
            if (c === ' ') continue;
            hasil++;
        }
    }

    return hasil;
}

//TEST CODE
const str = "Bar bar bar";

console.log(
    hitung(str, "semua") 
);

console.log(
    hitung(str, "huruf") 
);

hitung(str, "huruf");