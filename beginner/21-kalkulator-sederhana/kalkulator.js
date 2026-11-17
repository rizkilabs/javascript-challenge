// Kalkulator sederhana

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    return "Error: tidak bisa membagi dengan nol";
  }
  return a / b;
}

function hitung(a, b, operator) {
  switch (operator) {
    case "+":
      return tambah(a, b);
    case "-":
      return kurang(a, b);
    case "*":
      return kali(a, b);
    case "/":
      return bagi(a, b);
    default:
      return "Error: operator tidak valid (gunakan + - * /)";
  }
}

// Program utama: node kalkulator.js <angka1> <operator> <angka2>
const angka1 = Number(process.argv[2]);
const operator = process.argv[3];
const angka2 = Number(process.argv[4]);

if (isNaN(angka1) || isNaN(angka2)) {
  console.log("Error: masukkan dua angka yang valid");
  console.log("Contoh: node kalkulator.js 10 + 5");
} else {
  console.log(
    `${angka1} ${operator} ${angka2} = ${hitung(angka1, angka2, operator)}`,
  );
}
