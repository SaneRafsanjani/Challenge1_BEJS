// //Membuat file JavaScript dengan nama "bank_account.js" telah dibuat.
// 2. Variabel "saldo" telah dideklarasikan dengan nilai awal.
// 3. Fungsi "tambahSaldo()" telah diimplementasikan menggunakan window.prompt() untuk menambahkan
// saldo.
// 4. Fungsi "kurangiSaldo()" telah diimplementasikan menggunakan window.prompt() untuk mengurangi saldo.
// 5. File "bank_account.js" berhasil dijalankan di browser tanpa error.

let saldo = 0; // Saldo awal

function tambahSaldo() {
  const n_tambah = parseFloat(
    prompt("Masukkan jumlah saldo yang ingin ditambahkan:")
  );
  if (!isNaN(n_tambah)) {
    saldo += n_tambah;
    alert("Saldo baru: " + saldo);
  } else {
    alert("Masukkan jumlah yang valid.");
  }
}

function kurangiSaldo() {
  const n_kurang = parseFloat(
    prompt("Masukkan jumlah saldo yang ingin dikurangkan:")
  );
  if (!isNaN(n_kurang)) {
    if (saldo >= n_kurang) {
      saldo -= n_kurang;
      alert("Saldo baru: " + saldo);
    } else {
      alert("Maaf saldo anda tidak mencukupi.");
    }
  } else {
    alert("Masukkan jumlah yang valid.");
  }
}
