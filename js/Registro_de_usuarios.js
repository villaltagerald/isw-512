window.onload = siteLoad();

function siteLoad() {
    if (localStorage.getItem('username') != null) {
        document.location = 'index.html';
    }
}
function ojbUsuario(nombre, pApellido, sApellido, telefono, uNombre, contrasena,acerca,velocidad) {
    this.nombre = nombre;
    this.pApellido = pApellido;
    this.sApellido = sApellido;
    this.telefono = telefono;
    this.uNombre = uNombre;
    this.contrasena = contrasena;
    this.acerca=acerca;
    this.velocidad=velocidad;
};


function userName() {
    let nom = document.getElementById('name').value;
    let pape = document.getElementById('papellido').value;
    let sape = document.getElementById('sapellido').value;
    document.getElementById('usuario').value = (nom.substring(0, 1) + pape + sape.substring(0, 1)).toLowerCase();
}

function validarClave() {
    let pass = document.getElementById('contrasena1').value;
    let rpass = document.getElementById('contrasena2').value;
    if (pass != '' && rpass != '') {
        if (pass != rpass && pass.length == rpass.length) {
            document.getElementById('error').innerHTML = "Contraseñas no coinciden";
        } else {
            document.getElementById('error').innerHTML = "";
        }
    }
}

function registro() {
    let arrayUsuario = [];
    if (localStorage.getItem("localUsuario") != null) {
        arrayUsuario = JSON.parse(localStorage.getItem('localUsuario'));
    };
    let usuario = new ojbUsuario(
        document.getElementById('name').value,
        document.getElementById('papellido').value,
        document.getElementById('sapellido').value,
        document.getElementById('telefono').value,
        document.getElementById('usuario').value,
        document.getElementById('contrasena1').value,
        null,null);
    arrayUsuario.push(usuario);
    localStorage.setItem('localUsuario', JSON.stringify(arrayUsuario));
    document.location = 'Autenticacion.html';
}


