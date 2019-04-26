const axios = require('axios');


const getClima = async(lat, lon) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bf7e3b25f7ca5e32846b32d4c0bb65a2&units=metric`)
    return respuesta.data.main.temp;

}

module.exports = {
    getClima
}