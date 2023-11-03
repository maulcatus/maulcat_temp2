let x = 0,
  y = 0,
  dirX = 1,
  dirY = 1;
const speed = 0.05;
let dvd = document.getElementById("dvd");
let black = document.getElementById("black");
const dvdWidth = dvd.clientWidth;
const dvdHeight = dvd.clientHeight;

function animate() {
  const screenHeight = 90.4;
  const screenWidth = 79.4;

  if (y + dvdHeight >= screenHeight || y < 0) {
    dirY *= -1;
  }
  if (x + dvdWidth >= screenWidth || x < 0) {
    dirX *= -1;
  }
  x += dirX * speed;
  y += dirY * speed;
  dvd.style.left = x + "px";
  dvd.style.top = y + "px";
  window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
