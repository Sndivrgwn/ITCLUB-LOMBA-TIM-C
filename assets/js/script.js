const getElementById = (id) => document.getElementById(id);

let [home, tentang, jenis, konservasi, galeri] = [
  "nav__home",
  "nav__tentang",
  "nav__jenis",
  "nav__konservasi",
  "nav__galeri",
].map(getElementById);

home.addEventListener("click", function () {
  home.classList.add("active");
  tentang.classList.remove("active");
  konservasi.classList.remove("active");

  // Navigasi ke ID "tentang"
});

window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 4500 && scrollPosition < 5500) {
    home.classList.remove("active");
    tentang.classList.remove("active");
    konservasi.classList.add("active");
  } else if (scrollPosition > 800 && scrollPosition < 1500) {
    home.classList.remove("active");
    tentang.classList.add("active");
    konservasi.classList.remove("active");
  } else {
    home.classList.add("active");
    tentang.classList.remove("active");
    konservasi.classList.remove("active");
  }
});

window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  const isMobile = window.matchMedia("(max-width: 430px)").matches;

  if (isMobile) {
    if (scrollPosition > 6000 && scrollPosition < 7300) {
      home.classList.remove("active");
      tentang.classList.remove("active");
      konservasi.classList.add("active");
    } else if (scrollPosition > 800 && scrollPosition < 1500) {
      home.classList.remove("active");
      tentang.classList.add("active");
      konservasi.classList.remove("active");
    } else {
      home.classList.add("active");
      tentang.classList.remove("active");
      konservasi.classList.remove("active");
    }
  }
});



let navbar = document.getElementById("nabar");
let toggle = document.getElementById("toggle");
let logo = document.getElementById("logo");

toggle.addEventListener("click", function() {
  if (navbar.style.backgroundColor === "white") {
    navbar.style.backgroundColor = "transparent";
    logo.style.color = "#eaa51b";
  } else {
    navbar.style.backgroundColor = "white";
    logo.style.setProperty("color","black", "important");
  }
});



let [btnVisi, btnMisi, visi, misi] = [
  "visi_btn",
  "misi_btn",
  "visi",
  "misi",
].map(getElementById);

const handleClick = (selectedBtn, selectedContent) => {
  const btns = [btnVisi, btnMisi];
  const contents = [visi, misi];

  btns.forEach((btn) => {
    btn.style.border = "none";
    btn.style.backgroundColor = selectedBtn === btn ? "#eaa51b" : "#E2E7F0";
    btn.style.color = selectedBtn === btn ? "#fff" : "#1A202C";
    btn.style.transition = "linear 0.3s";
  });

  contents.forEach((content) => {
    content.style.display = selectedContent === content ? "block" : "none";
    content.style.transition = "linear 0.3s";
  });
};

btnVisi.addEventListener("click", function () {
  handleClick(btnVisi, visi);
});

btnMisi.addEventListener("click", function () {
  handleClick(btnMisi, misi);
});

let [
  btnKerusakan_1,
  btnKerusakan_2,
  btnKerusakan_3,
  imgKerusakan_1,
  imgKerusakan_2,
  imgKerusakan_3,
] = ["btn_1", "btn_2", "btn_3", "img_1", "img_2", "img_3"].map(getElementById);

const handleKerusakanClick = (selectedBtn, selectedImg) => {
  const btns = [btnKerusakan_1, btnKerusakan_2, btnKerusakan_3];
  const imgs = [imgKerusakan_1, imgKerusakan_2, imgKerusakan_3];

  btns.forEach((btn) => {
    if (selectedBtn === btn) {
      btn.style.border = "1px solid #eaa51b";
      btn.style.backgroundColor = "#eaa51b";
    } else {
      btn.style.border = "1px solid #D9D9D9";
      btn.style.backgroundColor = "#D9D9D9";
    }
  });

  imgs.forEach((img) => {
    if (selectedImg === img) {
      img.style.display = "block";
      img.classList.add("fade-in");
    } else {
      img.style.display = "none";
      img.classList.remove("fade-in");
    }
  });
};

btnKerusakan_1.addEventListener("click", function () {
  handleKerusakanClick(btnKerusakan_1, imgKerusakan_1);
});

btnKerusakan_2.addEventListener("click", function () {
  handleKerusakanClick(btnKerusakan_2, imgKerusakan_2);
});

btnKerusakan_3.addEventListener("click", function () {
  handleKerusakanClick(btnKerusakan_3, imgKerusakan_3);
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

window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function(){
  var logo_1 = document.getElementById("logo");
  logo_1.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function() {
  var logos = document.querySelectorAll(".navbar .navbar-nav .logo");
  
  for (var i = 0; i < logos.length; i++) {
    var logo = logos[i];
    logo.classList.toggle("sticky", window.scrollY > 0);
  }
});


