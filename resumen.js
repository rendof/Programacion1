//* RESUMEN JAVASCRIPT //

/* TEMAS
1. Variables + tipos de datos
2. Funciones + scope
3. Objetos literales + Arrays
4. Alert + Prompt + Confirm
5. Operadores lógicos + Condicionales + Switch
6. Selectores + DOM
7. Eventos
8. Bucles 
9. Formularios
10. Query String + Validación
11. Webstorage + librerias
*/

//TODO 1. VARIABLES + TIPOS DE DATOS //

//TODO  1.1 Variables //
//*DEFINICIÓN:
//son espacios de memoria en la computadora donde podemos almacenar distintos tipos de datos

//*TIPOS:
let variable = 'string, numero, etc'; //declaración de una variable con let
var variable2 = 'string, numero, etc'; //declaración de una variable con var
const variable3 = 'string, numero, etc'; //declaración de una variable con const

//*CONSIDERACIONES:
//la diferencia entre declarar con var y let es que let solo es accesible en el bloque de código donde es declarado (al igual que con const)

//las variables declaradas con const o let no pueden ser declaradas nuevamente

//una vez que la variable es declarada con var no  hace falta repetir el var

//TODO 1.2 Tipos de datos //
//1. Numéricos
var numero = 1;
//2 Cadenas de caracteres (string)
var string = 'Hola me llamo Tomy'
//3. Lógicos o booleanos (boolean)
var soyUnCapo = true;
var tengoSueño = false;
_______________________________________________________________________________
//TODO 2. FUNCIONES + SCOPE //

//TODO  2.1 Funciones //
//*DEFINICIÓN: 
//es un bloque de código que podemos invocar todas las veces que necesitemos. Puede realizar una tarea específica y retornar un valor. Nos permite agrupar el código que vayamos a usar muchas veces.

//los PARÁMETROS son las variables que escribimos cuando DEFINIMOS la función
//los ARGUMENTOS son los valores que enviamos cuando INVOCAMOS la función

//*TIPOS
//Funciones DECLARADA
function nombre (parametro1, parametro2) {
    
    //CUERPO -> acá escribimos el código que debe ejecutar la función

    return parametro1 + parametro2; //ahora la función nos va a devolver la suma del parámetro1 + parámetro2 cada vez que la invoquemos
};

//Funciones EXPRESADAS
let miFuncion = function(cantidad) {
    //CUERPO
    return '😃'.repeat(cantidad); //esta función repite 😃 la cantidad de veces que le indique
};

//* INVOCACIÓN
//para invocar una función declarada 
nombreFuncion (); 

//para ver o guardar el dato que retorna tengo 2 opciones:
//Opción 1
let resultado = nombreFuncion(); //almaceno el resultado en una variable

//Opción 2
console.log(nombreFuncion()); //hago un console.log de la ejecución

    //? Ejemplo
        function saludar (nombre, apellido){
            return 'Hola ' + nombre + ' ' + apellido; 
        }
        saludar ('Tomás', 'Giampaoletti'); //retorna 'Hola Tomás Giampaoletti'

//* CONSIDERACIONES
//a la hora de invocar una función, JS nos permite definir valores por defecto agregando un igual ( = ) luego de cada parámetro, así especificamos su valor en caso de que no llegue ninguno

    //? Ejemplo
        function saludar (nombre = 'Tomás', apellido = 'Giampaoletti'){
            return 'Hola ' + nombre + ' ' + apellido; 
        }
        saludar (); //retorna 'Hola Tomás Giampaoletti'

//TODO 2.2 SCOPE //
//SCOPE es el alcance que tiene una variable -> son definidos principalmente por las funciones.

//Scope local: Si declaramos una variable DENTRO de una función, su scope es LOCAl, es decir, la variable vive únicamente dentro de esa función. (let)
//Scope Global: Si declaramos una variable FUERA de una función, su scope es GLOBAL, es decir, podemos usarla en cualquier lugar del código (dentro o fuera de una función) (var)
_______________________________________________________________________________

//TODO 3. OBJETOS LITERALES + ARRAYS //

//TODO 3.1 Objetos literales //
//* DEFINICIÓN:
//son la representación en código de un elemento de la vida real. Es una estructura de datos que puede contener PROPIEDADES y MÉTODOS. Para crearlo usamos una llave de apertura y de cierre { }

//PROPIEDAD -> puede almacenar cualquier tipo de dato.
//MÉTODOS -> una propiedad que almacena una función (método del objeto)

