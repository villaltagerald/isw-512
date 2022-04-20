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

let NombreRidesE

let arrayRide = JSON.parse(localStorage.getItem('localRides'));
if (arrayRide != null) {
    for (let i = 0; i < arrayRide.length; i++) {
        if (arrayRide[i].usuario == localStorage.getItem('username')) {
            document.getElementById('cTabla').innerHTML += '<tr onclick="myFunction(this)"><td>' + arrayRide[i].nombre + '</td><td>' + arrayRide[i].salida + '</td><td>' + arrayRide[i].destino + '</td><td><a href="Rides.html" onclick="myFunction(x)"><img src="imagenes/editar.png"></a></td><td><img src="imagenes/eliminar.png" onclick="showThisDialog()"></td><td><a href="RidesV.html" onclick="myFunction(x)"><img src="imagenes/ver.png"></td></tr>';
        };
    };
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
    NombreRidesE = json[x.rowIndex - 1].Nombre;
    localStorage.setItem('verRide', NombreRidesE);
}

//dialogo
//let dialog = document.querySelector('dialog');
//dialogPolyfill.registerDialog(dialog);

function showThisDialog() {
    document.getElementById('this-dialog').showModal();
}

function hideThisDialog() {
    document.getElementById('this-dialog').close();
}
function eliminarRide() {
    console.log(NombreRidesE);
    let arrayRide = JSON.parse(localStorage.getItem('localRides'));
    if (arrayRide != null) {
        for (let i = 0; i < arrayRide.length; i++) {
            if (arrayRide[i].usuario == localStorage.getItem('username') && arrayRide[i].nombre == NombreRidesE) {
                arrayRide.splice(i, 1);
                document.getElementById('this-dialog').close();
            };
        };
    };
    localStorage.setItem('localRides', JSON.stringify(arrayRide));
    document.location = 'Dashboard.html';
};
//
