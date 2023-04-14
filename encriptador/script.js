const cambio = ['ai','enter','imes','ober','ufat'];
const vocales = ['a','e','i','o','u'];
const btnEncrip = document.querySelector('.btn-encrip');
const texto = document.getElementById("ingreso").value;
const mostrar=document.getElementById("resultado");

btnEncrip.addEventListener("click",function(e){
    e.preventDefault();
    encriptador();
    mostrar.innerHTML=texto;
    
});

function encriptador(){
let mensaje;
console.log(vocales.find(texto[3]));
//     for(let i=0; i<texto.length; i++){

// }
}