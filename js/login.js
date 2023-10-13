//Código para iniciar sesión

//import {numerocontrol, contraseña} from "logup.js";

const numerocontrol="usuario";
const contraseña="12345";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("login__numControl").value;
    const password = document.getElementById("login__contraseña").value;

    //Revisa si coincide los datos de la sesión
    if (usuario == numerocontrol && password==contraseña) {
       
        
        window.location.href = "index.html"
    }else{
        alert("El usuario o la contraseña son incorrectos");
    }
    /*alert("Sesión iniciada");
        
        window.location.href = "../html/index.html"*/

});

