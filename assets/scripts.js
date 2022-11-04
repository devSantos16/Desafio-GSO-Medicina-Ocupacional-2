let buttonMaior = document.getElementById("buttonMaior");
let buttonMenor = document.getElementById("buttonMenor");
let resetar = document.getElementById("resetar");

buttonMaior.addEventListener("click", () => {
    let input = parseInt(document.getElementById("input").value) + 1;
    document.getElementById("input").value = input;
})

buttonMenor.addEventListener("click", () => {
    let input = parseInt(document.getElementById("input").value) - 1;
    if (input < 0) {
        mostrarPopup();
        return;
    }
    document.getElementById("input").value = input;
})

resetar.addEventListener("click", () => {
    document.getElementById("input").value = 0;
})

async function mostrarPopup() {
    var popup = document.getElementById("popup");

    if (document.getElementsByClassName("hidden")) {
        await popup.classList.remove("hidden");
    }
    
    popup.classList.toggle("show");
    await new Promise(r => setTimeout(r, 2000));
    await popup.classList.toggle("hidden");

    popup.classList.remove("show");

}