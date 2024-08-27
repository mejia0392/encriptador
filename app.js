let palabraEncriptada = "";
let palabraEncriptadaParaMostrar = "";

let palabraDesencriptada ="";
let palabraDesencriptadaParaMostrar = "";

function encriptar() {
    let textoRecibido = document.getElementById("texto_recibido").value;
    console.log(textoRecibido);

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
}

function desencriptar(){
    let textoRecibido = document.getElementById("texto_recibido").value;
    console.log(textoRecibido);

    palabraDesencriptada = textoRecibido.replace(/ai/g, "a").replace(/ober/g, "o").
    replace(/enter/g, "e").replace(/imes/g, "i").replace(/ufat/g, "o");
    console.log(palabraDesencriptada);
    
    palabraDesencriptadaParaMostrar = document.querySelector("#muestra_texto");
    palabraDesencriptadaParaMostrar.innerHTML = palabraDesencriptada;

    palabraDesencriptada = "";

    let valorCaja = document.querySelector("#texto_recibido");
    valorCaja.value ="";
}

function copiarTexto() {
    let textoCopiado = document.getElementById("muestra_texto").innerHTML;
    console.log(textoCopiado)
    navigator.clipboard.writeText(textoCopiado);
    alert('Contenido copiado en el portapapeles');
}


        
