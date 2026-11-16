function cekAngka(angka) {
  if (angka % 2 === 0) {
    return "Genap";
  }
  return "Ganjil";
}

console.log(cekAngka(4)); // Genap
console.log(cekAngka(7)); // Ganjil
console.log(cekAngka(0)); // Genap
console.log(cekAngka(-3)); // Ganjil
