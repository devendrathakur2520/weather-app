import axios from 'axios';
import { showCityWeather } from "../action/index.js";
export const requestweather=(City)=>{
    return async(dispatch) =>{   
    await axios.get(`
         https://api.openweathermap.org/data/2.5/weather?q=${City}&APPID=9295e4f3269a8aead4ab1e4b8644cc12`).then((response)=>{
            dispatch(showCityWeather([response.data]))
           // console.log(response.data)
         //  localStorage.setItem('city',JSON.stringify(response.data.name));
           //localStorage.setItem('country',JSON.stringify(response.data.sys.country));
           //localStorage.setItem('weather',JSON.stringify(response.data.weather[0].description));
           //localStorage.setItem('wind',JSON.stringify(response.data.wind.speed));
         })
      }
    }
