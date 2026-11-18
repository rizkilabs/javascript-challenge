// Array untuk menyimpan daftar tugas
let daftarTugas = [];

// Menambah tugas baru
function tambahTugas(tugas) {
  daftarTugas.push(tugas);
  console.log(`Tugas "${tugas}" ditambahkan.`);
}

// Menampilkan semua tugas
function tampilkanTugas() {
  if (daftarTugas.length === 0) {
    console.log("Belum ada tugas.");
    return;
  }

  console.log("Daftar Tugas:");
  for (let i = 0; i < daftarTugas.length; i++) {
    console.log(`${i + 1}. ${daftarTugas[i]}`);
  }
}

// Menghapus tugas berdasarkan nomor (sesuai yang tampil di daftar)
function hapusTugas(nomor) {
  const index = nomor - 1;

  if (index < 0 || index >= daftarTugas.length) {
    console.log(`Tugas nomor ${nomor} tidak ditemukan.`);
    return;
  }

  const [dihapus] = daftarTugas.splice(index, 1);
  console.log(`Tugas "${dihapus}" dihapus.`);
}

tambahTugas("Belajar JavaScript");
tambahTugas("Push ke GitHub");
tambahTugas("Kerjakan tugas Express");
tampilkanTugas();

hapusTugas(2);
tampilkanTugas();

hapusTugas(10); // nomor tidak ada
