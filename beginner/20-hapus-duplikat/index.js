const angka = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7];
console.log("Array awal:", angka);

const tanpaDuplikat = [];

for (let i = 0; i < angka.length; i++) {
  if (!tanpaDuplikat.includes(angka[i])) {
    tanpaDuplikat.push(angka[i]);
  }
}

console.log("Array tanpa duplikat:", tanpaDuplikat);

const cara2 = [...new Set(angka)];
console.log("Pakai Set:", cara2);