var objeto = {
    propiedad : 'valor de la propiedad',
    propiedad2 : 'valor de la propiedad'

    metodo: function(){
        return 'Lo que quiera'
    }
};

    //? Ejemplo
        var tenista = {
            nombre: 'Roger',
            apellido: 'Federer'
            edad: 38,
            saludar: function(){
                return 'Hola me llamo ' + this.nombre; 
                //this hace referencia al objeto en sí desde el cual estamos invocando la palabra. Con this.propiedad accedemos al valor de la propiedad interna de ese objeto
            }
        };

        console.log(tenista.nombre) //me muestra el valor de la propiedad nombre
        console.log(tenista.apellido) //me muestra el valor de la propiedad apellido
        console.log(tenista.saludar()) //me retorna 'Hola me llamo Roger'

//TODO 3.2 Arrays //
//* DEFINICIÓN:
//Los arrays son colecciones de datos. Se declaran con corchetes [ ]. Son un tipo especial de objetos -> no los consideramos como un tipo de objetos más.

var array = [
    'Elemento 1',
    'Elemento 2',
    'Etc';
]

//para acceder a un elemento del array utilizamos nombreDelArray[i] donde 'i' indica la posición del elemento (empieza por 0)

    //? Ejemplo
        var comidas = ['Milanesa', 'Pizza', 'Hamburguesa']
        comida[0] //retornará 'Milanesa' porque está en la posición 0

_______________________________________________________________________________

//TODO 4. ALERT + CONFIRM + PROMPT //
//* DEFINICIONES:
//Alert: hará aparecer en el navegador un cartel con el mensaje enviado.

//Confirm: hará aparecer en el navegador un cartel de alerta con el mensaje enviado con la opción que el usuario confirme (o niegue) el mensaje. Devuelve un booleano (true / false). En este caso se guarda dicho resultado en una variable para ser procesada a posteriori.

//Prompt: hará aparecer en el navegador un cartel de alerta con el mensaje enviado con la opción de que el usario ingrese una respuesta. El resultado del Prompt será un STRING de lo que se haya ingresado. En este caso se guarda dicho resultado en una variable para ser procesada luego.

var mensaje = 'Mensaje que queramos que aparezca';

alert(mensaje);
confirm(mensaje); 
prompt(mensaje);

_______________________________________________________________________________

//TODO 5. OPERADORES LÓGICOS + CONDICIONALES + SWITCH //

//TODO 5.1 Operadores Lógicos //
//* DEFINICIÓN:
//Los operadores nos permiten manipular el valor de las variables, realizar operaciones y comparar sus valores, realizar operaciones y comparar sus valores.

//* TIPOS:
// AND (&&) -> TODOS los valores deben evaluar como TRUE.
    //? Ejemplo
        (10 > 15) && (10 != 20) // false
        (12 % 4 == 0) && (12 != 24) // true

// OR (||) -> al menos UN VALOR debe evaluar como TRUE.
    //? Ejemplo
        (10 > 15) || (10 != 20) // true

// NOT (!) -> niega la condición, si era ture, será false y viceversa.
    //? Ejemplo
        !false // true
        !(10 > 15) // true

//TODO 5.2 Condicionales IF / ELSE IF / ELSE //
//* DEFINICIÓN:
//Nos permiten evaluar condiciones y realizar diferentes acciones según el resultado de esas evaluaciones.

if (condición1) {
    //código a ejecutar si la PRIMERA condición es VERDADERA
} else if (condición2) {
    //código a ejecutar si la SEGUNDA condición es VERDADERA
} else {
    //código a ejecutar si las condiciones son FALSAS
}

    //? Ejemplo
        let edad = 19;
        let acceso = ' ';

        if (edad < 16){
            acceso = 'prohibido';
        } else if (edad >= 16 && edad <= 18){
            acceso = 'permitido sólo acompañado de un mayor';
        } else {
            acceso = 'permitido';
        }

//TODO 5.3 SWITCH //
//* DEFINICIÓN:
//SWITCH evalúa si la condición cumple con los casos o con el default

switch (variable) {
    case 'caso 1': 
    //código a ejecutar si la variable cumple con el caso 1 ;
    break; //corta la ejecución del switch si cumple

    case 'caso 2': 
    //código a ejecutar si la variable cumple con el caso 2 ;
    break; //corta la ejecución del switch si cumple

    default: //código a ejecutar si no se cumplen ninguno de los otros casos
}

