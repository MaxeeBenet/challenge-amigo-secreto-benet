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
    } if (listaAmigos.includes(agregarAmigo.trim())) {
        alert("Este nombre ya se ingreso, por favor, modifiquelo.")
        return;
    }
    
    listaAmigos.push(agregarAmigo.trim());
    //verificar que los elementos se esten agregando en las listas.
    console.log(listaAmigos)
    //utilizo otra variable para crear la lista en HTML
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = agregarAmigo.trim();
    //agrego los nombres de la funcion agregar amigo a la lista del elemento <li>.
    listaAmigo.appendChild(nuevoAmigo);

    //vuelvo el espacio en blanco luego de ingresar un nombre
    document.getElementById("amigo").value = "";
}


function recorrerListaAmigos() {
    //llamo a la lista HTML por su ID
    listaAmigosHTML = document.getElementById("listaAmigos");
    //limpio la lista existente
    listaAmigosHTML.innerHTML = "";
    //iterar sobre la lista con el bucle for, recorro la lista asignandole valor 0 a i, al recorrer la lista, va a ir sumando de a 1 por cada elemento en la lista.
    for (let i = 0; i < listaAmigos.length; i++) {
        //creo la lista con el createElement
        let amigoItem = document.createElement("li");
        //comparo cada elemento de mi lista con la lista amigoItem
        amigoItem.textContent = listaAmigos[i];
        //agrego cada elemento de la listaAmigos a listaAmigosHTML
        listaAmigosHTML.appendchild(amigoItem);
    }

}

function sortearAmigos() {
    //utilizo el if para crear un condicion de que tenga que tener al menos 3 amigos para 
    if (listaAmigos.length < 3) {
        alert("Debe tener al menos 3 amigos para realizar el sorteo!");
        return;
    }
    //Utilizo una variable y la funcion random para recorrer la lista y que el valor sea random.
    let amigoRandom = Math.floor(Math.random() * listaAmigos.length);
    //Asigno la variable segun el indice provisto por amigoRandom y se lo indica en el indice de la listaAmigos.
    let amigoSorteado = listaAmigos[amigoRandom];
    
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!</li>`;
}