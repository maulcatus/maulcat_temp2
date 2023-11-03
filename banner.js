const banner = document.querySelector(".banner");
const bottom = document.querySelector(".banner-bottom");
const container = document.querySelector(".right");
let bannersCount = 4;
let src, _src;
function rotateBanner() {
    console.log(banner.src);
    src = parseInt(banner.src.match(/[0-9](?=.png)/g)[0]);
    _src = (src == (bannersCount - 1).toString()) ? 0 : src+1;
    console.log(src, _src);
    // start transition
    bottom.src = `img/banners/${_src}.png`;
    banner.style.animation = "banner_top 1s linear"
    bottom.style.animation = "banner_bottom 1s linear";
    window.setTimeout(function() {
        banner.style.animation = "";
        bottom.style.animation = "";
        // transition over
        banner.src = `img/banners/${_src}.png`;
        banner.style.opacity = 1;
        bottom.style.opacity = 0;
    }, 1000);
}
setInterval(rotateBanner, 10000);

const _topTitle = document.querySelector(".upper-logotype");
function rotateTitle() {
    ___src = _topTitle.src;
}