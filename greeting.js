const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const CURRENT_USER = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(CURRENT_USER, text);
}

function submitHandle(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", submitHandle);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `안녕하세요 ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(CURRENT_USER);
    if (currentUser === null) {
        askForName();
    }
    else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();