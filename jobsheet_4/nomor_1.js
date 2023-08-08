// ini tidak perlu diubah
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//

// Budi adalah seorang siswa jurusan RPL yang tinggal didaerah Bekasi (total karakter 66)
rl.question("Masukkan sebuah kalimat: ", (inputString) => {
    console.log(`Panjang Anda kalimat adalah: ${inputString.length}`);
    rl.close();
});