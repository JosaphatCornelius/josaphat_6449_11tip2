// ini tidak perlu diubah
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//

// 123abcXYZ (123abcxyz)
rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    // gunakan method toLowerCase untuk mengubah kalimat menjadi huruf kecil
    const kalimatLowerCase = kalimat.toLowerCase();
    console.log(`Kalimat dalam huruf kecil: ${kalimatLowerCase}`);
    rl.close();
});