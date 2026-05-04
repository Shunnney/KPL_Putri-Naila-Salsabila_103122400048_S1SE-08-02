// fungsi menghitung jumlah huruf (A-Z saja)
export function hitungHuruf(teks) {
    if (typeof teks !== 'string') return 0;

    // ambil hanya huruf A-Z
    const huruf = teks.match(/[a-zA-Z]/g);

    return huruf ? huruf.length : 0;
}

// fungsi menghitung jumlah kata
export function hitungKata(teks) {
    if (typeof teks !== 'string') return 0;

    // ambil kata yang hanya berisi huruf
    const kata = teks.match(/\b[a-zA-Z]+\b/g);

    return kata ? kata.length : 0;
}