// To beggining I assigned some values in the variable
let login = document.getElementById("login");
let displayNone = document.querySelector(".display-none");
let signBtn = document.getElementById("sign-btn");
let signParent = document.getElementById("sign");
let form = document.getElementById("form");

// Firstly, I made an arrow function for using again and again
const click = () => {
    login.classList.add("display-block");
    login.classList.remove("display-none");
    form.classList.add("animation") // this 'animation' class has beed added from css file to maintain animation effect, line no:61
    login.classList.add("new"); // this 'new' class has been added from css file, line no:42
    signParent.style.display = "none";
    document.body.style.overflowY = "hidden";
}

// let's make an event by clicking on the button
// I used my previous function here
if(signBtn.addEventListener("click", () => {
    click();
}));