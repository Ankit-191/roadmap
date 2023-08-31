function phase1() {
  document.getElementById("data_show1").style.display = "block";
  document.getElementById("cards_none").style.display = "none";
}
function phase2() {
  document.getElementById("data_show2").style.display = "block";
  document.getElementById("cards_none").style.display = "none";
}
function phase3() {
  document.getElementById("data_show3").style.display = "block";
  document.getElementById("cards_none").style.display = "none";
}
function phase4() {
  document.getElementById("data_show4").style.display = "block";
  document.getElementById("cards_none").style.display = "none";
}
function closedata() {
  document.getElementById("data_show1").style.display = "none";
  document.getElementById("data_show2").style.display = "none";
  document.getElementById("data_show3").style.display = "none";
  document.getElementById("data_show4").style.display = "none";   
  document.getElementById("cards_none").style.display = "flex";
}
