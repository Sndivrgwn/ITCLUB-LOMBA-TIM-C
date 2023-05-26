let home = document.getElementById("nav__home");
let tentang = document.getElementById("nav__tentang");
let jenis = document.getElementById("nav__jenis");
let konservasi = document.getElementById("nav__konservasi");
let galeri = document.getElementById("nav__galeri");

home.addEventListener("click", function () {
  home.style.fontWeight = "bold";
  home.style.color = "#eaa51b";
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "white";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "white";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "white";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "white";
});

tentang.addEventListener("click", function () {
  tentang.style.fontWeight = "bold";
  tentang.style.color = "#eaa51b";
  home.style.fontWeight = "normal";
  home.style.color = "white";
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "white";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "white";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "white";
});

jenis.addEventListener("click", function () {
  jenis.style.fontWeight = "bold";
  jenis.style.color = "#eaa51b";
  home.style.fontWeight = "normal";
  home.style.color = "white";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "white";
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "white";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "white";
});

galeri.addEventListener("click", function () {
  galeri.style.fontWeight = "bold";
  galeri.style.color = "#eaa51b";
  home.style.fontWeight = "normal";
  home.style.color = "white";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "white";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "white";
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "white";
});

konservasi.addEventListener("click", function () {
  konservasi.style.fontWeight = "bold";
  konservasi.style.color = "#eaa51b";
  home.style.fontWeight = "normal";
  home.style.color = "white";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "white";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "white";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "white";
});


let btnVisi = document.getElementById("visi_btn");
let btnMisi = document.getElementById("misi_btn");
let visi = document.getElementById("visi");
let misi = document.getElementById("misi");

btnVisi.addEventListener("click", function() {
  btnVisi.style.backgroundColor = "#eaa51b";
  btnVisi.style.color ="#fff";
  visi.style.display ="block";
  btnMisi.style.backgroundColor = "#E2E7F0";
  btnMisi.style.color ="#1A202C";
  misi.style.display ="none";
})

btnMisi.addEventListener("click", function() {
  btnVisi.style.backgroundColor = "#E2E7F0";
  btnVisi.style.color ="#1A202C";
  visi.style.display ="none";
  btnMisi.style.backgroundColor = "#eaa51b";
  btnMisi.style.color ="#fff";
  misi.style.display ="block";
})