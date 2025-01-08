const deleteBtn = document.querySelector("#delete");
const equalBtn = document.querySelector("#equal")
const resetBtn = document.querySelector("#reset")
const simpleBtn = document.querySelectorAll(".simple")
let number = document.querySelector("#num");

simpleBtn.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        // if(number.innerText == "0") {
        //     number.i
        // }
        number.innerText += btn.innerText;
    })
})
deleteBtn.addEventListener("click", () => {
    number.innerText = number.innerText.slice(0, -1)
})
resetBtn.addEventListener("click", () => {
    number.innerText = "";
})
equalBtn.addEventListener("click", () => {
    number.innerText = eval(number.innerText)
})