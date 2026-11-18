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

tampilkanTugas(); // masih kosong
tambahTugas("Belajar JavaScript");
tambahTugas("Push ke GitHub");
tampilkanTugas();
