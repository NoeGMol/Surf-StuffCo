var nomUsu, passUsu;

var usuarios = new Object ()
usuarios.nombreUsu = nomUsu
usuarios.contraUsu = passUsu

localStorage.setItem("usuarioLog", nomUsu)
localStorage.setItem("contraUsuLog", passUsu)

function validar(){
    var nomUsu = document.getElementById("Usuario").value 
    var passUsu = document.getElementById("Contrasenia").value
    console.log(nomUsu)
    console.log(passUsu)
    if(nomUsu  == ""){
        window.alert ("Debe ingresar su usuario")
        }
    if(passUsu == ""){
        window.alert("Debe ingresar su contraseña")
        } 
    if (nomUsu && passUsu !== ""){
            window.location.href = "tiempo.html";
            }     
}