_______________________________________________________________________________

//TODO 6. SELECTORES + DOM //

//TODO 6.1 Selectores //
//* DEFINICIÓN:
//Para acceder a los elementos de una página usamos SELECTORES. Cada selector puede retornar un solo elemento o una lista de elementos. Debemos hacer uso del objeto DOCUMENT ya que los selectores son métodos de este.

let variable = document.querySelector('.clase || #id || elemento'); //nos retorna el PRIMER elemento del HTML que coincida con la búsqueda especificada.
let variable = document.querySelectorAll('.clase || #id || elemento'); //nos retorna un listado de elementos que coincidan con la búsqueda especificada.
let variable = document.getElementById('id'); //nos retorna el elemento cuyo ID coincida con el deseado. No se pone #

//TODO 6.2 DOM //
//* DEFINICIÓN:
//El Modelo de Objetos del Documento (DOM) es un API para documentos HTML y XML. Proporciona una representación estructural del documento, permitiendo la modificación de su contenido o su presentación visual. Esencialmente, comunica las páginas web con los scripts o los lenguajes de programación.
//Para poder hacer modificaciones en el DOM siempre tenemos que tener seleccionado el objeto que queremos modificar. Esto lo hacemos usando SELECTORES.

//*MODIFICAR CONTENIDO:

let selector = document.querySelector('elemento');

selector.innerHTML = 'nuevo contenido';
selector.innerHTML += 'se agrega el nuevo contenido a lo que estaba antes';

//*MODIFICAR ESTILO:

let selector = document.querySelector('elemento');

selector.style.propiedadDeCSS = 'atributo';

    //? Ejemplo
        let titulo = document.querySelector('#main.title');

        titulo.style.color = 'red'
        titulo.style.fontSize = '40px'
        titulo.style.textAlign = 'center'

_______________________________________________________________________________

//TODO 7. EVENTOS //
//* DEFINICIÓN:
//Es todo aquello que sucede en el navegador. Ej: posar el mouse sobre un elemento, clickear un botón, esperar a que cargue la página, etc. Nos sirven para interactuar con los usuarios y agregar dinamismo a nuestro sitio web.

elemento.evento = function (){
    // Lo que sucede al disparar el evento
}

//*LISTA DE EVENTOS:

eventos = {
    onclick: 'cuando se hace click sobre un elemento',
    ondblclick: 'cuando se hace doble click sobre un elemento',
    onmouseover: 'cuando se posiciona el mouse sobre un elemento',
    onmouseout: 'cuando se quita el mouse sobre un elemento',
    onmousemove: 'cuando se mueve el mouse',
    onscroll: 'cuando se hace scroll sobre la ventana del navegador',
    onkeydown: 'cuando se toca la flecha hacia abajo del teclado',
    onload: 'cuando se carga la ventana del navegador',
    onfocus: 'cuando se clickea sobre el campo de un formulario',
    onblur: 'cuando se clickea fuera de un campo seleccionado de un formulario',
    onsubmit: 'cuando se envía el formulario'
}

//* PASOS:
//1. CAPTURAR EL ELEMENTO
let elemento = document.querySelector('elemento')

//2. DEFINIR UN EVENTO 
elemento.evento 

//3. ASIGNARLE UNA FUNCIÓN al evento
elemento.evento = function (){
     //código a ejecutar
}

    //? Ejemplo
        let boton = document.querySelector('.boton')
        boton.onclick = function(){
            boton.style.color = 'red'
        }

//* CONSIDERACIONES:
//1. Para evitar que un elemento se comporte de forma default:

variable.addEventListener('evento sin on-', function(callback){
    callback.preventDefault();
})

//2. Para asignarle un mismo comportamiento a dos elementos distintos -> declaro una función con ese comportamiento y se la asigno a los elementos que quiera.

function comportamiento (){ 
    //código a ejecutar
}
elementoCapturado.evento = comportamiento; //sin los paréntesis ( )
elementoCapturado2.evento2 = comportamiento; //sin los paréntesis ( )

//3. Asignar mas de un evento a un mismo elemento -> addEventListener()

variable.addEventListener('evento sin on-', function(){
    //código a ejecutar
})

variable.addEventListener('otro evento sin -on', function(){
    //código a ejecutar
})

//4. THIS: hace referencia al elemento sobre el cual se está ejecutando la función.

