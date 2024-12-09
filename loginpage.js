// Ambil elemen form
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Fungsi untuk registrasi
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  // Simpan data ke localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    alert('Email sudah terdaftar!');
  } else {
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registrasi berhasil!');
    registerForm.reset();
  }
});

// Fungsi untuk login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Ambil data dari localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    alert(`Selamat datang, ${user.name}!`);
    loginForm.reset();
  } else {
    alert('Email atau password salah!');
  }
});

// Fungsi untuk signin
document.getElementById('signinForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Ambil data dari input form
  const email = document.getElementById('signinEmail').value;
  const password = document.getElementById('signinPassword').value;

  // Ambil data pengguna dari localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert(`Selamat datang, ${user.name}!`);
    // Redirect ke halaman produk
    window.location.href = 'produk.html';
  } else {
    alert('Email atau password salah!');
  }
  window.location.href = 'pembelian.html';
});
