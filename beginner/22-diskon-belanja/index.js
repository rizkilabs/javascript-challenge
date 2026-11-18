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

module.exports = { hitungDiskon };
