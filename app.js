
const form = document.querySelector(".main-container__form")
const input = document.querySelector("#inp")
const btn = document.querySelector("#btn")
const parrafo = document.querySelector(".resultado")






form.addEventListener('submit',capicua)




function capicua(event){

    event.preventDefault()
    let capicua = input.value.toLowerCase();
    capicua = capicua.replace(/ /g, "");
    let palabra = "";

    for (let i = capicua.length -1; i>=0; i--){
    palabra += capicua[i];

    }
    // console.log(palabra);
    if(!capicua){
        parrafo.innerText = "tienes que ingresar un valor"
    }

    else if (capicua ===  palabra){
        parrafo.innerText = "Es capicua"

    }
    else{
        parrafo.innerText = "No es capicua"
    }

}


