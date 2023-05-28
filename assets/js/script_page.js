let home = document.getElementById("nav__home");
let tentang = document.getElementById("nav__tentang");
let jenis = document.getElementById("nav__jenis");
let konservasi = document.getElementById("nav__konservasi");
let galeri = document.getElementById("nav__galeri");
let paging_1 = document.getElementById("paging_1")
let paging_2 = document.getElementById("paging_2")
let paging_3 = document.getElementById("paging_3")
let card = document.getElementById("hilang_2")
let card_1 = document.getElementById("hilang_1")
let card_2 = document.getElementById("hilang_3")

home.addEventListener("click", function () {
  home.style.fontWeight = "bold";
  home.style.color = "#eaa51b";
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "#717d96";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "#717d96";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "#717d96";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "#717d96";
});

tentang.addEventListener("click", function () {
  tentang.style.fontWeight = "bold";
  tentang.style.color = "#eaa51b";
  home.style.fontWeight = "normal";
  home.style.color = "#717d96";
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "#717d96";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "#717d96";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "#717d96";
});

jenis.addEventListener("click", function () {
  jenis.style.fontWeight = "bold";
  jenis.style.color = "#eaa51b";
  home.style.fontWeight = "normal";
  home.style.color = "#717d96";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "#717d96";
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "#717d96";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "#717d96";
});

galeri.addEventListener("click", function () {
  galeri.style.fontWeight = "bold";
  galeri.style.color = "#eaa51b";
  home.style.fontWeight = "normal";
  home.style.color = "#717d96";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "#717d96";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "#717d96";
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "#717d96";
});

konservasi.addEventListener("click", function () {
  konservasi.style.fontWeight = "bold";
  konservasi.style.color = "#eaa51b";
  home.style.fontWeight = "normal";
  home.style.color = "#717d96";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "#717d96";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "#717d96";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "#717d96";
});

paging_1.addEventListener("click", function() {
 paging_1.style.backgroundColor = "#eaa51b";
 paging_2.style.backgroundColor = "white";
 paging_3.style.backgroundColor = "white";
 card_1.style.display = "flex";
 card_2.style.display = "none";
 card.style.display = "flex";

});

paging_2.addEventListener("click", function() {
 paging_2.style.backgroundColor = "#eaa51b";
 paging_1.style.backgroundColor = "white";
 paging_3.style.backgroundColor = "white";
 card.style.display = "flex";
 card_1.style.display = "none";
 card_2.style.display = "flex";
});

paging_3.addEventListener("click", function() {
 paging_3.style.backgroundColor = "#eaa51b";
 paging_1.style.backgroundColor = "white";
 paging_2.style.backgroundColor = "white";
 card.style.display = "flex";
 card_1.style.display = "none";
 card_2.style.display = "none";
});




