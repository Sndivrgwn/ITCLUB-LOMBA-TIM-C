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
