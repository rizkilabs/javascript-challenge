const dataUsername = "admin";
const dataPassword = "12345";

function login(username, password) {
  if (username === dataUsername && password === dataPassword) {
    return "Login berhasil";
  }
  return "Login gagal";
}

console.log(login("admin", "12345")); // Login berhasil
console.log(login("admin", "salah")); // Login gagal
console.log(login("user", "12345")); // Login gagal
