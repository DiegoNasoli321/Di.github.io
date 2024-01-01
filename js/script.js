
const envio = document.getElementById("botao");
envio.addEventListener("click", function(){
    const campo = document.querySelector("#campo");
    const numero = campo.value;
    sessionStorage.setItem("Numero ->",numero);
    const apagartexto = document.querySelector("#campo");
    apagartexto.value=""
}
)