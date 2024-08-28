let palabraEncriptada = "";
let palabraEncriptadaParaMostrar = "";

let palabraDesencriptada ="";
let palabraDesencriptadaParaMostrar = "";

function encriptar() {
    let textoRecibido = document.getElementById("texto_recibido").value;
    console.log(textoRecibido);

    let esValido = validarTexto(textoRecibido);

    if (esValido) {
      for (let i = 0; i < textoRecibido.length; i++) {
        console.log(textoRecibido[i]);

        switch (textoRecibido[i]) {
            case 'a':
              palabraEncriptada = palabraEncriptada.concat("ai")
              console.log(palabraEncriptada);
              break;
            case 'i':
                palabraEncriptada = palabraEncriptada.concat("imes")
                console.log(palabraEncriptada);
                break;
            case 'e':
                palabraEncriptada = palabraEncriptada.concat("enter")
                console.log(palabraEncriptada);
              break;
              case 'o':
                palabraEncriptada = palabraEncriptada.concat("ober")
                console.log(palabraEncriptada);
              break;
              case 'u':
                palabraEncriptada = palabraEncriptada.concat("ufat")
                console.log(palabraEncriptada);
              break;
            default:
                palabraEncriptada = palabraEncriptada.concat(textoRecibido[i]);
    };
    }

    palabraEncriptadaParaMostrar = document.querySelector("#muestra_texto");
    palabraEncriptadaParaMostrar.innerHTML = palabraEncriptada;

    palabraEncriptada = "";
    let valorCaja = document.querySelector("#texto_recibido");
    valorCaja.value ="";
    let mensajeValido = document.querySelector("#texto_advertencia");
    mensajeValido.innerHTML = "Introduce un texto en minúsculas. ¡No uses tildes ni caracteres especiales!";
    document.getElementById("texto_advertencia").style.color = "#cdeae5";

    } else {
      mensajeNoValido = document.querySelector("#texto_advertencia");
      mensajeNoValido.innerHTML = "Por favor introduce un texto en minúsculas y sin caracteres especiales o números";
      document.getElementById("texto_advertencia").style.color = "#e63946";
      console.log("INTRODUCE SOLO LETRAS MINÚSCULAS");
    }

    
}

function desencriptar(){
    let textoRecibido = document.getElementById("texto_recibido").value;
    console.log(textoRecibido);

    let esValido = validarTexto(textoRecibido);

    if (esValido) {
      palabraDesencriptada = textoRecibido.replace(/ai/g, "a").replace(/ober/g, "o").
    replace(/enter/g, "e").replace(/imes/g, "i").replace(/ufat/g, "o");
    console.log(palabraDesencriptada);
    
    palabraDesencriptadaParaMostrar = document.querySelector("#muestra_texto");
    palabraDesencriptadaParaMostrar.innerHTML = palabraDesencriptada;

    palabraDesencriptada = "";

    let valorCaja = document.querySelector("#texto_recibido");
    valorCaja.value ="";

    let mensajeValido = document.querySelector("#texto_advertencia");
    mensajeValido.innerHTML = "Introduce un texto en minúsculas. ¡No uses tildes ni caracteres especiales!";
    document.getElementById("texto_advertencia").style.color = "#cdeae5";
    
    } else {
      mensajeNoValido = document.querySelector("#texto_advertencia");
      mensajeNoValido.innerHTML = "Por favor introduce un texto en minúsculas y sin caracteres especiales o números";
      document.getElementById("texto_advertencia").style.color = "#e63946";
      console.log("INTRODUCE SOLO LETRAS MINÚSCULAS");
    }
    
}

function copiarTexto() {
    let textoCopiado = document.getElementById("muestra_texto").innerHTML;
    console.log(textoCopiado)
    navigator.clipboard.writeText(textoCopiado);
    alert('Contenido copiado en el portapapeles');
}

function validarTexto (texto) {
  const textoIntroducido = texto;
  const isLowerCase = textoIntroducido => /^(?=[a-z])[a-z\s]+$/.test(textoIntroducido);

  if (isLowerCase(textoIntroducido)) {
    return true;
  } else {
    return false;
  }
}      