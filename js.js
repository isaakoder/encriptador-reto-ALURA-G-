let cifrando = true;

function cifrar() {
    const mensajeOriginal = document.getElementById("mensaje").value;
    const desplazamiento = 3; // Cambia este valor según tu preferencia

    let mensajeCifrado = "";
    for (let i = 0; i < mensajeOriginal.length; i++) {
        const char = mensajeOriginal[i];
        if (char.match(/[a-zA-Z]/)) {
            const base = char.toLowerCase() === char ? "a".charCodeAt(0) : "A".charCodeAt(0);
            const posicion = (char.charCodeAt(0) - base + desplazamiento) % 26;
            mensajeCifrado += String.fromCharCode(base + posicion);
        } else {
            mensajeCifrado += char;
        }
    }

    document.getElementById("resultado").textContent = "Mensaje cifrado: " + mensajeCifrado;
}

function descifrar() {
    const mensajeOriginal = document.getElementById("mensaje").value;
    const desplazamiento = 3; // Cambia este valor según tu preferencia

    let mensajeDescifrado = "";
    for (let i = 0; i < mensajeOriginal.length; i++) {
        const char = mensajeOriginal[i];
        if (char.match(/[a-zA-Z]/)) {
            const base = char.toLowerCase() === char ? "a".charCodeAt(0) : "A".charCodeAt(0);
            const posicion = (char.charCodeAt(0) - base - desplazamiento + 26) % 26;
            mensajeDescifrado += String.fromCharCode(base + posicion);
        } else {
            mensajeDescifrado += char;
        }
    }

    document.getElementById("resultado").textContent = "Mensaje descifrado: " + mensajeDescifrado;
}

const mod = document.getElementById("modo");
const mensaje = document.getElementById("mensaje");

function cleared() {
    document.getElementById("mensaje").value = "";
    document.getElementById("resultado").textContent = "";
}


function cifrarDescifrar() {
    if (mensaje.value.trim() === "") {
        alert("El campo de mensaje no debe estar vacío");
        return;
    }
    if (mod.checked) {
        descifrar();
    } else {
        cifrar();
    }
}


function nbutton() {
    const boton = document.getElementById("botonCifrarDescifrar");
    if (mod.checked) {
        boton.textContent = "Descifrar";
    } else {
        boton.textContent = "Cifrar";
    }
}