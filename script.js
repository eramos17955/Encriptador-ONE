const inputTexto = document.getElementById('inputTexto');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const inputResultado = document.getElementById('otxt');
const btnCopiar = document.getElementById('btn-copy');
const soloLetras = '^[a-z !ñ]+$';

document.addEventListener('DOMContentLoaded', () => {
    btnEncriptar.addEventListener('click', encriptarTexto);
    btnDesencriptar.addEventListener('click', desencriptarTexto);
    btnCopiar.addEventListener('click', copiarTexto);
});
function encriptarTexto(e){
    e.preventDefault();
    inputResultado.value = '';
    let texto = inputTexto.value;

    if(texto.match(soloLetras)!=null){
        let palabras = texto.split(" ");
        let nuevasPalabras = [];

        for (let palabra of palabras){
            palabra = palabra.replaceAll('e','enter');
            palabra = palabra.replaceAll('i','imes');
            palabra = palabra.replaceAll('a','ai');
            palabra = palabra.replaceAll('o','ober');
            palabra = palabra.replaceAll('u','ufat');    
            
            nuevasPalabras.push(palabra);
        }

        const resultado = nuevasPalabras.join(' ');
        inputResultado.value = resultado;
    } 
    else{
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}
function desencriptarTexto(e) {
    e.preventDefault();  
    inputResultado.value = '';
    let texto = inputTexto.value;
  
    if(texto.match(soloLetras)!=null){
      let palabras = texto.split(" ");
      let nuevasPalabras = [];    
  
      for (let palabra of palabras) {
        palabra = palabra.replaceAll('enter','e');
        palabra = palabra.replaceAll('imes','i');
        palabra = palabra.replaceAll('ai','a');
        palabra = palabra.replaceAll('ober','o');
        palabra = palabra.replaceAll('ufat','u');
        nuevasPalabras.push(palabra);    
      }
  
      const resultado = nuevasPalabras.join(' '); 
      inputResultado.value = resultado;

    } else {
      alert("Solo son permitidas letras minúsculas y sin acentos")
      location.reload();
      return true;
    }  
}  
function copiarTexto(e) {
    e.preventDefault(); 
    const mensaje = inputResultado.value;
    navigator.clipboard.writeText(mensaje);
    inputResultado.value = "";
    alert("Texto Copiado")
    inputTexto.value = "";

}