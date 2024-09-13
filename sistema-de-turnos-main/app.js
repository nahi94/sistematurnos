/* 
* Sistema de clinica medica*
* Solicito a los usuarios ingrese sus datos y un turno deseado. *
* Muestro un listado de usuarios y sus turnos por consola al finalizar.
*/



class Paciente {
    constructor(nombre, apellido, email, edad, dni, turno) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = parseInt(dni);
        this.obrasocial = obrasocial 
        this.fechanacimiento = [];
        this.turno = [];
    }
  
    solicitar_datos_turno() {

        let turno_ingresado = new Date(prompt("Ingrese dia y horario para su turno. \nFormato:  mes/dia/año  hora:minutos "));
        let msj = "";

        if (!turno_ingresado) {
            msj += "\nDebe ingresar un turno valido";
        } else if  (isNaN(Date.parse(turno_ingresado))) {

            alert("Usted a ingresado una fecha inválida. \nFormato:  mes/dia/año  hora:minutos.");
            paciente.pop();            

        } else {
            alert("Turno reservado con exito");
            turno_agenda.push(turno_ingresado);
            this.turno.push(turno_ingresado);
        }
    }
    solicitar_datos_turno() {

        let edad = new Date(prompt("Ingrese dia mes dia y año de nacimiento. \nFormato:  mes/dia/año  hora:minutos "));
        let msj = "";

        if (!edad) {
            msj += "\nDebe ingresar una fecha valida";
        } else if  (isNaN(Date.parse(edad))) {

            alert("Usted a ingresado una fecha inválida. \nFormato:  mes/dia/año  hora:minutos.");
            paciente.pop();            

        } else {
            alert("Fecha correcta");
            edad.push(edad);
            this.turno.push(edad);
        }
    }
}


let bienvenido = confirm("Bienvenido a la Clinica Bella Vista S.R.L. Desea comenzar?")
const paciente = [];
const turno_agenda = [];


while (bienvenido) {
    paciente.push(new paciente
        (prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese su dni"), prompt("Ingrese fecha de nacimiento"), prompt("Ingrese su obra social")
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
titulo.innerHTML = "<h2> Turno registrado </h2>";           
document.body.append(titulo);    

//FECHA DEL PACIENTE//

const fechaNacimiento = document.getElementById("fechaNacimiento");
const edad = document.getElementById("edad");

const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const añoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    // 2022/12/31
    const añoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let edad = añoActual - añoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }
    return edad;
};

window.addEventListener('load', function () {

    fechaNacimiento.addEventListener('change', function () {
        if (this.value) {
            edad.innerText = `Edad: ${calcularEdad(this.value)} años`;
        }
    });

})

// muestro informacion
for (const usuario of paciente) {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${usuario.nombre} ${usuario.apellido} - Obra Social: ${usuario.obrasocial}</h2>
                     <p> Edad: ${usuario.edad} / DNI: ${usuario.dni} / Turno: ${usuario.turno}</p>
                     <hr>`;
    document.body.appendChild(div);
}

//mustro informacion de las fechas de los turnos en agenda
let ulTurnos = document.createElement("ul");
let inner = '';
turno_agenda.forEach((turno) => {
    inner+= `<li>${turno}</li>`;

ulTurnos.innerHTML = inner;
document.body.appendChild(ulTurnos)})