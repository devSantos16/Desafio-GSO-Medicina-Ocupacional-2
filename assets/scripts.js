let buttonMaior = document.getElementById("buttonMaior");
let buttonMenor = document.getElementById("buttonMenor");
let resetar = document.getElementById("resetar");

buttonMaior.addEventListener("click", () => {
    let input = parseInt(document.getElementById("input").value) + 1;
    document.getElementById("input").value = input;
})

buttonMenor.addEventListener("click", () => {
    let input = parseInt(document.getElementById("input").value) - 1;
    document.getElementById("input").value = input;
})

resetar.addEventListener("click", () => {
    document.getElementById("input").value = 0;
})