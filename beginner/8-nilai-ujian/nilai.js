// Menentukan nilai ujian
const nilai = 75;

let grade;

if (nilai >= 90 && nilai <= 100) {
  grade = "A";
} else if (nilai >= 80 && nilai <= 89) {
  grade = "B";
} else if (nilai >= 70 && nilai <= 79) {
  grade = "C";
} else if (nilai >= 60 && nilai <= 69) {
  grade = "D";
} else if (nilai < 60) {
  grade = "E";
}

console.log("Nilai:", nilai);
console.log("Grade:", grade);
