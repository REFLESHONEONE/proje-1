var movie = document.getElementsByName("dizi");
function dizi() {
  for (var alt = 0; alt < movie.length; alt++) {
    movie[alt].checked = true;
  }
}

function dizis() {
  for (var alt = 0; alt < movie.length; alt++) {
    movie[alt].checked = false;
  }
}
function tez() {
  var artı = document.getElementById("java");
  if (artı.style.display === "none") {
    artı.style.display = "block";
  } else {
    artı.style.display = "none";
  }
}
