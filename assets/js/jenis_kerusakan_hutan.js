let home = document.getElementById("nav__home");
let tentang = document.getElementById("nav__tentang");
let jenis = document.getElementById("nav__jenis");
let konservasi = document.getElementById("nav__konservasi");
let galeri = document.getElementById("nav__galeri");

home.addEventListener("click", function () {
  home.style.fontWeight = "bold";
  home.style.color = "#eaa51b";
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "#717D96";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "#717D96";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "#717D96";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "#717D96";
});

tentang.addEventListener("click", function () {
  tentang.style.fontWeight = "bold";
  tentang.style.color = "#eaa51b";
  home.style.fontWeight = "normal";
  home.style.color = "#717D96";
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "#717D96";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "#717D96";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "#717D96";
});

jenis.addEventListener("click", function () {
  jenis.style.fontWeight = "bold";
  jenis.style.color = "#eaa51b";
  home.style.fontWeight = "normal";
  home.style.color = "#717D96";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "#717D96";
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "#717D96";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "#717D96";
});

galeri.addEventListener("click", function () {
  galeri.style.fontWeight = "bold";
  galeri.style.color = "#eaa51b";
  home.style.fontWeight = "normal";
  home.style.color = "#717D96";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "#717D96";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "#717D96";
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "#717D96";
});

konservasi.addEventListener("click", function () {
  konservasi.style.fontWeight = "bold";
  konservasi.style.color = "#eaa51b";
  home.style.fontWeight = "normal";
  home.style.color = "#717D96";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "#717D96";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "#717D96";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "#717D96";
});

const links = document.querySelectorAll("tentang");

links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah perilaku default link
    
    // Tambahkan class "active" pada link saat ini
    link.classList.add("active");
    
    // Dapatkan URL halaman tujuan dari href atribut
    const targetUrl = link.href;
    
    // Tunggu sebentar sebelum berpindah halaman untuk memberikan waktu untuk class "active" ditambahkan
    setTimeout(() => {
      window.location.href = targetUrl; // Berpindah ke halaman tujuan
    }, 300); // Ubah angka ini sesuai kebutuhan Anda (dalam milidetik)
  });
});

