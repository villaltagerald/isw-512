window.onload = siteLoad();

function siteLoad() {
    console.log(localStorage.getItem('username'));
    if (localStorage.getItem('username') != null) {
        document.getElementById('login').style.display = 'none';
        document.getElementById("menu").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-list bars-button" fill="currentColor" aria-hidden="true" id="bars-button" viewBox="0 0 16 16">'+
        '<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />'+
        '</svg>'+
        '<div class="navbarmenu">'+
            '<div class="contenidobarmenu">'+
                '<nav class="barsmenu">'+
                    '<ul>'+
                        '<li><a href="index.html" target="_parent">Inicio</a></li>'+
                        '<li><a href="Dashboard.html" target="_parent">Tablero</a></li>'+
                        '<li><a href="Rides.html" target="_parent">Rides</a></li>'+
                        '<li><a href="Settings.html" target="_parent">Ajustes</a></li>'+
                        '<li><a href="index.html" onclick="salir()" target="_parent">Salir</a>'+
                    '</ul>'+
                '</nav>'+
                '<div class="titlemenu">'+
                    '<a href="index.html">'+
                        '<h2>TicoRides</h2>'+
                    '</a>'+
                '</div>'+
            '</div>'+
        '</div>';
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


let arrayRide = JSON.parse(localStorage.getItem('localRides'));
for (let i = 0; i < arrayRide.length; i++) {
    document.getElementById('cTabla').innerHTML += '<tr onclick="myFunction(this)"><td>' + arrayRide[i].usuario + '</td><td>' + arrayRide[i].nombre + '</td><td>' + arrayRide[i].salida + '</td><td>' + arrayRide[i].destino + '</td><td><a href="ViewR.html" onclick="myFunction(this)">VIEW</a></td></tr>';
};

function myFunction(x) {
    let headers = document.querySelectorAll('th');
    let rows = document.querySelectorAll('tbody tr');
    let json = [];

    [].forEach.call(rows, (row, i) => {
        let cells = row.querySelectorAll('td');
        let data = {};
        cells.forEach.call(cells, (cell, x) => {
            let header = headers[x].textContent;
            let content = cell.textContent;
            data[header] = content;
        });
        json.push(data);
    });
    localStorage.setItem('vRide', json[x.rowIndex - 1].Nombre_Ride);
    localStorage.setItem('vUser', json[x.rowIndex - 1].Usuario);
}

function buscarRide() {
    let desde = document.getElementById('desde').value;
    let hasta = document.getElementById('hasta').value;
    document.getElementById('cTabla').innerHTML = '';
    for (let i = 0; i < arrayRide.length; i++) {
        if ((arrayRide[i].salida.toLowerCase().includes(desde.toLowerCase()) || desde == '') && (arrayRide[i].destino.toLowerCase().includes(hasta.toLowerCase()) || hasta == '')) {
            document.getElementById('cTabla').innerHTML += '<tr onclick="myFunction(this)"><td>' + arrayRide[i].usuario + '</td><td>' + arrayRide[i].nombre + '</td><td>' + arrayRide[i].salida + '</td><td>' + arrayRide[i].destino + '</td><td><a href="ViewR.html" onclick="myFunction(this)">VIEW</a></td></tr>';
        }
    }
}