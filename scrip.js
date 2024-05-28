const $submit = document.getElementById("submit"),
      $nombre = document.getElementById("nombre"),
      $apellido = document.getElementById("apellido"),
      $email = document.getElementById("email"),
      $password = document.getElementById("password");
 const usuarioP ={
  nombreEmail:$email,
  nombrePassword : $password;
 }
function
validateInputs(){
    const emailRegex =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const nombreRegex = /^.{1,10}$/ ;
    const apellidoRegex = /^.{1,10}$/ ;
    

   if ($nombre.value === ""){
    alert("campo nombre vacio ");
   }
   if ($apellido.value === ""){
    alert("campo apellido vacio");
   }
   if ($email.value === ""){
    alert("no dejar el campo email vacio");
    return false;
   }
 if ($password.value === ""){
    alert("campo contraseña esta vaio");
    return false;
 }
   if (!nombreRegex.test($nombre.value)){
        alert("ingresa el formato correcto ");
        $nombre.style.border="1px solid red";
        return false;
   }
   if (!apellidoRegex.test($apellido.value)){
    alert("ingresa el formato correcto ");
    $apellido.style.border="1px solid red";
    return false;
   }
    if (!emailRegex.test($email.value)){
        alert("ingrese el formato correcto del mail");
        $email.style.border = "1px solid red";
        return false;
    }
    

return true;


  }
document.addEventListener("click", (e) =>{
 if (e.target === $submit){
    e.preventDefault();
    validateInputs();
  
 }

})