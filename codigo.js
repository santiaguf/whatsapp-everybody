document.getElementById("enviar").addEventListener("click",pasarDatos);
function pasarDatos(){
    let elnumero = "57"+document.getElementById("numero").value;
    let elmensaje = document.getElementById("mensaje").value;
    let url = "https://api.whatsapp.com/send?phone="+elnumero+"&text="+elmensaje;
    window.location= url;
}