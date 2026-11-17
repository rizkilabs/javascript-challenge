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

// Tes sementara
console.log(tambah(5, 3)); // 8
console.log(kurang(5, 3)); // 2
console.log(kali(5, 3)); // 15
console.log(bagi(6, 3)); // 2
console.log(bagi(6, 0)); // Error: tidak bisa membagi dengan nol
