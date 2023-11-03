
const fcontainer = document.querySelector(".featuredContainer");
let ftop = [0, 0];
let i;

function fmft(i) {
    t = fcontainer.children[i];
    console.log(ftop[i]);
    if (ftop[i] == 0) {
        ftop[i] = t.children[3].style.top.match(/[\-][0-9]+|[0-9]+/g)[0];
    }
    t.children[3].style.top = `${ftop[i] - 130}px`;
    t.children[3].style.filter = "brightness(9999999%)";

    t.children[2].style.left = "0px";
    t.children[4].style.transition = "0.50s";
    t.children[4].style.opacity = 1;
}
function fmfl(i) {
    t = fcontainer.children[i];
    t.children[3].style.top = `${ftop[i]}px`;
    t.children[3].style.filter = "";
    t.children[2].style.left = "-100px";
    t.children[4].style.transition = "0.09s";
    t.children[4].style.opacity = 0;
}

fcontainer.children[0].addEventListener("mouseover", () => { fmft(0) });
fcontainer.children[0].addEventListener("mouseout", () => { fmfl(0) });
fcontainer.children[1].addEventListener("mouseover", () => { fmft(1) });
fcontainer.children[1].addEventListener("mouseout", () => { fmfl(1) });
