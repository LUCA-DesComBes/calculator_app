const deleteBtn = document.querySelector("#delete");
const simpleBtn = document.querySelectorAll(".simple")
let number = document.querySelector("#num");

simpleBtn.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        number.innerText += btn.innerText;
    })
})
deleteBtn.addEventListener("click", () => {
    number.innerText = number.innerText.slice(0, -1)
})