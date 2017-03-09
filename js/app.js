//var nombre = prompt ("Ingresar nombre de la estudiante");
//var puntosTecnicos = prompt ("Ingrese puntos técticos");
//var puntosHSE = prompt ("Ingrese puntos Habilidades Socio-Emocionales");
var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    //return estudiantes[i];
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    /*var nombre = prompt ("Ingrese nombre de la estudiante");
      var puntosTecnicos = prompt ("Ingrese puntos técticos");
      var puntosHSE = prompt ("Ingrese puntos Habilidades Socio-Emocionales");
      var estudiante (nombre, puntosTecnicos, puntosHSE){
        this.nombre = nombre;
        this.puntosTecnicos = puntosTecnicos;
        this.puntosHSE = puntosHSE;
    }
    var estudiante = new estudiante (nombre, puntosTecnicos, puntosHSE);
    estudiantes = estudiantes.push (estudiante);*/
    /*var estudiante = (nombre = prompt ("Ingrese nombre de la estudiante"),
                      puntosTecnicos = prompt ("Ingrese puntos técticos"),
                      puntosHSE = prompt ("Ingrese puntos Habilidades Socio-Emocionales"));
                    { this.nombre = nombre;
                      this.puntosTecnicos = puntosTecnicos;
                      this.puntosHSE = puntosHSE;
                    }
    var estudiante = new estudiante (nombre, puntosTecnicos, puntosHSE);
    estudiantes = estudiantes.push (estudiante);*/
    for ( var i=0; i<5; i++){
        var nombre = prompt ("Ingresa nombre de la estudiante");
        var puntosTec = prompt ("Ingresa puntos tectnicos");
        var puntosHSE = prompt ("ingresa puntos Habilidades Socio-Emocionales");

        function estudiante (nombre, puntosTec, puntosHSE)
        {
          this.nombre = nombre;
          this.puntosTec = puntosTec;
          this.puntosHSE = puntosHSE;
        }
        var estudiante = new estudiante (nombre, puntosTec, puntosHSE);
        console.log (estudiante);

        estudiantes = estudiantes.push (estudiante)
    }
function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante/*.nombre*/ + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante/*.puntosTecnicos*/ + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante/*.puntosHSE*/ + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    //for (var i = 0; i< estudiantes.lenth; i++){
     // return estudiantes [i];
     //}
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    /*for (var i = 0; i< estudiantes.lenth; i++){
      return estudiantes.nombre [i];
    }*/

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
