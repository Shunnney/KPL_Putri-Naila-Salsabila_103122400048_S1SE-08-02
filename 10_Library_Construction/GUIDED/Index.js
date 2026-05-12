import { parse } from "node:path";

export function tambah(x, y) {
  return x + y;
}

export function kurang(x, y) {
  return x - y;
}

export function kali(x, y) {
  return x * y;
}

export function bagi(x, y) {
  return x / y;
}

export function pangkat(x, y) {
  return x ** y;
}

export function persamaan(str) {
  // Misalkan 3x + 5 = 14
}

/** 
@param {string} x
@param {number} a
@param {number} b
*/

export function plsv_tiga(x, a, b) {
    const k = b - a;

    if (x.length === 1) {
        return k;
    } else if (x.length === 2) {
        return bagi(k, v);
    }

    return 0;

}

/**
 * @param {string} x
 * @param {number} a
 */

export function plsv_dua(x, a) {
    const coeff = parseInt(x);
    return bagi(a, coeff);  
}