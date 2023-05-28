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

btnVisi.addEventListener("click", function () {
  btnMisi.style.border = 'none';
  btnVisi.style.border = 'none';
  btnVisi.style.backgroundColor = "#eaa51b";
  btnVisi.style.color = "#fff";
  visi.style.display = "block";
  btnMisi.style.backgroundColor = "#E2E7F0";
  btnMisi.style.color = "#1A202C";
  misi.style.display = "none";
  btnVisi.style.transition = 'linear 0.3s';
  visi.style.transition = 'linear 0.3s';
});

btnMisi.addEventListener("click", function () {
  btnMisi.style.border = 'none';
  btnVisi.style.border = 'none';
  btnVisi.style.backgroundColor = "#E2E7F0";
  btnVisi.style.color = "#1A202C";
  visi.style.display = "none";
  btnMisi.style.backgroundColor = "#eaa51b";
  btnMisi.style.color = "#fff";
  misi.style.display = "block";
  btnMisi.style.transition = 'linear 0.3s';
  misi.style.transition = 'linear 0.3s';

});

let btnKerusakan_1 = document.getElementById("btn_1");
let btnKerusakan_2 = document.getElementById("btn_2");
let btnKerusakan_3 = document.getElementById("btn_3");
let imgKerusakan_1 = document.getElementById("img_1");
let imgKerusakan_2 = document.getElementById("img_2");
let imgKerusakan_3 = document.getElementById("img_3");

btnKerusakan_1.addEventListener("click", function () {
  imgKerusakan_1.style.display = "block";
  imgKerusakan_2.style.display = "none";
  imgKerusakan_3.style.display = "none";
  btnKerusakan_1.style.border = "1px solid #eaa51b";
  btnKerusakan_2.style.border = "1px solid #D9D9D9";
  btnKerusakan_3.style.border = "1px solid #D9D9D9";
  btnKerusakan_1.style.backgroundColor = "#eaa51b";
  btnKerusakan_2.style.backgroundColor = "#D9D9D9";
  btnKerusakan_3.style.backgroundColor = "#D9D9D9";
});
btnKerusakan_2.addEventListener("click", function () {
  imgKerusakan_2.style.display = "block";
  imgKerusakan_1.style.display = "none";
  imgKerusakan_3.style.display = "none";
  btnKerusakan_2.style.border = "1px solid #eaa51b";
  btnKerusakan_1.style.border = "1px solid #D9D9D9";
  btnKerusakan_3.style.border = "1px solid #D9D9D9";
  btnKerusakan_2.style.backgroundColor = "#eaa51b";
  btnKerusakan_1.style.backgroundColor = "#D9D9D9";
  btnKerusakan_3.style.backgroundColor = "#D9D9D9";
});
btnKerusakan_3.addEventListener("click", function () {
  imgKerusakan_3.style.display = "block";
  imgKerusakan_1.style.display = "none";
  imgKerusakan_2.style.display = "none";
  btnKerusakan_3.style.border = "1px solid #eaa51b";
  btnKerusakan_2.style.border = "1px solid #D9D9D9";
  btnKerusakan_1.style.border = "1px solid #D9D9D9";
  btnKerusakan_3.style.backgroundColor = "#eaa51b";
  btnKerusakan_2.style.backgroundColor = "#D9D9D9";
  btnKerusakan_1.style.backgroundColor = "#D9D9D9";
});


// var btn = document.getElementById("btn");
let button_left = document.getElementById("button_left_hal_4");
let button_right = document.getElementById("button_right_hal_4");
let kotak1 = document.getElementById("kotak_hilang1");
let kotak2 = document.getElementById("kotak_hilang2");

// function leftclick(){
//   btn.style.left = '0';
// };
// function rightclick(){
//   btn.style.left = '60px';
// };

button_left.addEventListener("click", function () {
  button_left.style.color = "white";
  button_left.style.backgroundColor = "#255946";
  button_right.style.color = "#255946";
  button_right.style.backgroundColor = "white";
  kotak2.style.display = "flex";
  kotak1.style.display = "none";
});
button_right.addEventListener("click", function () {
  button_right.style.color = "white";
  button_right.style.backgroundColor = "#255946";
  button_left.style.color = "#255946";
  button_left.style.backgroundColor = "white";
  kotak2.style.display = "none";
  kotak1.style.display = "flex";
});
