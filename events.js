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
    print(event.target.vaule);
});