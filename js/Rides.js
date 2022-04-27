var verRides = null;
window.onload = siteLoad();

function siteLoad() {
    verRides = localStorage.getItem('verRide');
    if (verRides != null) {
        mostrarRide();
        localStorage.setItem('verRide', null);
    };
    if (localStorage.getItem('username') == null) {
        document.location = 'Autenticacion.html';
    };

};

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
//localStorage.removeItem('verRide');

function registro() {
    if (document.getElementById('name').value.trim() != '' && document.getElementById('salida').value.trim() != '' && document.getElementById('destino').value.trim() != '' && document.getElementById('hsalida').value.trim() != '' && document.getElementById('hdestino').value.trim() != '' &&
        (document.getElementById('Lunes').checked || document.getElementById('Martes').checked || document.getElementById('Miercoles').checked || document.getElementById('Jueves').checked || document.getElementById('Viernes').checked || document.getElementById('Sabado').checked || document.getElementById('Domingo').checked)) {
        let arrayRide = [];
        if (localStorage.getItem('localRides') != null) {
            arrayRide = JSON.parse(localStorage.getItem('localRides'));
        };
        let dias = new objDias(
            document.getElementById('Lunes').checked,
            document.getElementById('Martes').checked,
            document.getElementById('Miercoles').checked,
            document.getElementById('Jueves').checked,
            document.getElementById('Viernes').checked,
            document.getElementById('Sabado').checked,
            document.getElementById('Domingo').checked)
        let ride = new objRides(
            localStorage.getItem('username'),
            document.getElementById('name').value,
            document.getElementById('salida').value,
            document.getElementById('destino').value,
            document.getElementById('descripcion').value,
            document.getElementById('hsalida').value,
            document.getElementById('hdestino').value,
            dias);
        if (verRides != null) {
            for (let i = 0; i < arrayRide.length; i++) {
                if (localStorage.getItem('username') == arrayRide[i].usuario && arrayRide[i].nombre == verRides) {
                    arrayRide.splice(i, 1);
                };
            };
        }
        let valNombre = false;
        if (verRides == null) {
            for (let i = 0; i < arrayRide.length; i++) {
                if (localStorage.getItem('username') == arrayRide[i].usuario && arrayRide[i].nombre == document.getElementById('name').value) {
                    valNombre = true;
                };
            };
        }
        if (valNombre == false) {
            arrayRide.push(ride);
            localStorage.setItem('localRides', JSON.stringify(arrayRide));
            clear();
        } else {
            document.getElementById('error').innerHTML = 'Nombre de Ride Existe';
        }

        if (verRides != null && verRides != 'null') {
            document.location = 'Dashboard.html';
        }
    } else {
        document.getElementById('error').innerHTML = 'Falta informacion';
    }
};

function mostrarRide() {
    let arrayRide = [];
    arrayRide = JSON.parse(localStorage.getItem('localRides'));
    for (let i = 0; i < arrayRide.length; i++) {
        if (localStorage.getItem('username') == arrayRide[i].usuario && arrayRide[i].nombre == verRides) {
            document.getElementById('name').value = arrayRide[i].nombre;
            document.getElementById('salida').value = arrayRide[i].salida;
            document.getElementById('destino').value = arrayRide[i].destino;
            document.getElementById('descripcion').value = arrayRide[i].descripcion;
            document.getElementById('hsalida').value = arrayRide[i].horaSalida;
            document.getElementById('hdestino').value = arrayRide[i].horaLlegada;
            let diasRide = arrayRide[i].dias;
            document.getElementById('Lunes').checked = diasRide.lunes;
            document.getElementById('Martes').checked = diasRide.martes;
            document.getElementById('Miercoles').checked = diasRide.miercoles;
            document.getElementById('Jueves').checked = diasRide.jueves;
            document.getElementById('Viernes').checked = diasRide.viernes;
            document.getElementById('Sabado').checked = diasRide.sabado;
            document.getElementById('Domingo').checked = diasRide.domingo;
        };
    };
};

function clear() {
    document.getElementById('name').value = '';
    document.getElementById('salida').value = '';
    document.getElementById('destino').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('hsalida').value = '';
    document.getElementById('hdestino').value = '';
    document.getElementById('Lunes').checked = false;
    document.getElementById('Martes').checked = false;
    document.getElementById('Miercoles').checked = false;
    document.getElementById('Jueves').checked = false;
    document.getElementById('Viernes').checked = false;
    document.getElementById('Sabado').checked = false;
    document.getElementById('Domingo').checked = false;
}

function refres() {
    if (verRides != null) {
        localStorage.setItem('verRide', verRides);
        document.location = 'Rides.html';
    } else {
        document.location = 'Rides.html';
    }
}