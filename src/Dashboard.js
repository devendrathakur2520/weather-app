//import { render } from "@testing-library/react";
//import axios from "axios";
//import { useEffect, useState } from "react";
//import { showCityWeather } from "./action/index.js";
import { setCity } from './action/index.js';
import { useSelector, useDispatch } from "react-redux";
import { requestweather } from "./thunk/weatherApi.js";
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from 'react-router-dom'
import { computeHeadingLevel } from '@testing-library/dom';
//import{Button} from 'react-bootstrap'
export default function Dashboard() {


   const dispatch = useDispatch();
   const FetchApi = useSelector((state) => state.login.fetchApi)
   const City = useSelector((state) => state.login.city)
   // const [Weather,setWeather]=useState();
   //const [WeatherAPI,setWeather]=useState();
   /*const LoadData=async()  =>{
     await axios.get(`
      https://api.openweathermap.org/data/2.5/weather?q=${City}&APPID=9295e4f3269a8aead4ab1e4b8644cc12`).then((response)=>{
         dispatch(showCityWeather([response.data]))
        // console.log(response.data)
      })
   }
   useEffect(() => {
      LoadData();
  }, []);*/

   const onSubmit = (e) => {

      //dispatch(showCityWeather(City))
      dispatch(requestweather(City))
      console.log(FetchApi)
   }
   const res=FetchApi.map((data) =>( [(data.name),(data.sys.country),(data.weather[0].description),(data.wind.speed),(data.weather[0].description)]))
   const arr1 = [...res,{res}]
   //console.log("hello",arr1)
   localStorage.setItem('city',JSON.stringify(arr1));
  console.log(res)
   return (
      <div>
         <h1>Dashboard</h1>
         <form action="/" method="get">
            <label htmlFor="header-search">
               <span className="visually-hidden">Search blog posts</span>
            </label>
            <input
               type="text"

               placeholder="Search City"
               name="cityname"
               onChange={(e) => dispatch(setCity(e.target.value))}
            />
            <button type="button" onClick={onSubmit}>Search</button>
          <Link>  <button  >
       History
     </button> </Link>
            {FetchApi.map((data) =>
               <>
                  <h1>Your City Weather Deatails</h1>

                  <ListGroup>
                     <ListGroup.Item variant="success">city : {data.name} </ListGroup.Item>
                     <ListGroup.Item variant="info">country code: {data.sys.country}</ListGroup.Item>
                     <ListGroup.Item variant="secondary"> Weather:{data.weather[0].description}</ListGroup.Item>
                     <ListGroup.Item variant="primary">wind:{data.wind.speed}</ListGroup.Item>

                  </ListGroup>

               </>)}
         </form>
      </div>

   )
}
