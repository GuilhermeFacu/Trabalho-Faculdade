let botao = document.querySelector("#botao");
botao.style.background="blue";
let clicado=false;
botao.addEventListener("mouseover",e =>{
    if(!clicado)
    botao.style.background="rgb(6, 236, 140)";
});

botao.addEventListener("mouseout",e =>{
    if(!clicado)
    botao.style.background="blue";
});

botao.addEventListener("click",e =>{
    botao.style.background="black";
    botao.innerHTML="TUDO SEI QUE NADA SEI";
    clicado=true
});

let trocafundo = document.querySelector("#image")
trocafundo.addEventListener("mouseover",e =>{
    trocafundo.style.background=japão

})










let japão = document.querySelector("#image")
let islandia = document.querySelector("#image")
let espanha = document.querySelector("#image") 
