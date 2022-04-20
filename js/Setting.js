window.onload = siteLoad();

function siteLoad() {
    if (localStorage.getItem('username') == null) {
        document.location = 'Autenticacion.html';
    }
}

function objUsuario(nombre, pApellido, sApellido, telefono, uNombre, contrasena,acerca,velocidad) {
    this.nombre = nombre;
    this.pApellido = pApellido;
    this.sApellido = sApellido;
    this.telefono = telefono;
    this.uNombre = uNombre;
    this.contrasena = contrasena;
    this.acerca=acerca;
    this.velocidad=velocidad;
};
let arrayUsuario=[];
arrayUsuario=JSON.parse(localStorage.getItem('localUsuario'));
let datosUsuario=new objUsuario();
for (let i = 0; i < arrayUsuario.length; i++) {
    if (localStorage.getItem('username') == arrayUsuario[i].uNombre) {
        datosUsuario=arrayUsuario[i];
        document.getElementById('name').value=arrayUsuario[i].nombre;
        document.getElementById('papellido').value=arrayUsuario[i].pApellido;
        document.getElementById('sapellido').value=arrayUsuario[i].sApellido;
        document.getElementById('speed').value=arrayUsuario[i].velocidad;
        document.getElementById('telefono').value=arrayUsuario[i].telefono;
        document.getElementById('about').value=arrayUsuario[i].acerca;
    }
}

function guarda(){
    let usuario = new objUsuario(
        document.getElementById('name').value,
        document.getElementById('papellido').value,
        document.getElementById('sapellido').value,
        document.getElementById('telefono').value,
        datosUsuario.uNombre,
        datosUsuario.contrasena,
        document.getElementById('about').value,
        document.getElementById('speed').value);
        for (let i = 0; i < arrayUsuario.length; i++) {
            if (localStorage.getItem('username') == arrayUsuario[i].uNombre) {
                arrayUsuario.splice(i,1);
            }
        }
        console.log('hola');
    arrayUsuario.push(usuario);
    localStorage.setItem('localUsuario', JSON.stringify(arrayUsuario));
}
