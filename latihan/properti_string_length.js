// ini tidak perlu diubah
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//

rl.question("Masukkan sebuah kalimat: ", (inputString) => {
    // contoh properti length
    console.log(`Panjang kalimat: ${inputString.length}`);
    rl.close();
});