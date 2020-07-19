const body = document.querySelector("body");

const IMAGE_NUMBER = 5;

function paintImage(randomNumber) {
    const image = new Image();
    image.src = `/images/${randomNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom() {
    const imageNumber = Math.floor(Math.random() * IMAGE_NUMBER + 1);
    return imageNumber;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();