// Aplikasi Nilai Siswa

const NILAI_MINIMAL = 75;

// Data siswa: array of objects
const siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 92 },
  { nama: "Dewi", nilai: 75 },
  { nama: "Eko", nilai: 60 },
];

// Tentukan status: lulus jika nilai >= 75
function tentukanStatus(nilai) {
  return nilai >= NILAI_MINIMAL ? "Lulus" : "Tidak Lulus";
}

// Tambahkan properti status ke setiap siswa
const siswaDenganStatus = siswa.map((s) => ({
  ...s,
  status: tentukanStatus(s.nilai),
}));

console.log(siswaDenganStatus);
