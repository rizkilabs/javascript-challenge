function cekUmur(umur) {
  if (umur < 13) return "Anak-anak";
  if (umur <= 17) return "Remaja";
  return "Dewasa";
}

console.log(cekUmur(5)); // Anak-anak
console.log(cekUmur(15)); // Remaja
console.log(cekUmur(25)); // Dewasa
