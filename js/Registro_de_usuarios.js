window.onload = siteLoad();

function siteLoad() {
    if (localStorage.getItem('username') != null) {
        document.location = 'index.html';
    }
}
function ojbUsuario(nombre, pApellido, sApellido, telefono, uNombre, contrasena, acerca, velocidad) {
    this.nombre = nombre;
    this.pApellido = pApellido;
    this.sApellido = sApellido;
    this.telefono = telefono;
    this.uNombre = uNombre;
    this.contrasena = contrasena;
    this.acerca = acerca;
    this.velocidad = velocidad;
};


function userName() {
    let nom = document.getElementById('name').value;
    let pape = document.getElementById('papellido').value;
    let sape = document.getElementById('sapellido').value;
    document.getElementById('usuario').value = (nom.substring(0, 1) + pape + sape.substring(0, 1)).toLowerCase();
}

function registro() {
    if (document.getElementById('name').value.trim() != '' && document.getElementById('papellido').value.trim() != '' && document.getElementById('sapellido').value.trim() != '' && document.getElementById('telefono').value.trim() != '') {
        if (document.getElementById('contrasena1').value == document.getElementById('contrasena2').value) {
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
                null, null);
            arrayUsuario.push(usuario);
            localStorage.setItem('localUsuario', JSON.stringify(arrayUsuario));
            document.location = 'Autenticacion.html';
        } else {
            document.getElementById('error').innerHTML = 'Contraseñas no coinciden';
        }
    } else {
        document.getElementById('error').innerHTML = 'Falta informacion'
    }
}


