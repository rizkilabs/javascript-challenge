function hitungDiskon(totalBelanja) {
  let persenDiskon = 0;

  if (totalBelanja >= 200000) {
    persenDiskon = 20;
  } else if (totalBelanja >= 100000) {
    persenDiskon = 10;
  }

  const nominalDiskon = (totalBelanja * persenDiskon) / 100;
  const totalAkhir = totalBelanja - nominalDiskon;

  return { persenDiskon, nominalDiskon, totalAkhir };
}

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function tampilkanHasil(totalBelanja) {
  const { persenDiskon, nominalDiskon, totalAkhir } =
    hitungDiskon(totalBelanja);

  console.log("=== Diskon Belanja ===");
  console.log("Total sebelum diskon :", formatRupiah(totalBelanja));
  console.log(
    "Diskon               :",
    persenDiskon + "%",
    `(${formatRupiah(nominalDiskon)})`,
  );
  console.log("Total setelah diskon :", formatRupiah(totalAkhir));
}

module.exports = { hitungDiskon, formatRupiah, tampilkanHasil };

// Jalankan langsung: node index.js 250000
if (require.main === module) {
  const input = Number(process.argv[2]);

  if (Number.isNaN(input) || input < 0) {
    console.log(
      "Masukkan total belanja berupa angka. Contoh: node index.js 250000",
    );
  } else {
    tampilkanHasil(input);
  }
}
