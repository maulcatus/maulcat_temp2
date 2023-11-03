const wordmark = document.querySelector(".title");

wordmark.onmouseover = function() {
    wordmark.src = `${wordmark.src.match(/.+(?=.png)/g)[0]}_hover.png`;
}
wordmark.onmouseout = function() {
    wordmark.src = `${wordmark.src.match(/.+(?=_hover.png)/g)[0]}.png`;
}