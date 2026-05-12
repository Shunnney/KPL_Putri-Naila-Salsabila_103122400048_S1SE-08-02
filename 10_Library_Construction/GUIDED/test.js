// Mengimport fungsi dari file library kamu
import { tambah, kurang, kali, bagi, pangkat, persamaan, plsv_tiga, plsv_dua } from './index.js';

// Test fungsi matematika dasar
console.log("--- Test Library Matematika ---");
console.log("Tambah (5 + 3):", tambah(5, 3));   // Output: 8
console.log("Kurang (10 - 4):", kurang(10, 4)); // Output: 6
console.log("Kali (2 * 6):", kali(2, 6));       // Output: 12
console.log("Bagi (20 / 4):", bagi(20, 4));     // Output: 5
console.log("Pangkat (3 ** 4):", pangkat(3, 4)); // Output: 81
console.log("PLSV Tiga (x='x', a=5, b=14):", plsv_tiga('x', 5, 14)); // Output: 9
console.log("PLSV Dua (x='2', a=10):", plsv_dua('2', 10)); // Output: 5

// Test fungsi persamaan
console.log("\n--- Test Fungsi Persamaan ---");
const inputPersamaan = "3x + 5 = 14";
persamaan(inputPersamaan); 
console.log("Fungsi persamaan dipanggil dengan:", inputPersamaan);