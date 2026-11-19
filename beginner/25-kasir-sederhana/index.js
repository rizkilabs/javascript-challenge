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

// ---------- TAHAP 3 ----------

// Aturan diskon, urut dari syarat terbesar ke terkecil
const aturanDiskon = [
  { minimal: 200000, persen: 20 },
  { minimal: 100000, persen: 10 },
];

function hitungDiskon(total) {
  const aturan = aturanDiskon.find((a) => total >= a.minimal);
  const persen = aturan ? aturan.persen : 0;
  const nominal = (total * persen) / 100;
  return { persen, nominal };
}

function tampilkanRingkasan(keranjang) {
  tampilkanRincian(keranjang);

  const total = hitungTotal(keranjang);
  const diskon = hitungDiskon(total);
  const totalSetelahDiskon = total - diskon.nominal;

  console.log(`Diskon (${diskon.persen}%): -${formatRupiah(diskon.nominal)}`);
  console.log(`Total setelah diskon: ${formatRupiah(totalSetelahDiskon)}`);

  return totalSetelahDiskon; // <-- baris baru
}

// ---------- TAHAP 4 ----------

function prosesPembayaran(keranjang, uangBayar) {
  const totalBayar = tampilkanRingkasan(keranjang);

  console.log("-----------------------");
  console.log(`Total pembayaran: ${formatRupiah(totalBayar)}`);
  console.log(`Uang dibayar: ${formatRupiah(uangBayar)}`);

  if (uangBayar < totalBayar) {
    const kurang = totalBayar - uangBayar;
    console.log(`Uang kurang: ${formatRupiah(kurang)}. Transaksi gagal.`);
    return;
  }

  const kembalian = uangBayar - totalBayar;
  console.log(`Kembalian: ${formatRupiah(kembalian)}`);
  console.log("Terima kasih sudah berbelanja!");
}

// ---------- MAIN ----------

function main() {
  const keranjang = [
    { id: 1, jumlah: 1 }, // Beras 5kg
    { id: 2, jumlah: 2 }, // Minyak Goreng 1L
    { id: 5, jumlah: 10 }, // Kopi Sachet
  ];
  const uangBayar = 150000;

  tampilkanDaftarBarang();
  prosesPembayaran(keranjang, uangBayar);
}

main();
