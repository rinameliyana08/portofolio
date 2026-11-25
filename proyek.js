// =====================================================
//  DATA PROYEK
//  Untuk menambah proyek: salin satu blok { ... },
//  tempel di bawahnya (jangan lupa koma di antara blok),
//  lalu ganti isinya.
//
//  judul     : nama proyek
//  tag       : teknologi yang dipakai (boleh lebih dari satu)
//  deskripsi : ringkasan singkat di kartu
//  gambar    : file gambar di folder images/
//  link      : link Figma / GitHub / demo (isi "#" kalau tidak ada)
//  detail    : penjelasan lengkap yang muncul di pop-up
// =====================================================

const proyek = [
  {
    judul: "Mandarin Spoon - Desain Aplikasi Menu Restoran",
    tag: ["Figma", "UI/UX", "Mobile App"],
    deskripsi: "Rancangan antarmuka aplikasi menu restoran bertema masakan Tionghoa, dibuat di Figma.",
    gambar: "images/mandarin-spoon.jpg",
    link: "https://www.figma.com/design/VnhmqLCDkKEKtyTV2T3Qdg/Untitled?node-id=11-4",
    detail: "Mandarin Spoon adalah rancangan antarmuka (UI) aplikasi mobile untuk restoran bertema masakan Tionghoa dengan tagline \"Authentic Chinese Flavors in Every Bite\". Desainnya dibuat di Figma dalam ukuran layar iPhone SE, dengan beberapa layar. Fitur yang dirancang antara lain kolom pencarian, ikon notifikasi, kategori menu (makanan, minuman, snack, dessert), bagian Menu Favorit Kami dan Menu Lainnya, serta kartu menu yang menampilkan foto, nama, harga, dan deskripsi singkat hidangan."
  },
  {
    judul: "Website Program Studi Fisika UIN SMH Banten",
    tag: ["WordPress", "Website", "Responsif"],
    deskripsi: "Situs resmi Program Studi Fisika UIN Sultan Maulana Hasanuddin Banten yang memuat informasi akademik, berita, dan kegiatan prodi.",
    gambar: "images/fisika-uin.jpg",
    link: "https://fisika.fsainsuinbanten.my.id/",
    detail: "Situs resmi Program Studi Fisika UIN Sultan Maulana Hasanuddin Banten yang dibangun dengan WordPress dan responsif di perangkat seluler. Memuat profil prodi (sejarah, visi-misi, dosen, sarana prasarana, akreditasi), informasi pendidikan (kurikulum, kalender akademik, RPS dan silabus, magang), penelitian, pengabdian, dokumen, serta layanan mahasiswa dan alumni. Situs juga menampilkan slider gambar, pengumuman, berita terbaru, empat kelompok studi (Fisika Instrumentasi, Geofisika, Fisika Material, dan Fisika Teori), galeri kampus, kontak, dan peta lokasi."
  },
  {
    judul: "SIM Skripsi - Sistem Informasi Monitoring Skripsi",
    tag: ["Web App", "Sistem Informasi", "Skripsi"],
    deskripsi: "Platform monitoring skripsi di UIN SMH Banten: pengajuan judul, bimbingan, dokumen, seminar, dan sidang.",
    gambar: "images/sim-skripsi.jpg",
    link: "#",
    detail: "SIM Skripsi adalah sistem informasi berbasis web untuk memonitor proses skripsi di Universitas Islam Negeri Sultan Maulana Hasanuddin Banten. Halaman login menyediakan tiga peran: Mahasiswa, Dosen, dan Admin/Prodi. Fitur yang tampil di sistem meliputi pengajuan judul (Turnitin dan ACC), bimbingan (jadwal dan riwayat), dokumen proposal (review dan revisi), serta seminar/sidang (SK dan jadwal)."
  }
];