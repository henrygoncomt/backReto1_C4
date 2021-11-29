var validaUsuario = function () {
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

        //url: urlBaseLogin + "/" + credentials.email + "/" + credentials.clave,
        url: urlBaseLogin + "/" + credentials.email,

        success: function (response) {
        console.log(response);
        if (response == false) {
            alert("Usuario se va a registrar ...");
            guardarRegistro();
        }
            console.log(response);
            alert("Correo ya registrado ...");
            limpiarForm();
        }
        //,

        //error: function (jqXHR, textStatus, errorThrown) {
        //   alert("Usuario ya registrado ...!");
        //}
    });

}

var limpiarForm = function () {
    //$("#id").val('');
    $("#username").val('');
    $("#useremail").val('');
    $("#password").val('');
    $("#passwordrepeat").val('');
    
}

var guardarRegistro = function () {
    console.log("ejecutando funcion guardar")
    var urlBaseUser = "http://168.138.142.158:8080/api/user";
    //var urlBaseUser = "/api/user";
    
    var payload;
    var method;
    //var id = $("#id").val();
    var id = ""
    var nm = $("#username").val();
    var em = $("#useremail").val();
    var pw = $("#password").val();
    var pwr = $("#passwordrepeat").val();

    var msg;
    var ruta;
    if (nm.length == 0 || nm == null ) {
        alert('Revisar los campos ...!')
    }else { 
        if (!pw !== null && pw.length > 6 && !pwr !== null && pwr.length > 6) {
            if (pw == pwr) {
                if (id !== 'undefined' && id !== null && id.length > 0) {
                    msg = "Se ha Actualizado Usuario";
                } else {
                    ruta = urlBaseUser + "/new";
                    payload = {
                        name: $("#username").val(),
                        email: $("#useremail").val(),
                        password: $("#password").val(),
                    };
                    method = "POST";
                    //msg = "Registro Existoso ...!";
                }

                console.log("Guardando ", payload)
                console.log("ruta ", ruta)
                console.log("method ", method)

                $.ajax({
                    url: ruta,
                    type: method,
                    dataType: 'json',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(payload),
                    statusCode: {
                        201: function () {
                            alert('Registro Existoso ...!');
                            limpiarForm();    
                        }
                    }
                });  
            } else {
                alert('Verifique datos de password ...!');
            }
        } else {
                alert('Verifique datos de password ...!');
        }
    }        
}
