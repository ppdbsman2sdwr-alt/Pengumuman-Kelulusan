async function cekData() {
  const nisn = document.getElementById("nisn").value.trim();
  const hasil = document.getElementById("hasil");

  // Validasi
  if (!nisn) {
    hasil.innerHTML = "<p style='color:red;'>Masukkan NISN terlebih dahulu</p>";
    return;
  }

  if (nisn.length !== 10) {
    hasil.innerHTML = "<p style='color:red;'>NISN harus 10 digit</p>";
    return;
  }

  // Loading
  hasil.innerHTML = "<div class='loading'>Memverifikasi data...</div>";

  try {
    const response = await fetch("data.json");
    const data = await response.json();

    const siswa = data.find(s => s.nisn === nisn);

    if (siswa) {

      if (siswa.status === "LULUS") {
        hasil.innerHTML = `
          <div class="result lulus">
            <h3>🎉 SELAMAT!</h3>
            <p>${siswa.nama}</p>
            <h2>LULUS</h2>
          </div>
        `;
        confettiEffect();

      } else {
        hasil.innerHTML = `
          <div class="result tidak">
            <h3>MOHON MAAF</h3>
            <p>${siswa.nama}</p>
            <h2>TIDAK LULUS</h2>
          </div>
        `;
      }

    } else {
      hasil.innerHTML = "<p style='color:red;'>Data tidak ditemukan</p>";
    }

  } catch (error) {
    console.error(error);
    hasil.innerHTML = "<p style='color:red;'>Gagal memuat data</p>";
  }
}

/* CONFETTI */
function confettiEffect() {
  const duration = 1500;
  const end = Date.now() + duration;

  const interval = setInterval(() => {
    if (Date.now() > end) return clearInterval(interval);

    confetti({
      particleCount: 20,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 200);
}
