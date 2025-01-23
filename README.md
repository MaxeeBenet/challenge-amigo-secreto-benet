<h1 align="center">
  CHALLENGE AMIGO SECRETO
</h1>

![imagen](https://github.com/MaxeeBenet/challenge-amigo-secreto-benet/blob/main/assets/Screenshot%202025-01-23%20110115.png)

Primer challenge de Alura LATAM, dicho challenge es crear un juego donde poder sortear de entre un grupo de amigos un nombre para realizar el muy conocido ***amigo secreto***.

### Desarrollo

La idea de este desafio es crear una aplicacion que tenga las siguientes funciones: 
- Agregar amigos a una lista mediante al hacer click en el boton añadir.
- Verificar la entrada de los datos para que no pueda agregarse un nombre vacio y que los nombres provistos tampoco tengan espacios.
- Visualizacion de la lista previamente creada.
- Sorteo aleatorio de uno de los nombre y que muestre el nombre seleccionado en la página.

### Funciones

1. Funcion agregarAmigos(): Con esta función establecemos los parametros para que el usuario pueda agregar nombres pero con 2 excepciones, la primera que no puede ser un campo vacio y la segunda que no se puede repetir el nombre. Creamos una lista <li> en nuestro index para que pueda ser mostrada en pantalla mientras el va cargando los nombres a la lista.
2. Funcion recorrerListaAmigos(): Con esta funcion recorremos la lista de amigos con el bucle for () y asignamos los valores dentro de una lista en el index.html <li>.
3. Funcion sortearAmigos(): Mediante el uso de la funcion random, recorremos los elementos de dicha lista y seleccionamos uno de manera aleatoria y lo mostramos buscando el elemento "resultado" dentro de nuestro index.

### Posibles mejoras

1. Crear una funcion que tambien permita ingresar amigos mediante la tecla enter (realizado).
2. Implementar una funcion que no permita que se muestre el mismo nombre y guarde dichos elementos en otra lista aparte, siempre y cuando dicha lista tenga mas de 3 elementos.

### Instalacion

Para clonar repositorio

``` git clone https://github.com/MaxeeBenet/challenge-amigo-secreto-benet.git ``` en su consola de Git o bien descargar los archivos en zip y utilizarlos en su editor de codigo preferido.

### Modo de uso

1. Introducir un minimo de tres nombres (no pueden repetirse ni poner espacios) haciendo click en el boton "añadir" o presionando la tecla enter.
2. Una vez completado todos los nombres que desea agregar, presionar el boton "Sortear amigo".
3. Para reiniciar un nuevo sorteo con nuevos amigos, solo hace falta volver a recargar la pagina, ya sea presionando el boton actualizar en su navegador o la tecla F5.

## Tecnologias utilizadas.

HTML, CSS ( ambos proporcionado desde Alura para una mejor interfaz), JavaScript, para la implementacion de funciones.