//5. INFORMACIÓN DEL EVENTO: Para tener más información sobre el evento (por ej: en qué lugar del ancho / alto de la pantalla se dio click o cuál fue la tecla que apretó el usuario) JS nos permite añadir un PARÁMETRO EXTRA a la función que esté manejando el evento -> EVENT o E

function nombre (event){ //la función recive 'event' como parámetro
    console.log(event) //cuando suceda el evento se mostrará por consola el evento
};

elemento.evento = nombre; //cuando suceda el evento se ejecutará la función que le asignamos -> 

_______________________________________________________________________________

//TODO 8. BUCLES // 
//* DEFINICIÓN:
//Los CICLOS o BUCLES nos permiten repetir instrucciones de manera sencilla. Podemos hacerlo una determinada cantidad de veces o mientras que se cumpla una condición.

//* 1. FOR

for (let inicio; condición; modificador){
    //código a ejecutar
}

//Consta de 3 partes: 

//1. Inicio (desde): antes de arrancar el ciclo, se establece el VALOR INICIAL.

//2. Condición (hasta): antes de ejecutar el código de vuelta, se pregunta si la condición resulta VERDADERA O FALSA. Si es VERDADERA -> continúa, si es FALSA -> se detiene el ciclo. Se usa .lenght para indicar que termine donde termina el array.

//3. Modificador (incremento o decremento): indicamos cómo debe pasar a la siguiente vuelta

    //? Ejemplo
        for (let i=0, i < 10, i++){
            console.log('Hello World')
        }

//* 2. FOR OF
//Nos permite iterar sobre CADA UNO de los valores de un elemento iterable (por ej: un array)

for(var variable of elementoIterable){
    //código a ejecutar
}

//Consta de 2 partes:

//1. Iterador: definimos una variable para referirnos a cada ítem del elemento que estamos iterando. Puede usarse var o let.

//2. Elemento Itrable: elemento al cual queremos iterar para conocer sus valores

    //? Ejemplo
        var músicos = ['Charly García', 'Spinetta', 'Fito'];
        
        for (var artista of músicos){
            console.log(artista) //nos va mostrar por consola a cada músico (cada elemento del array)
        }

//* 3. FOR EACH ( )
//Asociado siempre a un array. Ejecuta una función diferente por cada elemento del array. Necesita una función adentro.

array.forEach(function(elemento){
    //definimos el comportamiento que queremos implementar sobre cada elemento
})

_______________________________________________________________________________

//TODO 9. AJAX + FETCH //

//TODO 9.1 AJAX //
//* DEFINICIÓN:
//AJAX (Asynchronous Javascript and XML) es una técnina de desarrollo que nos permite crear webs dinámicas.
//Nos permite hacer peticiones a otras páginas web sin tener que salir del documento HTML actual -> pedidos asincrónicos.
//Asincronismo: consiste en poder iniciar una acción sin depender de la finalicación de acciones anteriores

//TODO 9.2 FETCH //
//* DEFINICIÓN:
//Es la manera a través de la cual (en JS) podemos hacer llamados asincrónicos de una forma mas sencilla y legible.
//Fetch recibe un parámetro, que será la ruta desde donde queremos obtener la información. No retorna un valor final -> retorna una promesa.

fetch('url')
    .then(function(response){
        return.response.json(); //esto siempre es igual
    })
    .then(function(data){
        //código a ejecutar
    })
    .catch(function(error){
        //código a ejecutar si hubiese un error
    })

//* PASOS:
//1. Proporcionamos una ruta -> fetch ('url')
    fetch('url')
    
//2. Primer .then( ) -> recibe una función la cual a su vez recibe la respuesta como parámetro (response o res)
    .then(function(response){

    })

//3. Json -> dentro de la función transformamos los datos que nos manda el fetch a .json para poder trabajarlos
    .then(function(response){
        return.response.json();
    })

//4. Segundo .then( ) -> recibe otra función que trabajará con la información que nos dió el .then ( ) anterior.
    .then(function(data){
        //código a ejecutar
    })

//5. .catch ( ) -> atrapa los errores (si los hubiese)
    .catch(function(error){
        //código a ejecutar si hubiese un error
    })

    //? Ejemplo GIPHY
    fetch ('url de giphy trenging')
        .then(function(respuesta){
            respuesta.json();
        })
        .then(function(datos){
            console.log(datos.data)

            for (let i=0; i<datos.data.length; i++){

                let gif = '<p>' + datos.data[i].title + '</p>'
                gif += '<img src="' + datoos.data[i].images.original.url + '">'

                document.querySelector('ul').innerHTML += '<li>' + gif + '</li>'
            }
        })
        .catch(function(error){
            alert('Error intente mas tarde')
        })

