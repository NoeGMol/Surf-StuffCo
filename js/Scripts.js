// HEADER 

let miheader = `
    
    
    <nav>
    
    <div class="titulo">
    <h1> Surf & Stuff Co. </h1>  
    </div>
    
    
    
    <div class="contenedornav">
        <a class="anav" href="index.html">HOME</a>
        <a class="anav" href="surf.html">SURF</a>
        <a class="anav" href="contacto.html">CONTACTO</a>
        <a class="anav" href="quienessomos.html">QUIENES SOMOS</a>
        <a class="anav" id="imgLogo" href="login.html"><img id="icoLog" src="img/usuario.png" alt="Login" width="30px" heignt="auto"></a>
        </div>
    </nav>


    

`
document.querySelector("header").innerHTML = miheader;


// ESLIDER PRINCIPAL 

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // cambia la imagen cada 4 segundos 
}


// FORMULARIO VALIDACIONES

function enviarFormulario() {
    // Simulación de envío exitoso
    alert("¡Tu formulario ha sido enviado!");
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById("contactForm").reset();
}

// JS de Login

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

//FOOTER


let miFooter = `


    <div class="contendenorfooter">
    <div>
    <a class="afooter" href="index.html">Home</a>
    <a class="afooter" href="surf.html">Surf</a>
    <a class="afooter" href="contacto.html">Contacto</a>
    <a class="afooter" href="quienessomos.html">Quienes somos</a>


    <br><br>
    <h3>2024 Codo a Codo. All rights reserved (©).</h3>
    </div>
    
    
    
    

    </div>

    
    




`

document.querySelector("footer").innerHTML = miFooter;
