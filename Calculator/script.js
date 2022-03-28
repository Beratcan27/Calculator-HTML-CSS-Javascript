let dugme = document.getElementsByTagName("button");
let screen = document.getElementsByClassName("screen1")[0];
let calculate = document.getElementById("calculate");
let clean = document.getElementById("clean");
for (var i = 0; i < dugme.length; i++) {
  if (i != 12 && i != 14) {
    dugme[i].addEventListener("click", yazdir);
  }
}
function yazdir() {
    screen.value = screen.value + this.value;
}

calculate.addEventListener("click", hesap);

function hesap() {
    screen.value = eval(screen.value);
}

clean.addEventListener("click", temiz);

function temiz() {
    screen.value = "";
}
