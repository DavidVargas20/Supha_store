//Código para crear una cuenta NUEVA

const alumno = {
    numerocontrol: "",
    contraseña : "",

};
const logupForm = document.getElementById("logupForm");

logupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada.

    // Obtener los valores de los campos de entrada
    alumno.numerocontrol = document.getElementById("logup__numControl").value;
    alumno.contraseña = document.getElementById("logup__contraseña").value;

    if(document.getElementById("logup__ConfirmarCon").value == alumno.contraseña){
        
        window.location.href = "login.html"
        
    }else{
        alert("Las contraseñas no coinciden")
    }
});