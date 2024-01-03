let dugme = document.getElementById("btn-kagore");

window.onscroll = function () {
  scrollFunkcija();
}

function scrollFunkcija() {
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    dugme.style.display = "block";
    dugme.style.transition = "display 0.15s ease-in-out";
  } else {
    dugme.style.display = "none";
  }
}

dugme.addEventListener("click", idiKaGore);

function idiKaGore() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}