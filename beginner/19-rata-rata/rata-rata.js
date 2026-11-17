const nilaiUjian = [80, 75, 90, 85, 70];

console.log("Nilai ujian:", nilaiUjian);

let total = 0;

for (let i = 0; i < nilaiUjian.length; i++) {
  total += nilaiUjian[i];
}

console.log("Total nilai:", total);

const rataRata = total / nilaiUjian.length;

console.log("Rata-rata:", rataRata);
