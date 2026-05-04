async function cekData() {
  const nisn = document.getElementById("nisn").value;
  const tanggalLahir = document.getElementById("tanggalLahir").value;
  const hasil = document.getElementById("hasil");

  // Validasi input dulu
  if (nisn === "" || tanggalLahir === "") {
    hasil.innerHTML = "<p style='color:red;'>Harap isi semua data</p>";
    return;
  }

  try {
    const response = await fetch("data.json");
    const data = await response.json();

    // Cari siswa yang cocok
    const siswa = data.find(s =>
      s.nisn === nisn && s.tanggal_lahir === tanggalLahir
    );

    if (siswa) {
      hasil.innerHTML = `
        <p style="margin-top:15px;">Nama Siswa:</p>
        <h3>${siswa.nama}</h3>
        <button onclick="lihatKelulusan('${siswa.nisn}')">Lihat Kelulusan</button>
      `;
    } else {
      hasil.innerHTML = "<p style='color:red;'>Data tidak ditemukan</p>";
    }

  } catch (error) {
    hasil.innerHTML = "<p style='color:red;'>Terjadi kesalahan</p>";
  }
}
