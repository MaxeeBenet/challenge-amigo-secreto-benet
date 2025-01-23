// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//iniciando la lista

let listaAmigos = [];

//creo la funcion para agregar amigos
function agregarAmigos() {
    //agrego el amigo por elementid "amigo" en el index.
    let agregarAmigo = document.getElementById("amigo").value;
    //creo el llamado al index con elementbyid
    let listaAmigo = document.getElementById("listaAmigos");
    //uso el if, si el nombre es un espacio vacio, tira un alert de que no debe estar vacio el campo, uso la funcion trim() para sacar espacios extras en el ingreso de los nombres.
    if (agregarAmigo.trim() === "") {
        alert("Por favor, escribir un nombre, no debe estar vacio");
        return;
    //verifico que no este ya el nombre nuevamente utilizo la funcion trim() para quitar espacios
    } if (listaAmigos.includes(agregarAmigo.trim())) {
        alert("Este nombre ya se ingreso, por favor, modifiquelo.")
        return;
    }
    //ingreso el nombre sin espacios a la lista.
    listaAmigos.push(agregarAmigo.trim());
    //verificar que los elementos se esten agregando en las listas.
    console.log(listaAmigos)
    //utilizo otra variable para crear el elemento lista en HTML
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = agregarAmigo.trim();
    //agrego los nombres de la funcion agregar amigo a la lista del elemento <li>.
    listaAmigo.appendChild(nuevoAmigo);

    //vuelvo el espacio en blanco luego de ingresar un nombre
    document.getElementById("amigo").value = "";
}

//investigando un poco implemente la funcion teclaenter para que al usuario tambien le sea comodo el presionar la tecla enter pueda agregar amigos.
function teclaEnter() {
    document.getElementById("amigo").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            agregarAmigos();
        }
    });
}

teclaEnter()

function recorrerListaAmigos() {
    //llamo a la lista HTML por su ID
    listaAmigosHTML = document.getElementById("listaAmigos");
    //limpio la lista existente
    listaAmigosHTML.innerHTML = "";
    //iterar sobre la lista con el bucle for, recorro la lista asignandole valor 0 a i, al recorrer la lista, va a ir sumando de a 1 por cada elemento en la lista.
    for (let i = 0; i < listaAmigos.length; i++) {
        //creo la lista con el createElement
        let amigoNuevoLi = document.createElement("li");
        //comparo cada elemento de mi lista con la lista amigoItem
        amigoNuevoLi.textContent = listaAmigos[i];
        //agrego cada elemento de la listaAmigos a listaAmigosHTML
        listaAmigosHTML.appendChild(amigoNuevoLi);
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
    
    //busco el elemento resultado.
    let resultadoHTML = document.getElementById("resultado");
    //cambio su contenido con innerHTML y lo muestro.
    resultadoHTML.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}!</li>`;
}