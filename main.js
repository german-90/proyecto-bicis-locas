function validateForm() {
  // your code here
  let name = $("#name").val();
  let apellido = $("#lastname").val();
  let correo = $("#input-email").val();
  let contrasena = $("#input-password").val();
  let seleccion = $("#input-social").val();
 
  
   if (name.length < 3 || name.length > 8  ) {

    alert("campos nombre  deben ser mayores a 3")
  }
  else if (apellido.length < 3 || apellido.length > 8) {
    alert("campos  apellido  deben ser mayores a 3")

  }
  else if (contrasena.length < 6) {
    alert("contrasena debe ser mayor a 6")

  }
  

}