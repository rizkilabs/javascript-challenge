const angka = [12, 45, 7, 89, 23];

let terbesar = angka[0];

for (let i = 1; i < angka.length; i++) {
  if (angka[i] > terbesar) {
    terbesar = angka[i];
  }
}
