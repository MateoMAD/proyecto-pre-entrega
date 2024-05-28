const submit = document.getElementById("submit"),
      email = document.getElementById('email'), 
       password = document.getElementById('password');

     function 
      validateInputs(){
        const emailRegex =/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
         
        if (email.value ==''){
        alert('campo email vacio');
       
    return false
}
       if (password.value == ''){
        alert('campo contraseña vacio');
        return false
    }
    if (!emailRegex.test(email.value)){
        alert("ingresa el formato correcto ");
        email.style.border="1px solid red";
        return false;
   }
return true
        
    }
  
       document.addEventListener("click", (e) =>{
        if (e.target === submit){
           e.preventDefault();
           validateInputs();
            if (validateInputs() ==true ){
           window.location.href="api.html";
        }
    }
       })



       
    