_______________________________________________________________________________

//TODO 10. FORMULARIOS + VALIDACIÓN //

//TODO 10.1 Formularios: //
//* DEFINICIÓN:
//Un formulario es un sistema para capturar datos. Necesita lenguajes adicionales para su complejo funcionamiento.

//* PARTES: 
//1. Capturar (HTML) -> 

//2. Validar (JS) -> 

//3. Procesar (PHP / CGI) -> 

//* ELEMENTOS DEL FORMULARIO (HTML):

<form action = "validar.php" method = "POST" > 

    <label for = "nombre"> Nombre: </label> //El LABEL acompaña al input y sirve para indicarle al usaurio que debe ingresar.
    <input type = "text" name = "nombre-usuario"></input> //en el INPUT el usuario ingresa la información.

    <label for = "email"> Email: </label>
    <input type = "email" name = "mail"></input>

    <label for = "tel{efono"> Teléfono: </label>
    <input type = "tel" name = "telefono"></input>

</form>

//TODO 10.2 Validación del formulario: //
//Cuando tenemos un formulario en nuestra interfaz (UI), es importante validar los datos que contiene ANTES de que se envíen al servidor -> validación on-time.
//Lo primero que tenemos que saber para poder validar formularios con JS son los EVENTOS que estos mismos manejan.

//* EVENTOS DEL FORMULARIO:
//Se recomienda usar addEventListener( ) cuando trabajamos con eventos del formulario.

//1. FOCUS -> este evento se dispara INMEDIATAMENTE cuando se hace foco sobre un campo del formulario (cuando se ubica el cursor dentro del campo).

//2. BLUR -> este evento se dispara INMEDIATAMENTE cuando el campo ha perdido el foco (cuando se quita el cursor del campo).

//3. CHANGE -> este evento se dispara INMEDIATAMENTE cuando el campo ha perdido el foco, siempre y cuando el valor del campo haya cambiado (muy funcional en los campos de <select>)

//4. SUBMIT -> este evento se dispara EXCLUSIVAMENTE sobre el <form>, cuando se ha presionado el botón submit.

//5. campos.VALUE -> podemos usar la propiedad VALUE sobre el campo del formulario del cual queramos averiguar si está vacío o no. Nos devuekve 

//* ELEMNTOS DEL FORMULARIO:
//La propiedad ELEMENTS (ejecutada sobre un formulario) retorna una colección de elementos HTML pertenecientes al formulario, es decir, devuelve todos los elementos que contiene.
//Una vez capturados todos los elementos de un formulario podemos recorrerlos y aplicarles el comportamiento deseado -> necesitamos convertir esa info que nos devuelven en un array usando Array.form( ).

var formulario = document.querySelector('form');
var elementosDelForm = formulario.elements;
var elementosDelFormEnArray = array.form(elementosDelForm);

//* VALIDACIÓN DE CAMPOS SELECT:
//Un campo <select> no permite inserción de datos por parte del usuario si no que ya trae consigo todas las opciones. JS nos permite acceder a las opciones -> propiedad .options
// .options -> retorna todos los elementos <option> de un <select>. Devuelve una colección de elementos HTML y podemos acceder a sus posiciones como si fuera un array.

var camposSelect = document.querySelector('select');
var optionsDelSelect = camposSelect.options;

//Podemos acceder a la posición numérica del <option> actualmente seleccionado -> select.selectedIndex

var camposSelect = document.querySelector('select');
var optionsDelSelect = camposSelect.options;
var optionSeleccionado = camposSelect.selectedIndex;

//* VALIDAR UN FORMATO DE DATO ESPECÍFICO -> REGEX:
//Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto.

//ESTRUCTURA: 
/[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/

/* 
[   ] -> match anything contained within barckets

[\w._%+-] -> match any character A-Z upper or lowr case and any number 0 to 9 and match any ._%+-

+       -> as many time as possible
@       -> match the @ symbol

.       -> match the . symbol

[a-zA-Z]-> match upper and lower case A through Z
{2,4}   -> match at least two time but no more than four times
*/

//Almacenamos la expresión regular en una variable y luego uso el método .test() que recibe como parámetro el valor que deseamos evaluar -> nos retornará un booleano.

var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
console.log(regexEmail.test('ejemplo@gmail.com')) //true
console.log(regexEmail.test('Tomy Giampaoletti')) //false























