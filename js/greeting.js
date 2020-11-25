const form = document.querySelector(".js-greetingForm"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CSS = "showing";

function handleSubmit(event){
    event.preventDefault();
    const newUser = input.value;
    paintGreeting(newUser);
    saveName(newUser);  
}

function saveName(user){
    localStorage.setItem(USER_LS, user);
}

function askForName(){
    form.classList.add(SHOWING_CSS); //display form
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(user){
    form.classList.remove(SHOWING_CSS); //display:none 
    greeting.classList.add(SHOWING_CSS); //display greeting
    greeting.innerText = `Hello ${user}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser===null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();