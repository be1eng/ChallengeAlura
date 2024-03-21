function reinicio(){
    limpiarCaja();
    let x = document.getElementById('output-message');
    let y =document.getElementById('output-result');
    x.style.visibility = 'visible';
    y.style.visibility = 'hidden';

}
function limpiarCaja(){
    let mensajeUsuario = document.querySelector('#valorUsuario');
    mensajeUsuario.value = ' ';
}
function copiar(){
    var respuesta = document.getElementById('valorOutput').textContent;
    navigator.clipboard.writeText(respuesta);
    reinicio()
}
function encriptar(){
    let mensajeUsuario = document.querySelector('#valorUsuario').value.toString();
        var mensajeEncriptado = mensajeUsuario.replace(/[aeiou]/g, function(match) {
            switch (match) {
                case 'a':
                    return 'ai';
                case 'e':
                    return 'enter';
                case 'i':
                    return 'imes';
                case 'o':
                    return 'ober';
                case 'u':
                    return 'ufat';
            }
        });
        let respuesta = document.getElementById('valorOutput');
        respuesta.innerHTML = mensajeEncriptado;
        let y = document.getElementById('output-result');
        y.style.visibility = 'visible';
 
}
function verificarTexto(mensaje) {
    let texto = mensaje.value;
    mensaje.value = texto.toLowerCase();

    let botonEncriptar = document.getElementById('encriptar');
    let botonDesencriptar = document.getElementById('desencriptar');

    // Verificar si el texto contiene caracteres especiales
    if (texto.trim() === '' || texto.match(/[^\w\s]|_/g)) {
        botonEncriptar.setAttribute('disabled','true');
        botonDesencriptar.setAttribute('disabled', 'true');
    } else {
        botonEncriptar.removeAttribute('disabled');
        botonDesencriptar.removeAttribute('disabled');
    }

}

function desencriptar(){

  let mensajeUsuario = document.querySelector('#valorUsuario').value.toString();
  var mensajeEncriptado = mensajeUsuario
      .replace(/ai/g, 'a')
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u')
  let respuesta = document.getElementById('valorOutput');
  respuesta.innerHTML = mensajeEncriptado.toLowerCase();
  let y = document.getElementById('output-result');
  y.style.visibility = 'visible';
}