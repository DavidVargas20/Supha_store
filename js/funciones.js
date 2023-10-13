

    function logup()
    {
    let alumno = 
    {
        numerocontrol: "", contraseña : ""
    };
    
    let logupForm = document.getElementById("logupForm");
    
        logupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada.
    
        // Obtener los valores de los campos de entrada
        alumno.numerocontrol = document.getElementById("logup__numControl").value;
        alumno.contraseña = document.getElementById("logup__contraseña").value;
    
        if(document.getElementById("logup__ConfirmarCon").value == alumno.contraseña){
            
            alert("nombre: " + alumno.numerocontrol + "\nContraseña: " + alumno.contraseña);
            
            window.location.href = "../html/login.html"
            
        }else{
            alert("Las contraseñas no coinciden")
        }
    });
    }

    //Iniciar sesion
    function login()
    {
        let loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let usuario = document.getElementById("login__numControl").value;
        let password = document.getElementById("login__contraseña").value;

        alert(numerocontrol + contraseña)
        //Revisa si coincide los datos de la sesión
        if (numerocontrol != usuario && contraseña != password) {
        
        alert("El usuario o la contraseña son incorrectos");
    }else{
        alert("Sesión iniciada");
        
        window.location.href = "../html/index.html"
    }
    });
}
