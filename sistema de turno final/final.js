class Paciente {
    constructor(nombreP, apellidoP, dni, obrasocial, fechanacimiento) {
        this.nombreP = nombreP;
        this.apellidoP = apellidoP;
        this.dni = parseInt(dni);
        this.obrasocial = obrasocial;
        this.fechanacimiento = fechanacimiento;
        this.turno = [];
    }    
    }
    solicitar_datos_turno(); {

        var turno_ingresado = new Date(prompt("Ingrese dia y horario para su turno. \nFormato:  mes/dia/año  hora:minutos "));
        var msj = "";

        if (!turno_ingresado) {
            msj += "\nDebe ingresar un turno valido";
        } else if  (isNaN(Date.parse(turno_ingresado))) {

            alert("Usted a ingresado una fecha inválida. \nFormato:  mes/dia/año  hora:minutos.");
            Paciente.pop();            

        } else {
            alert("Turno reservado con exito");
            turno_agenda.push(turno_ingresado);
            this.turno.push(turno_ingresado);
        }
    }


var bienvenido = confirm("Bienvenido a sistema de turnos. Desea comenzar?")
const paciente = [];
const turno_agenda = [];

while (bienvenido) {
    peciente.push(new Paciente
        (prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese su email"), prompt("Ingrese su edad"), prompt("Ingrese su dni")
        ));

    paciente[paciente.length - 1].solicitar_datos_turno()
        
    //valido inputs, si ALGUNO falla llamo a la funcion invalidData()
    if (paciente.some((user) => (isNaN(user.edad)))) {
        alert("Usted a ingresado una EDAD inválida. Reintente.");
        invalidData()

    } else if (paciente.some((user) => (isNaN(user.dni)))) {
        alert("Usted a ingresado un DNI inválido. Reintente.");
        invalidData()

    } else {
        bienvenido = confirm("Desea reservar otro turno?")
    }
}

//invalidData() elimina el ultimo dato de usuario ingresado incorrectamente.
function invalidData() {
    paciente.pop();
    bienvenido = false;
    console.log(paciente);
}
  

let titulo = document.createElement("p");            
titulo.innerHTML = "<h2>Listado informativo de usuarios y turnos </h2>";           
document.body.append(titulo);    


// muestro informacion de los usuarios creando elementos en el DOM
for (const usuario of paciente) {
    var div = document.createElement("div");
    div.innerHTML = `<h2>${usuario.nombrep} ${usuario.apellidoP} - Obrasocial: ${usuario.obrasocial} - </h2>
                     <p> Edad: ${usuario.edad} / Dni: ${usuario.dni} / Turno: ${usuario.turno}</p>
                     <hr>`;
    document.body.appendChild(div);
}

//mustro informacion de las fechas de los turnos en agenda
var ulTurnos = document.createElement("ul");
var inner = '';
turno_agenda.forEach((turno) => {
    inner+= `<li>${turno}</li>`;

ulTurnos.innerHTML = inner;
document.body.appendChild(ulTurnos)})