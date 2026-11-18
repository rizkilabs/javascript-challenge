// Daftar barang beserta harga
const daftarBarang = [
  { id: 1, nama: "Beras 5kg", harga: 65000 },
  { id: 2, nama: "Minyak Goreng 1L", harga: 18000 },
  { id: 3, nama: "Gula 1kg", harga: 16000 },
  { id: 4, nama: "Telur 1kg", harga: 28000 },
  { id: 5, nama: "Kopi Sachet", harga: 2000 },
];

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function tampilkanDaftarBarang() {
  console.log("=== DAFTAR BARANG ===");
  daftarBarang.forEach((b) => {
    console.log(`${b.id}. ${b.nama} - ${formatRupiah(b.harga)}`);
  });
}

tampilkanDaftarBarang();
