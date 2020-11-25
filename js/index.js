const name = document.querySelector("#name");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const CURRENT_COLOR = name.style.color;
    if(CURRENT_COLOR===BASE_COLOR) name.style.color=OTHER_COLOR;
    else name.style.color=BASE_COLOR;
}

function init(){
    name.style.color = BASE_COLOR;
    name.addEventListener("mouseenter", handleClick);
}

init();