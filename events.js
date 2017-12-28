let target = document.getElementById("output-target");
let pageTitle = document.getElementById("page-title");

// create a function that prints targeted area
function print(prams) {
    target.innerHTML = prams;
}

// target article section 
let targetSection = document.querySelector("article");
// event listners to print new text
targetSection.addEventListener("click", () =>{
    print(`You clicked on the ${event.target.innerHTML} section`);
});

// target h1 
let h1Target = document.querySelector("h1");
// event listner for mouseover
h1Target.addEventListener("mouseover", () => {
    print(`You moved your mouse over the header`);
});
// event listner for mouseout 
h1Target.addEventListener("mouseout", () =>{
    print(`You left me!!`)
});

// target input feild 
let inputTarget = document.getElementById("keypress-input")
// event listner for mirror text
inputTarget.addEventListener("input", () =>{
    print(target.innerHTML = inputTarget.value);
});

// target buttons
let addColor = document.getElementById("add-color");
let makeLarge = document.getElementById("make-large");
let addBorder = document.getElementById("add-border");
let addRounding = document.getElementById("add-rounding");

// target area the buttons are changing
let guineaPig = document.getElementById("guinea-pig");

// add event lisnters to buttons and toggle

addColor.addEventListener("click", () =>{
    guineaPig.classList.toggle("blue");
});

makeLarge.addEventListener("click", () =>{
    guineaPig.classList.toggle("hulkify");
});

addBorder.addEventListener("click", () => {
    guineaPig.classList.toggle("capture");
});

addRounding.addEventListener("click", () => {
    guineaPig.classList.toggle("rounded");
})



