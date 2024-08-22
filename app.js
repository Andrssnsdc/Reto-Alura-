
// Función para encriptar el texto en la entrada de texto 
function encriptarTexto(texto) {
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        textoEncriptado += reglas[caracter] || caracter;
    }
    return textoEncriptado;
}
//Funcion para desemcriptar el texto en la entrada de texto 
function desencriptarTexto(texto) {
    const reglas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    
    let textoDesencriptado = texto;
    
    // Itera sobre las reglas para reemplazar las cadenas encriptadas por las letras originales
    for (let [clave, valor] of Object.entries(reglas)) {
        textoDesencriptado = textoDesencriptado.split(clave).join(valor);
    }
    
    return textoDesencriptado;
}

// Función para manejar el clic en el botón de encriptar
document.getElementById('boton_encriptar').addEventListener('click', function () {
    const textarea = document.querySelector('.entrada_texto_usuario');
    const texto = textarea.value;
    const textoEncriptado = encriptarTexto(texto);
    mostrarResultado(textoEncriptado);
});

// Función para mostrar el texto encriptado o desemcriptado en la sección de salida
function mostrarResultado(texto) {
    const titulo = document.querySelector('.titulo_texto_ayuda_salida');
    const encriptacion = document.querySelector('.subtitulo_texto_ayuda_salida');
    const botonCopiar = document.querySelector('.boton_copiar');
    const ilustracion = document.querySelector('.ilustracion_texto_salida');

    titulo.textContent = "Texto transformado: ";
    encriptacion.textContent = texto;
    botonCopiar.style.display = 'block';// Muestra el botón de copiar
    ilustracion.style.display = 'none'; // Retira la ilustracion   

}


// Función para manejar el clic en el botón de desencriptar
document.getElementById('boton_desencriptar').addEventListener('click', function () {
    const textarea = document.querySelector('.entrada_texto_usuario');
    const texto = textarea.value;
    const textoDesencriptado = desencriptarTexto(texto);
    mostrarResultado(textoDesencriptado);
});

// Función para copiar el texto encriptado
function copiarTextoEncriptado() {
    const textoEncriptado = document.querySelector('.subtitulo_texto_ayuda_salida').textContent;

    navigator.clipboard.writeText(textoEncriptado).then(function () {
        // Mostrar el tooltip
        const botonCopiar = document.querySelector('.boton_copiar');
        botonCopiar.classList.add('show-tooltip');

        setTimeout(() => botonCopiar.classList.remove('show-tooltip'), 2000); // Ocultar el tooltip después de 2 segundos
    }, function (err) {
        console.error('Error al copiar texto: ', err);
    });
}

// Agregar evento de clic al botón de copiar
document.querySelector('.boton_copiar').addEventListener('click', copiarTextoEncriptado);