# Aplikasi Kasir Sederhana

Aplikasi kasir sederhana berbasis Node.js yang berjalan di terminal.

## Fitur

- Daftar barang beserta harga
- Hitung total harga barang yang dibeli
- Diskon otomatis jika memenuhi syarat
- Tampilkan total pembayaran dan uang kembalian

## Aturan Diskon

| Total belanja | Diskon |
| ------------- | ------ |
| >= Rp200.000  | 20%    |
| >= Rp100.000  | 10%    |
| < Rp100.000   | 0%     |

## Cara Menjalankan

```bash
git clone https://github.com/rizkilabs>/javascript-challenge.git
cd beginner/25-kasir-sederhana
node index.js
```

Butuh Node.js terinstall.

## Cara Mengubah Data

- Daftar barang: edit array `daftarBarang` di `index.js`
- Isi belanjaan dan uang bayar: edit `keranjang` dan `uangBayar` di function `main()`
- Aturan diskon: edit array `aturanDiskon`

## Contoh Output

```
Total belanja: Rp121.000
Diskon (10%): -Rp12.100
Total setelah diskon: Rp108.900
-----------------------
Total pembayaran: Rp108.900
Uang dibayar: Rp150.000
Kembalian: Rp41.100
Terima kasih sudah berbelanja!
```
