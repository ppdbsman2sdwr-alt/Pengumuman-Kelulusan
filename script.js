// Pastikan script terbaca
console.log("SCRIPT AKTIF");

// Event tombol (lebih aman dari onclick)
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnCek");
  if (btn) {
    btn.addEventListener("click", cekData);
  }
});

async function cekData() {
  const nisn = document.getElementById("nisn").value.trim();
  const hasil = document.getElementById("hasil");

  // Validasi
  if (!nisn) {
    hasil.innerHTML = "<p style='color:red;'>Masukkan NISN</p>";
    return;
  }

  if (nisn.length !== 10) {
    hasil.innerHTML = "<p style='color:red;'>NISN harus 10 digit</p>";
    return;
  }

  hasil.innerHTML = "<p>Memproses data...</p>";

  try {
    const response = await fetch("./data.json");

    if (!response.ok) {
      hasil.innerHTML = "<p style='color:red;'>data.json tidak ditemukan</p>";
      return;
    }

    const data = await response.json();

    // Cari siswa
    const siswa = data.find(s => s.nisn === nisn);

    if (siswa) {

      // =======================
      // 🎉 JIKA LULUS
      // =======================
      if (siswa.status === "LULUS") {
        hasil.innerHTML = `
          <div class="result lulus">
            <h3>📢 PENGUMUMAN KELULUSAN</h3>
            <hr style="border:1px solid rgba(255,255,255,0.3);">

            <p><b>Nama Siswa</b></p>
            <h2>${siswa.nama}</h2>

            <p>NISN: ${siswa.nisn}</p>

            <h2 style="margin-top:15px;">DINYATAKAN LULUS</h2>

            <p style="margin-top:15px; font-size:14px;">
            Selamat kepada peserta didik yang telah dinyatakan <b>LULUS</b> 
            pada Tahun Ajaran 2025/2026. Semoga ilmu yang diperoleh selama 
            menempuh pendidikan di SMA Negeri 2 Sendawar dapat menjadi bekal 
            untuk meraih kesuksesan di masa depan.
            </p>

            <p style="font-size:13px; margin-top:10px;">
            Teruslah belajar, berkarya, dan menjadi generasi yang membanggakan.
            </p>
          </div>
        `;

        confettiEffect();

      } 
      
      // =======================
      // ❌ JIKA TIDAK LULUS
      // =======================
      else {
        hasil.innerHTML = `
          <div class="result tidak">
            <h3>📢 PENGUMUMAN KELULUSAN</h3>
            <hr style="border:1px solid rgba(255,255,255,0.3);">

            <p><b>Nama Siswa</b></p>
            <h2>${siswa.nama}</h2>

            <p>NISN: ${siswa.nisn}</p>

            <h2 style="margin-top:15px;">DINYATAKAN TIDAK LULUS</h2>

            <p style="margin-top:15px; font-size:14px;">
            Berdasarkan hasil rapat dewan guru, peserta didik dinyatakan 
            <b>belum lulus</b>. Tetap semangat dan jangan menyerah dalam 
            melanjutkan pendidikan ke tahap berikutnya.
            </p>

            <p style="font-size:13px; margin-top:10px;">
            Silakan menghubungi pihak sekolah untuk informasi lebih lanjut.
            </p>
          </div>
        `;
      }

    } else {
      hasil.innerHTML = "<p style='color:red;'>Data tidak ditemukan</p>";
    }

  } catch (error) {
    console.error(error);
    hasil.innerHTML = "<p style='color:red;'>Terjadi kesalahan membaca data</p>";
  }
}


// 🎉 CONFETTI
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
