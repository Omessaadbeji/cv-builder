const pnom = document.getElementById("pnom");
const nnom = document.getElementById("nnom");
const email = document.getElementById("email");
const day = document.getElementById("birthday");
const cin = document.getElementById("cin");
const des = document.getElementById("des");
const per = document.getElementById("per");

per.addEventListener("click", function () {
  localStorage.setItem("prenom", pnom.value);
  localStorage.setItem("nom", nnom.value);
  localStorage.setItem("adress", email.value);
  localStorage.setItem("Date de naissance", day.value);
  localStorage.setItem("cin", cin.value);
  localStorage.setItem("description", des.value);
  window.location.pathname = "display.html";
});

nnom.addEventListener("change", updatennom);
pnom.addEventListener("change", updatepnom);
email.addEventListener("change", updateemail);
day.addEventListener("change", updateday);
cin.addEventListener("change", updatecin);
des.addEventListener("change", updatedes);

function updatepnom(e) {
  pnom.value = e.target.value;
}

function updatennom(e) {
  nnom.value = e.target.value;
}
function updateemail(e) {
  email.value = e.target.value;
}
function updateday(e) {
  day.value = e.target.value;
}
function updatecin(e) {
  cin.value = e.target.value;
}
function updatedes(e) {
  des.value = e.target.value;
}
