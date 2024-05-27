var nomUsu, passUsu;

var usuarios = new Object ()
usuarios.nombreUsu = nomUsu
usuarios.contraUsu = passUsu

localStorage.setItem("usuarioLog", nomUsu)
localStorage.setItem("contraUsuLog", passUsu)

function validar(){
    if(nomUsu || passUsu == NULL){
        console.log("Debe completar todos los campos requeridos")
    } else { 
    }
}