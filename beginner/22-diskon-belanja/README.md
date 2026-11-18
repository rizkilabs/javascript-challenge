# Aplikasi Diskon Belanja

Aplikasi sederhana untuk menghitung diskon belanja dan menampilkan total sebelum dan sesudah diskon.

## Aturan Diskon

| Total Belanja | Diskon |
| ------------- | ------ |
| < Rp100.000   | 0%     |
| ≥ Rp100.000   | 10%    |
| ≥ Rp200.000   | 20%    |

## Cara Menjalankan

Pastikan Node.js sudah terpasang, lalu:

```bash
git clone https://github.com/rizkilabs/diskon-belanja.git
cd diskon-belanja
node index.js 250000
```

Contoh output:

```
=== Diskon Belanja ===
Total sebelum diskon : Rp250.000
Diskon               : 20% (Rp50.000)
Total setelah diskon : Rp200.000
```

## Menjalankan Tes

```bash
npm test
```

## Struktur File

- `index.js`: logika diskon dan tampilan hasil
- `test.js`: tes untuk batas 100.000 dan 200.000
