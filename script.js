async function cekData() {
  const nisn = document.getElementById("nisn").value.trim();
  const hasil = document.getElementById("hasil");

  if (!nisn) {
    hasil.innerHTML = "<p style='color:red;'>Masukkan NISN</p>";
    return;
  }

  hasil.innerHTML = "Loading...";

  try {
    const response = await fetch("data.json");

    if (!response.ok) {
      hasil.innerHTML = "<p style='color:red;'>data.json tidak ditemukan</p>";
      return;
    }

    const data = await response.json();

    console.log("DATA:", data);

    const siswa = data.find(s => s.nisn === nisn);

    console.log("HASIL CARI:", siswa);

    if (siswa) {
      hasil.innerHTML = `
        <div style="background:#1d3557;color:white;padding:15px;border-radius:10px;">
          <h3>${siswa.nama}</h3>
          <h2>${siswa.status}</h2>
        </div>
      `;
    } else {
      hasil.innerHTML = "<p style='color:red;'>Data tidak ditemukan</p>";
    }

  } catch (error) {
    console.error(error);
    hasil.innerHTML = "<p style='color:red;'>Error load data</p>";
  }
}
