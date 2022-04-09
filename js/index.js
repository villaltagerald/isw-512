function objRides(usuario,nombre, salida, destino, descripcion, horaSalida, horaLlegada,dias) {
    this.usuario=usuario;
    this.nombre = nombre;
    this.salida = salida;
    this.destino = destino;
    this.descripcion = descripcion;
    this.horaSalida = horaSalida;
    this.horaLlegada = horaLlegada;
    this.dias=dias;
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
    localStorage.setItem('vRide',  json[x.rowIndex - 1].Nombre_Ride);
    localStorage.setItem('vUser',  json[x.rowIndex - 1].Usuario);
}