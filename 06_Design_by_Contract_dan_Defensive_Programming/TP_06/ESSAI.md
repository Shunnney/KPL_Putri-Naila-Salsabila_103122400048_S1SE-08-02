# Tugas Pendahuluan: DCDP

**Nama:** Putri Naila Salsabila
**NIM:** 103122400048 
**Kelas:** SE-08-02

# ESSAI 300 KATA
Dalam pengembangan perangkat lunak, penggunaan asersi (assertion) dan eksepsi (exception) memiliki peran yang berbeda meskipun sama-sama digunakan untuk menangani kondisi kesalahan. Asersi umumnya digunakan sebagai alat bantu selama proses pengembangan dan debugging untuk memastikan bahwa asumsi tertentu dalam kode selalu benar. Jika asumsi tersebut dilanggar, maka program akan langsung berhenti, menandakan adanya bug yang harus diperbaiki oleh developer. Oleh karena itu, asersi lebih cocok digunakan untuk memvalidasi kondisi internal yang “seharusnya tidak pernah salah” jika logika program sudah benar.

Di sisi lain, eksepsi dirancang untuk menangani kesalahan yang mungkin terjadi saat program dijalankan (runtime), terutama yang disebabkan oleh input pengguna atau kondisi eksternal. Dalam contoh fungsi pembagian, penggunaan eksepsi lebih tepat untuk menangani kasus seperti pembagian dengan nol atau input yang bukan angka, karena kondisi tersebut bisa saja terjadi dalam penggunaan nyata. Dengan eksepsi, program tidak langsung berhenti, melainkan memberikan kesempatan untuk menangani kesalahan tersebut secara elegan, misalnya dengan menampilkan pesan error atau melakukan fallback tertentu.

Menjawab pertanyaan kapan sebaiknya menggunakan asersi atau eksepsi, jawabannya adalah: gunakan asersi untuk memvalidasi asumsi internal yang hanya relevan saat pengembangan, dan gunakan eksepsi untuk menangani kesalahan yang mungkin terjadi dalam penggunaan nyata oleh pengguna. Tidak disarankan untuk sepenuhnya menggunakan asersi atau sepenuhnya eksepsi. Keduanya memiliki fungsi yang saling melengkapi. Dalam praktik terbaik, asersi digunakan untuk membantu developer menjaga konsistensi logika program, sementara eksepsi digunakan untuk memastikan program tetap robust dan tidak mudah crash ketika menghadapi input atau kondisi yang tidak terduga.

Dengan demikian, kombinasi keduanya akan menghasilkan kode yang lebih aman, mudah dipelihara, dan siap digunakan dalam berbagai kondisi.