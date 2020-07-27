 /*inicio*/

function validar(){
	var usuario = document.getElementById("usuario").value;
	var clave = document.getElementById("contraseña").value;
   if(usuario == "" || clave == ""){
        alert("Rellene los campos");
        return false;
    } else if(usuario == "administrador" && clave == "administradorA"){
        
        document.location.href = "admin.html";
        return false;
    } else if(usuario == "Derian" && clave == "derian123" || usuario == "John" && clave == "john123"){
    		vievenida()
        document.location.href = "index3.html";
       return false;
    } else {
        alert("Datos incorrectos");
        return false;
    }
}

/*registrar usuario*/

function registrar() {
    var nombre, apellido, correo, usuario, contraseña, edad, pais, ciudad, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    edad = document.getElementById("edad").value;
    pais = document.getElementById("pais").value;
    ciudad = document.getElementById("ciudad").value;

   expresion = /\w+@\w+\.+[a-z]/;

    if(nombre == "" || apellido == "" || correo == "" || usuario == "" || contraseña == "" || edad == "" || pais == "" || ciudad == "" ){
        alert(" los campos son obligatorios");
        return false;
    } else if(!expresion.test(correo)){
        alert("Correo no valido");
        return false;
    } else {
        
        window.location = "index2.html";
        vievenida()
        return false;
    }
    }
    function vievenida(){
    	alert("vienvenido a ACTIVATE");
    }
    function cursoreg(){
    var nombre, apellido, correo,  edad, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
   	correo = document.getElementById("correo").value;
    edad = document.getElementById("edad").value;


   expresion = /\w+@\w+\.+[a-z]/;

    if(nombre == "" || apellido == "" || correo == ""|| edad == ""){
        alert(" los campos son obligatorios");
        return false;
    } else if(!expresion.test(correo)){
        alert("Correo no valido");
        return false;
    } else {
        alert("REGISTRO EXITOSO");
        window.location = "index3.html";
       
        return false;
    }
    }
































