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

// ---------- TAHAP 2 ----------

// Keranjang: barang yang dibeli (id barang + jumlah)
const keranjang = [
  { id: 1, jumlah: 1 }, // Beras 5kg
  { id: 2, jumlah: 2 }, // Minyak Goreng 1L
  { id: 5, jumlah: 10 }, // Kopi Sachet
];

function cariBarang(id) {
  return daftarBarang.find((b) => b.id === id);
}

function hitungTotal(keranjang) {
  let total = 0;
  for (const item of keranjang) {
    const barang = cariBarang(item.id);
    if (!barang) {
      console.log(`Barang dengan id ${item.id} tidak ditemukan, dilewati.`);
      continue;
    }
    total += barang.harga * item.jumlah;
  }
  return total;
}

function tampilkanRincian(keranjang) {
  console.log("\n=== RINCIAN BELANJA ===");
  for (const item of keranjang) {
    const barang = cariBarang(item.id);
    if (!barang) continue;
    const subtotal = barang.harga * item.jumlah;
    console.log(
      `${barang.nama} x${item.jumlah} @ ${formatRupiah(barang.harga)} = ${formatRupiah(subtotal)}`,
    );
  }
  console.log("-----------------------");
  console.log(`Total belanja: ${formatRupiah(hitungTotal(keranjang))}`);
}

tampilkanDaftarBarang();
tampilkanRincian(keranjang);
