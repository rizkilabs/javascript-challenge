// Menentukan nilai ujian

function tentukanGrade(nilai) {
  // Validasi input
  if (typeof nilai !== "number" || Number.isNaN(nilai)) {
    return "Error: nilai harus berupa angka";
  }
  if (nilai < 0 || nilai > 100) {
    return "Error: nilai harus antara 0 sampai 100";
  }

  // Tentukan grade
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
}

// Testing
const daftarNilai = [
  100,
  95,
  90,
  89.5,
  85,
  80,
  75,
  70,
  65,
  60,
  59,
  0,
  -5,
  105,
  "abc",
];

for (const nilai of daftarNilai) {
  console.log(`Nilai ${nilai} => ${tentukanGrade(nilai)}`);
}
