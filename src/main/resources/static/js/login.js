function validarUsuario() {
    var urlBaseLogin = "http://168.138.142.158:8080/api/user";
    //var urlBaseLogin = "/api/user";

    console.log("ejecutando validacion de usuario")

    var email = $("#useremail").val();
    var clave = $("#password").val();

    if (email.length == 0) {
        alert("Ingrese el correo ...!")
        return 0;
    }

    if (clave.length == 0) {
        alert("Ingrese la contraseña ...!")
        return 0;  
    }


    let credentials = {
        email: $("#useremail").val(),
        clave: $("#password").val(),
    };

    
    $.ajax({
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',

        url: urlBaseLogin + "/" + credentials.email + "/" + credentials.clave,

        success: function (response) {
        if (response.name == 'NO DEFINIDO') {
            alert('Usuario o contraseña incorrecta ...!');
            return;
        }
            console.log(response);
            console.log("Bienvenido");
            alert("Acabas de iniciar sesion");    
        },

        error: function (jqXHR, textStatus, errorThrown) {

           alert("Usuario no registrado ...!");
        }
    });
}

