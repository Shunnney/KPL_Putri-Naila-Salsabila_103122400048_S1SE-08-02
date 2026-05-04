const express = require('express');
const app = express();

const PORT = 3000;

// DEBUG: cek file mana yang jalan
console.log("SERVER FILE INI YANG JALAN");

// data menu
const menu = { 
    kategori_tersedia: {
    "0": "bakmi",
    "1": "rames",
    }
};

// endpoint utama
//app.get('/', (req, res) => {
//    console.log("ENDPOINT / KEHIT");
//    res.json({
  //      pesan: "Cek /docs untuk melihat rincian API"
    //});
//});

// endpoint /menu
app.get('/menu', (req, res) => {
     res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(menu, null, 2));
});

// jalankan server
app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});