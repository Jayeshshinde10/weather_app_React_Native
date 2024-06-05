import axios from 'axios'

export class GeoWeatherApi{
    static async getWeatherFromApi(coords){
        return await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coord.lan}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`).data;
    }
}