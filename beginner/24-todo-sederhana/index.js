// Array untuk menyimpan daftar tugas
let daftarTugas = [];

// Menambah tugas baru
function tambahTugas(tugas) {
  daftarTugas.push(tugas);
  console.log(`Tugas "${tugas}" ditambahkan.`);
}

tambahTugas("Belajar JavaScript");
tambahTugas("Push ke GitHub");
console.log(daftarTugas);
