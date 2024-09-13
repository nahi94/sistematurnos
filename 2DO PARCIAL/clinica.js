let bienvenido = confirm("Bienvenido a la Clinica Bella Vista S.R.L. Desea comenzar?")
const personas = [];
const turno_agenda = [];

//clase de Clinica//
class Clinica {
    constructor(nombreC, dueño, responsabilidad_juridica){
        this.nombreC = nombreC;
        this.dueño = dueño;
        this.responsabilidad_juridica = responsabilidad_juridica;
    }
    
    datosClinica () { 
        return 'Nombre: '+ this.nombreC+this.dueño + this.responsabilidad_juridica
    }
}

let ObjClinica = new Clinica('Clinica Bella Vista ','Javier Parra ', 'S.R.L',);
    console.log (ObjClinica.datosClinica());
    console.log ({ObjClinica});
 
//clase de doctor//

class Doctor {
    constructor(nombreD,apellidoD, especialidad, matriculaD){
        this.nombreD = nombreD
        this.apellidoD = apellidoD
        this.especialidad = especialidad
        this.matriculaD = matriculaD
    }
    datosDoctor () { 
        return 'Nombre: '+ this.nombreD+ this.apellidoD + this.especialidad
    }
}
let ObjDoctor = new Doctor('Cecilia Ayelen ','Pino, ', ' Pediatria');
    console.log (ObjDoctor.datosDoctor());       
    console.log ({ObjDoctor})
    //clase de enfermero// 

class Enfermero {
    constructor(nombreE,apellidoE, matriculaE, licenciatura){
        this.nombreE = nombreE
        this.apellidoE = apellidoE
        this.matriculaE = matriculaE
        this.licenciatura = licenciatura
    }
    datosEnfermero () { 
        return 'Nombre: '+ this.nombreE+ this.apellidoE + this.licenciatura
    }
}
let ObjEnfermero = new Enfermero('Cecilia Ayelen ','Pino, ', ' Técnica');
    console.log(ObjEnfermero.datosEnfermero( ));
    console.log ({ObjEnfermero})
    //clase de paciente/

    function Paciente (){
        class Paciente {
            constructor(nombreP, apellidoP, dni, obrasocial, fechanacimiento){
                this.nombreP = nombreP;
                this.apellidoP = apellidoP;
                this.dni = parseInt(dni);
                this.obrasocial = obrasocial;
                this.fechanacimiento = fechanacimiento;
            }   
    }

function formularioturno() {
        var nombreP=document.getElementById ("nombreP").value;
        var apellidoP=document.getElementById("apellidoP").value;
        var dni=document.getElementById("dni").value;
        var obrasocial=document.getElementById("obrasocial").value;
        var fechanacimiento=document.getElementById("fechanacimiento").value;
        var turno=document.getElementById("turno").value;
        document.write ( nombreP,apellidoP,dni,obrasocial,fechanacimiento,turno);
        console.log(nombreP+" "+ apellidoP +" " + dni + " "+ obrasocial +" "+ fechanacimiento + " "+turno);
    }
window.paciente = paciente;
    
    $("#formulario").submit(function(et){
        
        et.preventDefault();
        et.stopPropagation();

        let elementos = $("#formulario").children("input, select, textarea");
        
        let Paciente = new Paciente();
        
        //Como estas usando el html en crudo, pues es preferible usar un html en vez del append, pero te funcionaría igual así que si quieres seguir usandolo, usalo.
        
        $("#data").html(`<h1> Datos del solicitante de turno: </h1>
                                    <p> Nombre: ${paciente.nombre} </p>
                                    <p> Apellido: ${paciente.apellido} <p>
                                    <p> dni: ${paciente.dni} </p>
                                    <p> obra social:  ${paciente.obrasocial} <p>
                                    <p> fecha de nacimiento: ${paciente.fechanacimiento} </p>
                                    <p> turno ${paciente.turno} <p>
                                    </br>`); 
            
        });
    };
    let ObjPaciente = new Paciente(" ");
    console.log (ObjPaciente.datosPaciente());
    console.log ({ObjPaciente})
    //campos del registro//
const nombreP = document.getElementById("name");
const apellidoP = document.getElementById("apellido");
const obrasocial = document.getElementById("obrasocial");
const fechanacimiento = document.getElementById("fechaNac");
const dni = document.getElementById("dni");

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
//llega hasta aca//

class paciente{
    addpaciente (){
    }
    deletepaciente(){
    }
    showMenssage(){
    }}

    
function Confirmar(){
    var nombreP=document.getElementById ("nombreP").value;
    alert(nombreP);
    var apellidoP=document.getElementById("apellidoP").value;
    alert(apellidoP);
    var dni=document.getElementById("dni").value;
    alert(dni);
    var obrasocial=document.getElementById("obrasocial").value;
    alert(obrasocial);
    var fechanacimiento=document.getElementById("fechanacimiento").value;
    alert(fechanacimiento);
    var turno=document.getElementById("turno").value;
    alert(turno);
    var edad= document.getElementById ("edad").value;
    alert(edad);
    var especialidad=document.getElementById("ESPECIALIDAD").value;
    alert(especialidad);
}



    document.getElementById('turno').innerHTML = "Confirmar";
document.getElementById("botons").onclick =function (){
    Confirmar}
