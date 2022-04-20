window.onload = siteLoad();

function siteLoad() {
    if (localStorage.getItem('username') == null) {
        document.location = 'Autenticacion.html';
    }
}

function objRides(usuario, nombre, salida, destino, descripcion, horaSalida, horaLlegada, dias) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.salida = salida;
    this.destino = destino;
    this.descripcion = descripcion;
    this.horaSalida = horaSalida;
    this.horaLlegada = horaLlegada;
    this.dias = dias;
};
function objDias(lunes, martes, miercoles, jueves, viernes, sabado, domingo) {
    this.lunes = lunes;
    this.martes = martes;
    this.miercoles = miercoles;
    this.jueves = jueves;
    this.viernes = viernes;
    this.sabado = sabado;
    this.domingo = domingo;
};

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

let arrayRide = JSON.parse(localStorage.getItem('localRides'));
for (let i = 0; i < arrayRide.length; i++) {
    if (localStorage.getItem('vUser') == arrayRide[i].usuario && arrayRide[i].nombre == localStorage.getItem('vRide')) {
        document.getElementById('lsalida').value=arrayRide[i].salida;
        document.getElementById('destino').value=arrayRide[i].destino;
        document.getElementById('hsalida').value=arrayRide[i].horaSalida;
        document.getElementById('hllegada').value=arrayRide[i].horaLlegada;
    };
};

let arrayUsuario = JSON.parse(localStorage.getItem('localUsuario'));
for (let i = 0; i < arrayUsuario.length; i++) {
    if (localStorage.getItem('vUser') == arrayUsuario[i].uNombre) {
        document.getElementById('name').value=arrayUsuario[i].nombre+' '+arrayUsuario[i].pApellido+' '+arrayUsuario[i].sApellido;
        document.getElementById('speed').value=arrayUsuario[i].velocidad;
        document.getElementById('telefono').value=arrayUsuario[i].telefono;
    };
};