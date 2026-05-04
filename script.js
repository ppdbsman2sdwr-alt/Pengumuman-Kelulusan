if (siswa) {

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

  } else {
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
        <b>belum lulus</b>. Diharapkan tetap semangat dan tidak 
        menyerah dalam melanjutkan pendidikan ke tahap berikutnya.
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
