function cekBilangan(angka) {
  if (angka > 0) return "positif";
  if (angka < 0) return "negatif";
  return "nol";
}

const angka = -3;
console.log(`${angka} adalah bilangan ${cekBilangan(angka)}`);
