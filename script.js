let form = document.querySelector("form");
let inputHeight = document.querySelector("#height");
let inputWidth = document.querySelector("#width");
let inputColor = document.querySelector("#colors");
let pole = document.querySelector("#area");


function clearClass() {
    document.querySelector(".selected").className = "";
}

pole.addEventListener("click", function (event) {

    clearClass();
    let selectedDiv = event.target;

    selectedDiv.className = "selected";
})


pole.addEventListener("dblclick", function (event) {
    let dblClickedDiv = event.target;
    let parent = dblClickedDiv.parentElement;
    if (dblClickedDiv.id !== "area") {
        parent.className = "selected";
        dblClickedDiv.remove();
    } else alert("tego nie można usunąć");

})

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let target = document.querySelector(".selected");
    if (inputColor.value !== "empty") {
        if (inputWidth.value > 0 && inputWidth.value < 100) {
            let newDiv = document.createElement("div");
            //pole.innerHTML="";
            target.appendChild(newDiv);
            newDiv.style.width = inputWidth.value + "%";
            newDiv.style.minHeight = inputHeight.value + "px";
            newDiv.style.backgroundColor = inputColor.value;
        } else alert("szerokość musi być w zakresie 0 do 100%");
    } else alert("wybierz kolor diva");

})




