// ini tidak perlu diubah
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//

// JavaScript is a powerful language. (total karakter 34)
rl.question("Masukkan sebuah kalimat: ", (inputString) => {
    console.log(`Panjang Anda kalimat adalah: ${inputString.length}`);
    rl.close();
});