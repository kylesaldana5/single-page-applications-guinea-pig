let target = document.getElementById("output-target");

// create a function that prints targeted area
function print(prams) {
    target.innerHTML = prams;
}

// target article section 
let targetSection = document.querySelector("article");
// event listners to print new text
targetSection.addEventListener("click", () =>{
    print(`You clicked on the ${event.target.innerHTML} section`)
});