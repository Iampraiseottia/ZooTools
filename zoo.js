var bars = document.getElementsByClassName("bar");
for (var i = 0; i < bars.length; i++) {
  var randomHeight = Math.floor(Math.random() * 150) + 50;
  bars[i].style.height = randomHeight + "px";
}