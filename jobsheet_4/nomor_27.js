// ini tidak perlu diubah
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//

// Jurusan Teknik Informatika Pemrograman (JURUSAN TEKNIK INFORMATIKA PEMROGRAMAN)
rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    // gunakan method toUpperCase untuk mengubah kalimat menjadi huruf kecil
    const kalimatUpperCase = kalimat.toUpperCase();
    console.log(`Kalimat dalam huruf besar: ${kalimatUpperCase}`);
    rl.close();
});