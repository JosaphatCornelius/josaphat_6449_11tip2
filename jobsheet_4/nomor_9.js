// ini tidak perlu diubah
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//

// "Hello" dan "world!"" (Helloworld!)
rl.question("Masukkan kalimat pertama: ", (kalimat1) => {
    rl.question("Masukkan kalimat kedua: ", (kalimat2) => {
        const kalimatGabungan = kalimat1.concat(kalimat2);
        console.log(`Hasil penggabungan: ${kalimatGabungan}`);
        rl.close();
    });
});