
const campoInput = document.querySelectorAll(".campo");
const campoObrigatorio = document.querySelectorAll(".erro");
const botaoEnviar = document.querySelector("#botaoEnviar");

campoInput.forEach((campo, indice) => {
    campo.addEventListener('change', () => {
        if (campo.value.trim() === '') {
            campo.classList.add("vazio");
            campoObrigatorio[indice].classList.add("vazio");
            campo.classList.remove("preenchido");
        }else {
            campo.classList.remove("vazio");
            campoObrigatorio[indice].classList.remove("vazio");
            campo.classList.add("preenchido");
        }
    })
});


botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault();

    campoInput.forEach((campo, indice) => {
        if (campo.value.trim() === "") {
            campo.classList.add("vazio");
            campoObrigatorio[indice].classList.add("vazio");
        }
    })
});
    

// const campoPreenchido = document.querySelectorAll(".input")

// campoPreenchido.forEach(campo => {
//     campo.addEventListener('change', () => {
//         if (campo.value !== "") {
//             campo.classList.add("preenchido")
//         }else {
//             campo.classList.remove("preenchido")
//         }
//     })
// });