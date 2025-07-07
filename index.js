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
