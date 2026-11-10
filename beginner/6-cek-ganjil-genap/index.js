// Cek angka ganjil atau genap
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan sebuah angka: ", (input) => {
  const angka = Number(input);

  if (input.trim() === "" || !Number.isInteger(angka)) {
    console.log("Input tidak valid, masukkan bilangan bulat.");
  } else if (angka % 2 === 0) {
    console.log(`${angka} adalah angka genap`);
  } else {
    console.log(`${angka} adalah angka ganjil`);
  }

  rl.close();
});
