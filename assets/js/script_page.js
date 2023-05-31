let home = document.getElementById("nav__home");
let tentang = document.getElementById("nav__tentang");
let jenis = document.getElementById("nav__jenis");
let konservasi = document.getElementById("nav__konservasi");
let galeri = document.getElementById("nav__galeri");
let paging_1 = document.getElementById("paging_1");
let paging_2 = document.getElementById("paging_2");
let paging_3 = document.getElementById("paging_3");
let paging_4 = document.getElementById("paging_4");
let paging_5 = document.getElementById("paging_5");
let card_1 = document.getElementById("hilang_1");
let card_2 = document.getElementById("hilang_2");
let card_3 = document.getElementById("hilang_3");
let card_4 = document.getElementById("hilang_4");
let card_5 = document.getElementById("hilang_5");
let card_6 = document.getElementById("hilang_6");
let card_7 = document.getElementById("hilang_7");
let card_8 = document.getElementById("hilang_8");
let card_9 = document.getElementById("hilang_9");
let card_10 = document.getElementById("hilang_10");
let card_11 = document.getElementById("hilang_11");
let card_12 = document.getElementById("hilang_12");
let button_left = document.getElementById("button_left_berita");
let button_right = document.getElementById("button_right_berita");
let button_nav_berita = document.getElementById("button_nav_berita_terkini");

button_right.addEventListener("click", function () {
  paging_1.style.display = "none";
  paging_2.style.display = "none";
  paging_4.style.display = "flex";
  paging_4.style.justifyContent = "center";
  paging_4.style.alignItems = "center";
  paging_5.style.justifyContent = "center";
  paging_5.style.alignItems = "center";
  paging_5.style.display = "flex";
});
button_left.addEventListener("click", function () {
  paging_1.style.display = "flex";
  paging_2.style.display = "flex";
  paging_1.style.justifyContent = "center";
  paging_1.style.alignItems = "center";
  paging_2.style.justifyContent = "center";
  paging_2.style.alignItems = "center";
  paging_4.style.display = "none";
  paging_5.style.display = "none";
});

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

button_nav_berita.addEventListener("click", function () {
  konservasi.style.fontWeight = "normal";
  konservasi.style.color = "#717d96";
  home.style.fontWeight = "normal";
  home.style.color = "#717d96";
  tentang.style.fontWeight = "normal";
  tentang.style.color = "#717d96";
  jenis.style.fontWeight = "normal";
  jenis.style.color = "#717d96";
  galeri.style.fontWeight = "normal";
  galeri.style.color = "#717d96";
});

paging_1.addEventListener("click", function () {
  paging_1.style.backgroundColor = "#eaa51b";
  paging_2.style.backgroundColor = "white";
  paging_3.style.backgroundColor = "white";
  paging_4.style.backgroundColor = "white";
  paging_5.style.backgroundColor = "white";
  card_1.style.display = "flex";
  card_2.style.display = "flex";
  card_3.style.display = "flex";
  card_4.style.setProperty("display", "flex", "important");
  card_5.style.setProperty("display", "flex", "important");
  card_6.style.setProperty("display", "flex", "important");
  card_7.style.display = "none";
  card_8.style.display = "none";
  card_9.style.display = "none";
  card_10.style.display = "none";
  card_11.style.display = "none";
  card_12.style.display = "none";
});

paging_2.addEventListener("click", function () {
  paging_2.style.backgroundColor = "#eaa51b";
  paging_1.style.backgroundColor = "white";
  paging_3.style.backgroundColor = "white";
  paging_4.style.backgroundColor = "white";
  paging_5.style.backgroundColor = "white";
  card_1.style.display = "none";
  card_2.style.display = "none";
  card_3.style.display = "none";
  card_4.style.display = "none";
  card_5.style.display = "none";
  card_6.style.display = "none";
  card_10.style.setProperty("display", "flex", "important");
  card_11.style.setProperty("display", "flex", "important");
  card_12.style.setProperty("display", "flex", "important");
  card_7.style.setProperty("display", "flex", "important");
  card_8.style.setProperty("display", "flex", "important");
  card_9.style.setProperty("display", "flex", "important");
});

  paging_3.addEventListener("click", function () {
    paging_3.style.backgroundColor = "#eaa51b";
    paging_1.style.backgroundColor = "white";
    paging_2.style.backgroundColor = "white";
    paging_4.style.backgroundColor = "white";
    paging_5.style.backgroundColor = "white";
    card_1.style.display = "none";
    card_2.style.display = "none";
    card_3.style.display = "none";
    card_4.style.display = "none";
    card_5.style.display = "none";
    card_6.style.display = "none";
    card_7.style.setProperty("display", "flex", "important");
    card_8.style.setProperty("display", "flex", "important");
    card_9.style.setProperty("display", "flex", "important");
    card_10.style.display = "none";
    card_11.style.display = "none";
    card_12.style.display = "none";
  });

paging_4.addEventListener("click", function () {
  paging_4.style.backgroundColor = "#eaa51b";
  paging_2.style.backgroundColor = "white";
  paging_3.style.backgroundColor = "white";
  paging_1.style.backgroundColor = "white";
  paging_5.style.backgroundColor = "white";
  card_1.style.display = "flex";
  card_2.style.display = "flex";
  card_3.style.display = "flex";
  card_4.style.setProperty("display", "flex", "important");
  card_5.style.setProperty("display", "flex", "important");
  card_6.style.setProperty("display", "flex", "important");
  card_7.style.display = "none";
  card_8.style.display = "none";
  card_9.style.display = "none";
  card_10.style.display = "none";
  card_11.style.display = "none";
  card_12.style.display = "none";
});
paging_5.addEventListener("click", function () {
  paging_5.style.backgroundColor = "#eaa51b";
  paging_2.style.backgroundColor = "white";
  paging_3.style.backgroundColor = "white";
  paging_1.style.backgroundColor = "white";
  paging_4.style.backgroundColor = "white";
  card_1.style.display = "flex";
  card_2.style.display = "flex";
  card_3.style.display = "flex";
  card_4.style.setProperty("display", "flex", "important");
  card_5.style.setProperty("display", "flex", "important");
  card_6.style.setProperty("display", "flex", "important");
  card_7.style.display = "none";
  card_8.style.display = "none";
  card_9.style.display = "none";
  card_10.style.display = "none";
  card_11.style.display = "none";
  card_12.style.display = "none";
});

function searchBerita() {
  var input = document.querySelector('.input_berita_terkini');
  var keyword = input.value.toLowerCase();

  var cards = document.querySelectorAll('.card_berita_terkini .card');

  var count = 0; 
  cards.forEach(function(card) {
    var title = card.querySelector('.card-tittle').textContent.toLowerCase();

    if (title.includes(keyword)) {
      if (count < 6) {
        card.style.display = 'block';
        count++;
      } else {
        card.style.display = 'none';
      }
    } else {
      card.style.display = 'none';
    }
  });
}

var inputCari = document.querySelector('.input_berita_terkini');
inputCari.addEventListener('input', searchBerita);

