let amigos = [];

let inputNombre = document.querySelector(".input-name");
let botonAgregar = document.querySelector(".button-add");
let listaAmigos = document.querySelector(".name-list"); 
let botonSorteo = document.querySelector(".button-draw"); 
let resultadoElemento = document.getElementById("resultado"); 

function obtenerNombre() {
    let nombre = inputNombre.value.trim(); 

    if (nombre === "") {
        alert("Por favor, escriba un nombre.");
        return;
    }

    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre); 
    console.log(amigos); 
    inputNombre.value = ""; 

    actualizarLista(); 
}

function actualizarLista() {
    listaAmigos.innerHTML = ""; 

    amigos.forEach((nombre) => {
        let li = document.createElement("li"); 
        li.textContent = nombre; 
        listaAmigos.appendChild(li); 
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceAleatorio];
    resultadoElemento.innerHTML = "El amigo secreto sorteado es: " + ganador;
}


botonAgregar.addEventListener("click", obtenerNombre);


inputNombre.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        obtenerNombre();
    }
});


botonSorteo.addEventListener("click", sortearAmigo);