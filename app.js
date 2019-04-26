//API utilizada
//https://rapidapi.com/dev132/api/city-geo-location-lookup
//https://home.openweathermap.org/api_keys

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion para obtener los datos del clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLon(argv.direccion)
//     .then(respuesta => console.log(respuesta))

// clima.getClima(-31.540001, -68.529999)
//     .then(console.log)
//     .catch(err => console.log(err))


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima en ${coords.direccion} es de ${temp}. `;
    } catch (e) {
        return `No se puedo determinar el clima de ${direccion}`
    }

}

getInfo(argv.direccion).then(console.log);