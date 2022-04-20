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

function autenticar() {
    let nUsuario = document.getElementById('usuario').value;
    let pUsuario = document.getElementById('contrasena').value;
    let arrayUsuario = JSON.parse(localStorage.getItem('localUsuario'));
    let validar=false;
    for (let i = 0; i < arrayUsuario.length; i++) {
        if (nUsuario == arrayUsuario[i].uNombre && pUsuario == arrayUsuario[i].contrasena) {
            localStorage.setItem('username',nUsuario);
            document.location='Dashboard.html';
            validar=true;
        }
    }
    if(!validar){
        document.getElementById('error').innerHTML='Usuario/Clave incorrecta';
    }
}