function validateForm() {
  // your code here
  let name = $("#name").val();
  let apellido = $("#lastname").val();
  let correo = $("#input-email").val();
  let contrasena = $("#input-password").val();
  let seleccion = $("#input-social").val();
  if ((name == 0) && (apellido == 0) && (correo == 0) && (contrasena == 0)) {
    alert("campos deben ser llenados")
  }
  else if (((name.lenght < 3) || (name.lenght > 8)) && ((apellido.lenght < 3) || (apellido.lenght > 8))) {

    alert("campos nombre, apellido  deben ser mayores a 3")
  }
  else if (contrasena.lenght < 6) {
    alert("contrasena debe ser mayor a 6")

  }


}