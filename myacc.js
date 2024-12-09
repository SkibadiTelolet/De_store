// Ambil elemen
const modal = document.getElementById("myAccountModal");
const btn = document.getElementById("myAccountBtn");
const span = document.getElementsByClassName("close")[0];

// Ketika tombol "MY ACCOUNT" diklik, modal akan muncul
btn.onclick = function () {
  modal.style.display = "flex";
};

// Ketika tombol "x" (close) diklik, modal akan hilang
span.onclick = function () {
  modal.style.display = "none";
};

// Ketika pengguna mengklik di luar modal, modal akan hilang
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
