const axios = require('axios');

const getLugarLatLon = async(dir) => {
    //Se encarga de transformar los espacios entre palabras a caracteres especailes
    const encodeUrl = encodeURI(dir);

    //Esta instancia la sacamos de la pagina de la misma API.
    //Es necesaria ya que tenemos que uilizar la API pasandole HEADERS propios.
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'cb72f33d9dmshc944b9db961cd91p1f0da9jsnaeba53c986cc' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`)

    }

    // instance.get() //==== Ejecutamos el metodo que queremos de la API
    //     .then(respuesta => console.log(respuesta.data.Results[0])) //Mostramos la respuesta si todo sale bien
    //     .catch(err => console.log('Error: ', err)); //Mostramos el error si falla.

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}