const body = document.querySelector("body");

const IMG_NUMBER = 3;

function getRandom(){
    const num = Math.floor(Math.random()*IMG_NUMBER)+1;
    return num;
}

function paintBackground(num){
    const image = new Image();
    image.src = `./images/bg${num}.jpg`;
    image.classList.add("background-img");
    body.appendChild(image); //body.prepend(image);
}

function init(){
    const imgNum = getRandom();
    paintBackground(imgNum);
}

init();