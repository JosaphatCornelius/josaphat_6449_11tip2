// ini tidak perlu diubah
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//

// 1234567890 (5678)
rl.question ("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan indeks awal: ", (startIndex) => {
        rl.question("Masukkan indeks akhir: ", (endIndex) => {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            const slicedSubtring = kalimat.slice(startIndex, endIndex);
            console.log(`Hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${slicedSubtring}`);
            rl.close();
        });
    });
});