const express = require('express');
const app = express();

const PORT = 3000;

// supaya bisa baca JSON dari body
app.use(express.json());

/*
    Fungsi untuk menghasilkan angka "acak tapi tetap"
    berdasarkan nama (case-sensitive)
*/
function generateNumberFromName(nama) {
    let hash = 0;

    for (let i = 0; i < nama.length; i++) {
        hash += nama.charCodeAt(i) * (i + 1);
    }

    // hasil 1 - 100
    return (hash % 100) + 1;
}

// endpoint POST /
app.post('/', (req, res) => {
    const { nama, tebakan } = req.body;

    // validasi input
    if (!nama || tebakan === undefined) {
        return res.status(400).json({
            jawaban: "Input tidak lengkap! Gunakan format: { nama, tebakan }"
        });
    }

    const angkaBenar = generateNumberFromName(nama);

    console.log(`Nama: ${nama}, Tebakan: ${tebakan}, Jawaban: ${angkaBenar}`);

    // cek hasil
    if (tebakan === angkaBenar) {
        return res.json({
            jawaban: `Benar sekali! Tebakannya adalah ${angkaBenar}.`
        });
    } else if (tebakan > angkaBenar) {
        return res.json({
            jawaban: "Tebakanmu terlalu tinggi!"
        });
    } else {
        return res.json({
            jawaban: "Tebakanmu terlalu rendah!"
        });
    }
});

// jalanin server
app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});