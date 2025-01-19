// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//iniciando la lista

let listaAmigos = [];

//creo la funcion para agregar amigos
function agregarAmigos() {
    //agrego el amigo por elementid "amigo" en el index.
    let agregarAmigo = document.getElementById("amigo").value;
    //creo el llamado al index con elementbyid
    let listaAmigo = document.getElementById("listaAmigos");
    //uso el if, si el nombre es un espacio vacio, tira el alert.
    if (agregarAmigo.trim() === "") {
        alert("Por favor, escribir un nombre, no debe estar vacio");
        return;
    //verifico que no este ya el nombre.
    } if (listaAmigo.includes(agregarAmigo.trim())) {
        alert("Este nombre ya se ingreso, por favor, modifiquelo.")
        return;
    }
    
    listaAmigos.push(agregarAmigo.trim());
    //verificar que los elementos se esten agregando en las listas.
    console.log(listaAmigos)
    //utilizo otra variable para crear la lista 
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = agregarAmigo.trim();

    listaAmigo.appendChild(nuevoAmigo);

    //vuelvo el espacio en blanco luego de ingresar un nombre
    document.getElementById("amigo").value = "";
}
