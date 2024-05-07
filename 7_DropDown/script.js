
const selectBtn = document.querySelector(".dropdown")
const dropBox = document.querySelector(".list")
const arrow = document.querySelector(".arrow")

const options = document.querySelectorAll(".item")
const selectText = document.querySelector(".select")


let isDropBoxVisible = false;

selectBtn.addEventListener("click", ()=> {
    if(!isDropBoxVisible) {
        dropBox.style.display = "block";
        arrow.style.transform = "rotate(180deg)"
    }
    else{
        dropBox.style.display = "none";
        arrow.style.transform = "rotate(0deg)"

    }
    isDropBoxVisible = !isDropBoxVisible;
})

options.forEach((option)=> {
    option.addEventListener("click", () => {
        let selectOption = option.querySelector("span").innerText;
        selectText.innerText = selectOption;
        arrow.style.transform = "rotate(0deg)";

        dropBox.style.display="none";
        isDropBoxVisible = false;

        // console.log(selectOption)
    })

})